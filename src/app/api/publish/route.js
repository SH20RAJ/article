import getUserSession from "@/app/(auth)/(funcs)/getUserSession";
import prisma from "@/prisma";
import { NextResponse } from "next/server";
import getUserFromEmail from "./getUserFromEmail";

export async function POST(request) {
  try {
    const userSession = await getUserSession();
    const user = await getUserFromEmail(userSession?.user?.email);
    // console.log(userSession, user);

    // Ensure content-type is application/json
    if (request.headers.get("content-type") !== "application/json") {
      return NextResponse.json({ error: "Invalid content-type" }, { status: 400 });
    }

    // Parse the request body
    let { title, content, published, communityId } = await request.json();
    title = title.substring(0,200)
    content = content.substring(0,20000)

    // Create a new post using Prisma
    const post = await prisma.post.create({
      data: {
        title,
        content,
        published,
        authorId: user.id,
        communityId: communityId || null, // Ensure communityId is either a valid ID or null
      },
    });

    // Return the created post as the response
    return NextResponse.json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: "Error creating post" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const userSession = await getUserSession();
    const user = await getUserFromEmail(userSession?.user?.email);

    return NextResponse.json({
      user: user.id,
      status: 200,
      body: "Hello World",
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Error fetching user" }, { status: 500 });
  }
}

import getUserSession from "@/app/(auth)/(funcs)/getUserSession";
import prisma from "@/prisma";
import { NextResponse } from "next/server";
import getUserFromEmail from "../publish/getUserFromEmail";

export async function POST(request) {
  try {
    const userSession = await getUserSession();
    const user = await getUserFromEmail(userSession?.user?.email);
    // console.log(userSession, user);
        // Parse the request body
        const { title, content, published, articleId } = await request.json();


    let article = await prisma.post.findUnique({
        where: {
            id: articleId,
        },
        include: {
            author: true,
        },
    });
    // if(!user) return NextResponse.json({ error: "Not logged in" }, { status: 401 });
    if(user.id !== article.author.id) return NextResponse.json({ error: "Not an admin" }, { status: 403 });

    console.log(user.id !== article.author.id, user.id, article.author.id);


    // Ensure content-type is application/json
    if (request.headers.get("content-type") !== "application/json") {
      return NextResponse.json({ error: "Invalid content-type" }, { status: 400 });
    }



    // Create a new post using Prisma
    const post = await prisma.post.update({
      data: {
        title,
        content,
        published,
      },
        where: {
            id: articleId,
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

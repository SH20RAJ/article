
//app/api/posts/route.js
import { getLatestPosts } from "@/app/(main)/p/[...id]/funcs/actions";

export default async function handler(req, res) {
  const { limit, cursor } = req.json();
  const parsedLimit = parseInt(limit, 10) || 10;
  try {
    const posts = await getLatestPosts({ limit: parsedLimit, cursor });
    return Response.json(posts);
  } catch (error) {
    console.error("Error fetching latest posts:", error);
    Response.json({ error: "Error fetching latest posts" });
  }
}



export {handler as GET}
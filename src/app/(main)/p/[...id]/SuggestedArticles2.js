"use client";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getPosts, getRandomPosts } from "./funcs/actions";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function SuggestedArticles2() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
      getRandomPosts(5).then((posts) => {
        setPosts(posts);
        console.log(posts);
      });
    }, []);

    
  return (
    <>
      <div className="p-4 space-y-4">
            {
              posts.map((_, i) => <div key={i}  className="p-4 space-y-4 border shadow-xl rounded-lg"><PostCard post={_}/></div>)
            }
           
          </div>
    </>
  )
}


export const PostCard = ({post}) => {
    return <article className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
    <img
      src={post.image || "/placeholder.svg"}
      alt={post.title || "Blog Post Image"}
      width={200}
      height={150}
      className="rounded-lg object-cover" />
    <div className="space-y-2">
      <h2 className="text-2xl font-bold">
        <Link href="#" prefetch={Boolean(1)}>
          {post.title}
        </Link>
      </h2>
      <p className="text-muted-foreground line-clamp-3">
        {
            post.description ||  post.content && post.content.substring(0, 100) || post.title
        }
      </p>
      <Link
        href="#"
        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        prefetch={false}>
        Read More
      </Link>
    </div>
  </article>
  }
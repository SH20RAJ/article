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
import { makeSlug } from "@/lib/funs";

export default function SuggestedArticles() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getRandomPosts(5).then((posts) => {
      setPosts(posts);
      // console.log(posts);
    });
  }, []);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Suggested Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {posts.map((post) => {
              return <PostCard2 post={post} key={post.id} />;
            })}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export const PostCard2 = ({ post }) => {
  return (
    <div className="flex items-start gap-4">
      <Avatar className="w-10 h-10 border">
        <AvatarImage src={post.author.image || "/placeholder-user.jpg"} />
        <AvatarFallback>AC</AvatarFallback>
      </Avatar>
      <div>
        <div className="font-medium">
          <Link href={"/p/"+post.id+"/"+makeSlug(post.title)}>{post?.title}</Link>
        </div>
        <div className="text-sm text-muted-foreground">by {post.author.name}</div>
      </div>
    </div>
  );
};

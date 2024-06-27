"use client";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getRandomPosts } from "./funcs/actions";
import Link from "next/link";
import { makeSlug } from "@/lib/funs";
import useSWR from "swr";


export default function SuggestedArticles() {
  const { data : posts, error } = useSWR('/api/random-posts', ()=> getRandomPosts(5),{revalidateIfStale:false,revalidateOnFocus: false,});

  if (error) return 'Failed to load';
  if (!posts) return ;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Suggested Articles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard2 post={post} key={post.id} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export const PostCard2 = ({ post }) => {
  return (
    <div className="flex items-start gap-4">
      {/* <Avatar className="w-10 h-10 border">
        <AvatarImage src={post.author.image || "/placeholder-user.jpg"} />
        <AvatarFallback>AC</AvatarFallback>
      </Avatar> */}
      <div>
        <div className="font-medium">
          <Link href={"/p/" + post.id + "/" + makeSlug(post.title)}>{post?.title}</Link>
        </div>
        <div className="text-sm text-muted-foreground">by {post.author.name}</div>
      </div>
    </div>
  );
};

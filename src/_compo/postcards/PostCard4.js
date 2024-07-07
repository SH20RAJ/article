import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { getDate } from "@/lib/funs";
import { TagIcon } from "lucide-react";

export function PostCard4({ post }) {
  if (!post) return;
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="w-10 h-10 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{post?.author?.name}</div>
            <div className="text-sm text-muted-foreground">
              Published on {getDate(post?.createdAt)}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl font-bold">
          {/* <Link href={"/p/"+post.id+"/"+makeSlug(post.title)}>{post?.title}</Link> */}
          <Link href={"/p/" + post?.id} prefetch={true}>
            {post?.title}
          </Link>
        </h2>
        <p className="mt-4 text-muted-foreground">
          {/* In this article, we'll explore the key considerations and best practices for building a scalable and
        secure web application that can handle growing traffic and user demands. */}
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-4">
          <div className="sm:flex hidden items-center gap-1 text-sm text-muted-foreground">
            <TagIcon className="h-4 w-4" />
            <Link href="#" className="hover:underline" prefetch={false}>
              web-development
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              architecture
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              scalability
            </Link>
          </div>
          <div className="flex-1 float-right" />
          <Link
            href={"/p/" + post?.id}
            className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Read More
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

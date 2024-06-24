"use client";
import NovelEditor from "./Editor";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export default function EditMain({ article }) {
  const { toast } = useToast();
  const [publishing, setPublishing] = useState(false);
  const [content, setContent] = useState(article.content);
  const [title, setTitle] = useState(article.title);

    const handleUpdate = () => {
    setPublishing(true);
    toast({
      title: "Updating post",
      message: "Please wait while we update your post",
      type: "info",
    });
    fetch("/api/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        published: true,
        articleId: article.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPublishing(false);
        toast({
          title: "Post updated",
          message: "Your post has been updated successfully",
          type: "success",
        });
        setTimeout(() => {
        //   location.href = `/p/${data.id}`;
          redirect("/post/" + data.id);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error updating post:", error);
        // setPublishing(false);
      });
    }

  return (
    <div className=" justify-center flex w-full">
      <div className="w-full md:w-3/4">
        <Input
          type="text"
          placeholder="Title"
          className="w-full mt-20 text-4xl font-bold p-4 h-15"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* Update button and view button */}
        <div className="p-4 border my-4 shadow-sm rounded">
          <div className=" flex  space-x-4">
            <Button
              className="w-full"
              variant="outline"
              onClick={() => handleUpdate()}
            >
              Update
            </Button>
            <Link className="w-full" href={"/p/" + article.id}>
              <Button className="w-full" variant="outline">
                View
              </Button>
            </Link>
          </div>
        </div>

        <NovelEditor content={content} setContent={setContent} />
      </div>
    </div>
  );
}

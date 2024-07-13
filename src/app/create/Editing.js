"use client";
import Editor from "./Editor";
import { Button } from "@/components/ui/button";
import { SelectCommunity } from "@/_compo/create/selectcommunity";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { BookDashed } from "lucide-react";

export default function Editing() {
  const { toast } = useToast();

  const [data, setData] = useState("");
  const [title, setTitle] = useState("");
  const [communityId, setCommunityId] = useState(null);
  const [publishing, setPublishing] = useState(false);
  const [tags, setTags] = useState("");

  useEffect(() => {
    // console.log(data);
  }, [data]);

  const handlePublish = () => {
    setPublishing(true);
    toast({
      title: "Publishing post",
      message: "Please wait while we publish your post",
      type: "info",
    });

    const tagsArray = tags.split(",").map(tag => tag.trim()).filter(tag => tag.length > 0);

    fetch("/api/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content: data,
        published: true,
        communityId, // Include communityId in the request
        tags: tagsArray, // Include tags in the request
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPublishing(false);
        toast({
          title: "Post published",
          message: "Your post has been published successfully",
          type: "success",
        });
        // setTimeout(() => {
        location.href = `/p/${data.id}`;
        redirect("/post/" + data.id);
        // }, 2000);
      })
      .catch((error) => {
        console.error("Error publishing post:", error);
        setPublishing(false);
        toast({
          title: "Error",
          message: "There was an error publishing your post",
          type: "error",
        });
      });
  };

  return (
    <>
      <div className="leftbar w-full sm:w-2/12 mr-4 flex-col gap-6 flex mt-4">
        <Link href={"/dashboard"}>
          <Button className=" bg-accent-foreground w-full flex gap-2 ">
            <BookDashed /> Dashboard
          </Button>
        </Link>
        <h1 className="text-xl font-bold">Page settings</h1>
        <div className=" flex flex-col gap-6">
          <SelectCommunity onChange={(id) => setCommunityId(id)} />
        </div>

        <div className=" flex flex-col gap-6">
          <hr />
          <div className=" flex flex-col gap-2">
            <h1 className="text-xl font-bold">Tags</h1>
            <p className=" text-xs m-0">Separate using commas</p>
            <Input
              type="text"
              placeholder="Tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
            <span>e.g. javascript, react, nextjs</span>
          </div>
          <hr />
          <h1 className="text-xl font-bold">Publish</h1>
          <Button
            className=""
            variant="outline"
            disabled={publishing}
            onClick={handlePublish}
          >
            Publish
          </Button>
          <div>
            <h2>Edit Other Posts</h2>
          </div>
        </div>
      </div>

      <div className="editor flex-1">
        <h1 className="text-3xl font-bold">
          <input
            type="text"
            placeholder="Title"
            className="ml-8 border-0 outline-0 outline-none mb-4 p-4 px-2 text-4xl w-full font-bold"
            onChange={(e) => setTitle(e.target.value)}
            maxLength={200}
          />
          <hr />
        </h1>
        <Editor setData={setData} />
      </div>
    </>
  );
}

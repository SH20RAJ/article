'use client';
import { Editor } from "novel-lightweight";
import { Button } from "@/components/ui/button";
import { SelectCommunity } from "@/_compo/create/selectcommunity";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import { redirect } from "next/navigation";

export default function NovelEditor({initData}) {

  const { toast } = useToast()

  const [data, setData] = useState(article.content);
  const [title, setTitle] = useState(article.title);
  // const [publishing, setPublishing] = useState(false);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handlePublish = () => {
    setPublishing(true);
    toast({
        title: "Publishing post",
        message: "Please wait while we publish your post",
        type: "info",
    })
    fetch("/api/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        content: data,
        published: true,
        communityId, // Include communityId in the request
        postId: article.id
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
        })
        setTimeout(() => {
            location.href = `/p/${data.id}`
            redirect('/post/' + data.id)
        }, 2000);
      })
      .catch((error) => {
        console.error("Error publishing post:", error);
        setPublishing(false);
      });
  }

  return (
    <>
     <Editor
     className="w-full h-screen"
      defaultValue={initData}
      onUpdate={(editor) => {
        setData(editor?.storage.markdown.getMarkdown());
      }}
      handleImageUpload={async (file) => {
        const uploads = await startUpload([file]);
        if (uploads && uploads.length > 0) {
          return uploads[0].url;
        }
        return "www.example.com/failed-upload.png";
      }}
      />
    </>
   
  );
}
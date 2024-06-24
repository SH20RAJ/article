'use client';
import { Editor } from "novel-lightweight";
import { Button } from "@/components/ui/button";
import { SelectCommunity } from "@/_compo/create/selectcommunity";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import { redirect } from "next/navigation";

export default function NovelEditor({content, setContent}) {


  return (
    <>
     <Editor
     className="w-full h-screen"
      defaultValue={content}
      disableLocalStorage={true}
      // value={article.content}
      // setEditorContent={"new here"+article.content}
      onUpdate={(editor) => {
        // setData(editor?.storage.markdown.getMarkdown());
        setContent(editor?.storage.markdown.getMarkdown());
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
'use client';
import { Editor } from "novel-lightweight";

export default function NovelEditor({setData}) {



  return (
    <>
     <Editor
     className="w-full h-screen"
      defaultValue={"# Write your story here\n\nThis is a simple editor that allows you to write your story in markdown. You can also add images by dragging and dropping them into the editor. \n\nHappy writing!"}
      // disableLocalStorage={true}
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
'use client'
import { handleImageUpload1 } from '@/lib/funs';
import { Editor } from 'novel-lightweight';

export default function NovelEditor({ setData }) {

  // Function to handle image upload to Discord and convert to Cloudinary URL


  return (
    <>
      <Editor
        className="w-full h-screen"
        defaultValue={"# Write your story here\n\nThis is a simple editor that allows you to write your story in markdown. You can also add images by dragging and dropping them into the editor. \n\nHappy writing!"}
        disableLocalStorage={true}
        onUpdate={(editor) => {
          setData(editor?.storage.markdown.getMarkdown());
        }}
        handleImageUpload={handleImageUpload1}
      />
    </>
  );
}

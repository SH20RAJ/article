'use client';
import { Editor } from "novel-lightweight";
import { handleImageUpload1 } from "@/lib/funs";

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
      handleImageUpload={handleImageUpload1}
      />
      <style dangerouslySetInnerHTML={{__html: "\n        code , pre {\n          overflow-x: auto;\n        }\n      " }} />

    </>
   
  );
}
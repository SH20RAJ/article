import React from 'react';
import {
  EditorBubble,
  EditorBubbleItem,
  EditorCommand,
  EditorCommandItem,
  EditorContent,
  EditorRoot,
} from 'novel';

const Editor = () => {
  return (
    <EditorRoot>
      <EditorContent>
        <EditorCommand>
          <EditorCommandItem />
          <EditorCommandItem />
          <EditorCommandItem />
        </EditorCommand>
        <EditorBubble>
          <EditorBubbleItem />
          <EditorBubbleItem />
          <EditorBubbleItem />
        </EditorBubble>
      </EditorContent>
    </EditorRoot>
  );
};

export default Editor;

"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useEffect } from "react";
 
// Our <Editor> component we can reuse later
export default function Editor({ blocks = null, editable = false }) {
  const editor = useCreateBlockNote({
    ...(blocks && { initialContent: blocks })
  });

  useEffect(() => {
    if (blocks?.length) {
      editor.replaceBlocks(editor.document, blocks);
    }
  }, [blocks, editor]);


  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} editable={editable} />;
}
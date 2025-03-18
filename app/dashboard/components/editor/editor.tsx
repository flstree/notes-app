"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useEffect } from "react";
 
// Our <Editor> component we can reuse later
export default function Editor({ note = null, editable = false }) {
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "paragraph",
      },
    ],
  });

  useEffect(() => {
    if (note) {
      const filteredPages =
        note?.sourceLinks
          ?.filter((source) => source.label === "HAS_PAGE")
          ?.map((object) => object.target) || [];

      const blocks = filteredPages
        .map((page) => page.properties?.blocks || [])
        .flat();

      // Ensure blocks is not empty, otherwise keep the initial block
      editor.replaceBlocks(
        editor.document,
        blocks.length > 0
          ? blocks
          : [
              {
                type: "paragraph",
              },
            ]
      );
    }
  }, [note?.id, editor]);

  return <BlockNoteView editor={editor} editable={editable} />;
}
"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useEffect, useState } from "react";
import { Block, PartialBlock } from "@blocknote/core";
import { debounce } from "lodash";
import { fetchNote, updateObject } from "@/lib/api";
import { Loader1 } from "@/blocks/loader/loader1";

import "./styles.css";
import { darkTheme, lightTheme } from "./theme";

function saveWithIdleCallback(pageId: string, jsonBlocks: Block[]) {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => updateObject(pageId, { blocks: jsonBlocks }));
  } else {
    setTimeout(() => updateObject(pageId, { blocks: jsonBlocks }), 1000); // Fallback for browsers that don't support requestIdleCallback
  }
}

const debouncedSave = debounce(saveWithIdleCallback, 1000); // Debounce with 1-second delay

function saveToStorage(pageId: string, jsonBlocks: Block[]) {
  // Debounced API call to save notes with idle execution
  debouncedSave(pageId, jsonBlocks);
}

async function loadNote(note) {
  if (!note) return undefined;

  const pages =
    note?.sourceLinks
      ?.filter((source) => source.label === "HAS_PAGE")
      ?.map((source) => source.target) || [];

  const blocks = pages.flatMap(
    (page) => page?.properties?.blocks || []
  ) as PartialBlock[];

  return { pages, blocks };
}

// Our <Editor> component we can reuse later
export default function Editor({ note = null, editable = false }) {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const editor = useCreateBlockNote({
    animations: true,
    sideMenuDetection: "editor",
    trailingBlock: false,
    initialContent: [
      {
        type: "paragraph",
      },
    ],
  });

  const loadNoteFromApi = async (noteId) => {
    try {
      setLoading(true);
      const { data } = await fetchNote(noteId);
      loadNote(data).then((content) => {
        setPages(content.pages);
        if (editor && content?.blocks) {
          editor.replaceBlocks(editor.document, content.blocks);
        }
      });
    } catch (error) {
      console.error("Error fetching sections:", error);
    } finally {
      setLoading(false);
    }
  };

  // Load the note asynchronously
  useEffect(() => {
    if (note) {
      loadNoteFromApi(note.id);
      //refetch sections data
    }
  }, [note]);

  if (loading) {
    return <Loader1 />;
  }

  return (
    <>
      <BlockNoteView
        data-theming-css-variables-demo
        theme={{
          light: lightTheme,
          dark: darkTheme,
        }}
        editor={editor}
        editable={editable}
        onChange={() => {
          saveToStorage(pages[0]?.id, editor.document);
        }}
      />
    </>
  );
}
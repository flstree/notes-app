"use client";

import "@blocknote/core/fonts/inter.css";
import { SuggestionMenuController, useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useEffect, useState } from "react";
import { fetchObject } from "@/lib/api";
import { Loader1 } from "@/blocks/loader/loader1";

import "./styles.css";
import { darkTheme, lightTheme } from "./theme";
import { loadNote, saveToStorage } from "@/lib/editor";
import { filterSuggestionItems, PartialBlock } from "@blocknote/core";
import { getCustomSlashMenuItems, getEditorConfig } from "./editor-options";

interface EditorProps {
  note: any | null;
  editable: boolean;
}

export default function Editor({ note = null, editable = false }: EditorProps) {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [initialContent, setInitialContent] = useState<
    PartialBlock[] | undefined | "loading"
  >("loading");
  const editor = useCreateBlockNote(
    initialContent === "loading" ? undefined : getEditorConfig(initialContent)
  );

  const loadNoteFromApi = async (noteId) => {
    setLoading(true);
    try {
      const { data } = await fetchObject(noteId);
      loadNote(data).then((content) => {
        setPages(content.pages);
        if (content?.blocks) {
          setInitialContent(content?.blocks);
          editor.replaceBlocks(editor.document, content?.blocks as any);
        }
      });
    } catch (error) {
      console.error("Error fetching sections:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const noteId = note?.id;
    if (noteId) {
      loadNoteFromApi(noteId);
    }
  }, [note?.id]);

  if (loading || !editor || initialContent === "loading") {
    return <Loader1 />;
  }

  return (
    <>
      <BlockNoteView
        data-theming-css-variables-demo
        slashMenu={false}
        theme={{
          light: lightTheme,
          dark: darkTheme,
        }}
        editor={editor}
        editable={editable}
        onChange={() => {
          saveToStorage(pages[0]?.id, editor.document);
        }}
      >
        <SuggestionMenuController
          triggerCharacter={"/"}
          // Replaces the default Slash Menu items with our custom ones.
          getItems={async (query) =>
            filterSuggestionItems(getCustomSlashMenuItems(editor), query)
          }
        />
      </BlockNoteView>
    </>
  );
}

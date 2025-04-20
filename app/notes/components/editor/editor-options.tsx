import { uploadFile } from "@/lib/api";
import { en } from "@blocknote/core/locales";
import { BlockNoteEditor } from "@blocknote/core";
import { Sparkles, TextCursorInputIcon } from "lucide-react";
import {
  DefaultReactSuggestionItem,
  getDefaultReactSlashMenuItems,
} from "@blocknote/react";

const locale = en;

export const getEditorConfig = (initialContent): any => {
  return {
    animations: true,
    sideMenuDetection: "viewport",
    trailingBlock: false,
    initialContent: initialContent,
    collaboration: {},
    dictionary: {
      ...locale,
      placeholders: {
        ...locale.placeholders,
        emptyDocument: "Write, Press space for AI, / for commands",
        default: "Press / to insert an element",
        heading: "Heading",
      },
    },
    setIdAttribute: false,
    uploadFile,
    resolveFileUrl: async () => {
      return "https://baseapi";
    },
  };
};

const insertMagicAi = (editor: BlockNoteEditor) => {
  console.log("Magic AI insertion incoming!");
};

export const getCustomSlashMenuItems = (
  editor: any
): DefaultReactSuggestionItem[] => [
  ...getDefaultReactSlashMenuItems(editor),
  {
    title: "Insert Magic Text",
    onItemClick: () => {
      const prevText = editor._tiptapEditor.state.doc.textBetween(
        Math.max(0, editor._tiptapEditor.state.selection.from - 5000),
        editor._tiptapEditor.state.selection.from - 1,
        "\n"
      );
      insertMagicAi(editor);
    },
    aliases: ["autocomplete", "ai"],
    group: "AI",
    icon: <Sparkles />,
    //subtext: "Continue your note with AI-generated text",
  },
];

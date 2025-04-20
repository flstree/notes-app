import { Block, PartialBlock } from "@blocknote/core";
import { debounce } from "lodash";
import { updateObject } from "./api";

export const saveWithIdleCallback = (pageId: string, jsonBlocks: Block[]) => {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => updateObject(pageId, { blocks: jsonBlocks }));
  } else {
    setTimeout(() => updateObject(pageId, { blocks: jsonBlocks }), 1000); // Fallback for browsers that don't support requestIdleCallback
  }
};

const debouncedSave = debounce(saveWithIdleCallback, 1000); // Debounce with 1-second delay

export const saveToStorage = (pageId: string, jsonBlocks: Block[]) => {
  // Debounced API call to save notes with idle execution
  debouncedSave(pageId, jsonBlocks);
};

export const loadNote = async (note) => {
  if (!note) return undefined;

  const pages = note?.children?.filter((child) => child.type === "page") || [];

  const blocks = pages.flatMap(
    (page) => page?.properties?.blocks || []
  ) as PartialBlock[];

  return { pages, blocks };
};

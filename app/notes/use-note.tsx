import { atom, useAtom } from "jotai"

import { Note, notes } from "@/app/notes/data";

type Config = {
  selected: Note["id"] | null;
};

const configAtom = atom<Config>({
  selected: notes[0].id,
});

export function useNote() {
  return useAtom(configAtom);
}
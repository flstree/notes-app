import { atom, useAtom } from "jotai"

import { Note, notes } from "@/app/dashboard/data";

type Config = {
  selected: Note["id"] | null;
};

const configAtom = atom<Config>({
  selected: notes[0].id,
});

export function useNote() {
  return useAtom(configAtom);
}
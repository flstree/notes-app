import { atom, useAtom } from "jotai"

interface Note {
  id: string;
  type: string;
  properties: {
    subject: string;
    text: string;
    blocks?: any[];
  };
  children?: Note[];
  createdAt?: string;
  updatedAt?: string;
}

type Config = {
  selected: Note["id"] | null;
};

const configAtom = atom<Config>({
  selected: null,
});

export function useNote() {
  return useAtom(configAtom);
}
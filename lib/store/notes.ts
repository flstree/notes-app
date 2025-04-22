import { create } from "zustand";
import {
  deleteObject,
  fetchObject,
  fetchSections,
  makeRequest,
} from "@/lib/api";
import { ObjectTypes } from "@/lib/constants";
import { PartialBlock } from "@blocknote/core";

interface Object {
  id: string;
  type: string;
  properties: object;
}

interface Section {
  id: string;
  type: ObjectTypes.Section;
  properties: {
    title: string;
    icon: string;
    scope: string;
  };
  children: Object[];
}

// interface AccessPolicy {
//   id: string;
//   type: ObjectTypes.AccessPolicy;
//   properties: {
//     members?: string[];
//     scope: string;
//   };
// }

interface Note {
  id: string;
  type: ObjectTypes.Note;
  properties: {
    subject: string;
    description: string;
    text: string;
    labels: string[];
  };
  children: Object[];
}

interface Page {
  id: string;
  type: ObjectTypes.Page;
  properties: {
    blocks: PartialBlock[];
  };
}

interface NotesStore {
  sections: Section[];
  currentSection: Section | null;
  notes: Note[];
  currentNote: Note | null;
  editorMode: boolean;
  isLoading: boolean;
  error: string | null;

  // Actions
  setSections: (sections: Section[]) => void;
  setCurrentSection: (section: Section | null) => void;
  setNotes: (notes: Note[]) => void;
  setCurrentNote: (note: Note | null) => void;
  setEditorMode: (mode: boolean) => void;

  // Async actions
  fetchSections: () => Promise<void>;
  createSection: (data: Omit<Section["properties"], "id">) => Promise<Section>;
  createNote: (
    sectionId: string | null,
    data: Omit<Note["properties"], "id">
  ) => Promise<Note>;
  fetchNote: (noteId: string) => Promise<Note>;
  deleteSection: (sectionId: string) => Promise<void>;
  deleteNote: (noteId: string) => Promise<void>;
}

export const useNotesStore = create<NotesStore>((set, get) => ({
  sections: [],
  currentSection: null,
  notes: [],
  currentNote: null,
  editorMode: false,
  isLoading: false,
  error: null,

  setSections: (sections) => set({ sections }),
  setCurrentSection: (section) => set({ currentSection: section }),
  setNotes: (notes) => set({ notes }),
  setCurrentNote: (note) => set({ currentNote: note }),
  setEditorMode: (mode) => set({ editorMode: mode }),

  fetchSections: async () => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await fetchSections();
      set({ sections: data });
    } catch (error: any) {
      set({ error: error?.message || "Somethings wrong" });
    } finally {
      set({ isLoading: false });
    }
  },

  createSection: async (properties) => {
    set({ isLoading: true, error: null });
    try {
      const { data: section } = await makeRequest({
        type: ObjectTypes.Section,
        properties,
      });

      await makeRequest({
        type: ObjectTypes.AccessPolicy,
        parentId: section.id,
        properties: {
          scope: "public",
          members: [],
        },
      });

      const { sections } = get();
      set({ sections: [...sections, section] });

      return section;
    } catch (error: any) {
      set({ error: error.message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  createNote: async (sectionId, properties) => {
    set({ isLoading: true, error: null });
    try {
      const { data: note } = await makeRequest({
        type: ObjectTypes.Note,
        parentId: sectionId,
        properties: {
          ...properties,
          text: properties.description,
          labels: [],
        },
      });

      await makeRequest({
        type: ObjectTypes.Page,
        parentId: note.id,
        properties: {
          blocks: [
            {
              type: "paragraph",
            },
          ],
        },
      });

      const { notes } = get();
      set({ notes: [...notes, note] });

      return note;
    } catch (error: any) {
      set({ error: error.message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  fetchNote: async (noteId) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await fetchObject(noteId);
      set({ setCurrentNote: data });

      return data;
    } catch (error: any) {
      set({ error: error?.message || "Somethings wrong" });
    } finally {
      set({ isLoading: false });
    }
  },

  deleteSection: async (sectionId) => {
    set({ isLoading: true, error: null });
    try {
      await deleteObject(sectionId);
      set({ currentSection: null });
    } catch (error: any) {
      set({ error: error?.message || "Somethings wrong" });
    } finally {
      set({ isLoading: false });
    }
  },

  deleteNote: async (noteId) => {
    set({ isLoading: true, error: null });
    try {
      await deleteObject(noteId);
      set({ setCurrentNote: null });
    } catch (error: any) {
      set({ error: error?.message || "Somethings wrong" });
    } finally {
      set({ isLoading: false });
    }
  },
}));

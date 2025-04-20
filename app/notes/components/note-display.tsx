"use client";

import { format } from "date-fns";
import { Editor } from "./editor/dynamic-editor";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NoteDisplayProps {
  note: any | null;
  sectionTitle: string | null;
}

export function NoteDisplay({ note, sectionTitle }: NoteDisplayProps) {
  // Track the currently displayed note ID
  const [currentNoteId, setCurrentNoteId] = useState(note?.id);

  useEffect(() => {
    if (note?.id !== currentNoteId) {
      setCurrentNoteId(note?.id);
    }
  }, [note?.id, note?.children, currentNoteId]);

  return (
    <div className="flex h-svh">
      {note ? (
        <div className="flex flex-1 flex-col">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <div className="grid gap-1">
                <div className="font-semibold">
                  <span className="mr-1">{sectionTitle}</span>
                  {">"}
                  <span className="ml-1">{note?.properties?.subject}</span>
                </div>
              </div>
            </div>
            {note.createdAt && (
              <div className="ml-auto text-xs text-muted-foreground">
                {format(new Date(note.createdAt), "PPpp")}
              </div>
            )}
          </div>
          <ScrollArea className="flex flex-1 flex-col">
            <div className="flex-1 whitespace-pre-wrap text-sm rounded-none">
              <Editor key={currentNoteId} note={note} editable={false} />
            </div>
          </ScrollArea>
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No note selected
        </div>
      )}
    </div>
  );
}

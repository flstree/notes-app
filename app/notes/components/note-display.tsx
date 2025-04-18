"use client";

import { format } from "date-fns";
import { Separator } from "@/components/ui/separator";
import { Editor } from "./editor/dynamic-editor";
import { useEffect, useState } from "react";

interface NoteDisplayProps {
  note: any | null;
}

export function NoteDisplay({ note }: NoteDisplayProps) {
  // Track the currently displayed note ID
  const [currentNoteId, setCurrentNoteId] = useState(note?.id);

  useEffect(() => {
    if (note?.id !== currentNoteId) {
      setCurrentNoteId(note?.id);
    }
  }, [note?.id, note?.children, currentNoteId]);

  return (
    <div className="flex h-full flex-col">
      {note ? (
        <div className="flex flex-1 flex-col">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <div className="grid gap-1">
                <div className="font-semibold">{note.properties.subject}</div>
              </div>
            </div>
            {note.createdAt && (
              <div className="ml-auto text-xs text-muted-foreground">
                {format(new Date(note.createdAt), "PPpp")}
              </div>
            )}
          </div>
          <Separator />
          <div className="flex-1 whitespace-pre-wrap text-sm">
            {/* Force re-render by using currentNoteId as a key */}
            <Editor key={currentNoteId} note={note} editable={false} />
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No note selected
        </div>
      )}
    </div>
  );
}

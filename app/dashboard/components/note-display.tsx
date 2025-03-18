"use client";

import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
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
  }, [note?.id, note?.sourceLinks, currentNoteId]);

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
            {note.date && (
              <div className="ml-auto text-xs text-muted-foreground">
                {format(new Date(note.createdAt), "PPpp")}
              </div>
            )}
          </div>
          <div className="flex items-start p-4 pt-0">
            <div className="flex items-start gap-4 text-sm">
              <div className="grid gap-1">
                <div className="line-clamp-1 text-xs">
                  {note.properties.text}
                </div>
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
            {/* Force re-render by using currentNoteId as a key */}
            <Editor key={currentNoteId} note={note} editable={false} />
          </div>
          <Separator className="mt-auto" />
          <div className="p-4">
            <form>
              <div className="grid gap-4">
                <Textarea
                  className="p-4"
                  placeholder={`Reply ${note.name}...`}
                />
                <div className="flex items-center">
                  <Label
                    htmlFor="mute"
                    className="flex items-center gap-2 text-xs font-normal"
                  >
                    <Switch id="mute" aria-label="Mute thread" /> Mute this
                    thread
                  </Label>
                  <Button
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                    className="ml-auto"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </form>
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

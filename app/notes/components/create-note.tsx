"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNotesStore } from "@/lib/store/notes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

interface CreateNoteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: () => void;
}

export function CreateNote({ open, onOpenChange, onSave }: CreateNoteProps) {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const { createNote, currentSection, fetchSections } = useNotesStore();

  const handleCreate = async () => {
    if (!subject.trim()) return;
    if (!currentSection?.id) return;

    await createNote(currentSection?.id, {
      subject,
      description,
      text: description,
      labels: [],
    });
    await fetchSections();
    setSubject("");
    setDescription("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Note</DialogTitle>
          <DialogDescription>
            Enter the details for your new note
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Input
            placeholder="Note subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Textarea
            placeholder="Note description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => {
              setSubject("");
              setDescription("");
              onOpenChange(false);
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleCreate}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
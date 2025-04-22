"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useNotesStore } from "@/lib/store/notes";
import { CreateSection } from "@/app/notes/components/create-section";
import { useRouter } from "next/navigation";
import { CreateNote } from "@/app/notes/components/create-note";
import { useUserStore } from "@/lib/store/user";

export function CreateDropdown() {
  const { sections, currentSection, createNote, createSection, fetchSections } =
    useNotesStore();
  const { user, isAuthenticated } = useUserStore();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showNoteDialog, setShowNoteDialog] = useState(false);
  const [showSectionDialog, setShowSectionDialog] = useState(false);

  useEffect(() => {
    fetchSections();
  }, []);

  if (!isAuthenticated) {
    return <></>;
  }

  return (
    <>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger
          className="bg-foreground text-background hover:bg-foreground hover:text-background"
          asChild
        >
          <Button variant="ghost" className="flex items-center gap-2">
            <span>New</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-[200px] bg-background text-foreground p-0"
        >
          <DropdownMenuItem
            className="rounded-none py-2.5 pl-4 text-xs"
            onClick={() => {
              setShowNoteDialog(true);
              setIsOpen(false);
            }}
          >
            New Note
          </DropdownMenuItem>
          <DropdownMenuItem
            className="rounded-none py-2.5 pl-4 text-xs"
            onClick={() => {
              setShowSectionDialog(true);
              setIsOpen(false);
            }}
          >
            New Notebook
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <CreateNote
        open={showNoteDialog}
        onOpenChange={setShowNoteDialog}
        onSave={() => {
          router.refresh();
          setShowNoteDialog(false);
        }}
      />

      <CreateSection
        open={showSectionDialog}
        onOpenChange={setShowSectionDialog}
        onSave={() => {
          router.refresh();
          setShowSectionDialog(false);
        }}
      />
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import {
  ClipboardCopy,
  Copy,
  Download,
  File,
  History,
  Info,
  Link,
  Minimize2,
  MoreVertical,
  Move,
  Printer,
  Search,
  Share,
  Tag,
  Trash2,
} from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { deleteObject, fetchObject } from "@/lib/api";
import { useRouter } from "next/navigation";
import { Editor } from "../components/editor/dynamic-editor";
import ShareButton from "../components/share-button";

export default function NotesIdPage({ params }) {
  const [id] = params?.id;
  const router = useRouter();
  const [note, setNote] = useState<any>([]);
  const [currentNoteId, setCurrentNoteId] = useState(note?.id);
  const [section, setSection] = useState(null);

  const minimizeNote = () => {
    router.back();
  }

  const deleteNote = async (noteId) => {
    if (!noteId) return;

    await deleteObject(noteId);
    minimizeNote();
  };

  useEffect(() => {
    (async () => {
      if (id !== currentNoteId) {
        //Fetch note
        const { data } = await fetchObject(id);
        setNote(data);

        //Fetch section
        const { data: sectionData } = await fetchObject(data.parentId);
        setSection(sectionData);
        setCurrentNoteId(id);
      }
    })();
  }, [id, currentNoteId]);

  return (
    <div className="flex h-screen flex-col">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild onClick={() => minimizeNote()}>
              <Button variant="ghost" size="icon" disabled={!note}>
                <Minimize2 className="h-4 w-4" />
                <span className="sr-only">Minimize</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Minimize</TooltipContent>
          </Tooltip>
          <Tooltip>
            <p className="text-xs text-muted-foreground"><span className="mr-1">{section?.properties?.title}</span>{">"}<span className="ml-1">{note?.properties?.subject}</span></p>
            <TooltipContent>Delete</TooltipContent>
          </Tooltip>
        </div>
        <ShareButton note={note} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" disabled={!note}>
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem><Share className="h-6 w-6 pr-2" /> Share</DropdownMenuItem>
            <DropdownMenuItem><Link className="h-6 w-6 pr-2" /> Copy link</DropdownMenuItem>
            <Separator orientation="horizontal" className="h-0.5" />
            <DropdownMenuItem><Move className="h-6 w-6 pr-2" /> Move</DropdownMenuItem>
            <DropdownMenuItem><ClipboardCopy className="h-6 w-6 pr-2" /> Copy to</DropdownMenuItem>
            <DropdownMenuItem><Copy className="h-6 w-6 pr-2" /> Duplicate</DropdownMenuItem>
            <Separator orientation="horizontal" className="h-0.5" />
            <DropdownMenuItem><Tag className="h-6 w-6 pr-2" /> Edit tags</DropdownMenuItem>
            <Separator orientation="horizontal" className="h-0.5" />
            <DropdownMenuItem><Search className="h-6 w-6 pr-2" /> Find in note</DropdownMenuItem>
            <DropdownMenuItem><Info className="h-6 w-6 pr-2" /> Note info</DropdownMenuItem>
            <DropdownMenuItem><History className="h-6 w-6 pr-2" /> Note history</DropdownMenuItem>
            <Separator orientation="horizontal" className="h-0.5" />
            <DropdownMenuItem><Download className="h-6 w-6 pr-2" /> Export</DropdownMenuItem>
            <DropdownMenuItem><File className="h-6 w-6 pr-2" /> Export as PDF</DropdownMenuItem>
            <DropdownMenuItem><Printer className="h-6 w-6 pr-2" /> Print</DropdownMenuItem>
            <Separator orientation="horizontal" className="h-0.5" />
            <DropdownMenuItem disabled={!note} onClick={() => deleteNote(note.id)}><Trash2 className="h-6 w-6 pr-2" /> Move to Trash</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Separator />
      {note ? (
        <div className="flex flex-1">
          <div className="flex-1 whitespace-pre-wrap text-sm">
            <Editor key={currentNoteId} note={note} editable={true} />
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
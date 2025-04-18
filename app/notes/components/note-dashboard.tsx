import {
  ClipboardCopy,
  Copy,
  Download,
  File,
  History,
  Info,
  Link,
  Maximize2,
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
import { Editor } from "./editor/dynamic-editor";
import { useEffect, useState } from "react";
import { deleteObject } from "@/lib/api";
import { useRouter } from "next/navigation";
import ShareButton from "./share-button";

interface NoteDashboardProps {
  note: any | null;
  sectionTitle: string | null;
  onDelete: () => void;
}

export function NoteDashboard({ note, sectionTitle, onDelete }: NoteDashboardProps) {
  const router = useRouter();
  // Track the currently displayed note ID
  const [currentNoteId, setCurrentNoteId] = useState(note?.id);

  const deleteNote = async (noteId) => {
    if (!noteId) return;

    await deleteObject(noteId);

    onDelete();
  };

  const maximizeNote = (noteId: string) => {
    router.push(`/notes/${noteId}`);
  }

  useEffect(() => {
    if (note?.id !== currentNoteId) {
      setCurrentNoteId(note?.id);
    }
  }, [note?.id, note?.children, currentNoteId]);

  return (
    <div className="flex h-screen flex-col">
      {
        note && <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild onClick={() => maximizeNote(note.id)}>
              <Button variant="ghost" size="icon" disabled={!note}>
                <Maximize2 className="h-4 w-4" />
                <span className="sr-only">Maximize</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Maximize</TooltipContent>
          </Tooltip>
          <Tooltip>
            <p className="text-xs text-muted-foreground"><span className="mr-1">{sectionTitle}</span>{">"}<span className="ml-1">{note?.properties?.subject}</span></p>
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
          <DropdownMenuContent align="end" className="flex flex-col w-[100%]">
            <DropdownMenuItem><Share className="h-6 w-6 pr-2" /> Share</DropdownMenuItem>
            <DropdownMenuItem><Link className="h-6 w-6 pr-2" /> Copy link</DropdownMenuItem>
            <Separator orientation="horizontal" className="h-0.5 bg-foreground dark:bg-white" />
            <DropdownMenuItem><Move className="h-6 w-6 pr-2" /> Move</DropdownMenuItem>
            <DropdownMenuItem><ClipboardCopy className="h-6 w-6 pr-2" /> Copy to</DropdownMenuItem>
            <DropdownMenuItem><Copy className="h-6 w-6 pr-2" /> Duplicate</DropdownMenuItem>
            <Separator orientation="horizontal" className="h-0.5 bg-foreground dark:bg-white" />
            <DropdownMenuItem><Tag className="h-6 w-6 pr-2" /> Edit tags</DropdownMenuItem>
            <Separator orientation="horizontal" className="h-0.5 bg-foreground dark:bg-white" />
            <DropdownMenuItem><Search className="h-6 w-6 pr-2" /> Find in note</DropdownMenuItem>
            <DropdownMenuItem><Info className="h-6 w-6 pr-2" /> Note info</DropdownMenuItem>
            <DropdownMenuItem><History className="h-6 w-6 pr-2" /> Note history</DropdownMenuItem>
            <Separator orientation="horizontal" className="h-0.5 bg-foreground dark:bg-white" />
            <DropdownMenuItem><Download className="h-6 w-6 pr-2" /> Export</DropdownMenuItem>
            <DropdownMenuItem><File className="h-6 w-6 pr-2" /> Export as PDF</DropdownMenuItem>
            <DropdownMenuItem><Printer className="h-6 w-6 pr-2" /> Print</DropdownMenuItem>
            <Separator orientation="horizontal" className="h-0.5 bg-foreground dark:bg-white" />
            <DropdownMenuItem disabled={!note} onClick={() => deleteNote(note.id)}><Trash2 className="h-6 w-6 pr-2" /> Move to Trash</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      }
      <Separator />
      {note ? (
        <div className="flex flex-1 flex-col">
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
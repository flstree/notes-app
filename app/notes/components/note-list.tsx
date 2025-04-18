import { ComponentProps } from "react"
import { formatDistanceToNow } from "date-fns"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Note } from "@/app/notes/data";
import { useNote } from "@/app/notes/use-note";

interface NoteListProps {
  items: any[];
}

export function NoteList({ items }: NoteListProps) {
  const [note, setNote] = useNote();

  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col gap-2 p-4 pt-0 pb-24">
        {items.map((item) => (
          <button
            key={item.id}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border-none p-3 text-left text-sm transition-all bg-[#e9ecef] hover:bg-[#ffbf69]",
              note.selected === item.id && "bg-[#ffbf69] text-white"
            )}
            onClick={() =>
              setNote({
                ...note,
                selected: item.id,
              })
            }
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{item.properties.subject}</div>
                  {/* {!item.read && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )} */}
                </div>
              </div>
            </div>
            <div
              className={cn(
                "line-clamp-2 text-xs",
                note.selected === item.id
                  ? "text-white"
                  : "text-muted-foreground"
              )}
            >
              {item.properties.text?.substring(0, 300)}
            </div>
            <div
              className={cn(
                "mr-auto text-xs",
                note.selected === item.id
                  ? "text-white"
                  : "text-muted-foreground"
              )}
            >
              {formatDistanceToNow(new Date(item.createdAt), {
                addSuffix: true,
              })}
            </div>
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}

function getBadgeVariantFromLabel(
  label: string
): ComponentProps<typeof Badge>["variant"] {
  if (["work"].includes(label.toLowerCase())) {
    return "default"
  }

  if (["personal"].includes(label.toLowerCase())) {
    return "outline"
  }

  return "secondary"
}
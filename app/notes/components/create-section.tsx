"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNotesStore } from "@/lib/store/notes";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  Dialog,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DynamicIcon } from "../data";
import { SECTION_ICONS } from "../data/icons";
import { cn } from "@/lib/utils";

interface CreateSectionProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: () => void;
}

export function CreateSection({ open, onOpenChange }: CreateSectionProps) {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("📝");
  const [isPublic, setIsPublic] = useState(true);
  const { createSection, fetchSections } = useNotesStore();

  const handleCreate = async () => {
    if (!title.trim()) return;
    await createSection({
      title,
      icon,
      scope: isPublic ? "public" : "private",
    });
    await fetchSections();
    setTitle("");
    setIcon("📝");
    setIsPublic(true);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Notebook</DialogTitle>
          <DialogDescription>
            Enter details for your new notebook
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Notebook title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between w-100">
            <Label htmlFor="icon">Icon</Label>
            <div>
              <Select value={icon} onValueChange={setIcon}>
                <SelectTrigger>
                  <SelectValue placeholder="Select an icon">
                    {icon && (
                      <DynamicIcon iconName={icon} className="mr-2 h-4 w-4" />
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="w-[320px]">
                  <div className="grid grid-cols-8 gap-2 p-2">
                    {SECTION_ICONS.map((iconName, index) => (
                      <SelectItem
                        key={`select_icon_${index}`}
                        value={iconName}
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-md data-[state=checked]:bg-foreground data-[state=checked]:text-background hover:bg-accent p-0",
                          "[&>span:first-child]:hidden",
                          icon === iconName
                            ? "bg-foreground text-background"
                            : ""
                        )}
                      >
                        <DynamicIcon iconName={iconName} className="h-5 w-5" />
                      </SelectItem>
                    ))}
                  </div>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="public-toggle">Visibility</Label>
            <Switch
              id="public-toggle"
              checked={isPublic}
              onCheckedChange={setIsPublic}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => {
              setTitle("");
              setIcon("📝");
              setIsPublic(true);
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

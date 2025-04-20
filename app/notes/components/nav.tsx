"use client"

import { Trash2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DynamicIcon } from "../data";
import { useEffect, useState } from "react";
import { deleteObject } from "@/lib/api";

interface NavProps {
  isCollapsed: boolean;
  editorMode: boolean;
  links: any;
  onDelete: () => void;
}

export function Nav({
  links,
  editorMode,
  isCollapsed,
  onDelete,
  onSelectSection,
}: NavProps & { onSelectSection: (id: string) => void }) {
  const [selectedLink, setSelectedLink] = useState<string>(null);

  const handleSelection = (linkId) => {
    setSelectedLink(linkId);
    onSelectSection(linkId);
  };

  const deleteSection = async (sectionId: string) => {
    if (!sectionId) return;

    await deleteObject(sectionId);

    onDelete();
  };

  useEffect(() => {
    if (!selectedLink) {
      const firstLinkId = links[0]?.id;
      setSelectedLink(firstLinkId);
      onSelectSection(firstLinkId);
    }
  }, [links]);

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-0 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 ">
        {links?.map((link, index) => (
          <Button
            key={"_nav_section_" + index}
            onClick={() => handleSelection(link.id)}
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              `bg-inherit rounded-none ${
                link.id === selectedLink ? "border-l-4 border-foreground" : ""
              }`,
              "justify-start"
            )}
          >
            <DynamicIcon
              iconName={link.properties?.icon}
              className="mr-2 h-4 w-4"
            />
            {link.properties?.title}
            {link.children && (
              <>
                <span
                  className={cn(
                    "ml-auto",
                    link.variant === "default" &&
                      "text-background dark:text-white"
                  )}
                >
                  {editorMode && (
                    <Trash2
                      className="h-4 w-4"
                      onClick={() => deleteSection(link.id)}
                    />
                  )}
                </span>
              </>
            )}
          </Button>
        ))}
      </nav>
    </div>
  );
}
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
      setSelectedLink(() => {
        onSelectSection(firstLinkId);
        return firstLinkId;
      });
    }
  }, [links]);

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-0 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 ">
        {links?.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => onSelectSection(link.id)}
                  className={cn(
                    buttonVariants({ variant: link.variant, size: "icon" }),
                    "h-9 w-9",
                    link.variant === "default" &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                  )}
                >
                  <DynamicIcon
                    iconName={link.properties.icon}
                    className="h-4 w-4"
                  />
                  <span className="sr-only">{link.properties?.title}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.properties?.title}
                {link.children && (
                  <span className="ml-auto text-muted-foreground">
                    {link.children.length}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Button
              key={index}
              onClick={() => handleSelection(link.id)}
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                `bg-inherit rounded-none ${
                  link.id === selectedLink
                    ? "border-l-4 border-[#ffbf69] dark:border-white"
                    : ""
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
                    {
                      link.children.filter((child) => child.type === "note")
                        .length
                    }
                  </span>
                  {editorMode && 
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteSection(link.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>}
                </>
              )}
            </Button>
          )
        )}
      </nav>
    </div>
  );
}
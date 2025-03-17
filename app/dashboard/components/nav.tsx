"use client"

import Link from "next/link"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DynamicIcon } from "../data";

interface NavProps {
  isCollapsed: boolean;
  links: any;
}

export function Nav({
  links,
  isCollapsed,
  onSelectSection,
}: NavProps & { onSelectSection: (id: string) => void }) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
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
                {link.sourceLinks && (
                  <span className="ml-auto text-muted-foreground">
                    {link.sourceLinks.length}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Button
              key={index}
              onClick={() => onSelectSection(link.id)}
              className={cn(
                buttonVariants({ variant: link.variant, size: "sm" }),
                link.variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start"
              )}
            >
              <DynamicIcon
                iconName={link.properties?.icon}
                className="mr-2 h-4 w-4"
              />
              {link.properties?.title}
              {link.sourceLinks && (
                <span
                  className={cn(
                    "ml-auto",
                    link.variant === "default" &&
                      "text-background dark:text-white"
                  )}
                >
                  {
                    link.sourceLinks.filter(
                      (object) => object.label === "HAS_NOTE"
                    ).length
                  }
                </span>
              )}
            </Button>
          )
        )}
      </nav>
    </div>
  );
}
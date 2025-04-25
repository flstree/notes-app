"use client"

import { Trash2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { DynamicIcon } from "../data";
import { useEffect, useState } from "react";
import { useNotesStore } from "@/lib/store/notes";
import { ObjectTypes } from "@/lib/constants";

interface NavProps {
  isCollapsed: boolean;
}

// Add type for Section if not already defined elsewhere

export function Nav({ isCollapsed }: NavProps) {
  const {
    sections,
    editorMode,
    currentSection,
    setCurrentSection,
    fetchSections,
    deleteSection,
  } = useNotesStore();

  const handleSelection = (section: any) => {
    if (!section) return;

    if (typeof setCurrentSection === "function") {
      setCurrentSection(section);
    }
  };

  const removeSection = async (sectionId: string) => {
    if (!sectionId) return;

    await deleteSection(sectionId);
    await fetchSections();
    setCurrentSection(null);
  };

  useEffect(() => {
    if (!currentSection) {
      setCurrentSection(sections[0]);
    }
  }, [sections, currentSection, setCurrentSection]);

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-0 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 ">
        {sections?.map((section, index) => (
          <Button
            key={"_nav_section_" + index}
            onClick={() => handleSelection(section)}
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              `bg-inherit rounded-none ${
                section.id === currentSection?.id
                  ? "border-l-4 border-foreground"
                  : ""
              }`,
              "justify-start"
            )}
          >
            <DynamicIcon
              iconName={section.properties?.icon}
              className="mr-2 h-4 w-4"
            />
            {section.properties?.title}
            {section.children && (
              <>
                <span className={cn("ml-auto", "text-foreground")}>
                  {editorMode && (
                    <Trash2
                      className="h-4 w-4"
                      onClick={() => removeSection(section?.id)}
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
"use client"

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useSession } from "next-auth/react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NoteDisplay } from "@/app/notes/components/note-display";
import { NoteList } from "@/app/notes/components/note-list";
import { Nav } from "@/app/notes/components/nav";
import { useNote } from "@/app/notes/use-note";
import { NoteDashboard } from "./note-dashboard";
import { useNotesStore } from "@/lib/store/notes";
import { useUserStore } from "@/lib/store/user";

interface NotesProps {
  sections: any[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
  reloadData?: () => void;
  editorMode?: boolean;
}

export function Notes({
  defaultLayout = [20, 30, 50],
  defaultCollapsed = false,
  navCollapsedSize,
  editorMode = false,
  reloadData,
}: NotesProps) {
  const { isAuthenticated } = useUserStore();
  const { sections, notes, currentSection, setCurrentSection, setNotes } =
    useNotesStore();
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  const [note] = useNote();

  // Use session to determine if user is logged in
  const isEditorMode = isAuthenticated ? true : editorMode;

  useEffect(() => {
    const filtered = (sections
      ?.find((section) => section.id === currentSection?.id)
      ?.children?.filter((child) => child.type === "note") || []) as any;

    setNotes(filtered);
  }, [sections, setNotes, currentSection]);

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full max-h-screen items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              true
            )}`;
          }}
          onResize={() => {
            setIsCollapsed(false);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              false
            )}`;
          }}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
          <div className="bg-background/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div className="relative flex items-center">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search"
                  className="pl-8 rounded-none outline-none border-none ring-offset-0"
                />
              </div>
            </form>
          </div>
          <Nav isCollapsed={isCollapsed} />
        </ResizablePanel>
        <ResizableHandle withHandle={false} />
        <ResizablePanel
          defaultSize={defaultLayout[1]}
          minSize={25}
          maxSize={35}
        >
          <Tabs defaultValue="all">
            <TabsContent value="all" className="m-0 mt-4">
              <NoteList items={notes} />
            </TabsContent>
            {/* <TabsContent value="unread" className="m-0">
              <NoteList items={filteredNotes.filter((item) => !item.read)} />
            </TabsContent> */}
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle={false} />
        <ResizablePanel
          defaultSize={defaultLayout[2]}
          minSize={30}
          maxSize={100}
        >
          {isEditorMode ? (
            <NoteDashboard
              note={notes.find((item) => item.id === note.selected) || null}
            />
          ) : (
            <NoteDisplay
              note={notes.find((item) => item.id === note.selected) || null}
              sectionTitle={currentSection?.properties?.title}
            />
          )}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
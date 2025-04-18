"use client"

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NoteDisplay } from "@/app/notes/components/note-display";
import { NoteList } from "@/app/notes/components/note-list";
import { Nav } from "@/app/notes/components/nav";
import { useNote } from "@/app/notes/use-note";
import { NoteDashboard } from "./note-dashboard";
import { CreateSection } from "./create-section";
import { CreateNote } from "./create-note";

interface NotesProps {
  sections: any[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
  reloadData?: () => void;
  editorMode?: boolean;
}

export function Notes({
  sections,
  defaultLayout = [20, 32, 48],
  defaultCollapsed = false,
  navCollapsedSize,
  editorMode = false,
  reloadData,
}: NotesProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  const [note] = useNote();
  const [selectedSection, setSelectedSection] = React.useState<any | null>(
    sections.length > 0 ? sections[0] : null
  );
  const [filteredNotes, setFilteredNotes] = useState([]);


  const switchSection = (id: string) => {
    const section = sections.find((section) => section.id === id);
    setSelectedSection(section);
  }

  useEffect(() => {
    const filtered =
      sections
        ?.find((section) => section.id === selectedSection?.id)
        ?.children?.filter((child) => child.type === "note") || [];

    setFilteredNotes(filtered);
  }, [selectedSection, sections]);

  console.log(selectedSection);

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
          collapsible={false}
          minSize={15}
          maxSize={16}
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
          <div
            className={cn(
              "flex h-[56px] items-center justify-between",
              isCollapsed ? "h-[56px]" : "px-2"
            )}
          >
            <span className={cn("ml-2", isCollapsed && "hidden")}>Obzeva</span>
            {editorMode && <CreateSection onSave={reloadData} />}
          </div>
          <Separator />
          <div className="bg-background/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div className="relative flex items-center">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search"
                  className="pl-8 border-none rounded-none outline-none"
                />
              </div>
            </form>
          </div>
          <Nav
            isCollapsed={isCollapsed}
            editorMode={editorMode}
            links={sections as any}
            onDelete={reloadData}
            onSelectSection={(id) => switchSection(id)}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={defaultLayout[1]}
          minSize={25}
          maxSize={30}
        >
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Notes</h1>
              <div className="ml-auto">
                {editorMode && (
                  <CreateNote onSave={reloadData} section={selectedSection?.id} />
                )}
              </div>
            </div>
            <Separator />
            <TabsContent value="all" className="m-0 mt-4">
              <NoteList items={filteredNotes} />
            </TabsContent>
            <TabsContent value="unread" className="m-0">
              <NoteList items={filteredNotes.filter((item) => !item.read)} />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={defaultLayout[2]}
          minSize={30}
          maxSize={31}
        >
          {editorMode ? (
            <NoteDashboard
              note={
                filteredNotes.find((item) => item.id === note.selected) || null
              }
              sectionTitle={selectedSection?.properties?.title}
              onDelete={reloadData}
            />
          ) : (
            <NoteDisplay
              note={
                filteredNotes.find((item) => item.id === note.selected) || null
              }
            />
          )}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
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
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NoteDisplay } from "@/app/notes/components/note-display";
import { NoteList } from "@/app/notes/components/note-list";
import { Nav } from "@/app/notes/components/nav";
import { useNote } from "@/app/notes/use-note";
import { NoteDashboard } from "./note-dashboard";
import { CreateSection } from "./create-section";
import { CreateNote } from "./create-note";
import { Login } from "./login";

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
  defaultLayout = [20, 30, 50],
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
  };

  useEffect(() => {
    const filtered =
      sections
        ?.find((section) => section.id === selectedSection?.id)
        ?.children?.filter((child) => child.type === "note") || [];

    setFilteredNotes(filtered);
  }, [selectedSection, sections]);

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
          {editorMode && (
            <div
              className={cn(
                "flex h-[56px] items-center justify-between",
                isCollapsed ? "h-[56px]" : "px-2"
              )}
            >
              {<CreateSection onSave={reloadData} />}
            </div>
          )}
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
          <Nav
            isCollapsed={isCollapsed}
            editorMode={editorMode}
            links={sections as any}
            onDelete={reloadData}
            onSelectSection={(id) => switchSection(id)}
          />
        </ResizablePanel>
        <ResizableHandle withHandle={false} />
        <ResizablePanel
          defaultSize={defaultLayout[1]}
          minSize={25}
          maxSize={35}
        >
          <Tabs defaultValue="all">
            {editorMode && (
              <div className="flex items-center px-4 py-2">
                <div className="ml-auto">
                  <CreateNote
                    onSave={reloadData}
                    section={selectedSection?.id}
                  />
                </div>
              </div>
            )}
            <TabsContent value="all" className="m-0 mt-4">
              <NoteList items={filteredNotes} />
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
              sectionTitle={selectedSection?.properties?.title}
            />
          )}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
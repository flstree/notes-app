"use client"

import * as React from "react"
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
import { AccountSwitcher } from "@/app/dashboard/components/account-switcher";
import { NoteDisplay } from "@/app/dashboard/components/note-display";
import { NoteList } from "@/app/dashboard/components/note-list";
import { Nav } from "@/app/dashboard/components/nav";
import { Section, type Note } from "@/app/dashboard/data";
import { useNote } from "@/app/dashboard/use-note";
import { NoteDashboard } from "./note-dashboard";
import { CreateSection } from "./create-section";
import { CreateNote } from "./editor/create-note";

interface NotesProps {
  sections: any[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
  editorMode?: boolean;
}

export function Notes({
  sections,
  defaultLayout = [20, 32, 48],
  defaultCollapsed = false,
  navCollapsedSize,
  editorMode = false,
}: NotesProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  const [note] = useNote();
  const [selectedSection, setSelectedSection] = React.useState<string | null>(
    sections.length > 0 ? sections[0].id : null
  );

  // Filter notes based on selected section
  const filteredNotes =
    sections
      ?.find((section) => section.id === selectedSection)
      ?.sourceLinks?.filter((source) => source.label === "HAS_NOTE")
      ?.map((object) => object.target) || [];

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
          <div
            className={cn(
              "flex h-[52px] items-center justify-between",
              isCollapsed ? "h-[52px]" : "px-2"
            )}
          >
            <span className={cn("ml-2", isCollapsed && "hidden")}>Obzeva</span>
            {editorMode && <CreateSection />}
          </div>
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={sections as any}
            onSelectSection={(id) => setSelectedSection(id)}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Notes</h1>
              <div className="ml-auto">
                {editorMode && <CreateNote section={selectedSection} />}
              </div>
            </div>
            <Separator />
            <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-8" />
                </div>
              </form>
            </div>
            <TabsContent value="all" className="m-0">
              <NoteList items={filteredNotes} />
            </TabsContent>
            <TabsContent value="unread" className="m-0">
              <NoteList items={filteredNotes.filter((item) => !item.read)} />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]} minSize={30}>
          {editorMode ? (
            <NoteDashboard
              note={
                filteredNotes.find((item) => item.id === note.selected) || null
              }
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
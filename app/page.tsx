"use client";
import React, { useState, useEffect } from "react";
import { Notes } from "@/app/notes/components/notes";
import { fetchSections } from "@/lib/api";
import { Loader3 } from "@/blocks/loader/loader3";

export default function Home() {
  const [sections, setSections] = useState<any[]>([]);
  const [defaultLayout, setDefaultLayout] = useState<any>();
  const [defaultCollapsed, setDefaultCollapsed] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const loadSections = async () => {
    try {
      setLoading(true);
      const { data } = await fetchSections();
      setSections(data);
    } catch (error) {
      console.error("Error fetching sections:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getCookie = (name: string) => {
      const cookies = document.cookie.split("; ");
      const cookie = cookies.find((c) => c.startsWith(`${name}=`));
      return cookie ? JSON.parse(cookie.split("=")[1]) : undefined;
    };

    setDefaultLayout(getCookie("react-resizable-panels:layout:mail"));
    setDefaultCollapsed(getCookie("react-resizable-panels:collapsed"));

    loadSections();
  }, []);

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex md:flex-col">
        <Notes
          sections={sections}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
          // isMobile={false}
        />
        {loading && <Loader3 text="Obzeva notes" />}
      </div>

      {/* Mobile View */}
      {/* <div className="flex flex-col md:hidden">
        <Notes
          sections={sections}
          defaultLayout={[100]}
          defaultCollapsed={false}
          navCollapsedSize={0}
          // isMobile={true}
        />
        {loading && <Loader3 text="Obzeva notes" />}
      </div> */}
    </>
  );
}

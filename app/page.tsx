"use client";
import React, { useState, useEffect } from "react";
import { Notes } from "@/app/dashboard/components/notes";
import { fetchSections } from "@/lib/api";

export default function Home() {
  const [sections, setSections] = useState<any[]>([]);
  const [defaultLayout, setDefaultLayout] = useState<any>();
  const [defaultCollapsed, setDefaultCollapsed] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch sections from API
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

  // Read layout settings from cookies
  useEffect(() => {
    const getCookie = (name: string) => {
      const cookies = document.cookie.split("; ");
      const cookie = cookies.find((c) => c.startsWith(`${name}=`));
      return cookie ? JSON.parse(cookie.split("=")[1]) : undefined;
    };

    setDefaultLayout(getCookie("react-resizable-panels:layout:mail"));
    setDefaultCollapsed(getCookie("react-resizable-panels:collapsed"));

    loadSections(); // Load sections on mount
  }, []);

  return (
    <>
      <div className="hidden flex-col md:flex">
        <Notes
          sections={sections}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
        {loading && <p>Loading...</p>}
      </div>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Notes } from "@/app/notes/components/notes";
import { fetchSections } from "@/lib/api";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { Loader3 } from "@/blocks/loader/loader3";
import { Loader1 } from "@/blocks/loader/loader1";

export default function DashboardClient() {
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

    loadSections();
  }, []);

  return (
    <ProtectedRoute>
      <div className="hidden flex-col md:flex">
        <Notes
          sections={sections}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
          editorMode={true}
          reloadData={loadSections}
        />
        {loading && <Loader1 />}
      </div>
    </ProtectedRoute>
  );
}

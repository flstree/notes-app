import { cookies } from "next/headers";
import { Notes } from "@/app/dashboard/components/notes";
import { fetchSections } from "@/lib/api";

export default async function Dashboard() {
  // Fetch data in parallel
  const sections = await fetchSections();

  // Get layout settings from cookies
  const layout = cookies().get("react-resizable-panels:layout:mail");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <>
      <div className="hidden flex-col md:flex">
        <Notes
          sections={sections.data}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
          editorMode={true}
        />
      </div>
    </>
  );
}

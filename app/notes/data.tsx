import { LucideProps } from "lucide-react";
// Import all Lucide icons as a dictionary
import * as LucideIcons from "lucide-react";

// Function to render icon dynamically
export const DynamicIcon = ({
  iconName,
  ...props
}: { iconName: string } & LucideProps) => {
  const LucideIcon = LucideIcons[
    iconName as keyof typeof LucideIcons
  ] as React.ElementType;

  // If the icon name is not found, fall back to a default icon (e.g., Home)
  if (!LucideIcon) {
    console.warn(`Icon "${iconName}" not found in Lucide React.`);
    return null;
  }

  return <LucideIcon {...props} />;
};

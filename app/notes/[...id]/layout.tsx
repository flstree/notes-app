"use client";

import { TooltipProvider } from "@/components/ui/tooltip";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TooltipProvider>
    <div>{children}</div>
  </TooltipProvider>
}

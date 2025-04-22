import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import { SignInButton } from "@/components/auth/SignInButton";
import { CreateDropdown } from "@/app/notes/components/create-dropdown";
import { AuthProvider } from "@/components/auth/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes - Obzeva",
  description: "A notes manager",
  keywords:
    "tailwindcss, react, shadcn, design, webdesign, website, saas templates, saas website template, editor",
  authors: [{ name: "Abdullah Momoh", url: "https://obzeva.dev" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      {...(process.env.NODE_ENV === "production"
        ? { suppressHydrationWarning: true }
        : {})}
    >
      <head>
        <meta
          property="og:title"
          content="Firestrap - Free SaaS website blocks"
        />
        <meta
          property="og:description"
          content="Free SaaS website blocks based on React with shadcn & Tailwind"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/tommyjepsen/twblocks/main/public/hero4.png?raw=true"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-note-background antialiased",
          inter.className
        )}
      >
        <Providers>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="obzeva-theme"
            >
              <div className="relative flex min-h-screen flex-col">
                <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                  <div className="mx-4 flex h-14 items-center justify-between">
                    <div className="flex items-center gap-4">
                      <a href="/" className="font-semibold">
                        Obzeva
                      </a>
                      <CreateDropdown />
                    </div>
                    <div className="flex items-center">
                      <SignInButton />
                    </div>
                  </div>
                </header>
                <main className="flex-1">{children}</main>
              </div>
            </ThemeProvider>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}

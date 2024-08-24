"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Box, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const Navbar7 = () => {
  const navigationItems = [
    {
      title: "Link One",
      href: "/",
      description: "",
    },
    {
      title: "Link Two",
      href: "/",
      description: "",
    },
    {
      title: "Link Three",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Sub Link One",
          href: "/",
        },
        {
          title: "Sub Link Two",
          href: "/",
        },
        {
          title: "Sub Link Three",
          href: "/",
        },
        {
          title: "Sub Link Four",
          href: "/",
        },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40 sticky top-0 left-0 bg-background border-b border-primary">
      <div className="relative mx-10 min-h-20 flex flex-col gap-4 lg:flex-row lg:items-center">
        {/* Logo Section */}
        <div className="flex justify-center lg:justify-start items-center gap-4">
          <div className="flex pl-4 lg:pl-0">
            <p className="font-semibold">Logo</p>
          </div>
        </div>

        {/* Navigation Menu Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
          <NavigationMenu className="flex justify-center lg:justify-start items-center">
            <NavigationMenuList className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:flex lg:flex-row gap-4">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <NavigationMenuLink>
                      <Button variant="ghost">{item.title}</Button>
                    </NavigationMenuLink>
                  ) : (
                    <NavigationMenuTrigger
                      className="font-medium text-sm"
                      onClick={() => setOpen(!isOpen)}
                    >
                      {item.title}
                    </NavigationMenuTrigger>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Button Section */}
        <div className="hidden lg:flex justify-center lg:justify-end w-full gap-2">
          <Button
            variant="outline"
            className="rounded-none border-2 border-black"
          >
            Button
          </Button>
          <Button className="rounded-none">Button</Button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute border-y border-primary flex flex-col w-full right-0 bg-background px-10 py-20 gap-8">
          <div className="flex flex-col items-start">
            <div className="flex flex-col gap-10 w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <div className="flex flex-col gap-1 w-full items-start">
                  <div className="flex flex-col gap-1 pb-8">
                    <p>Page group one</p>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page One</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Two</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Three</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Four</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1 w-full items-start">
                  <div className="flex flex-col gap-1 pb-8">
                    <p>Page group two</p>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Five</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Six</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Seven</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Eight</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1 w-full items-start">
                  <div className="flex flex-col gap-1 pb-8">
                    <p>Page group three</p>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Nine</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Ten</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Eleven</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Twelve</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1 w-full items-start">
                  <div className="flex flex-col gap-1 pb-8">
                    <p>Page group four</p>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Thirteen</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Fourteen</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Fifteen</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Sixteen</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Box, Check, ChevronRight, Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const Navbar5 = () => {
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
      <div className="relative mx-10 min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-2 items-center">
        <div className="justify-start items-center gap-4 lg:flex flex-row">
          <div className="flex">
            <p className="font-semibold">Logo</p>
          </div>
          <NavigationMenu className="flex justify-start items-center">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <NavigationMenuLink>
                        <Button variant="ghost">{item.title}</Button>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger
                        className="font-medium text-sm"
                        onClick={() => setOpen(!isOpen)}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="lg:flex hidden justify-end w-full gap-2">
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
        <div className="absolute border-y border-primary flex flex-col w-full right-0 bg-background px-20 py-20 gap-8">
          <div className="flex flex-col items-start">
            <div className="flex flex-col gap-10 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="flex flex-col gap-1 w-full items-start">
                  <div className="flex flex-col gap-1 pb-8">
                    <p>Page group one</p>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page One</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Two</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Three</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="w-4 h-4 mt-2 text-primary" />
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
                    <Box className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Five</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Six</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Seven</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-8">
                    <Box className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p>Page Eight</p>
                      <p className="text-muted-foreground text-sm">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1 w-full items-start md:col-span-2 lg:col-span-1">
                  <div className="flex flex-col gap-1 pb-8">
                    <p>Featured from blog</p>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-2">
                    <div className="bg-primary rounded-md w-full aspect-video h-full flex-1"></div>
                    <div className="flex gap-4 pl-0 flex-col flex-1">
                      <div className="flex gap-2 flex-col">
                        <h2 className="leading-relaxed tracking-tighter lg:max-w-xl font-regular text-left">
                          Article Title
                        </h2>
                        <p className="tracking-tight text-muted-foreground text-left">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </p>
                        <Link className="underline" href={"/read-more"}>
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-2">
                    <div className="bg-primary rounded-md w-full aspect-video h-full flex-1"></div>
                    <div className="flex gap-4 pl-0 flex-col flex-1">
                      <div className="flex gap-2 flex-col">
                        <h2 className="leading-relaxed tracking-tighter lg:max-w-xl font-regular text-left">
                          Article Title
                        </h2>
                        <p className="tracking-tight text-muted-foreground text-left">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </p>
                        <Link className="underline" href={"/read-more"}>
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start">
                    <Link href={"/articles"}>See all articles</Link>
                    <ChevronRight />
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

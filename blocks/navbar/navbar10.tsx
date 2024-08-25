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

export const Navbar10 = () => {
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
            <NavigationMenuList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row gap-4">
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
        <div className="flex justify-center lg:justify-end w-full gap-2">
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
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-cols-max">
                <div className="flex flex-col gap-1 w-full items-start">
                  <div className="flex flex-col gap-1 pb-4">
                    <p>Blog categories</p>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-2">
                    <div className="flex flex-col gap-1">
                      <p className="text-muted-foreground">Category One</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-1">
                    <div className="flex flex-col gap-1">
                      <p className="text-muted-foreground">Category Two</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-1">
                    <div className="flex flex-col gap-1">
                      <p className="text-muted-foreground">Category Three</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-1">
                    <div className="flex flex-col gap-1">
                      <p className="text-muted-foreground">Category Four</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 w-full items-start pb-1">
                    <div className="flex flex-col gap-1">
                      <p className="text-muted-foreground">Category Five</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1 w-full items-start md:col-span-2 lg:col-span-1">
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
                </div>

                <div className="flex flex-col gap-1 w-full items-start md:col-span-2 lg:col-span-1">
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
                </div>

                <div className="flex flex-col gap-1 w-full items-start md:col-span-2 lg:col-span-1">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

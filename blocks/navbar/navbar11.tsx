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
import { Box, Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const Navbar11 = () => {
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
      href: "/",
      description: "",
    },
    {
      title: "Link Four",
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
    <header className="w-full z-40 sticky top-0 left-0 bg-background border-0 border-b-2 border-black">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="flex justify-start lg:justify-start">
          <p className="font-bold">Logo</p>
        </div>
        <div className="justify-end items-center gap-4 lg:flex hidden flex-row"></div>
        <div className="flex justify-end w-full gap-4">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <NavigationMenuLink>
                        <Button variant="ghost" className="rounded-none">
                          {item.title}
                        </Button>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] !p-10 !shadow-none !rounded-none !border !border-primary !border-solid">
                        <div className="flex flex-col lg:grid grid-cols-1 gap-4">
                          <div className="flex flex-col gap-1 w-full items-start">
                            <div className="flex flex-row gap-6 w-full items-start pb-2">
                              <Box className="mt-2 !text-primary" />
                              <div className="flex flex-col gap-1">
                                <p>Page One</p>
                                <p className="text-muted-foreground text-sm">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-row gap-6 w-full items-start pb-2">
                              <Box className="mt-2 !text-primary" />
                              <div className="flex flex-col gap-1">
                                <p>Page Two</p>
                                <p className="text-muted-foreground text-sm">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-row gap-6 w-full items-start pb-2">
                              <Box className="mt-2 !text-primary" />
                              <div className="flex flex-col gap-1">
                                <p>Page Three</p>
                                <p className="text-muted-foreground text-sm">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-row gap-6 w-full items-start">
                              <Box className="mt-2 !text-primary" />
                              <div className="flex flex-col gap-1">
                                <p>Page Four</p>
                                <p className="text-muted-foreground text-sm">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="border-r hidden md:inline"></div>
          <Button variant="outline" className="outline outline-1 rounded-none">
            Sign in
          </Button>
          <Button className="rounded-none">Get started</Button>
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {/* {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex justify-between items-center"
                        onClick={() => setOpen(false)}
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </Link>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex justify-between items-center"
                          onClick={() => setOpen(false)}
                        >
                          <span className="text-muted-foreground">
                            {subItem.title}
                          </span>
                          <MoveRight className="w-4 h-4 stroke-1" />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )} */}
        </div>
      </div>
    </header>
  );
};

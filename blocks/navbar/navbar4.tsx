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
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const Navbar4 = () => {
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

  return (
    <header className="w-full z-40 sticky top-0 left-0 bg-background border-b-2 border-black">
      <div className="container relative mx-auto min-h-20 flex flex-row lg:grid lg:grid-cols-2 items-center">
        <div className="flex lg:justify-start">
          <p className="font-semibold">Logo</p>
        </div>
        <div className="flex justify-end w-full">
          <Button className="rounded-none">Button</Button>
          <Button variant="outline" className="rounded-none">
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  );
};

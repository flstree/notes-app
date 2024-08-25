"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Box,
  Facebook,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  Menu,
  TwitterIcon,
  X,
  YoutubeIcon,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const Navbar16 = () => {
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
    <header className="w-full z-40 sticky top-0 left-0 bg-background">
      <div className="relative mx-10 min-h-20 flex flex-col gap-4 lg:flex-row lg:items-center">
        {/* Logo Section */}
        <div className="flex justify-center lg:justify-start items-center gap-4">
          <div className="flex pl-4 lg:pl-0">
            <p className="font-semibold">Logo</p>
          </div>
        </div>

        {/* Button Section */}
        <div className="hidden lg:flex justify-center lg:justify-end w-full gap-2">
          <Button className="rounded-none">Button</Button>
          <Button
            variant="outline"
            className="rounded-none"
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute flex flex-col w-full right-0 bg-background px-10 gap-8">
          <div className="grid grid-cols-1 gap-4 content-between">
            <div className="flex flex-col gap-1 w-full items-center">
              <div className="flex flex-row gap-6 w-full items-start pb-8">
                <div className="flex flex-col gap-1">
                  <p>Link one</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start pb-8">
                <div className="flex flex-col gap-1">
                  <p>Link two</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start pb-8">
                <div className="flex flex-col gap-1">
                  <p>Link three</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start pb-8">
                <div className="flex flex-col gap-1">
                  <p>Link four</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start pb-8">
                <div className="flex flex-col gap-1">
                  <p>Link five</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between pb-4">
              <div className="flex gap-2">
                <p>Contact</p>
              </div>
              <div className="flex gap-2">
                <FacebookIcon className="mt-2 text-primary" />
                <InstagramIcon className="mt-2 text-primary" />
                <TwitterIcon className="mt-2 text-primary" />
                <LinkedinIcon className="mt-2 text-primary" />
                <YoutubeIcon className="mt-2 text-primary" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

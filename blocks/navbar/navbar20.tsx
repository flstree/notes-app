"use client";

import { Button } from "@/components/ui/button";
import {
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

export const Navbar20 = () => {
  const navigationItems = [
    {
      title: "Line One",
      href: "/",
    },
    {
      title: "Link Two",
      href: "/",
    },
    {
      title: "Link Three",
      href: "/",
    },
    {
      title: "Link Four",
      href: "/",
    },
    {
      title: "Link Five",
      href: "/",
    },
    {
      title: "Link Six",
      href: "/",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="relative w-full z-40 sticky top-0 left-0 bg-background">
      <div className="mx-10 min-h-20 flex flex-col gap-4 lg:flex-row lg:items-center">
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
        <div className="absolute flex flex-col w-full h-svh right-0 bg-background px-10 gap-8">
          <div className="flex flex-col h-full">
            <div className="flex flex-col gap-1 w-full h-3/4">
              <div className="flex flex-row gap-6 w-full justify-center pb-8">
                <div className="flex flex-col gap-1 capitalize text-2xl">
                  <Link href={"/"}>Link One</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

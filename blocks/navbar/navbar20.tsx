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
import { Input } from "@/components/ui/input";

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
            <div className="flex flex-row justify-between gap-1 w-full h-3/4">
              <div className="flex flex-col place-content-center grow-0">
                <div className="flex flex-row gap-6 w-full justify-start pb-8">
                  <div className="flex flex-col gap-1 capitalize text-2xl">
                    <Link href={"/"}>Link One</Link>
                  </div>
                </div>
                <div className="flex flex-row gap-6 w-full justify-start pb-8">
                  <div className="flex flex-col gap-1 capitalize text-2xl">
                    <Link href={"/"}>Link Three</Link>
                  </div>
                </div>
                <div className="flex flex-row gap-6 w-full justify-start pb-8">
                  <div className="flex flex-col gap-1 capitalize text-2xl">
                    <Link href={"/"}>Link Five</Link>
                  </div>
                </div>
                <div className="flex flex-row gap-6 w-full justify-start pb-8">
                  <div className="flex flex-col gap-1 capitalize text-2xl">
                    <Link href={"/"}>Link Seven</Link>
                  </div>
                </div>
                <div className="flex flex-row gap-6 w-full justify-start pb-8">
                  <div className="flex flex-col gap-1 capitalize text-2xl">
                    <Link href={"/"}>Link Nine</Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col place-content-center grow-0">
                <div className="flex flex-row gap-6 w-full justify-start pb-8">
                  <div className="flex flex-col gap-1 capitalize text-2xl">
                    <Link href={"/"}>Link Two</Link>
                  </div>
                </div>
                <div className="flex flex-row gap-6 w-full justify-start pb-8">
                  <div className="flex flex-col gap-1 capitalize text-2xl">
                    <Link href={"/"}>Link Four</Link>
                  </div>
                </div>
                <div className="flex flex-row gap-6 w-full justify-start pb-8">
                  <div className="flex flex-col gap-1 capitalize text-2xl">
                    <Link href={"/"}>Link Six</Link>
                  </div>
                </div>
                <div className="flex flex-row gap-6 w-full justify-start pb-8">
                  <div className="flex flex-col gap-1 capitalize text-2xl">
                    <Link href={"/"}>Link Eight</Link>
                  </div>
                </div>
                <div className="flex flex-row gap-6 w-full justify-start pb-8">
                  <div className="flex flex-col gap-1 capitalize text-2xl">
                    <Link href={"/"}>Link Ten</Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col place-content-center grow-1">
                <p>Subscribe</p>
                <p>
                  Join our newsletter to stay up to date on features and
                  releases
                </p>
                <div className="flex justify-start gap-4">
                  <Input className="rounded-none hover:outline-0 hover:border-0" />
                  <Button className="rounded-none">Subscribe</Button>
                </div>
                <p>
                  By subscribing you agree to our Privacy Policy and provide
                  consent to receive updates from out company
                </p>
                <div className="flex flex-col pb-4">
                  <div className="flex flex-col gap-2">
                    <p>Get in touch</p>
                    <p>1800 123 4567</p>
                    <p>info@firestrap.io</p>
                    <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
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
          </div>
        </div>
      )}
    </header>
  );
};

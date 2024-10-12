"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronRight,
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

export const Navbar21 = () => {
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
        <div className="absolute top-20 left-0 flex flex-col w-full h-svh bg-background px-10 gap-8">
          <div className="flex flex-col h-full">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-1 w-full h-3/4 overflow-auto">
              <div className="flex flex-col place-content-center">
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
              <div className="flex flex-col sm:flex place-content-center">
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
              <div className="flex flex-col  p-4 h-full w-1/4 bg-secondary">
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
                <div className="flex flex-col items-end pt-10 pb-4">
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

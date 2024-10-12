import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Footer6 = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Product",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Reports",
          href: "/reports",
        },
        {
          title: "Statistics",
          href: "/statistics",
        },
        {
          title: "Dashboards",
          href: "/dashboards",
        },
        {
          title: "Recordings",
          href: "/recordings",
        },
      ],
    },
    {
      title: "Company",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "About us",
          href: "/about",
        },
        {
          title: "Fundraising",
          href: "/fundraising",
        },
        {
          title: "Investors",
          href: "/investors",
        },
        {
          title: "Contact us",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-10 lg:py-20 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-2 items-between border-b py-10">
          <div className="flex flex-col items-start h-full w-full">
            <div className="flex gap-2 flex-col">
              <h2 className="text-lg md:text-xl tracking-tighter max-w-xl font-regular text-left">
                Join our newsletter
              </h2>
              <div className="flex gap-4">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end h-full">
            <div className="flex gap-2 flex-col">
              <div className="flex gap-4 py-4">
                <Input
                  className="rounded-none bg-primary"
                  type="text"
                  placeholder="Enter your email"
                />
                <Button className="rounded-none border">Subscribe</Button>
              </div>
              <p>
                By subscribing you agree with our{" "}
                <Link
                  className="underline underline-offset-2"
                  href={"/privacy-policy"}
                >
                  Privacy Policy
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-6 gap-2 items-between border-b py-20">
          <div className="flex flex-col items-start gap-3">
            <h2 className="pb-2">Column 1</h2>
            <p className="text-sm">
              <Link href="/">Link One</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Two</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Three</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Four</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Five</Link>
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h2 className="pb-2">Column 2</h2>
            <p className="text-sm">
              <Link href="/">Link Six</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Seven</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Eight</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Nine</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Ten</Link>
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h2 className="pb-2">Column 3</h2>
            <p className="text-sm">
              <Link href="/">Link Six</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Seven</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Eight</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Nine</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Ten</Link>
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h2 className="pb-2">Column 4</h2>
            <p className="text-sm">
              <Link href="/">Link Six</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Seven</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Eight</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Nine</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Ten</Link>
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h2 className="pb-2">Column 5</h2>
            <p className="text-sm">
              <Link href="/">Link Six</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Seven</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Eight</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Nine</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Ten</Link>
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h2 className="pb-2">Column 6</h2>
            <p className="text-sm">
              <Link href="/">Link Six</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Seven</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Eight</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Nine</Link>
            </p>
            <p className="text-sm">
              <Link href="/">Link Ten</Link>
            </p>
          </div>
        </div>
        <div className="flex justify-between py-8">
          <div className="flex gap-2">
            <Link className="text-xl" href="/">
              Logo
            </Link>
          </div>
          <div className="flex text-sm">
            <p>&copy; 2024 Firestrap. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

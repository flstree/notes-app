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

export const Footer8 = () => {
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
              <h2 className="text-3xl md:text-2xl tracking-tighter max-w-xl font-regular text-left">
                Logo
              </h2>
              <div className="flex gap-4">
                <Link href="/link-one">Link One</Link>
                <Link href="/link-one">Link Two</Link>
                <Link href="/link-one">Link Three</Link>
                <Link href="/link-one">Link Four</Link>
                <Link href="/link-one">Link Five</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end h-full">
            <div className="flex gap-2 flex-col">
              <h2 className="text-md tracking-tighter max-w-xl font-regular text-left">
                Subscribe
              </h2>
              <div className="flex justify-start gap-4 py-4">
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
        <div className="flex justify-between py-8">
          <div className="flex gap-2">
            <Link
              className="underline underline-offset-2"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="underline underline-offset-2"
              href="/terms-of-service"
            >
              Terms of Service
            </Link>
            <Link
              className="underline underline-offset-2"
              href="/cookies-settings"
            >
              Cookies Settings
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

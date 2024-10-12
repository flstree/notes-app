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

export const Footer9 = () => {
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
        <div className="grid lg:grid-cols-6 gap-2 items-start border py-10 px-10">
          <div className="col-span-3 flex gap-8 flex-col items-start h-full w-full">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-2xl tracking-tighter max-w-xl font-regular text-left">
                Logo
              </h2>
              <p className="text-sm">
                Join our newsletter to stay up to date on features and releases
              </p>
              <div className="flex justify-start gap-4 py-4">
                <Input className="rounded-none bg-primary" type="text" />
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
                and provide consent to receive updates from our company.
              </p>
            </div>
          </div>
          <div className="col-span-2 grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  {item.items && <p className="text-md">{item.title}</p>}
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-background/75 text-sm">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <p className="flex items-center">
              <FacebookIcon className="text-secondary text-xs mr-2" /> Facebook
            </p>
            <p className="flex items-center">
              <InstagramIcon className="text-secondary text-xs mr-2" />{" "}
              Instagram
            </p>
            <p className="flex items-center">
              <TwitterIcon className="text-secondary text-xs mr-2" /> Twitter
            </p>
            <p className="flex items-center">
              <LinkedinIcon className="text-secondary text-xs mr-2" /> Linkedin
            </p>
            <p className="flex items-center">
              <YoutubeIcon className="text-secondary text-xs mr-2" /> Youtube
            </p>
          </div>
        </div>
        <div className="flex justify-between py-8">
          <div className="flex gap-4 text-sm">
            <p>&copy; 2024 Firestrap. All rights reserved.</p>
          </div>
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
        </div>
      </div>
    </div>
  );
};

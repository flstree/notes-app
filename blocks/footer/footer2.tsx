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

export const Footer2 = () => {
  const navigationItems = [
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
        <div className="grid lg:grid-cols-6 gap-2 items-start border-b py-20 px-10">
          <div className="col-span-1 flex gap-8 flex-col items-start h-full w-1/6">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-2xl tracking-tighter max-w-xl font-regular text-left">
                Logo
              </h2>
            </div>
          </div>
          <div className="col-span-2 grid lg:grid-cols-4 gap-10 items-start">
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
          <div className="col-span-3 flex gap-8 flex-col items-start h-full">
            <div className="flex gap-2 flex-col">
              <h2 className="text-md tracking-tighter max-w-xl font-regular text-left">
                Subscribe
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
        </div>
        <div className="flex justify-between py-8">
          <div className="flex gap-4 text-sm">
            <p>&copy; 2024 Firestrap. All rights reserved.</p>
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
          <div className="flex gap-2">
            <FacebookIcon className="mt-2 text-secondary" />
            <InstagramIcon className="mt-2 text-secondary" />
            <TwitterIcon className="mt-2 text-secondary" />
            <LinkedinIcon className="mt-2 text-secondary" />
            <YoutubeIcon className="mt-2 text-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

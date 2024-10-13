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
    {
      title: "Follow us",
      description: "Social media links.",
      items: [
        {
          icon: <FacebookIcon className="text-secondary text-xs mr-2" />,
          title: "Facebook",
          href: "/",
        },
        {
          icon: <InstagramIcon className="text-secondary text-xs mr-2" />,
          title: "Instagram",
          href: "/",
        },
        {
          icon: <TwitterIcon className="text-secondary text-xs mr-2" />,
          title: "Twitter",
          href: "/",
        },
        {
          icon: <LinkedinIcon className="text-secondary text-xs mr-2" />,
          title: "Linkedin",
          href: "/",
        },
        {
          icon: <YoutubeIcon className="text-secondary text-xs mr-2" />,
          title: "Youtube",
          href: "/",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-10 lg:py-20 bg-foreground text-background">
      <div className="mx-auto px-10">
        <div className="grid lg:grid-cols-6 gap-10 items-start border px-4 md:px-10 pt-10 pb-40">
          <div className="col-span-3 flex gap-8 flex-col items-start h-full w-full">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-2xl tracking-tighter max-w-xl font-regular text-left">
                Logo
              </h2>
              <p className="text-sm">
                Join our newsletter to stay up to date on features and releases
              </p>
              <div className="flex flex-col md:flex-row justify-start gap-4 py-4">
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
          <div className="col-span-3 grid lg:grid-cols-3 gap-4 items-start">
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
                        {subItem.icon}
                        <span className="text-background/75 text-sm">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:justify-between gap-2 md:gap-0 py-8">
          <div className="flex gap-4">
            <p className="text-sm">
              &copy; 2024 Firestrap. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
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

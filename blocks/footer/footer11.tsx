import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";

export const Footer11 = () => {
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
        <div className="grid lg:grid-cols-2 gap-10 items-center border py-10 px-10">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-2xl tracking-tighter max-w-xl font-regular text-left">
                Logo
              </h2>
              <p className="text-sm max-w-lg flex flex-col leading-relaxed tracking-tight text-background/75 text-left">
                <strong>Address:</strong>
                <span>Level 1,12 Sample St, Syndey NSW 2000</span>
              </p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <p>
                  <strong>Contact:</strong>
                </p>
                <p className="underline underline-offset-2">1800 123 4567</p>
                <p className="underline underline-offset-4">info@relume.com</p>
              </div>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex gap-2">
                <FacebookIcon className="mt-2 text-secondary" />
                <InstagramIcon className="mt-2 text-secondary" />
                <TwitterIcon className="mt-2 text-secondary" />
                <LinkedinIcon className="mt-2 text-secondary" />
                <YoutubeIcon className="mt-2 text-secondary" />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                    >
                      <span className="text-xl">{item.title}</span>
                    </Link>
                  ) : (
                    <p className="text-xl">{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-background/75">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between py-8">
          <div>
            <p>&copy; 2024 Firestrap. All rights reserved.</p>
          </div>
          <div className="flex gap-3">
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

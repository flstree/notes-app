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

export const Footer7 = () => {
  return (
    <div className="w-full py-10 lg:pb-10 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-1 gap-2 items-between border-b py-20">
          <div className="flex flex-col items-center h-full w-full">
            <div className="flex gap-2 flex-col items-center">
              <h2 className="text-3xl md:text-2xl tracking-tighter max-w-xl font-regular text-left pb-4">
                Logo
              </h2>
              <div className="flex flex-col md:flex-row flex-wrap gap-4">
                <Link href="/link-one">Link One</Link>
                <Link href="/link-one">Link Two</Link>
                <Link href="/link-one">Link Three</Link>
                <Link href="/link-one">Link Four</Link>
                <Link href="/link-one">Link Five</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-4 justify-between py-8">
          <div className="flex text-sm">
            <p>&copy; 2024 Firestrap. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2">
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

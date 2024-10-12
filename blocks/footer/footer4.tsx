import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
export const Footer4 = () => {
  return (
    <div className="w-full py-10 lg:pb-10 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-2 items-between border-b py-20">
          <div className="flex flex-col items-start h-full w-full">
            <div className="flex gap-2 flex-col items-center">
              <h2 className="text-3xl md:text-2xl tracking-tighter max-w-xl font-regular text-left pb-4">
                Logo
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Link href="/link-one">Link One</Link>
            <Link href="/link-one">Link Two</Link>
            <Link href="/link-one">Link Three</Link>
            <Link href="/link-one">Link Four</Link>
            <Link href="/link-one">Link Five</Link>
          </div>
          <div className="flex justify-end items-center gap-2">
            <FacebookIcon className="mt-2 text-secondary" />
            <InstagramIcon className="mt-2 text-secondary" />
            <TwitterIcon className="mt-2 text-secondary" />
            <LinkedinIcon className="mt-2 text-secondary" />
            <YoutubeIcon className="mt-2 text-secondary" />
          </div>
        </div>
        <div className="flex justify-center gap-2 py-8">
          <div className="flex text-sm">
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

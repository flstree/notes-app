import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export const Footer5 = () => {
  return (
    <div className="w-full py-10 lg:py-20 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-2 items-between py-5">
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
            <h2 className="text-3xl md:text-2xl tracking-tighter max-w-xl font-regular text-left">
              Logo
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h2 className="pb-2">Column 1</h2>
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

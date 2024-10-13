import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export const Hero10 = () => (
  <div className="min-h-screen flex flex-col">
    <div
      className="w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/604684/pexels-photo-604684.jpeg')",
        height: "70vh",
      }}
    ></div>
    <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 px-10 py-10">
      <div className="flex gap-4">
        <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
          This is the start of something!
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl leading-relaxed tracking-tight text-muted-foreground text-left">
          Managing a small business today is already tough. Avoid further
          complications by ditching outdated, tedious trade methods. Our goal is
          to streamline SMB trade, making it easier and faster than ever.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              className="rounded-none border border-primary"
              type="text"
              placeholder="Enter your email"
            />
            <Button className="rounded-none">Sign up</Button>
          </div>
          <div className="flex">
            <p className="text-muted-foreground">
              By clicking sign up you are confirming that you agree with our{" "}
              <Link href="/">Terms and conditions</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

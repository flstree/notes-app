"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header2 = () => (
  <div className="container mx-auto">
    <div className="flex gap-8 py-10 md:py-20 items-start justify-center flex-col">
      <div>
        <Button variant="outline" className="gap-4 rounded-none border-0">
          Tagline
        </Button>
      </div>
      <div className="flex gap-4 flex-col">
        <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter font-regular">
          Short heading here
        </h1>
        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl">
          Managing a small business today is already tough. Avoid further
          complications by ditching outdated, tedious trade methods. Our goal is
          to streamline SMB trade, making it easier and faster than ever.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-max">
        <Input
          className="rounded-none border border-primary"
          type="text"
          placeholder="Enter your email"
        />
        <Button className="rounded-none">Sign up</Button>
      </div>
    </div>
  </div>
);

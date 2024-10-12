import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero5 = () => (
  <div className="w-full h-svh">
    <div className="container mx-auto h-full">
      <div className="flex gap-8 py-20 lg:py-40 flex-col items-start h-full justify-center">
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-start font-regular">
            This is the start of something new
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-start">
            Managing a small business today is already tough. Avoid further
            complications by ditching outdated, tedious trade methods. Our goal
            is to streamline SMB trade, making it easier and faster than ever.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Button size="lg" className="gap-4 rounded-none ">
            Button
          </Button>
          <Button
            size="lg"
            className="gap-4 rounded-none border border-primary"
            variant="outline"
          >
            Button
          </Button>
        </div>
      </div>
    </div>
  </div>
);

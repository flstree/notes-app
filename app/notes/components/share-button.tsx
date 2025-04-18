import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import {
Link,
Share,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function ShareButton({ note }){
    return <div className="ml-auto flex justify-end items-center bg-green-500">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" disabled={!note}>
          <Share className="h-4 w-4" />
          <span className="">Share</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>Share</TooltipContent>
    </Tooltip>
    <Separator orientation="vertical" className="h-6 text-black" />
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" disabled={!note}>
          <Link className="h-4 w-4" />
          <span className="sr-only">CopyLink</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>Copy Link</TooltipContent>
    </Tooltip>
  </div>
}
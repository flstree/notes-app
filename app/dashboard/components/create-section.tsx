import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CreateSection({ }) {
  return (
    <Sheet>
      <SheetTrigger>Create Section</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create a Section</SheetTitle>
          <SheetDescription>
            Fill the form below to create a new section
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4 w-full">
            <Label htmlFor="title" className="text-left">
              Title
            </Label>
            <Input name="title" className="w-full col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="icon" className="text-left">
              Icon
            </Label>
            <Input name="icon" className="w-full col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Scope
            </Label>
            <Input name="scope" className="w-full col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="w-full">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

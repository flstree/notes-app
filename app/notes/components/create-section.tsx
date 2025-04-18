"use client";

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
import { useState } from "react";
import { makeRequest } from "@/lib/api";
import { useRouter } from "next/navigation";
import { ObjectTypes } from "@/lib/constants";

interface CreateSectionProps {
  onSave: () => void;
}

export function CreateSection({ onSave }: CreateSectionProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    icon: "",
    scope: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const createSectionFormData = {
        type: ObjectTypes.Section,
        properties: {
          ...formData,
        },
      };

      const { data: section } = await makeRequest(createSectionFormData);

      const createAccessPolicyFormData = {
        type: ObjectTypes.AccessPolicy,
        parentId: section.id,
        properties: {
          scope: "public",
          members: [],
        },
      };

      await makeRequest(createAccessPolicyFormData);

      router.refresh();
      // Reset form after successful submission
      setFormData({ title: "", icon: "", scope: "" });

      onSave();

      // Close the modal (if needed)
      document.getElementById("close-sheet")?.click();
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger
        className="bg-inherit text-black dark:text-white hover:bg-[#fb8500] hover:text-white rounded-full p-4"
        asChild
      >
        <Button>+</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create a Section</SheetTitle>
          <SheetDescription>
            Fill the form below to create a new section
          </SheetDescription>
        </SheetHeader>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4 w-full">
            <Label htmlFor="title" className="text-left">
              Title
            </Label>
            <Input
              name="title"
              className="w-full col-span-3"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="icon" className="text-left">
              Icon
            </Label>
            <Input
              name="icon"
              className="w-full col-span-3"
              value={formData.icon}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Scope
            </Label>
            <Input
              name="scope"
              className="w-full col-span-3"
              value={formData.scope}
              onChange={handleChange}
              required
            />
          </div>
        </form>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <SheetFooter>
          <SheetClose asChild>
            <Button
              id="close-sheet"
              type="submit"
              className="w-full"
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? "Saving..." : "Save changes"}
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

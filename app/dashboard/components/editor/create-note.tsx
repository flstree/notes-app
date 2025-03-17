import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { createNote } from "@/lib/api";

export function CreateNote({ section }) {
    const [formData, setFormData] = useState({
      subject: "",
      description: "",
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
        const data = {
            ...formData,
            sectionId: section,
            text: formData.description,
            labels: []
        }

        const response = await createNote(data);
  
        if (!response.ok) throw new Error("Failed to create note");
  
        // Reset form after successful submission
        setFormData({ subject: "", description: "" });
  
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
        <SheetTrigger asChild>
          <Button>Create Note</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Create Note</SheetTitle>
            <SheetDescription>
              Fill in the information below to create a note.
            </SheetDescription>
          </SheetHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4 w-full">
              <Label htmlFor="subject" className="text-left">
                Subject
              </Label>
              <Input
                name="subject"
                className="w-full col-span-3"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-left">
                Description
              </Label>
              <Input
                name="description"
                className="w-full col-span-3"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <SheetFooter>
              <SheetClose asChild>
                <Button
                  id="close-sheet"
                  type="submit"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save changes"}
                </Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    );
  }
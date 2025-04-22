"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useUserStore } from "@/lib/store/user";
import { useNotesStore } from "@/lib/store/notes";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const { setUser } = useUserStore();
  const { setEditorMode } = useNotesStore();

  useEffect(() => {
    if (session?.user) {
      setUser({
        email: session.user.email,
        name: session.user.name,
        image: session.user.image,
      });
      setEditorMode(true);
    } else {
      setUser(null);
      setEditorMode(false);
    }
  }, [session, setUser, setEditorMode]);

  return <>{children}</>;
}

"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function SignInButton() {
  const { data: session } = useSession();

  if (session && session?.user) {
    return (
      <div className="flex gap-2 items-center">
        <p className="text-sm text-foreground/60">{session.user.email}</p>
        <Button
          variant="outline"
          className=""
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <Button
      className=""
      onClick={() => signIn("google", { callbackUrl: "/notes" })}
    >
      Sign In with Google
    </Button>
  );
}

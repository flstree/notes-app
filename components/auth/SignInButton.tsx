"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/lib/store/user";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function SignInButton() {
  const { user, isAuthenticated } = useUserStore();

  if (isAuthenticated) {
    return (
      <div className="flex gap-2 items-center">
        <div className="flex items-center gap-2">
          <p>Hi, {user?.firstName}</p>
          <Avatar className="flex">
            <AvatarImage src={user?.image} />
            <AvatarFallback>{user?.shortName}</AvatarFallback>
          </Avatar>
        </div>
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

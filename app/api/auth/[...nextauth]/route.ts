import { authConfig } from "@/lib/auth";
import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    accessToken?: string; // Add accessToken to the Session interface
  }
  interface Profile {
    email_verified?: string;
  }
}

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };

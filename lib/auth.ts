import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import { fetchSingleRecord } from "./firebase";

export const USER_SCOPES = [
  "openid",
  "profile",
  "email"
];

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/google`,
          scope: USER_SCOPES.join(" "),
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider !== "google") {
        return false;
      }

      const emailVerified =
        profile.email_verified && profile.email.endsWith("@gmail.com");
      const email = profile.email;

      if (emailVerified && email) {
        // try {
        //   const user: any = await fetchSingleRecord("users", {
        //     key: "email",
        //     value: email,
        //   });

        //   if (user) {
        //     return true;
        //   }
        // } catch (error) {
        //   console.error("Error fetching user from Firebase:", error);
        // }
        return true;
      }

      return false;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as any;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/dashboard`;
    },
  },
  session: { strategy: "jwt" },
  pages: {
    signIn: "/",
    error: "/", // Redirect here on authentication failure
  },
};

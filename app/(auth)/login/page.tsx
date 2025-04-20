"use client";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <section>
      <h1>Login with Google</h1>
      <button onClick={() => signIn("google")}>Continue</button>
    </section>
  );
};

export default LoginPage;

'use client'
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Sign In</h1>
      <button onClick={() => signIn("github")} className="btn">
        Sign in with GitHub
      </button>
    </div>
  );
}
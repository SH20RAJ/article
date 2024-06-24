'use client'
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react";

export function Join1() {
  return (
    (<div className="mx-auto max-w-md space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Join Our Community</h1>
        <p className="text-muted-foreground">Sign up using your Google or GitHub account to get started.</p>
      </div>
      <div className="space-y-4">
        <Button
        onClick={() => signIn("google")}  
          variant="outline"
          className="w-full bg-[#4285F4] text-white hover:bg-[#357ae8]">
          <ChromeIcon className="mr-2 h-5 w-5" />
          Sign up with Google
        </Button>
        <Button
        onClick={() => signIn("github")}
          variant="outline"
          className="w-full bg-[#24292F] text-white hover:bg-[#1F2328]">
          <GitlabIcon className="mr-2 h-5 w-5" />
          Sign up with GitHub
        </Button>
      </div>
    </div>)
  );
}

function ChromeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>)
  );
}


function GitlabIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>)
  );
}

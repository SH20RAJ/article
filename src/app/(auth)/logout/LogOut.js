'use client'
import { signOut } from "next-auth/react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

export function LogOut() {
  return (
    (<div
      className="flex min-h-[100dvh] items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
          <LogOutIcon className="size-12 text-primary" />
          <div className="space-y-1 text-center">
            <h2 className="text-2xl font-bold" onLoad={()=>signOut()} onClick={()=>signOut()}>Logged Out</h2>
            <p className="text-muted-foreground">
              You have been successfully logged out. Thank you for visiting our website.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Link
            href="/"
            className="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
            onClick={()=>signOut()}
            >
            Return to Homepage
          </Link>
        </CardFooter>
      </Card>
    </div>)
  );
}

function LogOutIcon(props) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>)
  );
}

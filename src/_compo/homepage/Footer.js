import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-muted py-6 mt-8">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Medium. All rights reserved.
          </p>
          <nav className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Help
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}

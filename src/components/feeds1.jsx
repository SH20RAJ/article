/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/e63Yw1MX6pY
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Yeseva_One } from 'next/font/google'
import { Prata } from 'next/font/google'

yeseva_one({
  subsets: ['latin'],
  display: 'swap',
})

prata({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Feeds1() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header className=" border-b shadow-sm sticky top-0 z-10">
        <div
          className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link
            href="#"
            className="flex items-center gap-2 font-bold text-lg"
            prefetch={false}>
            <PenIcon className="w-6 h-6" />
            <span>Medium</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}>
              Home
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}>
              Latest
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}>
              Topics
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}>
              About
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="w-6 h-6" />
            </Button>
            <Button variant="secondary">
              <PlusIcon className="w-4 h-4 mr-2" />
              Write
            </Button>
          </div>
        </div>
      </header>
      <main
        className="flex-1 container mx-auto px-4 md:px-6 py-8 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8">
        <div className="space-y-8">
          <article className="flex gap-4">
            <img
              src="/placeholder.svg"
              width={200}
              height={150}
              alt="Blog post cover"
              className="rounded-md object-cover" />
            <div className="flex-1 space-y-2">
              <Link href="#" className="text-2xl font-bold hover:underline" prefetch={false}>
                The Future of Web Development: Trends and Predictions
              </Link>
              <div className="text-sm text-muted-foreground">
                <Link href="#" className="font-medium hover:underline" prefetch={false}>
                  John Doe
                </Link>
                <span> · </span>
                <time dateTime="2023-06-22">June 22, 2023</time>
              </div>
              <p className="text-muted-foreground line-clamp-3">
                In this article, we explore the latest trends and predictions shaping the future of web development.
                From the rise of serverless architectures to the increasing importance of accessibility and user
                experience, we dive into the key technologies and best practices that will define the next generation of
                web applications.
              </p>
            </div>
          </article>
          <article className="flex gap-4">
            <img
              src="/placeholder.svg"
              width={200}
              height={150}
              alt="Blog post cover"
              className="rounded-md object-cover" />
            <div className="flex-1 space-y-2">
              <Link href="#" className="text-2xl font-bold hover:underline" prefetch={false}>
                Mastering React Hooks: A Comprehensive Guide
              </Link>
              <div className="text-sm text-muted-foreground">
                <Link href="#" className="font-medium hover:underline" prefetch={false}>
                  Jane Smith
                </Link>
                <span> · </span>
                <time dateTime="2023-06-15">June 15, 2023</time>
              </div>
              <p className="text-muted-foreground line-clamp-3">Lorem ipsum</p>
            </div>
          </article>
          <article className="flex gap-4">
            <img
              src="/placeholder.svg"
              width={200}
              height={150}
              alt="Blog post cover"
              className="rounded-md object-cover" />
            <div className="flex-1 space-y-2">
              <Link href="#" className="text-2xl font-bold hover:underline" prefetch={false}>
                Unleashing the Power of Serverless Computing
              </Link>
              <div className="text-sm text-muted-foreground">
                <Link href="#" className="font-medium hover:underline" prefetch={false}>
                  Sarah Lee
                </Link>
                <span> · </span>
                <time dateTime="2023-06-08">June 8, 2023</time>
              </div>
              <p className="text-muted-foreground line-clamp-3">
                Serverless computing is transforming the way we build and deploy applications. In this article, we
                explore the benefits of serverless, from cost-effectiveness and scalability to improved developer
                productivity and reduced operational overhead. Learn how to leverage serverless technologies to build
                modern, event-driven applications that can adapt to changing user demands.
              </p>
            </div>
          </article>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-bold mb-4">Popular Tags</h2>
            <div className="flex flex-wrap gap-2">
              <Link
                href="#"
                className="inline-block bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted/50"
                prefetch={false}>
                Web Development
              </Link>
              <Link
                href="#"
                className="inline-block bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted/50"
                prefetch={false}>
                React
              </Link>
              <Link
                href="#"
                className="inline-block bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted/50"
                prefetch={false}>
                JavaScript
              </Link>
              <Link
                href="#"
                className="inline-block bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted/50"
                prefetch={false}>
                Serverless
              </Link>
              <Link
                href="#"
                className="inline-block bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted/50"
                prefetch={false}>
                Accessibility
              </Link>
              <Link
                href="#"
                className="inline-block bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted/50"
                prefetch={false}>
                User Experience
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Recommended Articles</h2>
            <div className="space-y-4">
              <Link href="#" className="flex gap-4 hover:underline" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={80}
                  height={60}
                  alt="Recommended article cover"
                  className="rounded-md object-cover" />
                <div className="flex-1 space-y-1">
                  <h3 className="text-base font-medium">Exploring the Latest CSS Features</h3>
                  <p className="text-sm text-muted-foreground">
                    Discover the newest CSS capabilities and how they can enhance your web designs.
                  </p>
                </div>
              </Link>
              <Link href="#" className="flex gap-4 hover:underline" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={80}
                  height={60}
                  alt="Recommended article cover"
                  className="rounded-md object-cover" />
                <div className="flex-1 space-y-1">
                  <h3 className="text-base font-medium">Building Accessible Web Applications</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn best practices for creating inclusive and user-friendly web experiences.
                  </p>
                </div>
              </Link>
              <Link href="#" className="flex gap-4 hover:underline" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={80}
                  height={60}
                  alt="Recommended article cover"
                  className="rounded-md object-cover" />
                <div className="flex-1 space-y-1">
                  <h3 className="text-base font-medium">Optimizing Web Performance: A Deep Dive</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore techniques and tools to improve the speed and responsiveness of your web applications.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-muted py-6 mt-8">
        <div
          className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; 2024 Medium. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
              prefetch={false}>
              About
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
              prefetch={false}>
              Help
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
              prefetch={false}>
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
              prefetch={false}>
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>)
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function PenIcon(props) {
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>)
  );
}


function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>)
  );
}

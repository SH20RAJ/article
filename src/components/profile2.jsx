/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/LdsoRQ96whM
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
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

export function Profile2() {
  return (
    (<div className="w-full max-w-6xl mx-auto">
      <header className="bg-[#f5f5f5] py-12 px-6 md:px-12 rounded-t-lg">
        <div className="flex items-center space-x-6">
          <Avatar className="w-20 h-20 md:w-24 md:h-24">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-muted-foreground">Software Engineer</p>
            <p className="text-sm text-muted-foreground">
              I'm a passionate software engineer with a love for building innovative products.
            </p>
          </div>
        </div>
      </header>
      <nav className="bg-background border-b">
        <div className="container px-4 md:px-6 py-2 flex space-x-4 overflow-x-auto">
          <Link
            href="#"
            className="inline-flex items-center px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
            prefetch={false}>
            Posts
          </Link>
          <Link
            href="#"
            className="inline-flex items-center px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
            prefetch={false}>
            About
          </Link>
          <Link
            href="#"
            className="inline-flex items-center px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
            prefetch={false}>
            Photos
          </Link>
          <Link
            href="#"
            className="inline-flex items-center px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
            prefetch={false}>
            Projects
          </Link>
        </div>
      </nav>
      <div
        className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 py-8 px-4 md:px-6">
        <div>
          <div className="grid gap-6">
            <article className="flex space-x-4">
              <img
                src="/placeholder.svg"
                alt="Article thumbnail"
                width={150}
                height={100}
                className="rounded-lg object-cover" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">Building a Scalable Web Application with Next.js</h2>
                <p className="text-muted-foreground line-clamp-2">
                  In this article, we'll explore how to build a scalable web application using Next.js, a popular React
                  framework. We'll cover topics like server-side rendering, static site generation, and optimizing
                  performance.
                </p>
                <div className="mt-2 text-sm text-muted-foreground">Published on May 15, 2023</div>
              </div>
            </article>
            <article className="flex space-x-4">
              <img
                src="/placeholder.svg"
                alt="Article thumbnail"
                width={150}
                height={100}
                className="rounded-lg object-cover" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">Mastering TypeScript: A Comprehensive Guide</h2>
                <p className="text-muted-foreground line-clamp-2">
                  TypeScript is a powerful superset of JavaScript that adds static typing to the language. In this
                  comprehensive guide, we'll explore the benefits of TypeScript and how to effectively use it in your
                  projects.
                </p>
                <div className="mt-2 text-sm text-muted-foreground">Published on April 20, 2023</div>
              </div>
            </article>
            <article className="flex space-x-4">
              <img
                src="/placeholder.svg"
                alt="Article thumbnail"
                width={150}
                height={100}
                className="rounded-lg object-cover" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">Optimizing React Performance: Techniques and Best Practices</h2>
                <p className="text-muted-foreground line-clamp-2">
                  React is a powerful library for building user interfaces, but it's important to optimize its
                  performance to ensure a smooth user experience. In this article, we'll explore various techniques and
                  best practices for optimizing React performance.
                </p>
                <div className="mt-2 text-sm text-muted-foreground">Published on March 10, 2023</div>
              </div>
            </article>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Social Links</h3>
            <div className="flex space-x-4 mt-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}>
                <TwitterIcon className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}>
                <LinkedinIcon className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}>
                <GitlabIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Popular Tags</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <Link
                href="#"
                className="bg-muted px-2 py-1 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                prefetch={false}>
                React
              </Link>
              <Link
                href="#"
                className="bg-muted px-2 py-1 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                prefetch={false}>
                JavaScript
              </Link>
              <Link
                href="#"
                className="bg-muted px-2 py-1 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                prefetch={false}>
                TypeScript
              </Link>
              <Link
                href="#"
                className="bg-muted px-2 py-1 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                prefetch={false}>
                Next.js
              </Link>
              <Link
                href="#"
                className="bg-muted px-2 py-1 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                prefetch={false}>
                Performance
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Followers</h3>
            <div className="flex space-x-4 mt-2">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>EM</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>SK</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Following</h3>
            <div className="flex space-x-4 mt-2">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>EM</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>SK</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </div>)
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


function LinkedinIcon(props) {
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
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>)
  );
}


function TwitterIcon(props) {
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
        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>)
  );
}
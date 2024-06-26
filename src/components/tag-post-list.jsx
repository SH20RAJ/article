/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/99fhO4jsk3r
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Crimson_Text } from 'next/font/google'
import { Yeseva_One } from 'next/font/google'

crimson_text({
  subsets: ['latin'],
  display: 'swap',
})

yeseva_one({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"

export function TagPostList() {
  return (
    (<div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Tag: Productivity</h1>
        <div className="grid gap-8">
          <article className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
            <img
              src="/placeholder.svg"
              alt="Blog Post Image"
              width={200}
              height={150}
              className="rounded-lg object-cover" />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">
                <Link href="#" prefetch={false}>
                  10 Productivity Hacks to Supercharge Your Day
                </Link>
              </h2>
              <p className="text-muted-foreground line-clamp-3">
                Discover 10 simple yet effective productivity hacks that will help you get more done in less time. From
                time-blocking to the Pomodoro technique, these tips will transform your workday.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Read More
              </Link>
            </div>
          </article>
          <article className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
            <img
              src="/placeholder.svg"
              alt="Blog Post Image"
              width={200}
              height={150}
              className="rounded-lg object-cover" />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">
                <Link href="#" prefetch={false}>
                  Mastering the Art of Task Management
                </Link>
              </h2>
              <p className="text-muted-foreground line-clamp-3">
                Effective task management is the key to staying organized and productive. In this post, we'll explore
                proven strategies and tools to help you conquer your to-do list and achieve your goals.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Read More
              </Link>
            </div>
          </article>
          <article className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
            <img
              src="/placeholder.svg"
              alt="Blog Post Image"
              width={200}
              height={150}
              className="rounded-lg object-cover" />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">
                <Link href="#" prefetch={false}>
                  The Science of Effective Meetings
                </Link>
              </h2>
              <p className="text-muted-foreground line-clamp-3">
                Meetings can be a necessary part of work, but they can also be a major time sink. In this article, we'll
                explore the science behind running effective meetings that actually drive results.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Read More
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>)
  );
}

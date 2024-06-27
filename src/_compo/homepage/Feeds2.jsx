/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/MdAK9SywdWc
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Judson } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

judson({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import MainSidebar from "./MainSidebar"
import { getLatestPosts, getRandomPosts } from "@/app/(main)/p/[...id]/funcs/actions"
import { getDate } from "@/lib/funs"
import { PostCard4 } from "../postcards/PostCard4"

export async function Feeds2() {
  let posts = await getLatestPosts()
  return (
    (<div className="flex flex-col min-h-screen">
      <main
        className="flex-1 container mx-auto grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 px-4 md:px-6 py-8">
        <div className="space-y-8">
          {
            posts.map((post,i) => (
              <PostCard4 key={post.id} post={post} />
            ))

          }
          
        </div>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2">
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-between rounded-md bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50"
                    prefetch={false}>
                    <span>JavaScript</span>
                    <span className="text-muted-foreground">123</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-between rounded-md bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50"
                    prefetch={false}>
                    <span>React</span>
                    <span className="text-muted-foreground">89</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-between rounded-md bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50"
                    prefetch={false}>
                    <span>Node.js</span>
                    <span className="text-muted-foreground">67</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-between rounded-md bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50"
                    prefetch={false}>
                    <span>CSS</span>
                    <span className="text-muted-foreground">54</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-between rounded-md bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50"
                    prefetch={false}>
                    <span>Python</span>
                    <span className="text-muted-foreground">41</span>
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Popular Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}>
                  <TagIcon className="h-4 w-4" />
                  <span>web-development</span>
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}>
                  <TagIcon className="h-4 w-4" />
                  <span>javascript</span>
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}>
                  <TagIcon className="h-4 w-4" />
                  <span>react</span>
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}>
                  <TagIcon className="h-4 w-4" />
                  <span>node.js</span>
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}>
                  <TagIcon className="h-4 w-4" />
                  <span>css</span>
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}>
                  <TagIcon className="h-4 w-4" />
                  <span>python</span>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Search</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="flex gap-2">
                <Input type="text" placeholder="Search articles..." className="flex-1" />
                <Button type="submit">
                  <SearchIcon className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
          <MainSidebar/>

        </div>
      </main>
      
    </div>)
  );
}





function DiscIcon(props) {
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
      <circle cx="12" cy="12" r="2" />
    </svg>)
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


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function TagIcon(props) {
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
        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>)
  );
}

import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card";
  import { Input } from "@/components/ui/input";
  import MainSidebar from "./MainSidebar";
import Link from "next/link";
import { SearchIcon, TagIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
  

export default function Sidebar() {
  return (
    <>
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
                    prefetch={false}
                  >
                    <span>JavaScript</span>
                    <span className="text-muted-foreground">123</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-between rounded-md bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50"
                    prefetch={false}
                  >
                    <span>React</span>
                    <span className="text-muted-foreground">89</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-between rounded-md bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50"
                    prefetch={false}
                  >
                    <span>Node.js</span>
                    <span className="text-muted-foreground">67</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-between rounded-md bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50"
                    prefetch={false}
                  >
                    <span>CSS</span>
                    <span className="text-muted-foreground">54</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-between rounded-md bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50"
                    prefetch={false}
                  >
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
                  prefetch={false}
                >
                  <TagIcon className="h-4 w-4" />
                  <span>web-development</span>
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}
                >
                  <TagIcon className="h-4 w-4" />
                  <span>javascript</span>
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}
                >
                  <TagIcon className="h-4 w-4" />
                  <span>react</span>
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}
                >
                  <TagIcon className="h-4 w-4" />
                  <span>node.js</span>
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}
                >
                  <TagIcon className="h-4 w-4" />
                  <span>css</span>
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}
                >
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
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="flex-1"
                />
                <Button type="submit">
                  <SearchIcon className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
          <MainSidebar />
        </div>
    </>
  )
}

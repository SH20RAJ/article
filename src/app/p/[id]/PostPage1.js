import { getArticleWithId } from "./funcs/getArticleWithId"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Footer from "@/_compo/homepage/Footer"
import Trending from "@/app/_compo/Trending"
import { TagPostList } from "@/components/tag-post-list"
import UserCard from "@/_compo/p/UserCard"
var showdown  = require('showdown')
import "@/app/showdown.css"



export async function PostPage1({id}) {
  let article = await getArticleWithId(id);
   let  converter = new showdown.Converter();

  return (
    (<div className="flex flex-col min-h-screen">
      <main
        className="flex-1 container w-full min-w-full grid grid-cols-1 md:grid-cols-[1fr_3fr_1.5fr] gap-4 m-0 p-4">
        <div className="space-y-8 hidden md:block">
          <Card>
            <CardHeader>
              <CardTitle>Suggested Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Mastering React Hooks: A Comprehensive Guide</div>
                    <div className="text-sm text-muted-foreground">by Acme Inc</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Optimizing Website Performance: A Step-by-Step Guide</div>
                    <div className="text-sm text-muted-foreground">by Acme Inc</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Building a Scalable and Secure Web Application</div>
                    <div className="text-sm text-muted-foreground">by Acme Inc</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Suggested Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Jared Palmer</div>
                    <div className="text-sm text-muted-foreground">@jaredpalmer</div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Olivia Davis</div>
                    <div className="text-sm text-muted-foreground">@oliviadavis</div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Alex Chen</div>
                    <div className="text-sm text-muted-foreground">@alexchen</div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Email Newsletter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Subscribe to our weekly newsletter to stay up-to-date with the latest articles, tutorials, and news
                  from the dev.to community.
                </p>
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="flex-1" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Acme Inc</div>
                  <div className="text-sm text-muted-foreground">Published on May 1, 2023</div>
                </div>
              </div>
              <div>
                <h1 className=" 
                text-4xl font-bold m-4">{article.title}</h1>
                <hr />
              </div>
            </CardHeader>
            <CardContent>
            {
              <div id="article" className="showdowncontainer" dangerouslySetInnerHTML={{__html: converter.makeHtml(article.content)}}></div>
            }
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <TagIcon className="h-4 w-4" />
                  <Link href="#" className="hover:underline" prefetch={false}>
                    web-development
                  </Link>
                  <Link href="#" className="hover:underline" prefetch={false}>
                    architecture
                  </Link>
                  <Link href="#" className="hover:underline" prefetch={false}>
                    scalability
                  </Link>
                </div>
                <div className="flex-1" />
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Read More
                </Link>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Suggested Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Mastering React Hooks: A Comprehensive Guide</div>
                    <div className="text-sm text-muted-foreground">by Acme Inc</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Optimizing Website Performance: A Step-by-Step Guide</div>
                    <div className="text-sm text-muted-foreground">by Acme Inc</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Building a Scalable and Secure Web Application</div>
                    <div className="text-sm text-muted-foreground">by Acme Inc</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Email Newsletter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Subscribe to our weekly newsletter to stay up-to-date with the latest articles, tutorials, and news
                  from the dev.to community.
                </p>
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="flex-1" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </CardContent>
          </Card>
          <div className="p-4 space-y-4">
            {
              Array(4).fill().map((_, i) => <div key={i}  className="p-4 space-y-4 border shadow-xl rounded-lg"><PostCard post={_}/></div>)
            }
           
          </div>
        </div>
        
        <div className="space-y-8">
          <UserCard/>
          <Card>
            <CardHeader>
              <CardTitle>Suggested Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}>
                  <TagIcon className="h-4 w-4" />
                  web-development
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}>
                  <TagIcon className="h-4 w-4" />
                  architecture
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}>
                  <TagIcon className="h-4 w-4" />
                  scalability
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}>
                  <TagIcon className="h-4 w-4" />
                  react
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}>
                  <TagIcon className="h-4 w-4" />
                  performance
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Suggested Communities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">React Developers</div>
                    <div className="text-sm text-muted-foreground">10,000 members</div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Web Performance</div>
                    <div className="text-sm text-muted-foreground">5,000 members</div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Scalable Apps</div>
                    <div className="text-sm text-muted-foreground">3,000 members</div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>)
  );
}



export const PostCard = ({post}) => {
  return <article className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
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

// Code Generated with love by Shaswat Raj
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { PostCard4 } from "@/_compo/postcards/PostCard4"

export function Profile1({user, posts}) {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="relative">
        <div className="h-48 bg-[url('/placeholder.svg')] bg-cover bg-center" />
        <div
          className="absolute inset-x-0 bottom-0 flex items-end justify-center -translate-y-1/2">
          <Avatar className="h-32 w-32 border-4 border-background">
            <AvatarImage src={user?.image || "/placeholder-user.jpg"} />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-muted-foreground">{user.bio || "Software Engineer | Self Employed"}</p>
          <p className="max-w-md text-center text-muted-foreground">
            {user?.bio || ""} 
            <p>@{user.username}</p>
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline">Follow</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoveHorizontalIcon className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <FilePenIcon className="h-4 w-4 mr-2" />
                  Edit Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <UserXIcon className="h-4 w-4 mr-2" />
                  Unfollow
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Tabs defaultValue="posts" className="mt-12">
          <TabsList className="border-b">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    alt="Article thumbnail"
                    width={400}
                    height={225}
                    className="rounded-t-lg object-cover aspect-video" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <h3 className="text-lg font-semibold">Building a Scalable Web App with Next.js</h3>
                    <p className="text-muted-foreground">
                      Learn how to build a high-performance web application with Next.js.
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground">Published on May 15, 2023</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    alt="Article thumbnail"
                    width={400}
                    height={225}
                    className="rounded-t-lg object-cover aspect-video" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <h3 className="text-lg font-semibold">Mastering Responsive Design with CSS</h3>
                    <p className="text-muted-foreground">
                      Discover techniques to create responsive and mobile-friendly websites.
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground">Published on April 20, 2023</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    alt="Article thumbnail"
                    width={400}
                    height={225}
                    className="rounded-t-lg object-cover aspect-video" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <h3 className="text-lg font-semibold">Optimizing React Performance with Memoization</h3>
                    <p className="text-muted-foreground">
                      Learn how to use memoization techniques to improve the performance of your React applications.
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground">Published on March 10, 2023</div>
                </CardContent>
              </Card>
            </div> */}
            {posts.map((post) => (
                <PostCard4 key={post.id} post={post} />
            ))}
          </TabsContent>
          <TabsContent value="about">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold">About</h2>
                <p className="text-muted-foreground">
                  I'm a software engineer at Vercel, where I work on the Next.js framework. In my free time, I enjoy
                  hiking and photography.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Skills</h2>
                <ul className="space-y-2">
                  <li>
                    <div className="flex items-center justify-between">
                      <span>React</span>
                      <span className="text-muted-foreground">90%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[90%] rounded-full bg-primary" />
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between">
                      <span>Next.js</span>
                      <span className="text-muted-foreground">85%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[85%] rounded-full bg-primary" />
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between">
                      <span>TypeScript</span>
                      <span className="text-muted-foreground">80%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[80%] rounded-full bg-primary" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="friends">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <h3 className="text-lg font-semibold">Jared Palmer</h3>
                    <p className="text-muted-foreground">Software Engineer</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                    <Button variant="ghost" size="sm">
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <h3 className="text-lg font-semibold">Amelia Wattson</h3>
                    <p className="text-muted-foreground">Product Designer</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                    <Button variant="ghost" size="sm">
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <h3 className="text-lg font-semibold">John Doe</h3>
                    <p className="text-muted-foreground">UI/UX Designer</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                    <Button variant="ghost" size="sm">
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      {/* <aside className="bg-muted p-6 md:p-8">
        <div className="space-y-6">
          <div className="flex flex-col items-center space-y-2">
            <FacebookIcon className="h-6 w-6" />
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Facebook
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <TwitterIcon className="h-6 w-6" />
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Twitter
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <LinkedinIcon className="h-6 w-6" />
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              LinkedIn
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <InstagramIcon className="h-6 w-6" />
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Instagram
            </Link>
          </div>
        </div>
      </aside> */}
    </div>)
  );
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>)
  );
}


function FilePenIcon(props) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>)
  );
}


function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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


function MoveHorizontalIcon(props) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
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


function UserXIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="17" x2="22" y1="8" y2="13" />
      <line x1="22" x2="17" y1="8" y2="13" />
    </svg>)
  );
}

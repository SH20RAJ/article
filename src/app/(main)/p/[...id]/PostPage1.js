import { getArticleWithId } from "./funcs/getArticleWithId";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import UserCard from "@/_compo/p/UserCard";
var showdown = require("showdown");
import "@/app/showdown.css";
import SuggestedArticles from "./SuggestedArticles";

import { getRelativeTime, getDate, convertToCloudinaryUrl } from "@/lib/funs";
import SuggestedArticles2 from "./SuggestedArticles2";
import { Edit, Satellite } from "lucide-react";
import getUserSession from "@/app/(auth)/(funcs)/getUserSession";
import Comments from "@/_compo/p/Comments";

export async function PostPage1({ id }) {
  let article = await getArticleWithId(id);
  let converter = new showdown.Converter();
  let session = await getUserSession();
  // console.log(session.id,article.author.id );

  return (
    <div className="flex flex-col min-h-screen max-w-full">
      <main className="flex-1 container w-full min-w-full max-w-full overflow-x-hidden md:flex gap-2 m-0 p-2 flex-row">
        <div className="space-y-8 hidden md:block w-[20%]">
          <SuggestedArticles />
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
                    <div className="text-sm text-muted-foreground">
                      @jaredpalmer
                    </div>
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
                    <div className="text-sm text-muted-foreground">
                      @oliviadavis
                    </div>
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
                    <div className="text-sm text-muted-foreground">
                      @alexchen
                    </div>
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
                  Subscribe to our weekly newsletter to stay up-to-date with the
                  latest articles, tutorials, and news from the dev.to
                  community.
                </p>
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-8 flex-1 ">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage
                    src={convertToCloudinaryUrl(article.author.image) || "/placeholder-user.jpg"}
                  />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <div>
                  <Link href={"/u/"+article.author.username}><div className="font-medium">{article.author.name}</div></Link>
                  <div className="text-sm text-muted-foreground">
                    Published {getRelativeTime(article.createdAt)} on{" "}
                    {getDate(article.createdAt)}
                  </div>
                </div>
                {session?.userId == article?.author?.id && (
                  <div className="flex justify-end justify-self-end align float-end">
                    <Link href={"/edit/" + article.id}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="flex w-full ml-0 p-4"
                      >
                        <Edit className="h-4 w-4 m-1" /> Edit
                      </Button>
                    </Link>
            
                  </div>
                )}
              </div>
              <div>
                <h1
                  className=" 
                text-2xl md:text-4xl font-bold m-4"
                >
                  {article.title}
                </h1>
                <hr />
              </div>
            </CardHeader>
            <CardContent className=" md:p-6 p-0">
                {
                  <div
                  id="article"
                  className="showdowncontainer p-0 m-0"
                  dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(article.content),
                  }}
                  ></div>
                }
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1  text-muted-foreground">
                  <TagIcon className="h-4 w-4" />
                  {article?.tags &&
                    article?.tags?.map((tag, i) => (
                      <Link
                        key={i}
                        href={"/t/"+tag.tag.id || "#"}
                        className="hover:underline"
                        prefetch={false}
                      >
                        {tag.tag.name}
                      </Link>
                    ))}
                  {/* <Link href="#" className="hover:underline" prefetch={false}>
                    web-development
                  </Link>
                  <Link href="#" className="hover:underline" prefetch={false}>
                    architecture
                  </Link>
                  <Link href="#" className="hover:underline" prefetch={false}>
                    scalability
                  </Link> */}
                </div>
                <div className="flex-1" />
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Read More
                </Link>
<a href={"https://visitorbadge.io/status?path=https%3A%2F%2Farticle.shade.cool%2Fp%2F"+article?.id}><img src={"https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Farticle.shade.cool%2Fp%2F"+article.id+"&countColor=%23263759"} /></a>
              </div>
            </CardFooter>
          </Card>
          <SuggestedArticles />
          {
            // JSON.stringify(article)
          }
          <Card>
            <CardHeader>
              <CardTitle>Email Newsletter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Subscribe to our weekly newsletter to stay up-to-date with the
                  latest articles, tutorials, and news from the dev.to
                  community.
                </p>
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </CardContent>
          </Card>
          <SuggestedArticles2 />
          <Card>
            <CardHeader>
              <CardTitle>Comments</CardTitle>
            </CardHeader>
            <CardContent>
              
          <Comments issueTerm={article.id}/>
            </CardContent>
          </Card>

        </div>
        <div className="space-y-8 md:mx-5">
          <UserCard user={article?.author} />
          <Card>
            <CardHeader>
              <CardTitle>Suggested Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}
                >
                  <TagIcon className="h-4 w-4" />
                  web-development
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}
                >
                  <TagIcon className="h-4 w-4" />
                  architecture
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}
                >
                  <TagIcon className="h-4 w-4" />
                  scalability
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}
                >
                  <TagIcon className="h-4 w-4" />
                  react
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-muted/50"
                  prefetch={false}
                >
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
                    <div className="text-sm text-muted-foreground">
                      10,000 members
                    </div>
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
                    <div className="text-sm text-muted-foreground">
                      5,000 members
                    </div>
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
                    <div className="text-sm text-muted-foreground">
                      3,000 members
                    </div>
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
    </div>
  );
}

function DiscIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function TagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
}

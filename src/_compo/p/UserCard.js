/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZORto5B26YZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import getUserSession from "@/app/(auth)/(funcs)/getUserSession"
import Link from "next/link"
import { makeSlug } from "@/lib/funs"

export default async function UserCard() {

  let user = await getUserSession();
  user = user?.user;
  return (
    <Card className="w-full  bg-background rounded-xl overflow-hidden shadow-lg">
      <div className="relative h-32 bg-muted">
        <img src={user?.image || "/placeholder.svg"} alt="User background" className="object-cover w-full h-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Avatar className="w-20 h-20 border-4 border-background">
            <AvatarImage src={user?.image || "/placeholder.svg"} />
            <AvatarFallback>{user?.name.substring(0,2)}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <CardContent className="p-6 text-center">
        <div className="space-y-2">
          <Link href={"/u/"+ ((user?.userName != undefined) ? (user?.userName) : makeSlug(user?.email || " "))}><h3 className="text-xl font-semibold">{user?.name}</h3></Link>
          <p className="text-sm text-muted-foreground">{user?.occupication || "Software Engineer"}</p>
          <p className="text-sm text-muted-foreground">{user?.bio || "Passionate about building innovative software solutions."}</p>
        </div>
        <Separator className="my-4" />
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Joined 2 years ago</span>
          </div>
          <div className="flex items-center gap-2">
            <LocateIcon className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">San Francisco</span>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline">Follow</Button>
          <Button variant="outline">Subscribe</Button>
        </div>
        <Separator className="my-4" />
        <div className="flex items-center justify-center gap-2">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>F1</AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>F2</AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>F3</AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>F4</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <UserIcon className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">1.2K Followers</span>
          </div>
          <div className="flex items-center gap-2">
            <EyeIcon className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">10K Views</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function CalendarDaysIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function EyeIcon(props) {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
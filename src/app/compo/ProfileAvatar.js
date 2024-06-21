import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import getUserSession from "../(auth)/(funcs)/getUserSession";

export const ProfileAvatar = async () => {
    let user = await getUserSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className=" border border-amber-50 p-4">
          <AvatarImage src={user?.user?.image || "https://github.com/sh20raj.png"} />
          <AvatarFallback>{(user.user.name).substring(0,2)||"UI"}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <p className=" text-sm ">Shaswat Raj</p>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <Link href="/dashboard"><DropdownMenuItem>Dashboard</DropdownMenuItem></Link>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

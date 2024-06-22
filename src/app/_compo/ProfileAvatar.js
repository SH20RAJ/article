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
import { BookDashed, LogOutIcon, Moon, User2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProfileAvatar = async () => {
    let user = await getUserSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className=" border border-amber-50">
          <AvatarImage src={user?.user?.image || "https://github.com/sh20raj.png"} />
          <AvatarFallback>{(user.user.name).substring(0,2)||"UI"}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <hr />
        <p className=" text-xs pl-2 font-bold my-2 ">✨ {user.user.name}</p>
        <DropdownMenuSeparator />
        <Link href="/profile"><DropdownMenuItem><User2Icon size={15} className="mr-2"/> Profile</DropdownMenuItem></Link>
        <Link href="/dashboard"><DropdownMenuItem><BookDashed size={15} className="mr-2"/> Dashboard</DropdownMenuItem></Link>
        <Link href="#"><DropdownMenuItem><Moon size={15} className="mr-2"/> Dark Mode</DropdownMenuItem></Link>
        <Link href="#"><DropdownMenuItem><LogOutIcon className=" w-4 h-4 mr-2" /> 
        <Link href="/logout">
          Logout
      </Link>
      </DropdownMenuItem></Link>
        {/* <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

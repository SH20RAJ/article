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
import { BookDashed, User2Icon } from "lucide-react";

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
        <DropdownMenuItem><User2Icon size={15} className="mr-1"/> Profile</DropdownMenuItem>
        <Link href="/dashboard"><DropdownMenuItem><BookDashed size={15} className="mr-1"/> Dashboard</DropdownMenuItem></Link>
        {/* <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

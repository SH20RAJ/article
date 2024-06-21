import Link from "next/link";
import getUserSession from "../(auth)/(funcs)/getUserSession";
import { Button } from "@/components/ui/button";
import { LogOutIcon, PencilIcon, Search } from "lucide-react";
import { ProfileAvatar } from "./ProfileAvatar";
import { Input } from "@/components/ui/input";

export default async function Nav() {
  let user = await getUserSession();
  return (
    <>
      <div className="bg-white fixed inset-x-0 top-0 shadow-lg z-10">
        <header className="flex justify-between font-poppins items-center p-3 sm:p-5 wrapper">
          <div className="flex items-center space-x-0 sm:space-x-5">
            <img
              src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
              className="h-10 hidden sm:block cursor-pointer"
              href="/"
            />
            <img
              src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/1151/Medium_logo_-_black-512.png"
              className="h-14 sm:hidden cursor-pointer"
              href="/"
            />
           
          </div>
          <div className="flex items-center space-x-0 sm:space-x-5">
            
            <div className="hidden md:inline-flex items-center space-x-5 ">
              {/* Search bar */}
              <div className="flex items-center space-x-5 ">
                <Input
                  type="search"
                  placeholder="Search"
                  className="w-[400px]"
                />
                <Button variant="outline" className=" m-0"><Search/></Button>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-5 text-green-600 ">
            {user ? <LoggedIn /> : <LoggedOut />}
          </div>
        </header>
        <div className="text-center">
          <div className="fixed inset-0 backdrop-blur-0 pointer-events-none duration-500  bg-opacity-0  ease-in-out transition-all overflow-y-hidden   " />
          <div className="scale-0  ease-in-out duration-500 h-[600px] w-[500px]   rounded-lg fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white shadow-xl" />
        </div>
      </div>
    </>
  );
}

const LoggedIn = () => {
  return (
    <>
      {/* Create new post btn */}
      <Link href="/create" className=" flex align-baseline">
        <Button variant="outline">
          <PencilIcon className=" w-4 h-4 sm:mr-2" />{" "}
          <p className="hidden sm:block">Create</p>
        </Button>
      </Link>
      <ProfileAvatar />
      <Link href="/logout">
        <Button className="p-2" variant="outline">
          <LogOutIcon className=" w-4 h-4 mr-2" />
        </Button>
      </Link>
    </>
  );
};

const LoggedOut = () => {
  return (
    <>
      <Link href="/login">
        <h3 className="cursor-pointer">Login</h3>
      </Link>
      <Link href="/join">
        <h3 className="cursor-pointer">Register</h3>
      </Link>
    </>
  );
};

// Avatar component from ShadCN

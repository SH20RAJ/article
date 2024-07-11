import Link from "next/link";
import getUserSession from "../(auth)/(funcs)/getUserSession";
import { Button } from "@/components/ui/button";
import { LogOutIcon, PencilIcon, Search } from "lucide-react";
import { ProfileAvatar } from "./ProfileAvatar";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "./ModeToggel";

export default async function Nav() {
  let user = await getUserSession();
  return (
    <>
      <div className="shadow-lg border-b sticky top-0 z-10 bg-accent">
        <header className="flex justify-between font-poppins items-center p-3 sm:p-5 wrapper">
          <div className="flex items-center space-x-0 sm:space-x-5">
            <Link href={"/"}>
            <img
              src="/md-logo-dark.png"
              className="h-10 hidden sm:block cursor-pointer"
              href="/"
              />
            <img
              src="/logo-dark.png"
              className="h-14 sm:hidden cursor-pointer"
              href="/"
              />
              </Link>
           
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
      <ModeToggle />
      
    </>
  );
};

const LoggedOut = () => {
  return (
    <>
      {/* <Link href="/login">
        <h3 className="cursor-pointer">Login</h3>
      </Link> */}
      <Link href="/join">
        <h3 className="cursor-pointer">Join</h3>
      </Link>
      <ModeToggle />

    </>
  );
};

// Avatar component from ShadCN



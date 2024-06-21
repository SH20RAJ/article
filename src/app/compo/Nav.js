import Link from "next/link";
import getUserSession from "../(auth)/(funcs)/getUserSession";
import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-react";

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
            <div className="hidden md:inline-flex items-center space-x-5">
              <h3 className="cursor-pointer">About</h3>
              <h3 className="cursor-pointer">Contact</h3>
              <h3 className="bg-green-600 cursor-pointer rounded-full hover:bg-green-700 duration-500  px-4 py-2 text-white">
                Follow
              </h3>
            </div>
          </div>
          <div className="flex items-center space-x-5 text-green-600 ">
          {
            user ? <LoggedIn /> : <LoggedOut />
          }

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
      <Button variant="outline"><PencilIcon className=" w-4 h-4 mr-2"/> Create</Button>
      </Link>
      <Link href="/dashboard">
        <h3 className="cursor-pointer">Dashboard</h3>
      </Link>
      <Link href="/profile">
        <h3 className="cursor-pointer">Profile</h3>
      </Link>
      <Link href="/logout">
        <h3 className="cursor-pointer">Logout</h3>
      </Link>
    </>
  );
}

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
}
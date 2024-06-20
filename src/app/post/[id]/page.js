import React from "react";
import SideBar from "./SideBar";
import LeftSideBar from "./LeftSideBar";
import MobileNav from "./MobileNav";
import MobileBottom from "./MobileBottom";
import SubscriptionConfirmation from "./SubscriptionConfirmation";
import MainPost from "./MainPost";

export default function page() {
  return (
    <>
      <main className="font-poppins grid grid-cols-7 ">
        <LeftSideBar />
        <SubscriptionConfirmation />
        <div className="border-gray-200 border-x-[1px] w-full h-full col-span-7 xl:col-span-4 ">
          <MobileNav />
          <MobileBottom />
          <MainPost />
        </div>
        <SideBar />
        <div className="text-center">
          <div className="fixed inset-0 backdrop-blur-0 pointer-events-none duration-500  bg-opacity-0  ease-in-out transition-all overflow-y-hidden   " />
          <div className="scale-0  ease-in-out duration-500 h-[600px] w-[500px]   rounded-lg fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white shadow-xl" />
        </div>
      </main>
    </>
  );
}

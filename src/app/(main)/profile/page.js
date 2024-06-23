import PostList from "@/_compo/homepage/PostList";
import UserCard from "@/_compo/p/UserCard";
import Nav from "@/app/_compo/Nav";
import React from "react";

export default function Profilepage() {
  return (
    <>
      <div className="container">
        <div className=" flex justify-center align-middle">
          <div className=" max-w-xl ">
            <UserCard />
          </div>
        </div>
        <div className=" flex justify-center align-middle">

        <div className="max-w-xl self-center">
          <PostList />
        </div>
        </div>
      </div>
    </>
  );
}

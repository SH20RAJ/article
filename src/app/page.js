import Nav from "./compo/Nav";
import Trending from "./compo/Trending";
import Posts from "./compo/Posts";
import LeftSideBar from "./post/[id]/LeftSideBar";
import MainSidebar from "@/_compo/homepage/MainSidebar";
import { getDate } from "@/lib/funs";
import PostList from "@/_compo/homepage/PostList";
// import MainSidebar from "@/_compo/homepage/MainSidebar";

export default function page() {
  return (
    <>
      <main className="font-poppins  ">
        <Nav/>
        <main className=" flex mt-24 min-h-screen gap-4">
          <div className="sidebar hidden sm:flex  w-3/12 m-4 ">
            <MainSidebar/>
          </div>
        <div className=" w-full ">
          <PostList/>
        </div>
        <div className="rightbar hidden sm:flex w-4/12 border-collapse border ">RightBar
        
        {
          getDate("2021-09-01T00:00:00.000Z")
        }
        </div>
          
        </main>

        
      </main>
    </>
  );
}

import Nav from "./compo/Nav";
import Trending from "./compo/Trending";
import Posts from "./compo/Posts";
import LeftSideBar from "./post/[id]/LeftSideBar";
import MainSidebar from "./compo/MainSidebar";

export default function page() {
  return (
    <>
      <main className="font-poppins  ">
        <Nav/>
        <main className=" flex mt-20">
          <div className="sidebar flex w-1/5 border min-h-screen h-full ">
            <MainSidebar/>
          </div>
        <div className="">
          {/* <Trending/>
          <Posts/> */}
        </div>
          
        </main>

        
      </main>
    </>
  );
}

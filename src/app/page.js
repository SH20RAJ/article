import { Feeds2 } from "@/_compo/homepage/Feeds2";
import Nav from "./_compo/Nav";
import MainSidebar from "@/_compo/homepage/MainSidebar";
import PostList from "@/_compo/homepage/PostList";
import { Feeds1 } from "@/_compo/homepage/feeds1";
// import MainSidebar from "@/_compo/homepage/MainSidebar";

export default function page() {
  return (
    <>
      <main className="font-poppins  ">
        <Nav/>
        <Feeds1/>
        <Feeds2/>
        <main className=" flex  min-h-screen gap-4">
          <div className="sidebar hidden sm:flex  w-3/12 m-4 ">
            <MainSidebar/>
          </div>
        <div className=" w-full  overflow-auto h-screen no-scrollbar">
          <PostList/>
        </div>
        <div className="rightbar hidden sm:flex w-4/12 border-collapse  ">

        </div>
          
        </main>

        
      </main>
    </>
  );
}

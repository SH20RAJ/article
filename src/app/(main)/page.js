import { Feeds2 } from "@/_compo/homepage/Feeds2";
import Sidebar from "@/_compo/homepage/SideBar";

export default function page() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 container mx-auto grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 px-4 md:px-6 py-8">
          <Feeds2 />
          <Sidebar />
        </main>
      </div>
    </>
  );
}

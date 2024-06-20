import Nav from "./compo/Nav";
import Trending from "./compo/Trending";
import Posts from "./compo/Posts";

export default function page() {
  return (
    <>
      <main className="font-poppins  ">
        <Nav/>
        <br /><br /><br /><br />
        <Trending/>

        <Posts/>
      </main>
    </>
  );
}

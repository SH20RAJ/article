import Nav from "../_compo/Nav";
import getUserSession from "../(auth)/(funcs)/getUserSession";
import { redirect } from "next/navigation";
import Editing from "./Editing";

export default async function page() {
  // let session = await getUserSession();
  // if (!session?.user) redirect("/");

  return (
    <div>
      <Nav />
      <div className="container flex sm:flex-row flex-col-reverse">
        <Editing />
      </div>
    </div>
  );
}

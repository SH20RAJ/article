import React from "react";
import Nav from "../_compo/Nav";
import Editor from "./Editor";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { SelectCommunity } from "@/_compo/create/selectcommunity";
import getUserSession from "../(auth)/(funcs)/getUserSession";
import { redirect } from "next/navigation";

export default async function page() {
    let session = await getUserSession()
    if(!session?.user) redirect("/")
  return (
    <div>
      <Nav />
      <div className="container flex sm:flex-row flex-col-reverse">
        <div className="leftbar w-full sm:w-2/12 mr-4 flex-col gap-6 flex ">
            <h1 className="text-xl font-bold ">Page settings</h1>
            {/* <div className="flex flex-col space-y-2">
                <label>
                <span className="text-gray-500">Title</span>
                <input type="text" className="input" />
                </label>
                <label>
                <span className="text-gray-500">Slug</span>
                <input type="text" className="input" />
                </label>
                <label>
                <span className="text-gray-500">Description</span>
                <textarea className="input" />
                </label>
                <label>
                <span className="text-gray-500">Tags</span>
                <input type="text" className="input" />
                </label>
                <label>
                <span className="text-gray-500">Publish</span>
                <input type="checkbox" className="input" />
                </label>
            </div> */}
            <SelectCommunity/>
            <Button className="" variant="outline">Publish</Button>
        </div>

        <div className="editor flex-1">
          <h1 className="text-3xl font-bold">
            <input
              type="text"
              placeholder="Title"
              className=" ml-8 border-0 outline-0 outline-none mb-4 p-4 px-2 text-4xl "
            />
            <hr />
          </h1>
          {/* <p className="text-gray-500 text-sm m-4">Write your story here</p> */}
          <Editor />
        </div>

        {/* <div className="rightbar">
            <h1 className="text-3xl font-bold">Page settings</h1>
            <div className="flex flex-col space-y-2">
                <label>
                <span className="text-gray-500">Title</span>
                <input type="text" className="input" />
                </label>
                <label>
                <span className="text-gray-500">Slug</span>
                <input type="text" className="input" />
                </label>
                <label>
                <span className="text-gray-500">Description</span>
                <textarea className="input" />
                </label>
                <label>
                <span className="text-gray-500">Tags</span>
                <input type="text" className="input" />
                </label>
                <label>
                <span className="text-gray-500">Publish</span>
                <input type="checkbox" className="input" />
                </label>
            </div>
        </div> */}
      </div>

      {/* <div className="drawer">
      <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

      </div> */}
    </div>
  );
}

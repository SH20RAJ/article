import React from "react";

export default function GetEmail() {
  return (
    <>
      <div className="w-full wrapper p-10 border-t-[4px] border-green-600 bg-gray-100">
        <div className="z-0">
          <h1 className="text-2xl font-bold">
            Get an email whenever User's Name publishes.
          </h1>
          <form className="pt-6 space-y-4 w-full sm:space-x-4 justify-between flex flex-col sm:flex-row items-center">
            <div className=" w-[100%]   sm:w-[67%]">
              <input
                name="email"
                id="emailinp"
                type="text"
                className="block z-0 w-full py-2.5 px-0 text-sm text-gray-600 bg-transparent border-0 border-b-[1px]  appearance-none  dark:border-gray-400 dark:focus:border-primary-100 focus:outline-none focus:ring-0 focus:border-green-600  peer"
                placeholder="Your Email"
                required
                defaultValue
              />{" "}
            </div>
            <button className="w-full sm:w-auto">
              <div className="flex justify-center items-center space-x-2 bg-green-600 hover:bg-green-700 duration-500 text-white py-[11px] px-0 sm:px-8 rounded-full">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="h-[23px] w-[23px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M22 20.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16.007zM4.434 5L12 11.81 19.566 5H4.434zM0 15h8v2H0v-2zm0-5h5v2H0v-2z" />
                  </g>
                </svg>
                <span>Subscribe</span>
              </div>
            </button>
          </form>
          <h2 className="pr-4 text-xs pt-6">
            By signing up, you will create a Medium account if you don’t already
            have one. Review our{" "}
            <span className="cursor-pointer underline">Privacy Policy</span> for
            more information about our privacy practices.
          </h2>
        </div>
      </div>
    </>
  );
}

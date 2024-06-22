import React from 'react'

export default function SideBar() {
  return (
    <>
    <div className="h-[110vh] hidescrollbar relative hidden xl:flex">
          <div className="fixed    bottom-0 top-0 overflow-y-scroll  w-[380px] col-span-2 px-8 py-16">
            <div className="space-x-8">
              <button className="bg-gray-800 hover:bg-gray-900 duration-500 px-16 py-2 rounded-full text-white">
                Get started
              </button>
              <button className="text-black hover:text-green-600">
                Sign in
              </button>
            </div>
            <div className="w-full py-10 relative">
              <input
                className="px-12 w-[100%] py-2 rounded-full border-gray-200 border-[1px] outline-none text-sm"
                type="text"
                placeholder="Search.."
                name
                id
              />
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-8 h-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div />
            <div>
              <div>
                <img
                  className="h-24 w-24 object-cover rounded-full"
                  src="/logo.png"
                  alt
                />
                <h1 className="font-bold py-4 text-gray-900">
                  User's Name
                </h1>
                <h2 className="text-gray-500 text-sm">
                  <p>
                    My name is User's Name and I am a Junior self taught Web
                    Developer. I enjoy using my skills to contribute to the
                    exciting technological advances.
                    <br />
                  </p>
                </h2>
                <div className="py-4 flex items-center space-x-4">
                  <button
                    value="Follow"
                    className="bg-green-600 rounded-full hover:bg-green-700 duration-500  px-4 py-2 text-white"
                  >
                    Follow
                  </button>
                  <div className="h-[37px] w-[37px] cursor-pointer flex justify-center items-center rounded-full bg-green-600 hover:bg-green-700 duration-500">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="text-white text-xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M22 13h-2V7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9zM4.511 5l7.55 6.662L19.502 5H4.511zM21 18h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z" />
                      </g>
                    </svg>{" "}
                  </div>
                </div>
                <div className="py-4">
                  <h2 className="text-gray-900 text-md font-semibold capitalize">
                    more from medium
                  </h2>
                  <div className="py-6">
                    <div
                      className="flex items-start justify-between py-4"
                      href="/post/5-new-killer-features-of-next-js-12"
                    >
                      <div className="space-y-2 flex flex-col jusify-center cursor-pointer">
                        <div className="flex items-center space-x-2">
                          {" "}
                          <img
                            alt="r"
                            className="h-6 rounded-full"
                            src="/logo.png"
                          />
                          <span className="text-sm font-normal capitalize">
                            User's Name
                          </span>
                        </div>
                        <div>
                          <p className="text-[16px] text-md font-semibold w-[225px]">
                            5 New Killer Features of Next.js 12
                          </p>
                        </div>
                      </div>
                      <div className="h-16 w-16 flex justify-start">
                        <img
                          className="h-full w-full rounded-md cursor-pointer object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                          src="https://cdn.sanity.io/images/gyc4tcpa/production/ebc21e1c5833172b2d0b7d9dbc2cf047924c646d-1200x674.png"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div
                      className="flex items-start justify-between py-4"
                      href="/post/11-useful-modern-javascript-tips"
                    >
                      <div className="space-y-2 flex flex-col jusify-center cursor-pointer">
                        <div className="flex items-center space-x-2">
                          {" "}
                          <img
                            alt="r"
                            className="h-6 rounded-full"
                            src="/logo.png"
                          />
                          <span className="text-sm font-normal capitalize">
                            User's Name
                          </span>
                        </div>
                        <div>
                          <p className="text-[16px] text-md font-semibold w-[225px]">
                            11 Useful Modern JavaScript Tips
                          </p>
                        </div>
                      </div>
                      <div className="h-16 w-16 flex justify-start">
                        <img
                          className="h-full w-full rounded-md cursor-pointer object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                          src="https://cdn.sanity.io/images/gyc4tcpa/production/b5949bc8cd131c6e61f449340be97f26d9ba348e-1920x1080.png"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div
                      className="flex items-start justify-between py-4"
                      href="/post/next-js-the-next-big-thing"
                    >
                      <div className="space-y-2 flex flex-col jusify-center cursor-pointer">
                        <div className="flex items-center space-x-2">
                          {" "}
                          <img
                            alt="r"
                            className="h-6 rounded-full"
                            src="/logo.png"
                          />
                          <span className="text-sm font-normal capitalize">
                            User's Name
                          </span>
                        </div>
                        <div>
                          <p className="text-[16px] text-md font-semibold w-[225px]">
                            Next.js -The next big thing
                          </p>
                        </div>
                      </div>
                      <div className="h-16 w-16 flex justify-start">
                        <img
                          className="h-full w-full rounded-md cursor-pointer object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                          src="/logo.png"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div
                      className="flex items-start justify-between py-4"
                      href="/post/why-is-nextjs-so-fast-as-compere-to-reactjs"
                    >
                      <div className="space-y-2 flex flex-col jusify-center cursor-pointer">
                        <div className="flex items-center space-x-2">
                          {" "}
                          <img
                            alt="r"
                            className="h-6 rounded-full"
                            src="/logo.png"
                          />
                          <span className="text-sm font-normal capitalize">
                            User's Name
                          </span>
                        </div>
                        <div>
                          <p className="text-[16px] text-md font-semibold w-[225px]">
                            Why is Nextjs so fast as compere to Reactjs?
                          </p>
                        </div>
                      </div>
                      <div className="h-16 w-16 flex justify-start">
                        <img
                          className="h-full w-full rounded-md cursor-pointer object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                          src="https://cdn.sanity.io/images/gyc4tcpa/production/649b09050940bec8aba09cbc8c1c455cb093978f-1920x1080.png"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div
                      className="flex items-start justify-between py-4"
                      href="/post/how-i-code-for-8-hours-without-feeling-tired"
                    >
                      <div className="space-y-2 flex flex-col jusify-center cursor-pointer">
                        <div className="flex items-center space-x-2">
                          {" "}
                          <img
                            alt="r"
                            className="h-6 rounded-full"
                            src="/logo.png"
                          />
                          <span className="text-sm font-normal capitalize">
                            User's Name
                          </span>
                        </div>
                        <div>
                          <p className="text-[16px] text-md font-semibold w-[225px]">
                            How I code for 8 hours without feeling tired.
                          </p>
                        </div>
                      </div>
                      <div className="h-16 w-16 flex justify-start">
                        <img
                          className="h-full w-full rounded-md cursor-pointer object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                          src="https://cdn.sanity.io/images/gyc4tcpa/production/91349ded9a5e22ae646e70be5235c1664f10131a-950x553.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-xs mt-10">
                    <span className="cursor-pointer text-gray-500 hover:text-gray-900 duration-100 pr-4">
                      Help
                    </span>
                    <span className="cursor-pointer text-gray-500 hover:text-gray-900 duration-100 pr-4">
                      Status
                    </span>
                    <span className="cursor-pointer text-gray-500 hover:text-gray-900 duration-100 pr-4">
                      Writers
                    </span>
                    <span className="cursor-pointer text-gray-500 hover:text-gray-900 duration-100 pr-4">
                      Blog
                    </span>
                    <span className="cursor-pointer text-gray-500 hover:text-gray-900 duration-100 pr-4">
                      Careers
                    </span>
                    <span className="cursor-pointer text-gray-500 hover:text-gray-900 duration-100 pr-4">
                      Privacy
                    </span>
                    <br />
                    <span className="cursor-pointer text-gray-500 hover:text-gray-900 duration-100 pr-4">
                      Terms
                    </span>
                    <span className="cursor-pointer text-gray-500 hover:text-gray-900 duration-100 pr-4">
                      About
                    </span>
                    <span className="cursor-pointer text-gray-500 hover:text-gray-900 duration-100 pr-4">
                      Knowable
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

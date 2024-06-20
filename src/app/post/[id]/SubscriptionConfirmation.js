import React from 'react'

export default function SubscriptionConfirmation() {
  return (
    <>
      <div className="absolute">
          <div className="fixed p-8 flex flex-col justify-center items-center text-center top-1/2 z-50 left-1/2 -translate-x-1/2 -translate-y-1/2  scale-0   md:z-10 ease-in-out duration-500 min-h-full md:min-h-[600px] w-full md:w-auto md:h-auto md:m-auto  rounded-lg bg-white shadow-xl">
            <div className="p-4 cursor-pointer z-50 absolute top-0 pt-10 pr-10 right-0">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                className="h-8 w-8 text-gray-400 hover:text-gray-700 duration-100 text-2xl cursor-pointer"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"
                />
              </svg>
            </div>{" "}
            <div>
              {" "}
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%",
                  }}
                >
                  <img
                    alt
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27260%27%20height=%27260%27/%3e"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                    }}
                  />
                </span>
                <img
                  alt
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNew%20message.64233199.gif&w=640&q=75"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: "absolute",
                    inset: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                  srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNew%20message.64233199.gif&w=384&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNew%20message.64233199.gif&w=640&q=75 2x"
                />
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                Thank You For Your Subscription
              </h1>
              <h2>
                You will be getting daily news about User's Name posts
              </h2>
              <div className="mt-8">
                <span className="text-white px-8 py-2 rounded-md bg-green-600">
                  {" "}
                </span>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

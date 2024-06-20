import React from 'react'

export default function MobileBottom() {
  return (
    <>
      <div className="w-full z-50 block sm:hidden px-[30px] py-[20px] fixed bg-gray-100 shadow-md bottom-0">
            <div className="flex justify-between">
              <div>
                <svg
                  className="cursor-pointer text-gray-800 hover:text-black duration-100"
                  width={24}
                  height={24}
                  fill="none"
                  aria-label="home"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.72 2.93a.45.45 0 0 1 .56 0l.34-.43-.34.43 9.37 7.5a.56.56 0 1 0 .7-.86l-9.38-7.5a1.55 1.55 0 0 0-1.94 0l-9.38 7.5a.56.56 0 0 0 .7.86l9.37-7.5zm7.17 9.13v-1.4l.91.69a.5.5 0 0 1 .2.4V20a2 2 0 0 1-2 2h-4a.5.5 0 0 1-.5-.5V17a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4.5a.5.5 0 0 1-.5.5H6a2 2 0 0 1-2-2v-8.25a.5.5 0 0 1 .2-.4l.91-.68V20c0 .5.4.89.89.89h3.39V17a2.11 2.11 0 0 1 2.11-2.11h1A2.11 2.11 0 0 1 14.61 17v3.89H18a.89.89 0 0 0 .89-.89v-7.95z"
                    fill="#A8A8A8"
                  />
                </svg>
              </div>
              <div>
                <svg
                  className="cursor-pointer text-gray-800 hover:text-black duration-100"
                  width={25}
                  height={24}
                  fill="none"
                  aria-label="search"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.8 10.69a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73a8.05 8.05 0 0 0-5.94-13.5z"
                    fill="#A8A8A8"
                  />
                </svg>
              </div>
              <div
                className
                data-tooltipped
                aria-describedby="tippy-tooltip-5"
                data-original-title="Not working yet"
                style={{ display: "inline" }}
              >
                <div>
                  <svg
                    className="cursor-not-allowed text-gray-800 hover:text-black duration-100"
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    aria-label="Reading list"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 3a2 2 0 0 0-2 2v1H6a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4V8a2 2 0 0 0-2-2H9V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v12a.5.5 0 1 0 1 0V5a2 2 0 0 0-2-2h-9zM5 8a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v12.98l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V8z"
                      fill="#757575"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

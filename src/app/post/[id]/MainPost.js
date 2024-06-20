import React from 'react'
import GetEmail from './GetEmail'
import Reccomendations from './reccomendations'

export default function MainPost() {
  return (
    <>
      <div className="wrapper z-0 mt-24 xl:mt-0 flex flex-col justify-center max-w-[800px] px-6">
            <div className="md:flex space-y-8 md:space-y-0 justify-between items-center space-x-4 py-10 font-extralight text-sm">
              <div className="flex ">
                <div>
                  <img
                    className="h-12 w-12 object-cover rounded-full"
                    src="https://cdn.sanity.io/images/gyc4tcpa/production/ad62f7a815fd2aebade9b399a124eefd80ce0e67-1000x1000.png"
                    alt
                  />
                </div>
                <div className="pl-4">
                  <p className="font-medium text-base">
                    <span className="text-gray-900">User's Name</span>
                  </p>
                  <div className="flex items-center ">
                    <p className="text-gray-600">Thu Apr 14 2022 </p>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 14 16"
                      className="text-gray-500 ml-2 h-4"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center space-x-6">
                <div className="border-[0.5px] sm:hidden border-gray-100 w-full" />
                <div
                  className
                  data-tooltipped
                  aria-describedby="tippy-tooltip-6"
                  data-original-title="Share on Twitter"
                  style={{ display: "inline" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    className="h-[18px] w-[18px] text-gray-500 hover:text-gray-900 duration-300 cursor-pointer"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </div>
                <div
                  className
                  data-tooltipped
                  aria-describedby="tippy-tooltip-7"
                  data-original-title="Share on Facebook"
                  style={{ display: "inline" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    className="h-[17px] w-[17px] text-gray-500 hover:text-gray-900 duration-300 cursor-pointer"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,23.00025 C0,23.55225 0.44775,24 1.0005,24 L12.75,24 L12.75,15 L9.75,15 L9.75,11.25 L12.75,11.25 L12.75,8.25 C12.75,5.15025 14.71275,3.62475 17.478,3.62475 C18.8025,3.62475 19.941,3.72375 20.2725,3.76725 L20.2725,7.00725 L18.35475,7.008 C16.851,7.008 16.5,7.72275 16.5,8.77125 L16.5,11.25 L20.25,11.25 L19.5,15 L16.5,15 L16.56,24 L23.00025,24 C23.55225,24 24,23.55225 24,23.00025 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0"
                    />
                  </svg>
                </div>
                <div
                  className
                  data-tooltipped
                  aria-describedby="tippy-tooltip-8"
                  data-original-title="Share on Linkedin"
                  style={{ display: "inline" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    className="h-[17px] w-[17px] text-gray-500 hover:text-gray-900 duration-300 cursor-pointer"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </div>
                <div
                  className
                  data-tooltipped
                  aria-describedby="tippy-tooltip-9"
                  data-original-title="Copy Link"
                  style={{ display: "inline" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="h-[17px] w-[17px] text-gray-500 hover:text-gray-900 duration-300 cursor-pointer"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M408 480H184a72 72 0 01-72-72V184a72 72 0 0172-72h224a72 72 0 0172 72v224a72 72 0 01-72 72z" />
                    <path d="M160 80h235.88A72.12 72.12 0 00328 32H104a72 72 0 00-72 72v224a72.12 72.12 0 0048 67.88V160a80 80 0 0180-80z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="fixed bottom-20 md:bottom-10 -translate-x-1/2 left-1/2 xl:left-[43%]">
              <div className=" bg-white px-6 py-2 rounded-full shadow-xl">
                <div className="flex space-x-8 items-center">
                  {" "}
                  <div className="flex space-x-2 ">
                    <div
                      className
                      data-tooltipped
                      aria-describedby="tippy-tooltip-10"
                      data-original-title="Likes"
                      style={{ display: "inline" }}
                    >
                      <div className="flex cursor-not-allowed items-center space-x-2 cursor-pointer">
                        <svg
                          fill="gray"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          aria-label="clap"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                          />
                        </svg>
                        <span className="text-sm text-gray-500">0</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div
                      className
                      data-tooltipped
                      aria-describedby="tippy-tooltip-11"
                      data-original-title="Respond"
                      style={{ display: "inline" }}
                    >
                      <div className="flex space-x-2 items-center cursor-pointer">
                        <svg
                          className
                          width={24}
                          fill="gray"
                          height={24}
                          viewBox="0 0 24 24"
                          aria-label="responses"
                        >
                          <path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z" />
                        </svg>
                        <span className="text-sm text-gray-500">14</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <article className>
              <h1 className="text-[32px] border-b-[1px] font-bold mb-3 text-black ">
                11 Useful Modern JavaScript Tips
              </h1>
              <h2 className="text-[20px] font-light text-gray-500" />
              <div>
                <img
                  className="h-auto  cursor-zoom-in my-8 w-full object-cover   duration-500 ease-in-out"
                  src="https://cdn.sanity.io/images/gyc4tcpa/production/b5949bc8cd131c6e61f449340be97f26d9ba348e-1920x1080.png"
                  alt="image"
                />
              </div>
            </article>
            <div>
              <div className="capitalize mt-6 imagepaddingstyle li link text-[20px]">
                <p>
                  In our day-to-day coding life, we frequently used numbers to
                  string conversion, check keys in the object it exits or not,
                  conditionally manipulate object data, filter falsy value in
                  the array, etc.
                </p>
                <p>
                  Here I come up with some amazing tips which are my personal
                  favorite ❤️ ️and very useful to make my code{" "}
                  <strong>shorter</strong> and{" "}
                  <strong>
                    clean.
                    <br />
                    <br />
                  </strong>
                  1. Conditionally <strong>add properties</strong>💡 in the
                  object
                  <br />
                </p>
                <figure>
                  <img src="https://cdn.sanity.io/images/gyc4tcpa/production/548a291cbfe04cbddc6ff158d9689a89febcb920-700x210.png" />
                </figure>
                <p>
                  2. Check if a property exists <strong>in</strong> an object or
                  not
                  <br />
                </p>
                <figure>
                  <img src="https://cdn.sanity.io/images/gyc4tcpa/production/5bd7e1d68942618fae564378567befe8932ade38-700x157.png" />
                </figure>
                <p>
                  3. Object <strong>destructing</strong> with dynamic key
                  <br />
                </p>
                <figure>
                  <img src="https://cdn.sanity.io/images/gyc4tcpa/production/e34abfa23903d2ed633918c90a5c32eeaf72c68e-1035x294.png" />
                </figure>
                <p>
                  4. Loop over an object to access both key and value
                  <br />
                </p>
                <figure>
                  <img src="https://cdn.sanity.io/images/gyc4tcpa/production/734b927877bd47f875fbecc477cc6d7bd75e8570-1018x287.png" />
                </figure>
                <p>
                  5. Prevent throwing an error 🐞 when accessing any key which
                  does not exist in the object using optional chaining (?.)
                </p>
                <figure>
                  <img src="https://cdn.sanity.io/images/gyc4tcpa/production/1c94638687bea7dbc64379ff73d51f65c13c89a0-1069x289.png" />
                </figure>
                <p>
                  <strong>Alert</strong> ⚠️: optional chaining used when you are
                  not sure their property exits or not in data. If you are sure
                  that keys must be coming in data and if there does not come,
                  that time is good to throw an error instead prevent them.
                </p>
                <p>
                  6. Check <strong>falsy</strong>🌵 values in an array
                  <br />
                </p>
                <figure>
                  <img src="https://cdn.sanity.io/images/gyc4tcpa/production/4c992249ec47ef2417137542e015ca56e74fa47e-1073x293.png" />
                </figure>
                <p>
                  7. Remove duplicate value in the array
                  <br />
                </p>
                <figure>
                  <img src="https://cdn.sanity.io/images/gyc4tcpa/production/d0058533cf440e11d50350ada63e9d01c16727c2-959x190.png" />
                </figure>
                <p>
                  8. Check value is an{" "}
                  <strong>
                    array type
                    <br />
                  </strong>
                </p>
                <figure>
                  <img src="https://cdn.sanity.io/images/gyc4tcpa/production/c62d1fb80a83913728f1f819c44017d93a28d9af-985x140.png" />
                </figure>
                <p>
                  9. String to Number and Number to String conversion using ‘{" "}
                  <strong>+</strong> ’ operator 🤩
                  <br />
                </p>
                <figure>
                  <img src="https://cdn.sanity.io/images/gyc4tcpa/production/c9dff2698d466faee9321b9770e3e3d89e8264bf-1095x275.png" />
                </figure>
                <p>
                  10. Conditionally assign other values when value is{" "}
                  <strong>null</strong> and <strong>undefined</strong> using{" "}
                  <strong>nullish coalescing</strong> (??) Operator
                  <br />
                </p>
                <figure>
                  <img src="https://cdn.sanity.io/images/gyc4tcpa/production/8838cd90399c782ea4ab525aac9a4c39292a2b1f-1020x367.png" />
                </figure>
                <p>Confuse 😕 with OR (||) Operator ??</p>
                <p>
                  OR operator used when you want conditionally assign other
                  value if the value is not <strong>truthy</strong> (0,’ ’,
                  null, undefined, false, NaN)
                  <br />
                </p>
                <figure>
                  <img src="https://cdn.sanity.io/images/gyc4tcpa/production/ac1313a16ea737f15a8a07fa9a324f3ea8a15f36-1012x358.png" />
                </figure>
                <p>
                  11. Boolean conversion using the <strong>!!</strong> operator
                  <br />
                </p>
                <figure>
                  <img src="https://cdn.sanity.io/images/gyc4tcpa/production/263026bc8b1cda652a7593ac83b417e98f3c5d10-1063x108.png" />
                </figure>
                <p>
                  Thank you for reading !! . I hope these tips also became your
                  favorite ❤️ :)
                </p>
              </div>
            </div>
            <div className>
              <div className="bg-white  translate-x-[300%] duration-500 drop-shadow-[0_35px_135px_rgba(0,0,0,0.5)] px-6 pt-6 h-full fixed w-[25%]  right-0 bottom-0">
                <div className="flex items-center justify-between">
                  <h1 className="text-gray-900 font-bold text-xl">
                    Responses (14)
                  </h1>
                  <div className="flex space-x-4 items-center">
                    <div
                      className
                      data-tooltipped
                      aria-describedby="tippy-tooltip-12"
                      data-original-title="View Community Guidelines"
                      style={{ display: "inline" }}
                    >
                      <div className="flex space-x-2 cursor-pointer">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          className="text-xl text-gray-700 hover:text-gray-900 duration-500 cursor-pointer "
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12 3.19l7 3.11V11c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z" />
                        </svg>
                      </div>
                    </div>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      className="text-2xl text-gray-700 hover:text-gray-900 duration-500 cursor-pointer"
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
                </div>
                <form className="my-10 drop-shadow-xl p-4 translate-x-[0%] duration-500 ease-in-out  rounded-md bg-white">
                  <div className="flex items-center space-x-4" />
                  <textarea
                    maxLength={0}
                    name="comment"
                    id="comment"
                    className="my-6 text-sm w-full outline-none"
                    placeholder="what are your thoughts..."
                    required
                    defaultValue={""}
                  />
                  <div className="space-x-4 text-sm items-center flex justify-end ">
                    <span className="text-gray-600 cursor-pointer hover:text-gray-900 duration-200">
                      Cancel
                    </span>
                    <input
                      type="submit"
                      className="bg-green-200 pointer-events-none  text-white px-4 rounded-full py-2"
                      defaultValue="Response"
                    />
                  </div>
                </form>
                <div className>
                  <div>
                    <div>
                      <div className=" flex items-center space-x-4 ">
                        <div className="rounded-full w-8 h-8 bg-green-600">
                          <span className="text-xs flex justify-center text-white items-center translate-y-[50%] top-1/2 left-1/2">
                            <span className="capitalize cursor-pointer">
                              MU
                            </span>
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm cursor-pointer">
                            musashi miyamoto
                          </span>
                          <span className="text-sm text-gray-600">
                            Thu Apr 14 2022
                          </span>
                        </div>
                      </div>
                      <p className="text-sm mt-6 mb-4 break-words">
                        {" "}
                        thanks dude!
                      </p>
                      <div className=" cursor-not-allowed items-center flex space-x-2">
                        <svg
                          fill="gray"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          aria-label="clap"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                          />
                        </svg>
                        <span className="text-sm text-gray-500">0</span>
                      </div>
                      <div className="border-b-[1px] border-gray-200 my-4" />
                    </div>
                    <div>
                      <div className=" flex items-center space-x-4 ">
                        <div className="rounded-full w-8 h-8 bg-green-600">
                          <span className="text-xs flex justify-center text-white items-center translate-y-[50%] top-1/2 left-1/2">
                            <span className="capitalize cursor-pointer">
                              SD
                            </span>
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm cursor-pointer">
                            sdasdwqe qweqweqwe
                          </span>
                          <span className="text-sm text-gray-600">
                            Sat Apr 16 2022
                          </span>
                        </div>
                      </div>
                      <p className="text-sm mt-6 mb-4 break-words"> wqeqweqq</p>
                      <div className=" cursor-not-allowed items-center flex space-x-2">
                        <svg
                          fill="gray"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          aria-label="clap"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                          />
                        </svg>
                        <span className="text-sm text-gray-500">0</span>
                      </div>
                      <div className="border-b-[1px] border-gray-200 my-4" />
                    </div>
                    <div>
                      <div className=" flex items-center space-x-4 ">
                        <div className="rounded-full w-8 h-8 bg-green-600">
                          <span className="text-xs flex justify-center text-white items-center translate-y-[50%] top-1/2 left-1/2">
                            <span className="capitalize cursor-pointer">
                              OS
                            </span>
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm cursor-pointer">osama </span>
                          <span className="text-sm text-gray-600">
                            Tue Apr 19 2022
                          </span>
                        </div>
                      </div>
                      <p className="text-sm mt-6 mb-4 break-words">
                        {" "}
                        osama das
                      </p>
                      <div className=" cursor-not-allowed items-center flex space-x-2">
                        <svg
                          fill="gray"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          aria-label="clap"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                          />
                        </svg>
                        <span className="text-sm text-gray-500">0</span>
                      </div>
                      <div className="border-b-[1px] border-gray-200 my-4" />
                    </div>
                    <div>
                      <div className=" flex items-center space-x-4 ">
                        <div className="rounded-full w-8 h-8 bg-green-600">
                          <span className="text-xs flex justify-center text-white items-center translate-y-[50%] top-1/2 left-1/2">
                            <span className="capitalize cursor-pointer" />
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm cursor-pointer"> </span>
                          <span className="text-sm text-gray-600">
                            Tue Apr 19 2022
                          </span>
                        </div>
                      </div>
                      <p className="text-sm mt-6 mb-4 break-words">
                        {" "}
                        osama dadddddd
                      </p>
                      <div className=" cursor-not-allowed items-center flex space-x-2">
                        <svg
                          fill="gray"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          aria-label="clap"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                          />
                        </svg>
                        <span className="text-sm text-gray-500">0</span>
                      </div>
                      <div className="border-b-[1px] border-gray-200 my-4" />
                    </div>
                    <div>
                      <div className=" flex items-center space-x-4 ">
                        <div className="rounded-full w-8 h-8 bg-green-600">
                          <span className="text-xs flex justify-center text-white items-center translate-y-[50%] top-1/2 left-1/2">
                            <span className="capitalize cursor-pointer">
                              OS
                            </span>
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm cursor-pointer">osama </span>
                          <span className="text-sm text-gray-600">
                            Tue Apr 19 2022
                          </span>
                        </div>
                      </div>
                      <p className="text-sm mt-6 mb-4 break-words">
                        {" "}
                        weqweqweq
                      </p>
                      <div className=" cursor-not-allowed items-center flex space-x-2">
                        <svg
                          fill="gray"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          aria-label="clap"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                          />
                        </svg>
                        <span className="text-sm text-gray-500">0</span>
                      </div>
                      <div className="border-b-[1px] border-gray-200 my-4" />
                    </div>
                    <div>
                      <div className=" flex items-center space-x-4 ">
                        <div className="rounded-full w-8 h-8 bg-green-600">
                          <span className="text-xs flex justify-center text-white items-center translate-y-[50%] top-1/2 left-1/2">
                            <span className="capitalize cursor-pointer">
                              RE
                            </span>
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm cursor-pointer">
                            rex fax{" "}
                          </span>
                          <span className="text-sm text-gray-600">
                            Wed Apr 20 2022
                          </span>
                        </div>
                      </div>
                      <p className="text-sm mt-6 mb-4 break-words">
                        {" "}
                        SAFAS SAFAS
                      </p>
                      <div className=" cursor-not-allowed items-center flex space-x-2">
                        <svg
                          fill="gray"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          aria-label="clap"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                          />
                        </svg>
                        <span className="text-sm text-gray-500">0</span>
                      </div>
                      <div className="border-b-[1px] border-gray-200 my-4" />
                    </div>
                    <div>
                      <div className=" flex items-center space-x-4 ">
                        <div className="rounded-full w-8 h-8 bg-green-600">
                          <span className="text-xs flex justify-center text-white items-center translate-y-[50%] top-1/2 left-1/2">
                            <span className="capitalize cursor-pointer">
                              SO
                            </span>
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm cursor-pointer">
                            soo cool{" "}
                          </span>
                          <span className="text-sm text-gray-600">
                            Sat Apr 23 2022
                          </span>
                        </div>
                      </div>
                      <p className="text-sm mt-6 mb-4 break-words"> Noice1</p>
                      <div className=" cursor-not-allowed items-center flex space-x-2">
                        <svg
                          fill="gray"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          aria-label="clap"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                          />
                        </svg>
                        <span className="text-sm text-gray-500">0</span>
                      </div>
                      <div className="border-b-[1px] border-gray-200 my-4" />
                    </div>
                    <div>
                      <div className=" flex items-center space-x-4 ">
                        <div className="rounded-full w-8 h-8 bg-green-600">
                          <span className="text-xs flex justify-center text-white items-center translate-y-[50%] top-1/2 left-1/2">
                            <span className="capitalize cursor-pointer">
                              SD
                            </span>
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm cursor-pointer">
                            sdasdwqe qweqweqwe
                          </span>
                          <span className="text-sm text-gray-600">
                            Sat Apr 16 2022
                          </span>
                        </div>
                      </div>
                      <p className="text-sm mt-6 mb-4 break-words">
                        {" "}
                        wqeqweqqasdqeqw
                      </p>
                      <div className=" cursor-not-allowed items-center flex space-x-2">
                        <svg
                          fill="gray"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          aria-label="clap"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                          />
                        </svg>
                        <span className="text-sm text-gray-500">0</span>
                      </div>
                      <div className="border-b-[1px] border-gray-200 my-4" />
                    </div>
                    <div>
                      <div className=" flex items-center space-x-4 ">
                        <div className="rounded-full w-8 h-8 bg-green-600">
                          <img
                            src="https://cdn.sanity.io/images/gyc4tcpa/production/74f113d23af81cd9652655c29f52b985970f6c72-2084x3166.png"
                            className="rounded-full h-8 w-8 object-cover cursor-pointer"
                            alt="imag"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm cursor-pointer">
                            osam mosas{" "}
                          </span>
                          <span className="text-sm text-gray-600">
                            Thu Apr 21 2022
                          </span>
                        </div>
                      </div>
                      <p className="text-sm mt-6 mb-4 break-words"> opsi</p>
                      <div className=" cursor-not-allowed items-center flex space-x-2">
                        <svg
                          fill="gray"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          aria-label="clap"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                          />
                        </svg>
                        <span className="text-sm text-gray-500">0</span>
                      </div>
                      <div className="border-b-[1px] border-gray-200 my-4" />
                    </div>
                    <div>
                      <div className=" flex items-center space-x-4 ">
                        <div className="rounded-full w-8 h-8 bg-green-600">
                          <img
                            src="https://cdn.sanity.io/images/gyc4tcpa/production/74f113d23af81cd9652655c29f52b985970f6c72-2084x3166.png"
                            className="rounded-full h-8 w-8 object-cover cursor-pointer"
                            alt="imag"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm cursor-pointer">
                            sibas sibas{" "}
                          </span>
                          <span className="text-sm text-gray-600">
                            Fri Apr 22 2022
                          </span>
                        </div>
                      </div>
                      <p className="text-sm mt-6 mb-4 break-words">
                        {" "}
                        sibas sas
                      </p>
                      <div className=" cursor-not-allowed items-center flex space-x-2">
                        <svg
                          fill="gray"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          aria-label="clap"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                          />
                        </svg>
                        <span className="text-sm text-gray-500">0</span>
                      </div>
                      <div className="border-b-[1px] border-gray-200 my-4" />
                    </div>
                    <div>
                      <div className=" flex items-center space-x-4 ">
                        <div className="rounded-full w-8 h-8 bg-green-600">
                          <span className="text-xs flex justify-center text-white items-center translate-y-[50%] top-1/2 left-1/2">
                            <span className="capitalize cursor-pointer">
                              MU
                            </span>
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm cursor-pointer">
                            musashi Osama{" "}
                          </span>
                          <span className="text-sm text-gray-600">
                            Sat Apr 23 2022
                          </span>
                        </div>
                      </div>
                      <p className="text-sm mt-6 mb-4 break-words"> Cool</p>
                      <div className=" cursor-not-allowed items-center flex space-x-2">
                        <svg
                          fill="gray"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          aria-label="clap"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                          />
                        </svg>
                        <span className="text-sm text-gray-500">0</span>
                      </div>
                      <div className="border-b-[1px] border-gray-200 my-4" />
                    </div>
                    <div>
                      <div className=" flex items-center space-x-4 ">
                        <div className="rounded-full w-8 h-8 bg-green-600">
                          <span className="text-xs flex justify-center text-white items-center translate-y-[50%] top-1/2 left-1/2">
                            <span className="capitalize cursor-pointer">
                              OS
                            </span>
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm cursor-pointer">
                            osama daimmalh
                          </span>
                          <span className="text-sm text-gray-600">
                            Thu Apr 14 2022
                          </span>
                        </div>
                      </div>
                      <p className="text-sm mt-6 mb-4 break-words">
                        {" "}
                        You're killing it!!
                      </p>
                      <div className=" cursor-not-allowed items-center flex space-x-2">
                        <svg
                          fill="gray"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          aria-label="clap"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                          />
                        </svg>
                        <span className="text-sm text-gray-500">0</span>
                      </div>
                      <div className="border-b-[1px] border-gray-200 my-4" />
                    </div>
                    <div>
                      <div className=" flex items-center space-x-4 ">
                        <div className="rounded-full w-8 h-8 bg-green-600">
                          <img
                            src="https://cdn.sanity.io/images/gyc4tcpa/production/3659dc0e4badaaa76be8540728a87ea255269588-1790x1696.png"
                            className="rounded-full h-8 w-8 object-cover cursor-pointer"
                            alt="imag"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm cursor-pointer">
                            jeff bezos
                          </span>
                          <span className="text-sm text-gray-600">
                            Thu Apr 14 2022
                          </span>
                        </div>
                      </div>
                      <p className="text-sm mt-6 mb-4 break-words">
                        {" "}
                        Good article LOL!
                      </p>
                      <div className=" cursor-not-allowed items-center flex space-x-2">
                        <svg
                          fill="gray"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          aria-label="clap"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                          />
                        </svg>
                        <span className="text-sm text-gray-500">0</span>
                      </div>
                      <div className="border-b-[1px] border-gray-200 my-4" />
                    </div>
                    <div>
                      <div className=" flex items-center space-x-4 ">
                        <div className="rounded-full w-8 h-8 bg-green-600">
                          <span className="text-xs flex justify-center text-white items-center translate-y-[50%] top-1/2 left-1/2">
                            <span className="capitalize cursor-pointer">
                              SI
                            </span>
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm cursor-pointer">
                            simo bimo{" "}
                          </span>
                          <span className="text-sm text-gray-600">
                            Thu Apr 14 2022
                          </span>
                        </div>
                      </div>
                      <p className="text-sm mt-6 mb-4 break-words">
                        {" "}
                        asdqwgerqjkwe qweqhwedsah hqw
                      </p>
                      <div className=" cursor-not-allowed items-center flex space-x-2">
                        <svg
                          fill="gray"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          aria-label="clap"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                          />
                        </svg>
                        <span className="text-sm text-gray-500">0</span>
                      </div>
                      <div className="border-b-[1px] border-gray-200 my-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="hide"
              className="flex mb-36 mt-16 justify-between items-center"
            >
              <div className="flex space-x-8 items-center">
                {" "}
                <div className="flex space-x-2">
                  <div
                    className
                    style={{ display: "inline" }}
                    data-tooltipped
                    aria-describedby="tippy-tooltip-13"
                    data-original-title="Likes"
                  >
                    <div className="flex cursor-not-allowed space-x-2 cursor-pointer">
                      <svg
                        fill="gray"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        aria-label="clap"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">0</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div
                    className
                    style={{ display: "inline" }}
                    data-tooltipped
                    aria-describedby="tippy-tooltip-14"
                    data-original-title="Respond"
                  >
                    <div className="flex space-x-2 cursor-pointer">
                      <svg
                        className
                        width={24}
                        fill="gray"
                        height={24}
                        viewBox="0 0 24 24"
                        aria-label="responses"
                      >
                        <path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z" />
                      </svg>
                      <span className="text-sm text-gray-500">14</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex cursor-not-allowed space-x-2 ">
                <div
                  className
                  style={{ display: "inline" }}
                  data-tooltipped
                  aria-describedby="tippy-tooltip-15"
                  data-original-title="Not working yet"
                >
                  <div className=" cursor-not-allowed flex space-x-2">
                    <svg
                      className="cursor-not-allowed text-gray-800 hover:text-black duration-100"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z"
                        fill="#000"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <GetEmail/>
            <Reccomendations/>
          </div>
    </>
  )
}

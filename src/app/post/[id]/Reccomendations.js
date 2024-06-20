import React from 'react'

export default function Reccomendations() {
  return (
    <div className="py-12 ">
              <div className="flex items-center justify-between">
                <h1 className="capitalize text-xl font-medium">
                  more from User's Name
                </h1>
                <div className="flex space-x-4">
                  <button className="bg-green-600 rounded-full hover:bg-green-700 duration-500  px-4 py-2 text-white">
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
                    </svg>
                  </div>
                </div>
              </div>
              <div className="py-4 pr-0 mb-8 text-sm sm:pr-44">
                {" "}
                <p>
                  My name is User's Name and I am a Junior self taught Web
                  Developer. I enjoy using my skills to contribute to the
                  exciting technological advances.
                  <br />
                </p>
              </div>
              <div className="w-full">
                <div
                  className="flex space-y-4 justify-between items-center"
                  href="/post/11-useful-modern-javascript-tips"
                >
                  <div className="space-y-2 flex flex-col cursor-pointer">
                    <div>
                      <p className="text-sm text-gray-500">Thu Apr 14 2022</p>
                      <p className="sm:text-[21px] text-[18px] font-semibold ">
                        11 Useful Modern JavaScript Tips
                      </p>
                    </div>
                    <div className="sm:line-clamp-3 line-clamp-2 text-[13px] sm:text-[15px] text-gray-900">
                      <div>
                        <p>
                          In our day-to-day coding life, we frequently used
                          numbers to string conversion, check keys in the object
                          it exits or not, conditionally manipulate object data,
                          filter falsy value in the array, etc.
                        </p>
                        <p>
                          Here I come up with some amazing tips which are my
                          personal favorite ❤️ ️and very useful to make my code{" "}
                          <strong>shorter</strong> and{" "}
                          <strong>
                            clean.
                            <br />
                            <br />
                          </strong>
                          1. Conditionally <strong>add properties</strong>💡 in
                          the object
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="object-cover cursor-pointer w-24 h-24 sm:w-36 ml-10 sm:h-36"
                    src="https://cdn.sanity.io/images/gyc4tcpa/production/b5949bc8cd131c6e61f449340be97f26d9ba348e-1920x1080.png"
                    alt="image"
                  />
                </div>
                <div className="border-b-[1px] border-gray-200 my-10 " />
                <div className="flex justify-center items-center space-x-4">
                  <h1>Share your ideas with millions of readers.</h1>
                  <div
                    className
                    style={{ display: "inline" }}
                    data-tooltipped
                    aria-describedby="tippy-tooltip-16"
                    data-original-title="Not Working Yet"
                  >
                    <button className="bg-gray-800 cursor-not-allowed text-sm hover:bg-gray-900 duration-500 px-4 py-2 text-white rounded-full">
                      Write on medium
                    </button>
                  </div>
                </div>
                <div className="border-b-[1px] border-gray-200 my-10 " />
                <div>
                  <div
                    className="flex space-y-4 justify-between items-center"
                    href="/post/5-new-killer-features-of-next-js-12"
                  >
                    <div className="space-y-2 flex flex-col cursor-pointer">
                      <div>
                        <p className="text-sm text-gray-500">Thu Apr 21 2022</p>
                        <p className="sm:text-[21px] text-[18px] font-semibold ">
                          5 New Killer Features of Next.js 12
                        </p>
                      </div>
                      <div className="sm:line-clamp-3 line-clamp-2 text-[13px] sm:text-[15px] text-gray-900">
                        {" "}
                        <div className="capitalize text-[16px]">
                          <p>
                            The Next.js framework was created by Vercel in 2016.
                            It started as a server-side rendering-focused
                            framework. It has gradually evolved since. Now it is
                            a complete suite to build blazing fast React apps.
                            It is developer-friendly and intuitive to use. Here
                            are its strongest features:
                          </p>
                          <ul>
                            <li>Page-based routing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <img
                      className="object-cover cursor-pointer w-24 h-24 sm:w-36 ml-10 sm:h-36"
                      src="https://cdn.sanity.io/images/gyc4tcpa/production/ebc21e1c5833172b2d0b7d9dbc2cf047924c646d-1200x674.png"
                      alt="image"
                    />
                  </div>
                  <div className="border-b-[1px] border-gray-200 my-10 " />
                </div>
                <div>
                  <div
                    className="flex space-y-4 justify-between items-center"
                    href="/post/11-useful-modern-javascript-tips"
                  >
                    <div className="space-y-2 flex flex-col cursor-pointer">
                      <div>
                        <p className="text-sm text-gray-500">Thu Apr 14 2022</p>
                        <p className="sm:text-[21px] text-[18px] font-semibold ">
                          11 Useful Modern JavaScript Tips
                        </p>
                      </div>
                      <div className="sm:line-clamp-3 line-clamp-2 text-[13px] sm:text-[15px] text-gray-900">
                        {" "}
                        <div className="capitalize text-[16px]">
                          <p>
                            In our day-to-day coding life, we frequently used
                            numbers to string conversion, check keys in the
                            object it exits or not, conditionally manipulate
                            object data, filter falsy value in the array, etc.
                          </p>
                          <p>
                            Here I come up with some amazing tips which are my
                            personal favorite ❤️ ️and very useful to make my
                            code <strong>shorter</strong> and{" "}
                            <strong>
                              clean.
                              <br />
                              <br />
                            </strong>
                            1. Conditionally <strong>add properties</strong>💡
                            in the object
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                    <img
                      className="object-cover cursor-pointer w-24 h-24 sm:w-36 ml-10 sm:h-36"
                      src="https://cdn.sanity.io/images/gyc4tcpa/production/b5949bc8cd131c6e61f449340be97f26d9ba348e-1920x1080.png"
                      alt="image"
                    />
                  </div>
                  <div className="border-b-[1px] border-gray-200 my-10 " />
                </div>
                <div>
                  <div
                    className="flex space-y-4 justify-between items-center"
                    href="/post/next-js-the-next-big-thing"
                  >
                    <div className="space-y-2 flex flex-col cursor-pointer">
                      <div>
                        <p className="text-sm text-gray-500">Wed Apr 13 2022</p>
                        <p className="sm:text-[21px] text-[18px] font-semibold ">
                          Next.js -The next big thing
                        </p>
                      </div>
                      <div className="sm:line-clamp-3 line-clamp-2 text-[13px] sm:text-[15px] text-gray-900">
                        {" "}
                        <div className="capitalize text-[16px]">
                          <p>
                            Nextjs is a React framework for developing single
                            page Javascript applications. It has powers to
                            Develop beautiful Web application for different
                            platform like Windows, Linux and mac. If you have
                            little experience in react and looking forward to
                            know more about react ecosystem then you should have
                            knowledge about Next.js framework. The benefits of
                            this framework are numerous, both for our clients’
                            applications as well as for our development team.
                            The more we, as users, interact digitally, the more
                            impatient we become as our expectations are not met
                            by websites and apps that fail to load within
                            milliseconds. Technology decisions play a large part
                            in being able to deliver highly performant,
                            scalable, successful applications and as such, we
                            have started using Next.js for a number of reasons;
                            for the most part related to speed and performance.
                          </p>
                          <figure>
                            <img src="https://cdn.sanity.io/images/gyc4tcpa/production/422dd2ab3efdd860d749b12086973baa8a9a39fa-1000x667.jpg" />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <img
                      className="object-cover cursor-pointer w-24 h-24 sm:w-36 ml-10 sm:h-36"
                      src="https://cdn.sanity.io/images/gyc4tcpa/production/4d1a6db90cec35063c29e64b4abd3ac3bca39daa-1000x582.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="border-b-[1px] border-gray-200 my-10 " />
                </div>
                <div>
                  <div
                    className="flex space-y-4 justify-between items-center"
                    href="/post/why-is-nextjs-so-fast-as-compere-to-reactjs"
                  >
                    <div className="space-y-2 flex flex-col cursor-pointer">
                      <div>
                        <p className="text-sm text-gray-500">Wed Apr 13 2022</p>
                        <p className="sm:text-[21px] text-[18px] font-semibold ">
                          Why is Nextjs so fast as compere to Reactjs?
                        </p>
                      </div>
                      <div className="sm:line-clamp-3 line-clamp-2 text-[13px] sm:text-[15px] text-gray-900">
                        {" "}
                        <div className="capitalize text-[16px]">
                          <p>
                            The article is based on create-next-app . If you
                            check the dependencies list in your project for
                            that, you reach my reactjs base article. You are
                            also surprised when you know the answer because
                            nextjs have a great team that spends tons of time
                            building nextjs.
                          </p>
                          <blockquote>
                            My question is,{" "}
                            <strong>
                              how many dependencies need to run the hello-world
                              nextjs app
                            </strong>
                            ?
                          </blockquote>
                        </div>
                      </div>
                    </div>
                    <img
                      className="object-cover cursor-pointer w-24 h-24 sm:w-36 ml-10 sm:h-36"
                      src="https://cdn.sanity.io/images/gyc4tcpa/production/649b09050940bec8aba09cbc8c1c455cb093978f-1920x1080.png"
                      alt="image"
                    />
                  </div>
                  <div className="border-b-[1px] border-gray-200 my-10 " />
                </div>
                <div>
                  <div
                    className="flex space-y-4 justify-between items-center"
                    href="/post/how-i-code-for-8-hours-without-feeling-tired"
                  >
                    <div className="space-y-2 flex flex-col cursor-pointer">
                      <div>
                        <p className="text-sm text-gray-500">Fri Apr 22 2022</p>
                        <p className="sm:text-[21px] text-[18px] font-semibold ">
                          How I code for 8 hours without feeling tired.
                        </p>
                      </div>
                      <div className="sm:line-clamp-3 line-clamp-2 text-[13px] sm:text-[15px] text-gray-900">
                        {" "}
                        <div className="capitalize text-[16px]">
                          <p>
                            I thought it was okay to just sit down at my desk,
                            open my laptop, take a task from my To-Do list, and
                            code until I felt tired. But in reality, this style
                            of work always killed my productivity level after
                            2–4 hours of coding.
                          </p>
                          <h1>🔴 I have coded wrong my whole life.</h1>
                        </div>
                      </div>
                    </div>
                    <img
                      className="object-cover cursor-pointer w-24 h-24 sm:w-36 ml-10 sm:h-36"
                      src="https://cdn.sanity.io/images/gyc4tcpa/production/91349ded9a5e22ae646e70be5235c1664f10131a-950x553.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="border-b-[1px] border-gray-200 my-10 " />
                </div>
                <div>
                  <div
                    className="flex space-y-4 justify-between items-center"
                    href="/post/getting-started-with-react-and-next-js"
                  >
                    <div className="space-y-2 flex flex-col cursor-pointer">
                      <div>
                        <p className="text-sm text-gray-500">Thu Apr 21 2022</p>
                        <p className="sm:text-[21px] text-[18px] font-semibold ">
                          Getting Started with React and Next.JS{" "}
                        </p>
                      </div>
                      <div className="sm:line-clamp-3 line-clamp-2 text-[13px] sm:text-[15px] text-gray-900">
                        {" "}
                        <div className="capitalize text-[16px]">
                          <p>
                            It abstracts away all those performance and
                            development setups you need with a typical React app
                            and allows you to focus only on what matters — your
                            business logic code. I had my first experience with
                            Next.js about 6 months ago when I was trying to
                            learn new technologies which are based on
                            react/javascript.
                          </p>
                          <ol>
                            <li>Best SEO practices</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <img
                      className="object-cover cursor-pointer w-24 h-24 sm:w-36 ml-10 sm:h-36"
                      src="https://cdn.sanity.io/images/gyc4tcpa/production/f7ac0e380930fb1b5ef0df2cb413382662236c13-1200x682.webp"
                      alt="image"
                    />
                  </div>
                  <div className="border-b-[1px] border-gray-200 my-10 " />
                </div>
                <div>
                  <div
                    className="flex space-y-4 justify-between items-center"
                    href="/post/top-10-react-icon-libraries"
                  >
                    <div className="space-y-2 flex flex-col cursor-pointer">
                      <div>
                        <p className="text-sm text-gray-500">Mon Apr 18 2022</p>
                        <p className="sm:text-[21px] text-[18px] font-semibold ">
                          Top 10 React Icon Libraries
                        </p>
                      </div>
                      <div className="sm:line-clamp-3 line-clamp-2 text-[13px] sm:text-[15px] text-gray-900">
                        {" "}
                        <div className="capitalize text-[16px]">
                          <p>
                            React is a JavaScript library that lets you develop
                            a top UI for both web and mobile applications. It
                            conveniently integrates with{" "}
                            <a href="https://www.lambdatest.com/blog/best-javascript-framework-2020/">
                              other JavaScript frameworks
                            </a>{" "}
                            and libraries and includes small, reusable bits of
                            code called the components. React component
                            libraries not only optimize your UI development
                            process but also provide extreme flexibility due to
                            their high modularity.
                          </p>
                          <h2>
                            1.
                            <a href="https://react-icons.github.io/react-icons/search">
                              {" "}
                              React Icons
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <img
                      className="object-cover cursor-pointer w-24 h-24 sm:w-36 ml-10 sm:h-36"
                      src="https://cdn.sanity.io/images/gyc4tcpa/production/84c703bff50c9ab81a3738456c8d8682f38ef57d-1400x933.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="border-b-[1px] border-gray-200 my-10 " />
                </div>
              </div>
            </div>
  )
}

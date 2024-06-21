import { samplepost } from "@/_consts/feeds";
import { getDate } from "@/lib/funs";

export default function PostList() {
  return (
    <div>
      {samplepost.map((post, i) => {
        return <Post post={post} key={i} />;
      })}
    </div>
  );
}

export const Post = ({post}) => {
  return (
    <>
      <div>
        <div
          className="flex space-y-4 justify-between items-center"
          href="/post/next-js-the-next-big-thing"
        >
          <div className="space-y-2 flex flex-col cursor-pointer">
            <div>
              <p className="text-sm text-gray-500">{getDate(post.date)}</p>
              <p className="sm:text-[21px] text-[18px] font-semibold ">
                {post.title}
              </p>
            </div>
            <div className="sm:line-clamp-3 line-clamp-2 text-[13px] sm:text-[15px] text-gray-900">
              {" "}
              <div className="capitalize text-[16px]">
                <p>
                  Nextjs is a React framework for developing single page
                  Javascript applications. It has powers to Develop beautiful
                  Web application for different platform like Windows, Linux and
                  mac. If you have little experience in react and looking
                  forward to know more about react ecosystem then you should
                  have knowledge about Next.js framework. The benefits of this
                  framework are numerous, both for our clients’ applications as
                  well as for our development team. The more we, as users,
                  interact digitally, the more impatient we become as our
                  expectations are not met by websites and apps that fail to
                  load within milliseconds. Technology decisions play a large
                  part in being able to deliver highly performant, scalable,
                  successful applications and as such, we have started using
                  Next.js for a number of reasons; for the most part related to
                  speed and performance.
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
    </>
  );
};

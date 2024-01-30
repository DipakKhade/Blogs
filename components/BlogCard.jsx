import React from "react";
import Link from "next/link";
const BlogCard = ({ image, date, CardTitle, CardDescription ,blogref}) => {
    return (
      <>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
        <Link href={blogref || '/'}>
          <div className="mb-10 w-full border border-zinc-800 dark:border-zinc-400 p-2 rounded-md hover:shadow-lg hover:scale-105 transition ease-in-out delay-150">
            <div className="mb-8 overflow-hidden rounded ">
              <img src={image} alt="" className="w-full" />
            </div>
            <div>
              {date && (
                <span className="mb-5 inline-block rounded bg-purple-500 px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                  {date}
                </span>
              )}
              <h3>
                <p
                 
                  className="mb-4 inline-block text-xl font-semibold text-dark hover:text-purple-600 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  {CardTitle}
                </p>
              </h3>
              <p className="dark:text-purple-200">
                {CardDescription}
              </p>
            </div>
          </div>
          </Link>
        </div>
      </>
    );
  };

  export default BlogCard;
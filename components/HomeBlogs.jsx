"use client";
import React, { Suspense, useEffect } from "react";
import dynamic from "next/dynamic";
import BlogCard from "./BlogCard";
import { useState } from "react";
import Loading from "./loading";

const HomeBlogs = () => {
  const [blog, setBlog] = useState();
  const [fetched, setFetched] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  useEffect(() => {
    (async () => {
      const local = "http://localhost:3000/";
      const domain = "https://dipak-khade-blogs.vercel.app";
      const data = await fetch(`${domain}/api/blogs`);
      const responce = await data.json();
      setBlog(responce);
      setFetched(true);
      // console.log(responce)
    })();
  }, []);

  if (!fetched) {
    return <Loading />;
  }

  return (
    <div className="dark:bg-zinc-900 z-0">
      <div className="w-fit mx-auto flex space-x-2">
        <div className="h-0.5 w-2 bg-gray-600"></div>
        <div className="h-0.5 w-32 bg-gray-600"></div>
        <div className="h-0.5 w-2 bg-gray-600"></div>
      </div>

      <div className="p-4 md:p-16">
        <section className="pt-4 dark:bg-zinc-900 lg:pb-20 ">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                  <span className="mb-2 block text-lg font-semibold text-purple-500">
                    Blogs
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                    Recent Blog
                  </h2>
                  <p className="text-base text-body-color dark:text-white">
                    Blogs about web tech
                  </p>
                </div>
              </div>
            </div>

            <div className="-mx-4 flex flex-wrap">
              {/* webrtc */}

              <Suspense fallback={<Loading />}>
                {blog &&
                  blog.blogs.map((b) => (
                    <BlogCard
                      key={b._id}
                      date={b.date}
                      CardTitle={b.CardTitle}
                      CardDescription={b.CardDescription}
                      image={b.image}
                      blogref={b.blogref}
                    />
                  ))}
              </Suspense>
            </div>
          </div>
        </section>
      </div>

      {showDiv && (
        <div className="text-xl text-violet-500 font-bold p-3 ml-24 md:ml-[40vw]">
          You reach at end
        </div>
      )}
      <button
        onClick={() => setShowDiv(!showDiv)}
        className="btn hover:text-purple-500 bg-purple-300 border border-purple-400 p-3 mb-4 w-[80vw] ml-[10vw]"
      >
        Load More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>

      <div></div>
    </div>
  );
};
export default dynamic(() => Promise.resolve(HomeBlogs), { ssr: false });

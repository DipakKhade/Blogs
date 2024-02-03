'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Loading from "./loading";
import Link from "next/link";
export function Card() {
  const [blog, setBlog] = useState();
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const local = "http://localhost:3000/";
        const domain = "https://dipak-khade-blogs.vercel.app";
        const data = await fetch(`${domain}/api/blogs`);
        const response = await data.json();
        response.blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

        setBlog(response);
        setFetched(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error
      }
    };

    fetchData();
  }, []);

  return (
    <>
     <h3 className="md:ml-[46vw] ml-28 mb-6 p-4 text-4xl dark:text-white">Blogs</h3>
      <div className="flex flex-wrap justify-center gap-8 hover:cursor-pointer p-4 md:p-0">
     
        {fetched ? (
          blog.blogs.map((b) => (
            <Link key={b._id} href={`${b.blogref}`}>
            <CardContainer  className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {b.CardTitle}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {b.CardDescription}
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <Image
                    src={b.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >

                    <div> →</div>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    {b.date}
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            </Link>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}

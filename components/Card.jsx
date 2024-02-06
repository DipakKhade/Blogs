'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
          [blog.blogs[0]].map((b) => (
            <Link key={b._id} href={`${b._id}`}>

            <div className="card w-80 border  dark:text-white rounded-lg p-3">
  <figure><Image src={b.image} width={400} height={100} alt="blogimg" className="object-cover h-48 w-96" /></figure>
  <div className="card-body">
    <h2 className="card-title text-xl font-semibold text-purple-400 hover:text-purple-700">
    {b.CardTitle}
    </h2>
    <p className="text-slate-800 dark:text-slate-100">  {b.CardDescription}</p>
    <div className="card-actions flex justify-end">
      <div className="badge badge-outline"> {b.date}</div>
    </div>
  </div>
</div>


            </Link>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}

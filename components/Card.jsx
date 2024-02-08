'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loading from "./loading";
import Link from "next/link";
export function Card() {
  const [blog, setBlog] = useState();
  const [fetched, setFetched] = useState(false);
const [loadblogs, setloadblogs] = useState(false)
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
     <h3 className="md:ml-[46vw] ml-24 mb-6 text-4xl dark:text-white">Blogs</h3>
      <div className="flex flex-wrap justify-center gap-8 hover:cursor-pointer p-4 md:p-0">
     
        {fetched ? (
         blog.blogs.map((b) => (
            <Link key={b._id} href={`${b._id}`}>

            <div className="card w-80 md:w-96 hover:opacity-90 dark:text-white rounded-lg p-3">
  <figure><Image src={b?.image} width={300} height={100} alt="blogimg" className="object-cover h-48 w-80 border" /></figure>
  <div className="card-body">
    <h2 className="card-title text-xl hover:text-slate-700">
    {b.CardTitle}
    </h2>
    {/* <p className="text-slate-800 dark:text-slate-100">  {b.CardDescription}</p> */}
    <div className="card-actions flex justify-end">
      <div> {b.date}</div>
    </div>
  </div>
</div>


            </Link>
          ))
        ) : (
          <Loading />
        )}
      </div>
      <div
    className="fter:h-px my-24 flex items-center before:h-px before:flex-1  before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">

<div>
{
  loadblogs && <div className="flex">no more blogs to fetch</div>
}
    <button type="button"
    onClick={()=>setloadblogs(true)}
        className="flex items-center rounded-full border border-gray-300 bg-secondary-50 px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 dark:bg-slate-50 dark:hover:bg-slate-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4">
            <path fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd" />
        </svg>
        View More
    </button>
</div>

</div>
    </>
  );
}

'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import TracingBeam  from "../../components/ui/tracing-beam";
import { Contact } from "lucide-react";
import Content from "@/components/Content";
import Loading from "../loading";
export function Page({ params }) {
  const [blog, setBlog] = useState(null);
  const [fetched, setFetched] = useState(false);
const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const local = "http://localhost:3000";
        const domain='https://dipak-khade-blogs.vercel.app'
        const data = await fetch(`${domain}/api/blogs`);
        const response = await data.json();
        const currentBlog = await response.blogs.find((blog) => blog._id === params._id);
        setBlog(currentBlog);
        setFetched(true);
        // console.log(response);
        setMounted(true)

      } catch (error) {
        // console.error("Error fetching data:", error);
        // Handle error
      }
    };

    fetchData();
  }, [params._id]);

  if(!mounted){
    return <Loading/>
  
  }


  return (
    <>
      {fetched && blog && (
        
    <div className="mt-2 md:mt-24 p-3">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
      <Content/>
          <div className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {blog?.CardTitle}
            </h2>
 
            <p className={twMerge( "text-xl mb-4")}>
              {blog?.CardDescription}
            </p>
 
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {blog?.image && blog.mainimage && blog.mainimage.length >= 3  && (
                
                <Image
                  src={blog?.mainimage[0]}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {blog.maindesc[0]}
              
              {blog?.image && blog.mainimage && blog.mainimage.length >= 3  && (
                
                <Image
                  src={blog?.mainimage[1]}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}

              {blog?.maindesc[1]}

              {blog?.image && blog.mainimage && blog.mainimage.length >= 3  && (
              <Image
                  src={blog?.mainimage[2]}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {blog?.maindesc[2]}
            </div>
          </div>
   
      </div>
      <div className="ml-[40vw]">
     <p>Dipak Khade</p>
     <p>{blog?.date}</p>
</div>
    </div>
      )}
    </>
  );
}

export default Page;

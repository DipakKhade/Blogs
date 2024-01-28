'use client';
import React, { Suspense, useEffect } from 'react'
import dynamic from "next/dynamic";
import BlogCard from './BlogCard'
import { useState } from 'react';
import Loading from './loading';

const HomeBlogs = () => {
const [blog, setBlog] = useState()
const [fetched, setFetched] = useState(false)
 useEffect(() => {
  ( async()=>{
    const local='http://localhost:3000/'
    const domain='https://dipak-khade-blogs.vercel.app'
    const data= await fetch(`${local}/api/blogs`)
    const responce=await data.json()
    setBlog(responce)
    setFetched(true)
    // console.log(responce)
  })();
 
 }, [])
 
 if(!fetched){
  return <Loading/>
 }

  return (
    <div className='dark:bg-zinc-900 z-0'>
      

      <main>
    

      </main>

<div className="w-fit mx-auto flex space-x-2">
  <div className="h-0.5 w-2 bg-gray-600"></div>
  <div className="h-0.5 w-32 bg-gray-600"></div>
  <div className="h-0.5 w-2 bg-gray-600"></div>
</div>



<div className='p-4 md:p-16'>
  

<section className="bg-white pb-10 pt-4 dark:bg-zinc-900 lg:pb-20 ">
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

<Suspense fallback={<Loading/>} >

{ blog &&
 blog.blogs.map((b)=>(
  <BlogCard
  key={b._id}
  date={b.date}
  CardTitle={b.CardTitle}
  CardDescription={b.CardDescription}
  image={b.image}
  blogref={b.blogref}
  />
 ))
}

</Suspense>

          </div>
        </div>
      </section>
      </div>
  

    </div>
  )
}
export default dynamic (() => Promise.resolve(HomeBlogs), {ssr: false})

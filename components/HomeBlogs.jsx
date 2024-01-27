
import React, { lazy } from 'react'
import Link from 'next/link'
import dynamic from "next/dynamic";
import BlogCard from './BlogCard'

const HomeBlogs = () => {
  return (
    <div className='dark:bg-zinc-900 z-0'>
      

      <main>
    

        <article>
  <header className="mx-auto max-w-screen-lg rounded-t-lg bg-white text-center shadow-lg dark:bg-zinc-700 pt-8">
    <h1 className='text-2xl p-2 font-extrabold'>&lt; Dipak Khade/ &gt;</h1>
   
    <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">Exploring the World of Code and Tech</h1>
    <p className="mt-6 text-lg text-gray-700 dark:text-zinc-50">Discover the latest trends, insights, web development, and other tech topics.</p>
   
  </header>

  {/* Content */}
  <div className="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg dark:bg-zinc-700 dark:text-zinc-50">
    <h2 className="text-2xl font-semibold">Welcome to Your Weekend Tech Blog!</h2>
    <blockquote className="max-w-lg border-l-4 px-4">
      Dive into the fascinating world of technology with our weekly blog posts covering coding, web development, and more!
      <span className="whitespace-nowrap text-sm">— Your Blog Team</span>
    </blockquote>
    <p>Every weekend, we bring you fresh insights, tutorials, and news about the ever-evolving landscape of technology. Whether you're a seasoned developer or just starting your coding journey, there's something for everyone here.</p>
    <p>Stay tuned for our upcoming posts where we'll explore the latest tools, frameworks, and best practices in the world of code and web development.</p>
    {/* Add more introductory content about your blog */}
  </div>
</article>

      </main>

<div className="w-fit mx-auto mt-10 flex space-x-2">
  <div className="h-0.5 w-2 bg-gray-600"></div>
  <div className="h-0.5 w-32 bg-gray-600"></div>
  <div className="h-0.5 w-2 bg-gray-600"></div>
</div>



<div className='p-4 md:p-16'>
  

<section className="bg-white pb-10 pt-20 dark:bg-zinc-900 lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            

{/* // Next.js Card */}
<BlogCard
  date="Jan 5, 2024"
  CardTitle="Next.js: The React Framework"
  CardDescription="Next.js is a React framework that enables functionality such as server-side rendering, static site generation, and routing."
  image="https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg"
  blogref='/nextjs'
/>
{/* 
// Redis Card */}
<BlogCard
  date="Jan 10, 2024"
  CardTitle="Redis: The In-Memory Data Structure Store"
  CardDescription="Redis is an open-source, in-memory data structure store used as a database, cache, and message broker."
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRx0dQTevYgijMfoT1xqfTFOGZbeP2TZKnitqw14-EocHgm4bDilgPK7w8A_VhNN9f5VM&usqp=CAU"
/>

{/* // Tailwind CSS Card */}
<BlogCard
  date="Jan 15, 2024"
  CardTitle="Tailwind CSS: A Utility-First CSS Framework"
  CardDescription="Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML."
  image="https://www.creative-tim.com/blog/content/images/size/w960/wordpress/2021/02/blog-2.jpg"
/>

{/* // NextAuth Card */}
<BlogCard
  date="Jan 20, 2024"
  CardTitle="NextAuth: Authentication for Next.js"
  CardDescription="NextAuth is an authentication library for Next.js that supports various authentication providers and strategies."
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWl0kEQGxUzfriLR0ZIk6dhFmHzbB5__2Gdg&usqp=CAU"
/>

{/* webrtc */}
<BlogCard
  date="Jan 27, 2024"
  CardTitle="WebRTC: Real-Time Communication on the Web"
  CardDescription="Explore the capabilities of WebRTC and learn how it enables real-time communication directly in web browsers."
  image="https://webrtcclient.com/wp-content/uploads/2021/09/WebRTC-740-fi.png"
/>

{/* nginx */}
<BlogCard
  date="Jan 27, 2024"
  CardTitle="Mastering Nginx: Optimizing Your Web Server"
  CardDescription="Unlock the full potential of Nginx and optimize your web server performance with best practices and advanced configurations."
  image="https://miro.medium.com/v2/resize:fit:1200/0*mjG1YdoT7xPcnznN.jpg"
/>


          </div>
        </div>
      </section>
      </div>
  

    </div>
  )
}
export default dynamic (() => Promise.resolve(HomeBlogs), {ssr: false})


import React, { lazy } from 'react'
import Link from 'next/link'
import Image from 'next/image'
const HomeBlogs = () => {
  return (
    <div className='dark:bg-zinc-900 '>
      

      <main>
        <article>
          <header className="mx-auto max-w-screen-lg rounded-t-lg bg-white text-center shadow-lg dark:bg-zinc-700 pt-8">
            <p className="text-gray-500">Published Jan 14, 2024</p>
            <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">Exploring Next.js 14 Features</h1>
            <p className="mt-6 text-lg text-gray-700 dark:text-zinc-50">Discover the latest enhancements and improvements in Next.js 14</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">React</button>
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Next.js</button>
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Web Development</button>
            </div>
          </header>

          {/* Content */}
          <div className="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg dark:bg-zinc-700 dark:text-zinc-50">
            <h2 className="text-2xl font-semibold">What's New in Next.js 14?</h2>
            <blockquote className="max-w-lg border-l-4 px-4">
              Explore the latest features and enhancements that come with Next.js 14, the popular React framework for building web applications.
              <span className="whitespace-nowrap text-sm">— Next.js Team</span>
            </blockquote>
            <p>Next.js 14 brings a slew of exciting features and improvements, making it easier than ever to build powerful and performant web applications. In this post, we'll take a closer look at some of the standout additions to the framework.</p>
            <p>Let's dive in and discover the advancements that Next.js 14 has to offer.</p>
            {/* More content goes here */}
          </div>
        </article>
      </main>

<div className="w-fit mx-auto mt-10 flex space-x-2">
  <div className="h-0.5 w-2 bg-gray-600"></div>
  <div className="h-0.5 w-32 bg-gray-600"></div>
  <div className="h-0.5 w-2 bg-gray-600"></div>
</div>

<aside aria-label="Recent Posts" className="mx-auto mt-10 max-w-screen-xl py-20">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
   
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Most Recent Posts</h2>
      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Navigating the Digital Realm with Insights into Web Development and the Latest Tech Trends.</p>
    </div>
   
    <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
     
    <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
      <Link href={'/next-auth'} className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
        <Image
          src="https://repository-images.githubusercontent.com/119162419/3e7988a9-4746-4688-a380-738608be0530"
      quality={100}
          alt=""
          width={150}
          height={100}
          className="group-hover:scale-110 absolute inset-0 h-full w-full  transition duration-200"
        />
      </Link>

      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-400">December 18, 2023</span>

        <h2 className="text-xl font-bold text-gray-800">
          <Link href={'/next-auth'} className="active:text-sky-600 transition duration-100 hover:text-sky-500">
            Exploring NextAuth.js for Secure Authentication
          </Link>
        </h2>

        <p className="text-gray-500">
          NextAuth.js is a powerful authentication library designed for Next.js, providing a seamless and secure way to implement authentication in your web applications. In this article, we'll delve into the features and benefits of NextAuth.js and how it simplifies the authentication process.
        </p>

        <div>
          <Link href={'/next-auth'} className="active:text-sky-700 font-semibold text-sky-500 transition duration-100 hover:text-sky-600">
            Read more
          </Link>
        </div>
      </div>
    </article>
     
    <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
      <Link href={'/docker-intro'} className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
      <Image
          src="https://avatars.githubusercontent.com/u/5429470?s=280&v=4"
      quality={100}
          alt=""
          width={100}
          height={100}
          className="group-hover:scale-110 absolute inset-0 h-full w-full  transition duration-200"
        />
      </Link>
    

      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-400">December 18, 2023</span>

        <h2 className="text-xl font-bold text-gray-800">
          <Link href={'/docker-intro'} className="active:text-sky-600 transition duration-100 hover:text-sky-500">
            Demystifying Docker: A Deep Dive into Containerization
          </Link>
        </h2>

        <p className="text-gray-500">
          Discover the transformative world of Docker and containerization, unraveling the complexities of deployment, scalability, and seamless software development.
        </p>

        <div>
          <Link href={'/docker-intro'} className="active:text-sky-700 font-semibold text-sky-500 transition duration-100 hover:text-sky-600">
            Read more
          </Link>
        </div>
      </div>
    </article>
      
     
    <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
      <Link href={'/express-guide'} className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
      <Image
          src="https://blog.logrocket.com/wp-content/uploads/2020/12/express-middlewares-complete-guide.png"
      quality={100}
          alt=""
          width={100}
          height={100}
          className="group-hover:scale-110 absolute inset-0 h-full w-full  transition duration-200"
        />
      </Link>
  

      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-400">December 18, 2023</span>

        <h2 className="text-xl font-bold text-gray-800">
          <Link href={'/express-guide'} className="active:text-sky-600 transition duration-100 hover:text-sky-500">
            Mastering Express.js: A Comprehensive Guide to Building Web Applications
          </Link>
        </h2>

        <p className="text-gray-500">
          Dive into the world of Express.js and learn how to build robust and scalable web applications using this powerful Node.js framework.
        </p>

        <div>
          <Link href={'/express-guide'} className="active:text-sky-700 font-semibold text-sky-500 transition duration-100 hover:text-sky-600">
            Read more
          </Link>
        </div>
      </div>
    </article>
      

    <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
      <Link href={'/tailwindcss-intro'} className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
      <Image
          src="https://miro.medium.com/v2/resize:fit:512/1*JEHLmWo6_SrpHPiP4AimIw.png"
      quality={100}
          alt=""
          width={100}
          height={100}
          className="group-hover:scale-110 absolute inset-0 h-full w-full  transition duration-200"
        />
      </Link>
 

      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-400">December 18, 2023</span>

        <h2 className="text-xl font-bold text-gray-800">
          <Link href={'/tailwindcss-intro'} className="active:text-sky-600 transition duration-100 hover:text-sky-500">
            Unleashing Creativity with Tailwind CSS: A Comprehensive Introduction
          </Link>
        </h2>

        <p className="text-gray-500">
          Explore the power of Tailwind CSS and learn how to streamline your web development workflow with its utility-first approach and customizable design system.
        </p>

        <div>
          <Link href={'/tailwindcss-intro'} className="active:text-sky-700 font-semibold text-sky-500 transition duration-100 hover:text-sky-600">
            Read more
          </Link>
        </div>
      </div>
    </article>
    </div>
  </div>
</aside>

    </div>
  )
}

export default HomeBlogs

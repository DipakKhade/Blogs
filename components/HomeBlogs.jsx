
import React, { lazy } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from 'react-icons/fa';

import { VscTerminal } from "react-icons/vsc";
import logoimg from "../resources/logoimg.png";


const HomeBlogs = () => {
  return (
    <div className='dark:bg-zinc-900 mt-24 md:mt-52'>
      

      <main>
        <article>
          <header className="mx-auto max-w-screen-lg rounded-t-lg bg-white text-center shadow-lg dark:bg-zinc-700 pt-8">
          <h1 className='text-2xl p-2 text-purple-600 font-extrabold'>&lt; Diapk Khade / &gt;</h1>
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
            <h2 className="text-2xl font-semibold">What&apos;s New in Next.js 14?</h2>
            <blockquote className="max-w-lg border-l-4 px-4">
              Explore the latest features and enhancements that come with Next.js 14, the popular React framework for building web applications.
              <span className="whitespace-nowrap text-sm">— Next.js Team</span>
            </blockquote>
            <p>Next.js 14 brings a slew of exciting features and improvements, making it easier than ever to build powerful and performant web applications. In this post, we&apos;ll take a closer look at some of the standout additions to the framework.</p>
            <p>Let&apos;s dive in and discover the advancements that Next.js 14 has to offer.</p>
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
          <Link href={'/next-auth'} className="text-purple-600 transition duration-100 hover:text-purple-500">
            Exploring NextAuth.js for Secure Authentication
          </Link>
        </h2>

        <p className="text-gray-500">
          NextAuth.js is a powerful authentication library designed for Next.js, providing a seamless and secure way to implement authentication in your web applications. In this article, we&apos;ll delve into the features and benefits of NextAuth.js and how it simplifies the authentication process.
        </p>

        <div>
          <Link href={'/next-auth'} className="text-purple-700 font-semibold  transition duration-100 hover:text-purple-600">
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
          <Link href={'/docker-intro'} className="text-purple-600 transition duration-100 hover:text-purple-500">
            Demystifying Docker: A Deep Dive into Containerization
          </Link>
        </h2>

        <p className="text-gray-500">
          Discover the transformative world of Docker and containerization, unraveling the complexities of deployment, scalability, and seamless software development.
        </p>

        <div>
          <Link href={'/docker-intro'} className="text-purple-700 font-semibold transition duration-100 hover:text-purple-600">
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
          <Link href={'/express-guide'} className="text-purple-600 transition duration-100 hover:text-purple-500">
            Mastering Express.js: A Comprehensive Guide to Building Web Applications
          </Link>
        </h2>

        <p className="text-gray-500">
          Dive into the world of Express.js and learn how to build robust and scalable web applications using this powerful Node.js framework.
        </p>

        <div>
          <Link href={'/express-guide'} className="text-purple-700 font-semibold transition duration-100 hover:text-purple-600">
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
          <Link href={'/tailwindcss-intro'} className="text-purple-600 transition duration-100 hover:text-purple-500">
            Unleashing Creativity with Tailwind CSS: A Comprehensive Introduction
          </Link>
        </h2>

        <p className="text-gray-500">
          Explore the power of Tailwind CSS and learn how to streamline your web development workflow with its utility-first approach and customizable design system.
        </p>

        <div>
          <Link href={'/tailwindcss-intro'} className="text-purple-700 font-semibold transition duration-100 hover:text-purple-600">
            Read more
          </Link>
        </div>
      </div>
    </article>
    </div>
  </div>
</aside>
  
  <div className="flex flex-row mx-auto p-4">
  <Link href={'/'}>
    <button type="button" className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-purple-700 hover:text-white px-3 md:ml-[8vw] ml-4">
      <div className="flex flex-row align-middle">
        <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
        </svg>
        <p className="ml-2">Prev</p>
      </div>
    </button>
</Link>
<Link href={'/nextjs/approuter'}>
    <button type="button" className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-purple-700 hover:text-white px-3 md:ml-[70vw] ml-20">
      <div className="flex flex-row align-middle">
        <span className="mr-2">Next</span>
        <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </div>
    </button>
</Link>
</div>
<div className="md:ml-[40vw] ml-12 mb-4">
          <div className="flex">
            <div>
              {" "}
              <Image
                src={logoimg}
                width={200}
                alt="logo"
                className="mix-blend-multiply bg-purple-400"
              />
              <div>
          <ul className="flex mt-4 dark:text-Zinc-900  space-x-5 items-center md:mt-0 lg:mb-6 text-sm font-medium text-gray-500  sm:mb-0 "
             >
        <div>|</div>
            
              
                <li>
                    <Link href={'https://github.com/DipakKhade'} target="_blank" ><FaGithub className="text-2xl text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>

                <li>
                <Link href={'https://twitter.com/dipakKhade272'} target="_blank"><FaXTwitter className="text-2xl text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>

                <li>
                <Link href={'https://www.linkedin.com/in/dipak-khade-715389252/'} target="_blank"><FaLinkedin className="text-2xl text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>


                <li>
                <Link href={'https://instagram.com/dipakkhade272?igshid=OGQ5ZDc2ODk2ZA=='} target="_blank" ><FaInstagram className="text-2xl text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>
                <li>
                <Link href={'https://protfolio-with-next-js-dfx1.vercel.app/'} target="_blank" ><VscTerminal  className="text-2xl text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>
               
               
            </ul>
          </div>
            </div>
           


           
        
          </div>


        </div>
    </div>
  )
}

export default HomeBlogs

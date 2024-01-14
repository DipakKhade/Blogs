import React from 'react'

const Page = () => {
  return (
    <>
       <div className='dark:bg-zinc-900'>

{/* Header */}
<main>
  <article>
    <header className="mx-auto max-w-screen-lg rounded-t-lg bg-white text-center shadow-lg dark:bg-zinc-700 pt-8">
      <p className="text-gray-500">Published April 4, 2022</p>
      <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">Unlocking Real-Time Communication with WebRTC</h1>
      <p className="mt-6 text-lg text-gray-700 dark:text-zinc-50">Exploring the Power and Capabilities of WebRTC</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">WebRTC</button>
        <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Web Development</button>
        <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Real-Time Communication</button>
      </div>
    </header>

    {/* Content */}
    <div className="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg dark:bg-zinc-700 dark:text-zinc-50">
      <h2 className="text-2xl font-semibold">What is WebRTC?</h2>
      <blockquote className="max-w-lg border-l-4 px-4">
        WebRTC is a powerful open-source project that enables real-time communication in web browsers. It allows developers to build applications with audio, video, and data sharing capabilities directly within the browser.
        <span className="whitespace-nowrap text-sm">— WebRTC Consortium</span>
      </blockquote>
      <p>WebRTC has revolutionized the way we communicate online, providing a standardized set of protocols and APIs that make it easy to incorporate real-time features into web applications. In this blog post, we&apos;ll delve into the key features that make WebRTC a game-changer for developers.</p>
      <p>Let&apos;s explore the capabilities and advantages of WebRTC.</p>
      {/* More content goes here */}
    </div>
  </article>
</main>

{/* Separator */}
<div className="w-fit mx-auto mt-10 flex space-x-2">
  <div className="h-0.5 w-2 bg-gray-600"></div>
  <div className="h-0.5 w-32 bg-gray-600"></div>
  <div className="h-0.5 w-2 bg-gray-600"></div>
</div>

{/* Recent Posts */}
<aside aria-label="Recent Posts" className="mx-auto mt-10 max-w-screen-xl py-20">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">

    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Most Recent WebRTC Articles</h2>
      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Stay informed with our latest posts on WebRTC and real-time communication.</p>
    </div>

    <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
      {/* Recent posts about WebRTC go here */}
    </div>
  </div>
</aside>
</div>
    </>
  )
}

export default Page;

'use client';
import Link from 'next/link';
import clsx from 'clsx';
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
const Page = () => {
    const currentRoute = usePathname();
  const routelink=[
    
    'App router',
    'SSR and CSR','Pages and Components','Static File Serving'
  ]
  return (
    <>
    <div className=' p-4 font-medium dark:bg-zinc-900 dark:text-white'>
    <nav>
        <ul className="flex p-4 space-x-4 text-xl font-bold text-purple-500 flex-wrap">
        <ul className="md:p-4 md:space-x-4 text-xl font-bold text-purple-500 md:flex">
       <Link href={'/nextjs'}> <li className='ml-6 p-2 rounded-md text-gray-800 font-semibold cursor-pointer hover:underline'>Project Setup</li></Link>
        {routelink.map((i,index)=>(
          <Link key={index}  href={`/nextjs/${i.replace(/\s/g, '').toLowerCase()}`}><li className={clsx(
                 {
                  "ml-6 p-2 rounded-md font-semibold cursor-pointer dark:text-white hover:underline":true,

                  'text-purple-500 dark:text-purple-600':currentRoute===`/nextjs/${i.replace(/\s/g, '').toLowerCase()}`
                 }
               
                )}>{i}</li></Link>
         ))}
         
        </ul>
        </ul>
      </nav>
      <div>
        <p className='p-6'>In Next js Every Component is Server Component by default . to make it Client Component we have to add &quot;use client&quot; at the top</p>
      </div>
      <h2 className='text-purple-500 text-2xl font-bold'>Partial Pre-rendering and SSR</h2>
      <p className='p-6'>Pre-rendering is the practice of creating a web page HTML before a user requests it, either during the build or deployment time. Next.js offers two pre-rendering options for optimal speed: Static Generation and Server-side rendering (SSR). 

Static Generation works with data that is already available at build time which makes better performance over Server-side rendering. In Server-side rendering, data fetching and rendering are done at the request time. Still Server-side rendering is preferable compared to client-render apps. And if we use Next.js, we will have server rendering by default.

Another significant feature, Partial pre-rendering, is announced for Next.js 14. Partial pre-rendering differs from pre-rendering in that it creates parts of the page dynamically during runtime in response to user interactions. By getting the static parts of the page as HTML and updating just the dynamic parts when needed, it is intended to deliver both fast initial page loads and dynamic visuals. If the generated HTML is static until the next build or deployment, pre-rendering works well for pages with static or rarely changing content. Partial pre-rendering can help with faster initial page loads when a choice between static and dynamic rendering is required. Despite being an experimental feature and optional, it is crucial to integrate dynamic rendering with static generation.</p>
<Image
src={'https://blog.logrocket.com/wp-content/uploads/2023/12/server-side-rendering-diagram.png'}
width={800}
height={500}
alt=''
    />
    </div>
<div className='p-4 dark:bg-zinc-900 dark:text-white'>
    <h2 className='text-purple-500 text-2xl font-bold'>Client Side Rendering</h2>
    <p className='p-6'>Instead of sending a new request to the server every time a user navigation happens, what if we made the client handle that navigation?

That would mean that the first time the server responds, it will send the rendering code to the client. This enables the client to handle the page rendering as the user navigates through the site</p>
    <Image
src={'https://blog.logrocket.com/wp-content/uploads/2023/12/client-side-rendering-diagram.png'}
width={800}
height={500}
alt=''
    />
    <p className='p-6'>With CSR, we solved the problem of round trips, achieving faster and more responsive page transitions. But we also introduced a new problem for ourselves.

When the server sends JavaScript to the browser, search engines aren&quot;t able to index the site properly because the actual HTML of the site is not fully formed yet. The browser will have to first download and execute the JavaScript from the server and then hydrate the page to form the complete markup of the site.</p>
</div>
    </>

   
  )
}

export default Page;

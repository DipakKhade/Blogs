'use client';
import React from 'react'
import Image from 'next/image'
import route1 from '../../../resources/routing1.png'
import route3 from '../../../resources/routing3.png'
import route4 from '../../../resources/routing4.png'
import Link from 'next/link'
import clsx from "clsx";

import { usePathname } from "next/navigation";
const page = () => {
  
  const currentRoute = usePathname();
  // console.log(currentRoute.slice(0,7))
  //
  const routelink=[
    
    'App router',
    'SSR and CSR','Pages and Components','Static File Serving'
  ]
    const codeSnippet = `
    import React, { FC } from "react";

    interface PageProps {}

    const Page: FC<PageProps> = () => {
      return (
        <>
          <h1>Hello from /about</h1>
        </>
      );
    };

    export default Page;
  `;
  return (
    <div className='p-4 mt-16 md:mt-48'>
      <nav>
        <ul className="flex p-4 space-x-4 text-xl font-bold text-purple-500 flex-wrap">
        <ul className="md:p-4 md:space-x-4 text-xl font-bold text-purple-500 md:flex">
       <Link href={'/nextjs'}> <li className='ml-6 p-2 rounded-md text-gray-800 font-semibold cursor-pointer hover:underline'>Project Setup</li></Link>
        {routelink.map((i,index)=>(
          <Link key={index}  href={`/nextjs/${i.replace(/\s/g, '').toLowerCase()}`}><li className={clsx(
                 {
                  "ml-6 p-2 rounded-md text-gray-800 font-semibold cursor-pointer hover:underline":true,

                  'text-purple-500 dark:text-purple-600':currentRoute===`/nextjs/${i.replace(/\s/g, '').toLowerCase()}`
                 }
               
                )}>{i}</li></Link>
         ))}
         
        </ul>
        </ul>
      </nav>

     <h3 className='text-2xl font-bold text-purple-500 p-4'>Routing in Next js 14</h3>

     <div className='p-4'>
        <h4>Making a in routes in next.js 14 is based on folder structure , You have to make a folder with name of route and then inside that folder you hav to make a page.jsx of page.tsx file  </h4>
        <Image
src={route1}
width={800}
height={900}
alt=''
        />
<p className='p-2'>if you write this code in Your dashbord/page.tsx , its route address is localhost:3000/dashbord</p>
        
<div className="mockup-code bg-slate-950 md:w-[80vw]">
  <pre data-prefix="$"><code>app/about/page.tsx</code></pre> 
  <pre data-prefix=">" className="text-purple-500"><code>
  {codeSnippet.trim()}

  </code></pre> 

</div>
 
<div className='p-4'>
<Image
src={route3}
width={800}
height={900}
alt=''
        />
</div>
<div className='p-4'>
<h4 className='text-xl text-purple-500 font-semibold'>Dynamic Routes</h4>
<p>A Dynamic Segment can be created by wrapping a file or folder name in square brackets: [segmentName]. For example, [id] or [slug]</p>

<p>Where slug or id is unique and based on these the data is fetched</p>
<Image
src={route4}
width={800}
height={900}
alt=''
        />
</div>

id or slug can be any unique associated with data that we want to render
     </div>

    </div>
  )
}

export default page

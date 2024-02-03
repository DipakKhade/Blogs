
import React from "react";
import Image from "next/image";
import Link from "next/link";




const page = () => {
 
  const routelink=[
   
    'App router',
    'SSR and CSR','Pages and Components','Static File Serving'
  ]
  
  return (
    <>
      <div className="p-8  dark:text-white">
      <nav>
        <ul className="flex p-4 space-x-4 text-xl font-bold text-purple-500 flex-wrap">
        <li className='ml-6 p-2 rounded-md text-purple-500 dark:text-white font-semibold cursor-pointer hover:underline'>Project Setup</li>
         {routelink.map((i,index)=>(
          <Link key={index}  href={`/nextjs/${i.replace(/\s/g, '').toLowerCase()}`}><li className="ml-6 p-2 rounded-md  font-semibold cursor-pointer hover:underline"
                >{i}</li></Link>
         ))}
         
        </ul>
      </nav>
        <article>
          <div>
            <h3 className="text-2xl p-2 text-purple-500">
              Create a Next.js app
            </h3>
            <p>
              To create a Next.js app, open your terminal, cd into the directory
              you like to create the app in, and run the following command:
            </p>
            <div className=" bg-slate-950 p-2 text-slate-200 h-12 rounded-md md:w-[80vw]">
              <pre data-prefix="~">
                <code>npx create-next-app@latest</code>
              </pre>
            </div>
            <h4>cd into the dir</h4>
            <div className="bg-slate-950 p-2 text-slate-200 h-12 rounded-md md:w-[80vw]">
              <pre>
                <code>cd dipakkhadeblog</code>
              </pre>
            </div>
            <h4>Run the development server</h4>
            <div className="bg-slate-950 p-2 text-slate-200 h-12 rounded-md md:w-[80vw]">
              <pre>
                <code>yarn dev</code>
              </pre>
            </div>

          </div>

          <h3 className="pt-8 text-xl text-purple-500">start working on project </h3>
          <div>
          <h5>You get this as a started Project :</h5>
            <Image
              src={'https://nextjs.org/static/images/learn/create-nextjs-app/welcome-to-nextjs.png'}
              width={800}
              alt=""
              height={900}
             
            />
          </div>
          <h5 className="p-5">Start editing app/page.js </h5>
        </article>

       
      </div>

    
  
    </>
  );
};

export default page;

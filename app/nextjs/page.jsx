
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
      <div className="p-8 mt-12 md:mt-56">
      <nav>
        <ul className="flex p-4 space-x-4 text-xl font-bold text-purple-500 flex-wrap">
        <li className='ml-6 p-2 rounded-md text-purple-500 font-semibold cursor-pointer hover:underline'>Project Setup</li>
         {routelink.map((i,index)=>(
          <Link key={index}  href={`/nextjs/${i.replace(/\s/g, '').toLowerCase()}`}><li className="ml-6 p-2 rounded-md text-gray-800 font-semibold cursor-pointer hover:underline"
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
            <div className="mockup-code bg-slate-950 md:w-[80vw] rounded-md">
              <pre data-prefix="~">
                <code>npx create-next-app@latest dipakkhadeblog</code>
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
                <code>cd dipakkhadeblog</code>
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
    <button type="button" className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-purple-700 hover:text-white px-3 md:ml-[70vw] ml-28">
      <div className="flex flex-row align-middle">
        <span className="mr-2">Next</span>
        <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </div>
    </button>
</Link>
</div>
    </>
  );
};

export default page;

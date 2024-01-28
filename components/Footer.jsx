
import React from 'react'
import Link from 'next/link'
import { TbBrandNextjs } from "react-icons/tb";

const Footer = () => {
  return (
    <>
        <footer className="p-4 dark:rounded-none rounded-lg  md:p-8 lg:p-10 dark:bg-zinc-900 bottom-0 w-full">
  <div className="mx-auto text-cente">
      
      
        {/* <p className='dark:text-purple-700'>&copy; 2024 - Developed by Dipak Khade. All right reserved.</p> */}
      <ul className="flex flex-wrap justify-center items-center  text-gray-900 dark:text-purple-500">
          <li>
              <Link href={'/'} className="mr-4 hover:underline md:mr-6 ">About</Link>
          </li>
         
         
          <li>
              <Link href={'/'} className="mr-4 hover:underline md:mr-6">Blog</Link>
          </li>
          <li>
              <Link href={'/'} className="mr-4 hover:underline md:mr-6">Affiliate Program</Link>
          </li>
        
          <li>
              <Link href={'/'} className="mr-4 hover:underline md:mr-6">Contact</Link>
          </li>
      </ul>
      <div className=" text-gray-500 dark:text-gray-400 flex">
      <TbBrandNextjs className="mt-1"/><p>Coded In Next.js 14</p>
      </div>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023-24 <Link href={'https://protfolio-with-next-js-dfx1.vercel.app/'}>Dipak Khade</Link>. All Rights Reserved.</span>
  </div>
</footer>
    </>
  )
}

export default Footer

'use client';
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
// import profimg from "../resources/profimg.png";
// import ThemeButton from "./ThemeButton";
import dynamic from "next/dynamic";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from 'react-icons/fa';
import Link from "next/link";
import logoimg from "../resources/logoimg.png";
import { VscTerminal } from "react-icons/vsc";
import { usePathname } from 'next/navigation';
import clsx from "clsx";
import { useSession } from "next-auth/react";
import AuthButton from "./AuthButton";
const Header = () => {
  const {data:session ,status} = useSession()
  // console.log(session)
  const currentRoute = usePathname();
  // console.log(currentRoute.slice(0,7))

  return (
    <>
      {/* //hamburger for md screens */}
      <div className="dark:bg-zinc-900">
      <div className="md:hidden block fixed h-24">
        <div className="drawer">
          <div className="z-[900]">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-2 mt-4 z-30">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className=" cursor-pointer drawer-button bg-white text-black border-none hover:bg-slate-500"
              >
                <GiHamburgerMenu className="text-2xl fixed top-10" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="menu p-4i min-h-full bg-base-200 dark:bg-zinc-900 text-gray-400 z-50">
                {/* Sidebar content here */}

                <div className="h-20 flex ">
                <div className=" flex">
            {
        status=='authenticated'?
        <div className="flex m-1">
<Image
  src={session?.user?.image}
  width={100}
  height={80}
  alt="img"
  className="rounded-full m-1"
/>
         <h5 className="mt-6 text-blue-500 font-bold">{session?.user?.name}</h5>
         </div>
         : <div className="mt-6 text-blue-500 font-bold">Log in </div>
      }
            </div>
                  <div className="ml-20 mt-1 text-2xl">
                    <label
                      htmlFor="my-drawer"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    >
                      <RxCross2 className="rounded-full cursor-pointer text-4xl p-1 text-blue-600 mt-3" />
                    </label>
                  </div>
                </div>

                <div className="mt-8 p-2 ">
                  
                  <ul>
                    <h3 className="text-gray-700 font-bold mb-4 mt-3">BLOG MENU</h3>
<Link href={'/'}>
                    <li className={clsx(
                 {
                  "p-5 rounded-md font-semibold cursor-pointer hover:text-blue-500":true,

                  'text-black dark:text-gray-400':currentRoute==='/'
                 }
               
                )}>
                      Home
                    </li>
                    </Link>
<Link href={'/nextjs'}>
                    <li className={clsx(
                 {
                  "p-5 rounded-md font-semibold cursor-pointer hover:text-blue-500":true,

                  'text-blue-500 dark:text-gray-400':currentRoute.slice(0,7)==='/nextjs'
                 }
               
                )}>
                      Next.js
                    </li>
                    </Link>

                    <Link href={'/webrtc'}>
                    <li className={clsx(
                 {
                  "p-5 rounded-md font-semibold cursor-pointer hover:text-blue-500":true,

                  'text-blue-500 dark:text-gray-400':currentRoute==='/webrtc'
                 }
               
                )}>
                      WebRTC
                    </li>
                    </Link>
                    <li className="p-5 rounded-md text-slate-600 dark:text-gray-400 font-semibold cursor-pointer hover:text-blue-500">
                      Linkedin
                    </li>
                    <li className="p-5 rounded-md text-slate-600 dark:text-gray-400 font-semibold cursor-pointer hover:text-blue-500 ">
                      GitHub
                    </li>
                    <li className="p-5 rounded-md text-slate-600 dark:text-gray-400 font-semibold cursor-pointer hover:text-blue-500">
                      PortFolio
                    </li>
                  </ul>
                </div>
                <AuthButton/>

                <h4 className="mt-4"> BLOG SOCIALS</h4>
                <ul className="flex mt-4 dark:text-zinc-900"
             >
        <div>|</div>
            
              
                <li>
                    <Link href={'https://github.com/DipakKhade'} target="_blank" ><FaGithub className="text-2xl hover:text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:text-gray-400"/></Link>
                </li>

                <li>
                <Link href={'https://twitter.com/dipakKhade272'} target="_blank"><FaXTwitter className="text-2xl hover:text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:text-gray-400"/></Link>
                </li>

                <li>
                <Link href={'https://www.linkedin.com/in/dipak-khade-715389252/'} target="_blank"><FaLinkedin className="text-2xl hover:text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:text-gray-400"/></Link>
                </li>


                <li>
                <Link href={'https://instagram.com/dipakkhade272?igshid=OGQ5ZDc2ODk2ZA=='} target="_blank" ><FaInstagram className="text-2xl hover:text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:text-gray-400"/></Link>
                </li>
                <li>
                <Link href={'https://instagram.com/dipakkhade272?igshid=OGQ5ZDc2ODk2ZA=='} target="_blank" ><VscTerminal  className="text-2xl hover:text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:text-gray-400"/></Link>
                </li>
               
               
               
            </ul>
              </div>
             
            </div>
            
          </div>

        </div>
     
           
       
      </div>
        
</div>
      {/* //nav for lg screens */}

      <div className="h-48 fixed shadow-md w-full z-50 pt-6 bg-white dark:bg-zinc-800 md:display hidden md:block pb-8">
       
        <div className="ml-[12vw]">
          <div className="flex">
            <div>
              {" "}
              {/* <Image
                src={logoimg}
                width={200}
                alt="logo"
                className="mix-blend-multiply bg-blue-400"
              /> */}
              <h1 className='text-2xl p-2 text-blue-600 font-extrabold'>&lt; Dipak Khade / &gt;</h1>
              <div>
          <ul className="flex mt-4 dark:text-Zinc-900  space-x-5 items-center md:mt-0 lg:mb-6 text-sm font-medium text-gray-500  sm:mb-0 "
             >
        <div>|</div>
            
              
                <li>
                    <Link href={'https://github.com/DipakKhade'} target="_blank" ><FaGithub className="text-2xl text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>

                <li>
                <Link href={'https://twitter.com/dipakKhade272'} target="_blank"><FaXTwitter className="text-2xl text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>

                <li>
                <Link href={'https://www.linkedin.com/in/dipak-khade-715389252/'} target="_blank"><FaLinkedin className="text-2xl text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>


                <li>
                <Link href={'https://instagram.com/dipakkhade272?igshid=OGQ5ZDc2ODk2ZA=='} target="_blank" ><FaInstagram className="text-2xl text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>
                <li>
                <Link href={'https://protfolio-with-next-js-dfx1.vercel.app/'} target="_blank" ><VscTerminal  className="text-2xl text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>
               
               
            </ul>
          </div>
            </div>
            <ul className="flex">
            <Link href={'/'}>
              <li  className={clsx(
                 {
                  "ml-6 p-2 dark:text-white rounded-md text-gray-800 font-semibold cursor-pointer hover:underline":true,

                  'text-blue-500 dark:text-blue-600':currentRoute==='/'
                 }
               
                )}>
                Home
              </li>
              </Link>

              <Link href={'/nextjs'}>
                    <li className={clsx(
                 {
                  "ml-6 p-2 dark:text-white rounded-md hover:text-blue-500 text-gray-800 font-semibold cursor-pointer hover:underline":true,

                  'text-blue-500 dark:text-gray-400':currentRoute===`/nextjs`
                 }
               
                )}>
                      Next.js
                    </li>
                    </Link>
              <Link href={'/webrtc'}>
              <li className={clsx(
                 {
                  "ml-6 p-2 dark:text-white rounded-md hover:text-blue-500 text-gray-800 font-semibold cursor-pointer hover:underline":true,

                  'text-blue-700 dark:text-blue-600':currentRoute==='/webrtc'
                 }
               
                )}>
                WebRTC
              </li>
              </Link>
              <li className="ml-6 hover:text-blue-500 dark:text-white p-2 rounded-md text-gray-800 font-semibold cursor-pointer hover:underline">
                Linkedin
              </li>
              <li className="ml-6 hover:text-blue-500 dark:text-white p-2 rounded-md text-gray-800 font-semibold cursor-pointer hover:underline">
                GitHub
              </li>
              <li className="ml-6 hover:text-blue-500 dark:text-white p-2 rounded-md text-gray-800 font-semibold cursor-pointer hover:underline">
                PortFolio
              </li>
            </ul>


            <div className="ml-6"><AuthButton/></div>
         <div className="md:pl-56 pt-9">
      {
        status=='authenticated'?
        <div className="flex m-1">
<Image
  src={session?.user?.image}
  width={50}
  height={50}
  alt="img"
  className="rounded-full"
/>
         <h5 className="m-2 dark:text-blue-500">{session?.user?.name}</h5>
         </div>
         :''
      }
        </div>
          </div>


        </div>
      </div>

     
      {/* <div className="flex pl-16 dark:bg-zinc-900 md:hidden">
            <div className="mr-32">
              {" "}
              <Image
                src={logoimg}
                width={200}
                alt="logo"
                className="mix-blend-multiply bg-blue-400"
              />
              <div>
          <ul className="flex mt-4 dark:text-gray-800  space-x-5 items-center md:mt-0 lg:mb-6 text-sm font-medium text-gray-500  sm:mb-0 pb-8"
             >
        <div>|</div>
            
              
                <li>
                    <Link href={'https://github.com/DipakKhade'} target="_blank" ><FaGithub className="text-2xl hover:text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>

                <li>
                <Link href={'https://twitter.com/dipakKhade272'} target="_blank"><FaXTwitter className="text-2xl hover:text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>

                <li>
                <Link href={'https://www.linkedin.com/in/dipak-khade-715389252/'} target="_blank"><FaLinkedin className="text-2xl hover:text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>


                <li>
                <Link href={'https://instagram.com/dipakkhade272?igshid=OGQ5ZDc2ODk2ZA=='} target="_blank" ><FaInstagram className="text-2xl hover:text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>

               <li>
                <Link href={'https://protfolio-with-next-js-dfx1.vercel.app/'} target="_blank" ><VscTerminal  className="text-2xl hover:text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>
               
            </ul>
          </div>
            </div>
           
          </div> */}
     
<hr className=" border-blue-400 sm:mx-auto dark:border-gray-200 hidden md:block"/>
      
     
    </>
  );
};
export default dynamic(() => Promise.resolve(Header), { ssr: false });

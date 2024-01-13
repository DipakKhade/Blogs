import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import profimg from "../resources/profimg.png";
import ThemeButton from "./ThemeButton";
import { CiSearch } from "react-icons/ci";
import dynamic from "next/dynamic";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from 'react-icons/fa';
import Link from "next/link";
import logoimg from "../resources/logoimg.png";
import DropDownButton from "./DropDownButton";
const Header = () => {
  return (
    <>
      {/* //hamburger for md screens */}
      <div className="dark:bg-gray-700">
      <div className="md:hidden block">
        <div className="drawer">
          <div className="z-50">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-4 ">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className=" cursor-pointer drawer-button bg-white text-black border-none hover:bg-slate-500"
              >
                <GiHamburgerMenu className="text-2xl" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content dark:bg-slate-600">
                {/* Sidebar content here */}

                <div className="h-20 flex p-2">
                  <Image
                    src={profimg}
                    width={35}
                    alt="img"
                    className="rounded-full"
                  />

                  <h3 className="text-base font-semibold mt-2 ml-2">
                    Dipak Khade
                  </h3>
                  <div className="ml-20 mt-1 text-2xl">
                    <label
                      htmlFor="my-drawer"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    >
                      <RxCross2 className="rounded-full cursor-pointer text-4xl p-1 " />
                    </label>
                  </div>
                </div>

                <div className="mt-8 p-2 ">
                  <ul>
                    <h3 className="text-gray-700 font-bold mb-4">BLOG MENU</h3>
                    <li className="p-5 rounded-md text-gray-800 font-semibold cursor-pointer hover:bg-slate-400">
                      Home
                    </li>
                    <li className="p-5 rounded-md text-gray-800 font-semibold cursor-pointer hover:bg-slate-400">
                      WebRTC
                    </li>
                    <li className="p-5 rounded-md text-gray-800 font-semibold cursor-pointer hover:bg-slate-400">
                      Linkedin
                    </li>
                    <li className="p-5 rounded-md text-gray-800 font-semibold cursor-pointer hover:bg-slate-400">
                      GitHub
                    </li>
                    <li className="p-5 rounded-md text-gray-800 font-semibold cursor-pointer hover:bg-slate-400">
                      PortFolio
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
      {/* //nav for lg screens */}

      <div className="h-64 bg-white dark:bg-slate-700 md:display hidden md:block">
        <div className="flex text-3xl space-x-4 -z-10 right-5 justify-end mr-6 pt-8 dark:text-white">
          <CiSearch />
          <ThemeButton />
          <DropDownButton/>
        </div>
        <div className="ml-[10vw]">
          <div className="flex">
            <div className="mr-32">
              {" "}
              <Image
                src={logoimg}
                width={200}
                alt="logo"
                className="mix-blend-multiply bg-blue-400"
              />
              <div>
          <ul className="flex mt-4 dark:text-gray-800  space-x-5 items-center md:mt-0 lg:mb-6 text-sm font-medium text-gray-500  sm:mb-0 "
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
               
               
               
            </ul>
          </div>
            </div>
            <ul className="flex">
              <li className="ml-6 p-2 dark:text-white rounded-md text-gray-800 font-semibold cursor-pointer hover:underline">
                Home
              </li>
              <li className="ml-6 dark:text-white p-2 rounded-md text-gray-800 font-semibold cursor-pointer hover:underline">
                WebRTC
              </li>
              <li className="ml-6 dark:text-white p-2 rounded-md text-gray-800 font-semibold cursor-pointer hover:underline">
                Linkedin
              </li>
              <li className="ml-6 dark:text-white p-2 rounded-md text-gray-800 font-semibold cursor-pointer hover:underline">
                GitHub
              </li>
              <li className="ml-6 dark:text-white p-2 rounded-md text-gray-800 font-semibold cursor-pointer hover:underline">
                PortFolio
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* buttons */}
      <div className="dark:bg-gray-700 flex text-3xl fixed p-2 w-full justify-end space-x-4 -z-10 md:hidden dark:text-black">
        <CiSearch />
        <ThemeButton />
  
      <DropDownButton/>

      
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(Header), { ssr: false });

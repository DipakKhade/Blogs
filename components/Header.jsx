"use client"

import {  MoonIcon, SunIcon , DribbbleIcon} from "../libs/Icons";
import { useThemeSwitch } from "../libs/useThemeSwitch";
import { useState } from "react";
import { cx } from "../libs/cx";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from 'react-icons/fa';
import Link from "next/link";
import { VscTerminal } from "react-icons/vsc";
import AuthButton from "./AuthButton";
const Header = () => {

  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

const toggle = () =>{
  setClick(!click)
}
  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between ">
        

<div className="md:ml-[70vw] mt-1 p-2 rounded-sm hover:text-black">
<AuthButton/>
</div>

      

        <button className="inline-block sm:hidden z-50" onClick={toggle} aria-label="Hamburger Menu">
          <div className="w-6 cursor-pointer transition-all ease duration-300">
            <div className="relative">
            <span className="absolute top-0 inline-block w-full h-0.5 bg-black dark:bg-white rounded transition-all ease duration-200" 
            style={{
             transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
            }}
            
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-black dark:bg-white rounded transition-all ease duration-200"
            style={{
              opacity: click ? 0 : 1
             }}
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-black dark:bg-white rounded transition-all ease duration-200"
            style={{
              transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
             }}
            >&nbsp;</span>
            </div>

          </div>
        </button>


        <nav className="w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full dark:text-white font-medium capitalize  items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? "1rem" : "-5rem"
         }}
        
        >
            <Link href="/" className="mr-2">Home</Link>
            <Link href={'https://protfolio-with-next-js-dfx1.vercel.app/'} className="mx-2">About</Link>
            <Link href={'https://protfolio-with-next-js-dfx1.vercel.app/contact'} className="mx-2">Contact</Link>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
            "bg-light text-dark" )}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
                }
            </button>
        </nav>


        <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
            <Link href="/" className="mr-2 dark:text-white">Home</Link>
            <Link href={'https://protfolio-with-next-js-dfx1.vercel.app/'} className="mx-2 dark:text-white">About</Link>
            <Link href={'https://protfolio-with-next-js-dfx1.vercel.app/contact'} className="mx-2 dark:text-white">Contact</Link>
            <Link href={'https://protfolio-with-next-js-dfx1.vercel.app/'} className="mx-2 dark:text-white">Portfolio</Link>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1 dark:text-white", mode === "light" ? "bg-dark text-light" :
            "bg-light text-dark" )}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
                }
            </button>
        </nav>
        <div className=" hidden sm:flex items-center">
        <ul className="flex mt-4 dark:text-zinc-900 space-x-3"
             >
        <div>|</div>
            
              
                <li>
                    <Link href={'https://github.com/DipakKhade'} target="_blank" ><FaGithub className="text-2xl hover:text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:text-gray-400"/></Link>
                </li>

                <li>
                <Link href={'https://twitter.com/dipakKhade272'} target="_blank"><FaXTwitter className="text-2xl hover:text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:text-gray-400"/></Link>
                </li>

                <li>
                <Link href={'https://www.linkedin.com/in/dipak-khade-715389252/'} target="_blank"><FaLinkedin className="text-2xl hover:text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:text-gray-400"/></Link>
                </li>


                <li>
                <Link href={'https://instagram.com/dipakkhade272?igshid=OGQ5ZDc2ODk2ZA=='} target="_blank" ><FaInstagram className="text-2xl hover:text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:text-gray-400"/></Link>
                </li>
                <li>
                <Link href={'https://instagram.com/dipakkhade272?igshid=OGQ5ZDc2ODk2ZA=='} target="_blank" ><VscTerminal  className="text-2xl hover:text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110 dark:text-gray-400"/></Link>
                </li>
               
               
               
            </ul>
        </div>
    </header>
  )
}

export default Header;
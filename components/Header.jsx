"use client";

import { MoonIcon, SunIcon, DribbbleIcon } from "../libs/Icons";
import { useThemeSwitch } from "../libs/useThemeSwitch";
import { useState } from "react";
import { cx } from "../libs/cx";
import Link from "next/link";
import AuthButton from "./AuthButton";
const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header className="w-full lg:w-80 p-4 px-5 sm:px-10 flex items-center justify-between ">
   

      <button
        className="inline-block sm:hidden z-50 pt-6"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-black dark:bg-white rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-black dark:bg-white rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-black dark:bg-white rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className="w-max py-3 px-6 sm:px-8  border-dark  dark:text-white font-medium capitalize  items-center flex  sm:hidden  fixed top-8 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300 hover:underline-offset-4"
        
       
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link href="/" className="mr-2">
         Home
        </Link>
        <Link
          href={"https://protfolio-with-next-js-dfx1.vercel.app/"}
          className="mx-2"
        >
          About
        </Link>
        <AuthButton/>
       
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <nav className="sm:flex border gap-6 w-screen justify-end backdrop-blur-sm z-50 fixed p-6 top-0 hidden rounded-sm left-0">
      <div className="mt-2">
        <Link href="/" className="mr-2 dark:text-white hover:text-blue-600 hover:underline">
         Home
        </Link>
        <Link
          href={"https://protfolio-with-next-js-dfx1.vercel.app/"}
          className="mx-2 dark:text-white hover:text-blue-600 hover:underline"
        >
          About
        </Link>
        <Link
          href={"https://protfolio-with-next-js-dfx1.vercel.app/contact"}
          className="mx-2 dark:text-white hover:text-blue-600 hover:underline"
        >
          Contact
        </Link>
        </div>
           <div>
<AuthButton/>
</div>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease mr-36 mt-2  flex items-center justify-center rounded-full p-1 dark:text-white",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;

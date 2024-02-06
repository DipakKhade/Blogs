"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Button } from "./ui/button";
import Link from "next/link";
export function TypewriterEffectSmoothDemo() {
      
  const words = [
    {
      text: "Exploring",
    },
    {
      text: "the",
    },
    {
      text: "Wonders",
    },
   
    {
      text: "of",
    },
    {
        text:'web'
    },
   
    {
      text: "Web  Dev .",
      className: "text-purple-500 dark:text-purple-500",
    },
  ];
  return (
    <>

    <div className="flex flex-col items-center justify-center h-[20rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      &lt;Dipak Khade /&gt;
      </p>
      <TypewriterEffectSmooth words={words} />
     <Link href={'https://dipakcodesnippets.vercel.app/'} >

     <Button className='dark:bg-purple-300'>codes</Button>
     </Link>
    </div>
    </>
  );
}

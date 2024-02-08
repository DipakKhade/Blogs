"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

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
      text: "Web  Dev",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text:'.'
  },
  ];
  return (
    <>

    <div className="flex flex-col items-center justify-center h-[15rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      &lt;Dipak Khade /&gt;
      </p>
      <TypewriterEffectSmooth words={words} />
     <Link href={'https://dipakcodesnippets.vercel.app/'} >

     <Button className='dark:bg-blue-300 gap-1'>Code Snippets <FaArrowRightLong className="text-xl"/></Button>
     </Link>
    </div>
    </>
  );
}

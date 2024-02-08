"use client";
import React from "react";
import SparklesCore from "./ui/sparkles";
import { useTheme } from "next-themes";
export  function SparklesPreview() {
  const { theme } = useTheme()
  // console.log(theme)
  let parCol;
  theme=='light' ? parCol=='#FFFFFF' : '#d67ed0'
  return (
    <div className="h-[20rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-4xl font-bold text-center dark:text-white relative z-20">
      Discover the artistry behind web development and tech innovation .
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent dark:via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent dark:via-indigo-500 via-blue-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent dark:via-sky-500 via-blue-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent dark:via-sky-500 via-blue-500 to-transparent h-px w-1/4" />

        {/* Core component */}
       
          <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"         
          particleColor={parCol}
        />
   

        
       

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

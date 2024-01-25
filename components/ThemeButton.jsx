'use client';
import dynamic from 'next/dynamic';
import React from 'react'
import { useTheme } from 'next-themes'
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
const ThemeButton = () => {
    
  const { theme, setTheme } = useTheme()
  return (
   <>
   
  <div className='fixed top-10 right-6 md:z-50 md:right-32 pr-6 text-3xl -z-10 dark:text-white'>  <button onClick={()=>setTheme(theme==='dark'?'light':'dark')}>
      {theme=='dark'? <CiLight/>:<CiDark/>}
    </button></div>
   </>
  )
}


// export default dynamic(() => Promise.resolve(ThemeButton), { ssr: false });
export default ThemeButton;

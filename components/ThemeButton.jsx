'use client';
import React from 'react'
import { useTheme } from 'next-themes'
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
const ThemeButton = () => {
    
  const { theme, setTheme } = useTheme()
  return (
   <>
   
    <button onClick={()=>setTheme(theme==='dark'?'light':'dark')}>
      {theme=='dark'? <CiLight className='dark:text-white '/>:<CiDark className='dark:text-white'/>}
    </button>
   </>
  )
}

export default ThemeButton

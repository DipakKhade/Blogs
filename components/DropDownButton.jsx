import React from 'react'
import Image from 'next/image';
import profimg from "../resources/profimg.png";
import { IoIosArrowDown } from "react-icons/io";
const DropDownButton = () => {
  return (
    <div className="dropdown dropdown-end ml-60 ">
    <div tabIndex={0} role="button"> <IoIosArrowDown /></div>
    <div tabIndex={0} className="dropdown-content z-[1] bg-slate-300 dark:bg-slate-500 menu p-2 shadow rounded-box w-56 md:w-72 mt-4">
    <div className='flex p-4 dark:text-gray-800'>
                  <Image
                    src={profimg}
                    width={35}
                    alt="img"
                    className="rounded-full"
                  />

                  <h3 className="text-base font-semibold mt-2 ml-2 ">
                    Dipak Khade
                  </h3>

    </div>
    <h4 className='dark:text-gray-700 font-semibold'>Ready to get started?</h4>
                  <p className='dark:text-gray-800'>Sign in to get notified about new articles</p>
    <button className="btn btn-neutral mt-12">SIGN IN</button>
    </div>
   
  </div>
  )
}

export default DropDownButton

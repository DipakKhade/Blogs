import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <>
      
    <div className='min-h-screen text-purple-600 text-3xl font-bold md:mt-[45vh] ml-[40vw]'>
      Blog Not Found
 
    <div>
    <Link href={'/'}>
      <button className='btn m-4 bg-purple-400'>Return Home</button>
    </Link>
    </div>
    </div>
    </>

  )
}

export default NotFound

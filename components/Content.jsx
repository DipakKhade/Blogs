
import React from 'react'
import Link from 'next/link'

const Content = () => {
 
  return (
    <>
    <div>
       <div className="p-4 flex flex-wrap justify-center gap-2 bg-transparent pt-24">
      <Link href="/nextjs">
        <button className="rounded-lg bg-blue-200 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Next.js</button>
      </Link>
      
     
     <Link href={'/webrtc'}>
     <button className="rounded-lg bg-blue-200 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Web RTC</button>
     </Link>
     <Link href={'/webdev'}>
     <button className="rounded-lg bg-blue-200 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Web Development Basics</button>
     </Link>
     <Link href={'/'}>
  
     <button className="rounded-lg bg-blue-200 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">DSA</button>
     </Link>
    
    </div>
    

    </div>


    </>
  )
}

export default Content

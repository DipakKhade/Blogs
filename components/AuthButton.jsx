'use client';
import React from 'react'

import {useSession , signIn, signOut} from 'next-auth/react'

const AuthButton = () => {
    const {data:session , status} = useSession()
    // console.log(session,status)
  return (
    <div className='-z-10'>
{
    status=='unauthenticated' ? <button 
    onClick={()=>signIn('github')}
    className="rounded-full border-2 border-purple-500 px-6 py-1 text-purple-600 transition-colors hover:bg-purple-500 hover:text-white">Login</button>
   
    :
    <button
    onClick={()=>signOut()}
     className="rounded-full border-2 border-purple-500 px-6 py-1 text-purple-600 transition-colors hover:bg-purple-500 hover:text-white">Log out</button>
}
    </div>
     
  )
}

export default AuthButton;

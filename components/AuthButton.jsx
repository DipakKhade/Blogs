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
    className="btn dark:btn-neutral">Login</button>
   
    :
    <button className="btn dark:btn-neutral"
    onClick={()=>signOut()}
    >Log out</button>
}
    </div>
     
  )
}

export default AuthButton;

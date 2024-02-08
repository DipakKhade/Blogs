'use client';
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {useSession , signIn, signOut} from 'next-auth/react'

const AuthButton = () => {
    const {data:session , status} = useSession()
    // console.log(session,status)
  return (
    <div className='-z-10 flex gap-1'>
{
    status=='unauthenticated' ? <button className='mt-2 hover:text-blue-600 hover:underline'
    onClick={()=>signIn('github')}
    >Login</button>
   
    :
    <button className='hover:text-blue-600 hover:underline'
    onClick={()=>signOut()}
    >Log out</button>
}
{
  status=='authenticated' && <Avatar>
  <AvatarImage src={session?.user?.image} />
  <AvatarFallback>img</AvatarFallback>
</Avatar>
}

    </div>
     
  )
}

export default AuthButton;

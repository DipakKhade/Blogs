import React from 'react'

import {useSession , signIn, signOut} from 'next-auth/react'

const AuthButton = () => {
    const {data:session , status} = useSession()
    // console.log(session,status)
  return (
    <div>
{
    status=='unauthenticated' ? <button 
    onClick={()=>signIn('github')}
    className="rounded-full border-2 border-cyan-500 px-6 py-1 text-cyan-600 transition-colors hover:bg-cyan-500 hover:text-white">Login</button>
   
    :
    <button
    onClick={()=>signOut()}
     className="rounded-full border-2 border-cyan-500 px-6 py-1 text-cyan-600 transition-colors hover:bg-cyan-500 hover:text-white">Log out</button>
}
    </div>
     
  )
}

export default AuthButton

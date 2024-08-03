"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
const Main = () => {
    const router  =  useRouter()
    const handleStarted = () =>{
        router.push("/login")
    }
  return (
    <div className=' flex justify-center items-center min-h-screen' style={{ backgroundImage:  'url(/images/bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='md:w-2/2 lg:w-2/2 w-full flex flex-col gap-2 p-4 bg-transparent  bg-opacity-70 backdrop-blur-none rounded'>
        <h1 className='text-center text-blue-800 font-bold text-4xl'>Next Js Login And Signup Authintication</h1>
        <p className='text-sm md:text-2xl lg:text-2xl text-black font-semibold p-4 md:p-none lg:p-none'>
        Implementing authentication in a Next.js application involves creating secure login and registration functionalities to ensure that users can safely access and manage their accounts. This description outlines the process of building these features using Next.js along with appropriate tools and libraries for handling authentication.
        </p>
        <div className='flex justify-center'>
          <button className='py-3 px-5 rounded bg-blue-500 text-xl text-white hover:bg-blue-900' onClick={handleStarted}>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Main

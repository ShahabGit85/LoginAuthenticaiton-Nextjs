"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
  const router = useRouter();
  const [formdata,setFormdata] =  useState({
    email: "",
    password: "",
  })

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
    
  }

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch ("/api/login", 
        {
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify(formdata)
        }
      )
      const data = response.json()
      console.log("user login successfully and user data is =>", data)
      if(response.ok){
        toast.success("Login Successfully")
        setTimeout(() => {
          router.push("/dashboard/home");
          
        }, 1000);
      }
    } catch (err) {
      toast.error(data.err)
    }
    finally{
      console.log("")
    }
   
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center" 
      style={{ backgroundImage: 'url(/images/bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="max-w-md w-full bg-transparent p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-blue-700">Welcome back!</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formdata.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={formdata.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              SIGN IN
            </button>
          </div>
          <div className="text-center">
            <a href="#" className="text-sm text-gray-900 hover:underline">
              Forgot your password?
            </a>
          </div>
          <div className="text-center">
            <Link href="/register" className="text-sm text-black hover:underline">
              Don't have an account? <b className='text-blue-600'>Signup</b>
            </Link>
          </div>
        </form>
        <Toaster/>
      </div>
    </div>
  );
};

export default Login;

"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import axios from "axios"

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmpassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const router = useRouter();

  const handleSignup = async (e) => {
    try{
      e.preventDefault();
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      console.log("this is user data =>", data);
      if(res.ok){
        
        router.push("/login");
      }
    }
    catch(error){
      console.log("error are occure", error)
    }
    finally{

    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700" style={{ backgroundImage: 'url(/images/bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-md w-full bg-transparent p-8 shadow-lg rounded-lg backdrop:blur-lg">
        <h2 className="text-2xl font-bold text-center text-blue-700">Create an account</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
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
              value={formData.email}
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
              autoComplete="new-password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              autoComplete="new-password"
              required
              value={formData.confirmpassword}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              SIGN UP
            </button>
          </div>
          <div className="text-center mt-4">
            <Link href="/login" className="text-sm text-gray-900 hover:underline">
              Already have an account? <b className='text-blue-600'>Sign in</b>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

"use client"
import Link from 'next/link';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-white flex min-h-screen">

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64  shadow-lg bg-white text-black transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex items-center justify-between h-16 bg-white px-4">
          <h1 className="text-xl ml-5  font-bold">NextJs-Task</h1>
          <button onClick={toggleSidebar} className="text-black focus:outline-none lg:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <nav className="p-4 border-t border-black">
          <Link href="/dashboard/home" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Home</Link>
          <Link href="/dashboard/profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Profile</Link>
          <Link href="/login" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Logout</Link>
        </nav>
      </div>

      {/* Header and Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        <header className="flex items-center bg-white p-5 shadow-md">
          <button onClick={toggleSidebar} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          {/* <h1 className="text-2xl font-bold">Shahab ud din</h1> */}
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

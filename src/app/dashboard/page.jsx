"use client";
import { useAuth } from '@/context/context';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const Layout = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const confirmLogout = () => {
    logout(); 
    setIsModalOpen(false);
    router.push('/login');
  };

  const cancelLogout = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white flex min-h-screen">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 shadow-lg bg-white text-black transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex items-center justify-between h-16 bg-white px-4">
          <h1 className="text-xl ml-5 font-bold">NextJs-Task</h1>
          <button onClick={toggleSidebar} className="text-black focus:outline-none lg:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <nav className="p-4 border-t border-black">
          <Link href="/dashboard/home" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Home</Link>
          <Link href="/dashboard/profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Profile</Link>
          <div className="block cursor-pointer py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200" onClick={handleLogoutClick}>
            <button>Logout</button>
          </div>
        </nav>
      </div>

      {/* Header and Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        <header className="w-full items-center lg:fixed bg-white p-5 shadow-md">
          <button onClick={toggleSidebar} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 mt-20">
          {children}
        </main>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
            <p className="mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-end">
              <button onClick={cancelLogout} className="mr-4 px-4 py-2 bg-gray-300 rounded">Cancel</button>
              <button onClick={confirmLogout} className="px-4 py-2 bg-red-600 text-white rounded">Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;

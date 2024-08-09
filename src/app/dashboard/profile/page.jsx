import React from 'react'
import Layout from '../page'

const Profile = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-10 w-full">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">Profile Page</h1>
        
        <div className="w-full p-6 bg-white rounded-lg ">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img 
              src="https://picsum.photos/200/300" 
              alt="Profile" 
              className="w-32 h-32 md:w-48 md:h-48 rounded md:ml-6 shadow-md mb-4 "
            />
            <div className='ml-40'>
              <h2 className="text-3xl font-semibold text-gray-800">John Doe</h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hobbies</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <img 
                  src="https://picsum.photos/200/300" 
                  alt="Project 1" 
                  className="rounded-md mb-4 w-full h-72"
                />
                <h4 className="text-xl font-semibold text-gray-800">Project 1</h4>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <img 
                  src="https://picsum.photos/200/300" 
                  alt="Project 2" 
                  className="rounded-md mb-4 w-full h-72"
                />
                <h4 className="text-xl font-semibold text-gray-800">Project 2</h4>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile

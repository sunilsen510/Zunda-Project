import React from 'react';
import Link from 'next/link';

const Request = () => {
  return (
    <section className=" bg-white flex items-center justify-center flex-col px-4">
      <h2 className="text-3xl text-center font-bold mb-6">Send a Request</h2>
      <div className="w-full max-w-[1392px] mx-auto flex flex-col lg:flex-row bg-[#F1F5F9] gap-6 shadow-md rounded-lg overflow-hidden">
        {/* Left Side Image */}
        {/* Logo */}
          <div className='flex max-w-[667px] flex-col'>
            <div className="w-[109px] h-[57px] flex items-center justify-center">
              <Link href="/">
                <img
                  src="/images/Logo.svg"
                  alt="Logo"
                  className="h-12 lg:w-[192px] lg:h-[48px] md:h-12"
                />
              </Link>
            </div>
            <p>Leave us your inquiry, and a dedicated manager will get back to you within 24  hours. 
              All consultations are strictly confidential, and your information is securely protected as a core  principle.
            </p>
              <div
                className="flex items-center relative"
                style={{
                  '--x-size': '749px',
                  '--y-size': '200px',
                  '--radius': 'calc(min(var(--x-size), var(--y-size)) / 2)',
                }}
              >
            <div
              className="bg-[#E74C3C]"
              style={{
                width: 'var(--x-size)',
                height: 'var(--y-size)',
                borderTopLeftRadius: '0',
                borderBottomLeftRadius: '0',
                borderTopRightRadius: 'var(--radius)',
                borderBottomRightRadius: 'var(--radius)',
              }} >
            </div>
            <div className="w-[413px] h-[561px] absolute bottom-0 right-0">
              <img
                src="/images/boy.png"
                alt="Request Visual"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Side Login Form */}
        <div className="w-full lg:w-1/2 p-8 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Login to Continue</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Login
              </button>
              <p className="text-sm text-gray-600 text-center mt-2">
                Don’t have an account?{' '}
                <a href="#" className="text-blue-600 hover:underline">Register</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Request;


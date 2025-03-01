"use client";
''
import React from 'react'

function CCBanner() {
  return (
    <>
      <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-screen flex items-center justify-center">
        {/* Background Video/Image */}
        {/* <video
              className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
              src="" // Replace with your video file
              autoPlay
              loop
              muted
            /> */}

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Content */}
        <div className="relative text-center text-white px-4 sm:px-6 md:px-8 lg:px-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
            Cloud Services
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-extralight w-1/2 mx-auto">
          Seamlessly transition to a secure and scalable cloud environment with our tailored cloud solutions. We streamline migration, optimize performance, and minimize disruptions to your operations using the latest technologies and best practices.
          </p>

          <button className="relative mt-6 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold text-white transition-all duration-300 ease-in-out rounded-lg shadow-lg group">
            <span className="absolute inset-0 bg-gradient-to-r from-black via-blue-800 to-black rounded-lg animate-border"></span>
            <span className="absolute inset-0 m-[2px] bg-gray-900 rounded-lg group-hover:bg-gray-950 transition-all duration-300"></span>
            <span className="relative z-10">Request Cloud Consulting Services</span>
          </button>

          <style>
            {`
              @keyframes borderAnimation {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
              .animate-border {
                background-size: 200% 200%;
                animation: borderAnimation 3s linear infinite;
              }
            `}
          </style>
        </div>
      </div>
    </>
  )
}

export default CCBanner;

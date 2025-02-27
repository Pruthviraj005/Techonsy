'use client'
import React from 'react'

function IotBanner() {
  return (
    <div className="relative w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] lg:h-screen flex items-center justify-center px-4">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center text-white max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          IOT <br /> App Development Service
        </h1>

        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-thin">
          <span className="font-semibold">Unlock the Power of IoT to Drive Innovation and Efficiency!</span>
          <br />
          Seamless connectivity, smart solutions, and data-driven innovation for your business. 🚀
        </p>

        <button className="relative mt-6 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white transition-all duration-300 ease-in-out rounded-lg shadow-lg group">
          <span className="absolute inset-0 bg-gradient-to-r from-black via-blue-800 to-black rounded-lg animate-border"></span>
          <span className="absolute inset-0 m-[2px] bg-gray-900 rounded-lg group-hover:bg-gray-950 transition-all duration-300"></span>
          <span className="relative z-10">Request IoT Services</span>
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
  )
}

export default IotBanner
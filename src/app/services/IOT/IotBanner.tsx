'use client'
import React from 'react'
import Image from 'next/image'

function IotBanner() {
  return (
    <div className="relative w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] lg:min-h-screen flex items-center justify-center px-4 py-10 sm:py-16 lg:py-20">
      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl w-full text-white text-center md:text-left">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Internet of Things <br /> Development
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-thin">
            In today&apos;s connected world, the internet is everywhere—powering devices from smartwatches to fitness trackers and beyond. IoT seamlessly integrates technology into everyday life, enabling real-time data exchange, automation, and smarter decision-making.
          </p>
          <button className="relative mt-6 px-5 sm:px-7 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white transition-all duration-300 ease-in-out rounded-lg shadow-lg group">
            <span className="absolute inset-0 bg-gradient-to-r from-black via-blue-800 to-black rounded-lg animate-border"></span>
            <span className="absolute inset-0 m-[2px] bg-gray-900 rounded-lg group-hover:bg-gray-950 transition-all duration-300"></span>
            <span className="relative z-10">Get Started</span>
          </button>
        </div>

        {/* Right Content - Image or Animation */}
        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <Image
            src="/images/iot/iotglobe-removebg-preview.png"
            alt="iot"
            width={600}
            height={400}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
          />
        </div>
      </div>

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
  )
}

export default IotBanner

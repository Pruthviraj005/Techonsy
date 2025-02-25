'use client'

import { Spotlight } from '../../../../components/ui/spotlight-new'
import React from "react"

export default function BlockChainBanner() {
  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center dark:bg-gray-900 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] bg-opacity-65">
        <Spotlight />
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
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            Blockchain Development: <br /> Transforming Industries with Decentralized Solutions
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Blockchain has reshaped the IT landscape, extending far beyond cryptocurrencies. Initially adopted in financial markets, its decentralized and transparent nature now drives innovation across multiple industries, offering secure, efficient, and tamper-proof solutions.
          </p>

          <button className=" top-10 relative px-8 py-3 text-lg font-semibold text-white transition-all duration-300 ease-in-out rounded-lg shadow-lg group">
            <span className="absolute inset-0 bg-gradient-to-r from-black via-blue-800 to-black rounded-lg animate-border"></span>
            <span className="absolute inset-0 m-[2px] bg-gray-900 rounded-lg group-hover:bg-gray-950 transition-all duration-300"></span>
            <span className="relative z-10">🚀 Consult Our Experts</span>
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
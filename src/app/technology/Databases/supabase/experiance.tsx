"use client";
"";

import dynamic from "next/dynamic";
import animationData from "./experiance.json"; // Update the path as per your project structure

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function Experiance() {
  return (
    <section className="relative flex justify-center items-center py-16 px-6 min-h-screen">
      {/* Background Effect */}
      <div className="absolute inset-0 w-full h-full opacity-50 blur-3xl z-0 
          bg-[radial-gradient(circle_at_center,_#1b3a6b_10%,_#0a2a52_40%,_#020617_90%)]">
        </div>
      {/* Content */}
      <div className="relative z-10 max-w-[1000px] w-full flex flex-col md:flex-row items-center gap-10 p-10 rounded-lg shadow-lg bg-white/5 backdrop-blur-lg">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold leading-tight text-white">
            Build Scalable & High-Performance Apps with Supabase
          </h2>
          
          <p className="mt-4 text-gray-300">
            Leverage multi-dimensional Google App Engine and Google Cloud computing services compatible with diverse industry verticals and requirements. Collaborate to create scalable, flexible, and creative cloud solutions ensuring post-modern efficiency and optimal performance.
          </p>
          <p className="mt-4 text-gray-300">
            Deploy experienced domain experts skilled at designing and developing the entire gamut of Google App Engine’s capabilities and create customized solutions, enterprise-scale implementations with round-the-clock maintenance, support, and third-party integrations.
          </p>
          <p className="mt-4 text-gray-300">
            Invoke highly acclaimed services pertaining to cloud migration, Google App Engine consulting, and application development, integration, local development, implementation, and rapid access to information anywhere, anytime.
          </p>
        </div>

        {/* Right Animation */}
        <div className="md:w-1/2 flex justify-center ">
          <Lottie 
            animationData={animationData} 
            loop 
            play 
            className="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}

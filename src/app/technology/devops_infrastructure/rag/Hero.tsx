"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="bg-gray-900 text-white py-16 px-6 md:px-12 relative flex justify-center "
      style={{
        backgroundImage: "url('/images/technology/Devops_infrastructure/rag/rag.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-[1000px] flex flex-col md:flex-row items-center mt-16">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <p className="text-blue-400 uppercase text-sm">
            Consultancy & Professional Services / AI Consultancy
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Retrieval-Augmented Generation Consultancy
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            We are your implementation partner for Retrieval-Augmented
            Generation (RAG) solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 items-center md:items-start">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Contact us
            </button>
            
          </div>

          <p className="text-gray-400 text-sm">Get a demo of RAG solutions</p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900 opacity-50 rounded-lg"></div>
            <Image
              src="/images/technology/Devops_infrastructure/rag/image-02.jpg"
              alt="AI Consultation"
              width={500}
              height={350}
              className="rounded-lg w-full max-w-[500px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

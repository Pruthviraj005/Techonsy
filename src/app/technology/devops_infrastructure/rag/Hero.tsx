"use client";
import React from "react";
import Image from "next/image";
import ButtonComp from "@/components/Common/ButtonComp";

const Hero = () => {
  return (
    <section
      className="bg-gray-900 text-white py-16 px-6 md:px-12 relative flex justify-center"
      style={{
        backgroundImage: "url('/images/technology/Devops_infrastructure/rag/rag.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row items-center mt-16 gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 text-transparent bg-clip-text pb-2 border-b-2 border-blue-500 inline-block">
            Retrieval-Augmented Generation Consultancy
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Your trusted implementation partner for cutting-edge Retrieval-Augmented Generation (RAG) solutions. We help businesses enhance AI-driven applications by integrating advanced retrieval methods with generative models, ensuring more accurate, context-aware, and efficient responses. From strategy to deployment, we tailor solutions to optimize knowledge retrieval, improve automation, and unlock new capabilities for your organization.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 items-center md:items-start">
            <ButtonComp/>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
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

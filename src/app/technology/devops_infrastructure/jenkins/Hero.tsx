"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="bg-gray-900 text-white py-16 px-6 md:px-12 relative flex justify-center"
      style={{
        backgroundImage: "url('/images/technology/Devops_infrastructure/jenkins/bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-[1000px] flex flex-col md:flex-row items-center mt-16">
        {/* Left Content */}
        <div className="md:w-3/5 space-y-4 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Jenkins as a Service
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Accelerate development with faster builds, automation, and seamless team collaboration.
            Harness the power of Jenkins for scalable CI/CD, efficient workflows, and streamlined communication across development teams.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 items-center md:items-start">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image - Reduced Size */}
        <div className="md:w-2/5 mt-8 md:mt-0 flex justify-center">
          <div className="relative w-[250px] md:w-[300px]">
            <Image
              src="/images/technology/Devops_infrastructure/jenkins/jenkins.svg"
              alt="Jenkins"
              width={300}
              height={200}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

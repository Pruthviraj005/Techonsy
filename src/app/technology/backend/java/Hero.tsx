"use client";

import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center text-white "
      style={{ backgroundImage: "url('/images/technology/Java.png')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/90 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl text-center px-6 md:px-12 flex flex-col gap-6" >
        {/* Java Themed Gradient Heading */}
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#efe1d0fc] via-[#de9c5f] to-[#df6f82] bg-clip-text text-transparent">
          Java Development Company
        </h1>

        <p className="w-full text-lg md:text-2xl font-medium text-gray-300 py-6">
          Build secure, robust, and scalable web applications to revitalize your business.
        </p>

        <p className="mt-3 text-sm md:text-lg max-w-2xl mx-auto text-gray-400">
          At Radixweb, we offer cutting-edge Java app development services to meet the mobile and web application needs of varied enterprises.
        </p>

        {/* Scroll Down Indicator with React Icon */}
        <div className="mt-8 flex justify-center">
          <FaChevronDown className="text-4xl text-[#f89820] animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
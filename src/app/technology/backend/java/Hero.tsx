"use client";

import ButtonComp from "@/components/Common/ButtonComp";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section 
      className="relative lg:h-screen md:h-[80vh] h-[80vh] flex items-center justify-center bg-cover bg-center text-white px-4"
      style={{ backgroundImage: "url('/images/technology/Java.png')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl text-center flex flex-col gap-6 justify-center items-center px-6">
        {/* Java Themed Gradient Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#efe1d0fc] via-[#de9c5f] to-[#df6f82] bg-clip-text text-transparent leading-tight">
          Java Development Company
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl font-medium text-gray-300 px-2 md:px-6">
          Build secure, robust, and scalable web applications to revitalize your business.
        </p>

        <p className="text-sm sm:text-base md:text-lg max-w-2xl text-gray-400">
          At Radixweb, we offer cutting-edge Java app development services to meet the mobile and web application needs of varied enterprises.
        </p>

        {/* Scroll Down Indicator */}
        <div className="mt-6 flex justify-center">
          <FaChevronDown className="text-3xl md:text-4xl text-[#f89820] animate-bounce" />
        </div>

        {/* Button Component */}
        <div className="mt-4">
          <ButtonComp />
        </div>
      </div>
    </section>
  );
};

export default Hero;
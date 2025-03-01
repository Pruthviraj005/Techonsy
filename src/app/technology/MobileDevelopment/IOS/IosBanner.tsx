"use client";
''

import ButtonComp from "@/components/Common/ButtonComp";
import Image from "next/image";

export default function IosBanner() {
  return (
    <section className="text-white py-16 px-6 lg:px-0 bg-gradient-to-br from-[#0a0f1a] via-[#020617] to-[#000]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between mt-14 mb-4">

        {/* Left Section - Text Content */}
        <div className="md:w-1/2 text-center md:text-left lg:ml-10">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Innovative iOS App Development <br className="hidden sm:block" /> for Your Business
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed ">
            Renowned for expertise in iPhone app development, we deliver exceptional mobile solutions tailored to your unique needs. Our team of skilled iOS developers ensures seamless, high-quality app experiences, crafted to meet your specific project requirements.
          </p>

          {/* CTA Button */}
          {/* <a
            href="#"
            className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-purple-500 transform hover:scale-105"
          >
            Consult our iOS Team →
          </a> */}
         <div className="my-5 flex justify-center items-center lg:justify-start">
          <ButtonComp/>
         </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image 
            src="/images/ios/ios.png" 
            alt="iOS" 
            width={400} 
            height={400} 
            className="bg-transparent drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
'use client';

import ButtonComp from '@/components/Common/ButtonComp';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function AngularBanner() {
  return (
    <div className="max-h-screen w-full border-b-[0.5px] border-b-purple-950 bg-gradient-to-br from-[#141d3d] via-[#020617] to-[#031024]">
      <section className="relative flex flex-col md:flex-row items-center justify-between text-white py-16 px-6 md:px-20 max-w-[1000px] mx-auto">
        
        {/* Text Content */}
        <div className="max-w-2xl text-center md:text-left">
          {/* Gradient Header Text */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-10 md:mt-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500">
            AngularJS Development
          </h1>

          <p className="text-gray-300 leading-relaxed mb-6 w-full md:w-4/5 mx-auto md:mx-0 pt-4">
            Discover the full potential of AngularJS development services with <span className="text-blue-400 font-semibold">Techonsy</span>, your top choice for innovative solutions customized to your business requirements. We specialize in crafting secure applications using AngularJS, ensuring they meet your unique needs.
          </p>

          <div className="flex justify-center md:justify-start">  
            <ButtonComp/>
          </div>
        </div>

        {/* Angular Logo with Glow Effect */}
        <div className="relative flex justify-center md:justify-end mt-10 md:mt-20">
          {/* Glowing Background Effect */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-52 h-52 md:w-64 md:h-64 bg-blue-900 blur-[80px] opacity-40 rounded-full"></div>

          {/* Angular Logo */}
          <div className="w-24 h-30 sm:w-48 sm:h-40 md:w-50 md:h-60 lg:w-70 lg:h-70 relative z-10">
            <Image
              src="/images/angular/Angula-Js-Logo.webp"
              alt="Angular Logo"
              width={130}
              height={130}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
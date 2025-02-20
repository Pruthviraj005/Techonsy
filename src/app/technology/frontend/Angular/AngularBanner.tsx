'use client';

import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function AngularBanner() {
  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-blue-900 text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center">
      {/* Text Content */}
      <div className="max-w-4xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-10 md:mt-20">
          AngularJS development
        </h1>
        <p className="text-gray-300 leading-relaxed mb-6 w-full md:w-4/5 mx-auto md:mx-0 pt-4">
          Discover the full potential of AngularJS development services with Techonsy, your top choice for innovative solutions customized to your business requirements. We specialize in crafting custom, secure applications using AngularJS, ensuring they meet your unique needs. Join the AngularJS revolution with us and experience the dynamic capabilities of this framework.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all">
            Get Started <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Responsive Image */}
      <div className="flex justify-center md:justify-end mt-10 md:mt-20">
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-80 lg:h-80">
          <Image
            src="/images/angular/Angula-Js-Logo.webp"
            alt="Angular Logo"
            width={150}
            height={150}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

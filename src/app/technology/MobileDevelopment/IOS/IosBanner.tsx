'use client'

import Image from "next/image";

export default function IosBanner() {
  return (
    <section className="bg-gradient-to-r from-black to-[#0a1f44] text-white py-16 px-6 sm:px-12 pt-40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">

        {/* Left Section - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Innovative iOS App Development <br className="hidden sm:block" /> for Your Business
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Renowned for expertise in iPhone app development, we deliver exceptional mobile solutions tailored to your unique needs. Our team of skilled iOS developers ensures seamless, high-quality app experiences, crafted to meet your specific project requirements.
          </p>

          {/* CTA Button */}
          <a
            href="#"
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
          >
            Consult our iOS Team →
          </a>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image src="/images/ios/ios.png" alt="ios" width={500} height={500} className="bg-transparent" />
        </div>
      </div>
    </section>
  );
}

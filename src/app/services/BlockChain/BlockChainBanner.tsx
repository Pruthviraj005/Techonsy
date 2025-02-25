'use client'

import Image from "next/image";

export default function BlockChainBanner() {
  return (
    <section className="bg-gradient-to-r from-black to-[#0a1f44] text-white py-16 px-6 sm:px-12 pt-40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">

        {/* Left Section - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Blockchain Development<br className="hidden sm:block" /> Transforming Industries with Decentralized Solutions
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Blockchain has reshaped the IT landscape, extending far beyond cryptocurrencies. Initially adopted in financial markets, its decentralized and transparent nature now drives innovation across multiple industries, offering secure, efficient, and tamper-proof solutions.
          </p>

          {/* CTA Button */}
          <a
            href="#"
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
          >
            Get Started
          </a>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image src="/images/blockchain/banner.png" alt="ios" width={700} height={500} className="bg-transparent" />
        </div>
      </div>
    </section>
  );
}

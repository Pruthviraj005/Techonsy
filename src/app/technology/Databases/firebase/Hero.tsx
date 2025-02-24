"use client";
import img from '../../../../../public/images/technology/databases/firebase/Logomark_Full Color.svg';

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden border-b-[0.5px] border-yellow border-opacity-30 ">
      {/* Background Effect */}
      <div className="absolute inset-0   opacity-90"></div>

      {/* Floating Blobs */}
      
      <div className="absolute bg-black w-full bg-opacity-70 h-full"></div>

      {/* Content */}
      <section className="relative text-white py-10 px-6 md:px-16 flex flex-col md:flex-row items-center max-w-[1000px] mx-auto">
        {/* Left Section */}
        <div className="text-center md:text-left py-10">
          <h2 className="text-3xl sm:text-5xl md:text-5xl font-bold mb-6 pt-10  ">
            Accelerate App Development with <span className='text-[#FFC400]'>Firebase</span>
          </h2>
          <div className="flex flex-col items-center md:items-start gap-6">
            <p className="text-md sm:text-lg text-slate-300 text-center md:text-justify max-w-md">
            Build fast, efficient, and scalable apps with Firebase, streamlining backend development for Android, iOS, and web platforms. Leverage Firebase’s powerful tools for seamless integration and high-performance backend systems
            </p>
            <button className="bg-black text-red-500 border-[0.5px] border-[#FFC400] border-opacity-80 w-[50%] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-100 transition hover:scale-110 duration-500  sm:w-1/2 md:w-[40%]">
                Get Started
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0 w-full md:w-1/2 ">
          <div className="p-6 rounded-lg shadow-lg shadow-red-500">
            <Image src={img} alt="firebase" width={200} height={200} className="w-32 sm:w-48 h-auto " />
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
          100% { transform: translateY(0px) scale(1); }
        }
        .animate-blob {
          animation: blob 6s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
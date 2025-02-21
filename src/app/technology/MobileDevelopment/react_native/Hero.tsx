"use client";
import img from "../../../../../public/images/technology/MobileDevelopment/reactNative/react-native-logo.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden ">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-700 opacity-90"></div>

      {/* Floating Blobs */}
      <div className="absolute -top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-blue-400 opacity-40 blur-3xl rounded-full animate-blob"></div>
      <div className="absolute bottom-0 right-5 sm:right-10 w-52 sm:w-96 h-52 sm:h-96 bg-indigo-500 opacity-30 blur-3xl rounded-full animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 left-1/4 w-32 sm:w-80 h-32 sm:h-80 bg-purple-400 opacity-20 blur-3xl rounded-full animate-blob animation-delay-4000"></div>
      <div className="absolute bg-black w-full bg-opacity-70 h-full"></div>

      {/* Content */}
      <section className="relative text-white py-10 px-6 md:px-16 flex flex-col md:flex-row items-center max-w-[1000px] mx-auto">
        {/* Left Section */}
        <div className="text-center md:text-left py-10">
          <h2 className="text-3xl sm:text-6xl md:text-6xl font-bold mb-6 pt-10">
            <span className="text-cyan-500">React Native</span> Development
          </h2>
          <div className="flex flex-col items-center md:items-start gap-6">
            <p className="text-md sm:text-lg text-slate-300 text-center md:text-justify max-w-md">
              Craft exceptional React Native applications that exhibit unparalleled speed, reliability, scalability, and captivating user experiences.
              Rely on our proficient team of app developers, boasting over a decade of expertise, to construct extraordinary apps that flawlessly align with your unique specifications and aspirations.
            </p>
            <button className="bg-white text-blue-500 w-[50%] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-100 transition hover:scale-110 duration-500  sm:w-1/2 md:w-[40%]">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0 w-full md:w-1/2 ">
          <div className="p-6 rounded-lg shadow-lg shadow-cyan-500">
            <Image src={img} alt="React Native" width={200} height={200} className="w-32 sm:w-48 h-auto" />
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
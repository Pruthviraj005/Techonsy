"use client";
'';

import IndustryWeServe from '@/components/IndustryWeServe';
import { FaShoppingCart, FaHeartbeat, FaHome, FaBrain, FaIndustry, FaBook } from 'react-icons/fa';

const industries = [
  { name: 'Ecommerce', icon: FaShoppingCart, bg: 'bg-gradient-to-br from-[#FFD3A5] to-[#FD6585]', shadow: 'shadow-[#FF6B6B]/50' },
  { name: 'Healthcare', icon: FaHeartbeat, bg: 'bg-gradient-to-br from-[#A1C4FD] to-[#C2E9FB]', shadow: 'shadow-[#6B8EFC]/50' },
  { name: 'Real Estate', icon: FaHome, bg: 'bg-gradient-to-br from-[#FFDEE9] to-[#B5FFFC]', shadow: 'shadow-[#FFAF45]/50' },
  { name: 'AI Software', icon: FaBrain, bg: 'bg-gradient-to-br from-[#D4FC79] to-[#96E6A1]', shadow: 'shadow-[#22C55E]/50' },
  { name: 'Manufacturing', icon: FaIndustry, bg: 'bg-gradient-to-br from-[#FEE140] to-[#FA709A]', shadow: 'shadow-[#A855F7]/50 ' },
  { name: 'Education', icon: FaBook, bg: 'bg-gradient-to-br from-[#F9D423] to-[#FF4E50]', shadow: 'shadow-[#EAB308]/50' },
];

export default function IndustriesWeServe() {
  return (
    <div>
      <IndustryWeServe/>
    </div>
    // <section className="py-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
    //   {/* Section Title */}
    //   <h2 className="text-4xl font-bold text-center text-white mb-12">
    //     Industries <span className="text-yellow-400">We Serve</span>
    //   </h2>

    //   {/* Grid Layout */}
    //   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8">
    //     {industries.map((industry, index) => (
    //       <div
    //         key={index}
    //         className={`flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-110 ${industry.bg} border border-gray-300/50 backdrop-blur-xl bg-opacity-80 hover:shadow-xl hover:-translate-y-2`}
    //       >
    //         {/* Icon with Animation */}
    //         <div className={`p-4 rounded-full text-white text-5xl shadow-lg transition-all duration-300 transform hover:rotate-6 hover:scale-125 ${industry.shadow}`}>
    //           <industry.icon />
    //         </div>

    //         {/* Industry Name */}
    //         <p className="mt-4 text-xl font-semibold text-black text-center tracking-wide">{industry.name}</p>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  );
}

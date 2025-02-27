'use client';

import IndustryWeServe from '@/components/IndustryWeServe';
import { FaMobileAlt, FaHeartbeat, FaWallet, FaShoppingCart, FaGraduationCap, FaGamepad, FaCar, FaUtensils, FaPlane, FaFilm } from 'react-icons/fa';

// const industries = [
//   { name: 'HealthTech', icon: FaHeartbeat, gradient: 'from-red-400 to-pink-600' },
//   { name: 'FinTech', icon: FaWallet, gradient: 'from-green-400 to-teal-600' },
//   { name: 'Ecommerce', icon: FaShoppingCart, gradient: 'from-blue-400 to-purple-600' },
//   { name: 'EdTech', icon: FaGraduationCap, gradient: 'from-blue-800 to-blue-500' },
//   { name: 'Gaming', icon: FaGamepad, gradient: 'from-purple-400 to-indigo-600' },
//   { name: 'Automotive', icon: FaCar, gradient: 'from-blue-500 to-cyan-600' },
//   { name: 'Food Delivery', icon: FaUtensils, gradient: 'from-orange-400 to-red-500' },
//   { name: 'Travel & Tourism', icon: FaPlane, gradient: 'from-indigo-400 to-blue-500' },
//   { name: 'Entertainment', icon: FaFilm, gradient: 'from-pink-400 to-purple-600' },
//   { name: 'On-Demand Services', icon: FaMobileAlt, gradient: 'from-teal-700 to-teal-400' },
// ];

export default function IndustriesWeServe() {
  return (
    <div>
      <IndustryWeServe/>
    </div>
    // <section className="py-12 px-6 md:px-12 lg:px-20 max-w-8xl mx-auto">
    //   <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
    //     Industries <span className="text-gradient bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">We Serve</span>
    //   </h2>

    //   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
    //     {industries.map((industry, index) => (
    //       <div
    //         key={index}
    //         className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20"
    //       >
    //         <div className={`p-4 rounded-full bg-gradient-to-r ${industry.gradient} text-white shadow-md shadow-black/20 transition-all duration-300 hover:rotate-6 hover:scale-110`}>
    //           <industry.icon className="text-5xl" />
    //         </div>
    //         <p className="mt-3 text-lg font-semibold text-center text-white">{industry.name}</p>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  );
}

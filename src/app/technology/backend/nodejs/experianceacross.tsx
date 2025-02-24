"use client";

import { motion } from "framer-motion";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { GiHealthNormal } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { MdPrecisionManufacturing } from "react-icons/md";
import { FaSchool } from "react-icons/fa";

const industries = [
  { title: "Ecommerce", icon:<RiShoppingCart2Fill />, color: "shadow-blue-500" },
  { title: "Healthcare", icon:<GiHealthNormal />, color: "shadow-orange-500" },
  { title: "Real Estate", icon:<FaHome />, color: "shadow-teal-500" },
  { title: "AI-Software", icon:<GrTechnology />, color: "shadow-green-500" },
  { title: "Manufacturing", icon:<MdPrecisionManufacturing />, color: "shadow-blue-400" },
  { title: "Education", icon:<FaSchool />, color: "shadow-purple-500" },
];

const ExperienceAcross = () => {
  return (
    <section className="relative py-16 px-4 flex justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1b1e2e] to-[#0c1c2c] opacity-90"></div>
      

      {/* Content */}
      <div className="relative max-w-[1000px] mx-auto text-center z-10">
        <h4 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
          Work for Any Industry
        </h4>
        <h2 className="text-3xl font-bold text-[#A1E3F9] mb-4">
          Experience Across Different Industries
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>

        {/* Circular Card Grid */}
        <div className="ml-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 justify-center">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className={`w-32 h-32 flex flex-col items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-gray-600 transition-all hover:scale-110 ${industry.color}`}
              whileHover={{ 
                boxShadow: `0px 0px 20px rgba(255, 255, 255, 0.3)` 
              }}
            >
              <div className="text-4xl text-white">{industry.icon}</div>
              <p className="text-sm font-semibold text-white mt-2">
                {industry.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceAcross;

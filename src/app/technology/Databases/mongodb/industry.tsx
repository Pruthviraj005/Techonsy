"use client";
'';
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Home, Cpu, Factory, BookOpen } from 'lucide-react';
import IndustryWeServe from '@/components/IndustryWeServe';

const industries = [
  { name: "Ecommerce", icon: <ShoppingCart size={24} />, color: "#3B82F6" },
  { name: "Healthcare", icon: <Heart size={24} />, color: "#60A5FA" },
  { name: "Real Estate", icon: <Home size={24} />, color: "#93C5FD" },
  { name: "AI Software", icon: <Cpu size={24} />, color: "#2563EB" },
  { name: "Manufacturing", icon: <Factory size={24} />, color: "#1D4ED8" },
  { name: "Education", icon: <BookOpen size={24} />, color: "#1E40AF" }
];

const IndustriesFlowingWave = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(Array(industries.length).fill(false));
  
  useEffect(() => {
    const timeouts = industries.map((_, index) => {
      return setTimeout(() => {
        setIsVisible(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 200 * index);
    });
    
    return () => timeouts.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div>
      <IndustryWeServe/>
    </div>
    // <div className="relative bg-gray-900 p-8 rounded-xl overflow-hidden w-full min-h-screen">
    //   {/* Animated background patterns */}
    //   <div className="absolute inset-0 overflow-hidden">
    //     <div className="absolute w-full h-full">
    //       {industries.map((_, index) => (
    //         <div
    //           key={index}
    //           className="absolute w-64 h-64 rounded-full opacity-10 animate-pulse"
    //           style={{
    //             background: `radial-gradient(circle, ${industries[index].color}40 0%, transparent 70%)`,
    //             top: `${Math.random() * 100}%`,
    //             left: `${Math.random() * 100}%`,
    //             animationDelay: `${index * 0.5}s`,
    //             animationDuration: '4s'
    //           }}
    //         />
    //       ))}
    //     </div>
    //     <svg className="absolute bottom-0 w-full h-48 opacity-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
    //       <path 
    //         fill="#3B82F6" 
    //         d="M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,245.3C672,245,768,203,864,186.7C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    //         className="animate-pulse"
    //         style={{ animationDuration: '10s' }}
    //       />
    //     </svg>
    //   </div>
      
    //   <div className="relative z-10 max-w-6xl mx-auto">
    //     <div className="mb-16 text-center">
    //       <h2 className="text-4xl font-bold text-white mb-4">
    //         Industries We <span className="text-blue-400">Serve</span>
    //       </h2>
    //       <div className="w-32 h-1 bg-blue-500 mx-auto transform scale-x-0 animate-scale-x"></div>
    //     </div>
        
    //     <div className="grid grid-cols-2 gap-8">
    //       {industries.map((industry, index) => (
    //         <div 
    //           key={index}
    //           className={`relative transform transition-all duration-700 ease-out ${
    //             isVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
    //           }`}
    //           onMouseEnter={() => setActiveIndex(index)}
    //           onMouseLeave={() => setActiveIndex(null)}
    //         >
    //           <div className="relative group cursor-pointer bg-gray-800 bg-opacity-50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300">
    //             {/* Animated background gradient */}
    //             <div 
    //               className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
    //                 activeIndex === index ? 'opacity-20' : 'opacity-0'
    //               }`}
    //               style={{ 
    //                 background: `linear-gradient(135deg, ${industry.color}40 0%, transparent 100%)`,
    //                 filter: 'blur(8px)'
    //               }}
    //             />
                
    //             <div className="relative flex items-center">
    //               {/* Icon container with animations */}
    //               <div 
    //                 className={`flex items-center justify-center w-16 h-16 rounded-xl transition-all duration-500 ${
    //                   activeIndex === index ? 'scale-110' : 'scale-100'
    //                 }`}
    //                 style={{ 
    //                   backgroundColor: `${activeIndex === index ? industry.color : 'rgba(30, 41, 59, 0.7)'}`,
    //                   boxShadow: activeIndex === index ? `0 0 30px ${industry.color}40` : 'none'
    //                 }}
    //               >
    //                 <div className={`transition-all duration-300 ${
    //                   activeIndex === index ? 'text-white scale-110' : 'text-blue-400'
    //                 }`}>
    //                   {industry.icon}
    //                 </div>
    //               </div>
                  
    //               <div className="ml-6 flex-1">
    //                 <div className={`text-xl font-semibold mb-2 transition-all duration-300 ${
    //                   activeIndex === index ? 'text-blue-300' : 'text-white'
    //                 }`}>
    //                   {industry.name}
    //                 </div>
                    
    //                 {/* Animated underline */}
    //                 <div className="relative h-0.5 w-full overflow-hidden">
    //                   <div 
    //                     className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 ${
    //                       activeIndex === index ? 'w-full opacity-100' : 'w-12 opacity-50'
    //                     }`}
    //                     style={{ backgroundColor: industry.color }}
    //                   />
    //                 </div>
    //               </div>
    //             </div>

    //             {/* Decorative elements */}
    //             <div className="absolute -bottom-1 left-0 w-full h-1 overflow-hidden">
    //               <div 
    //                 className={`h-full transition-all duration-500 ${
    //                   activeIndex === index ? 'opacity-100' : 'opacity-0'
    //                 }`}
    //                 style={{ 
    //                   background: `linear-gradient(90deg, transparent 0%, ${industry.color} 50%, transparent 100%)`,
    //                   transform: activeIndex === index ? 'translateX(100%)' : 'translateX(-100%)'
    //                 }}
    //               />
    //             </div>
                
    //             {/* Corner accent */}
    //             <div 
    //               className={`absolute -top-px -right-px w-8 h-8 transition-all duration-300 ${
    //                 activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
    //               }`}
    //             >
    //               <div 
    //                 className="absolute top-0 right-0 w-full h-full"
    //                 style={{ 
    //                   background: `linear-gradient(135deg, transparent 50%, ${industry.color} 50%)`,
    //                   borderTopRightRadius: '0.75rem'
    //                 }}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
        
    //     <div className="mt-16 text-center">
    //       <button className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-lg font-medium transition-all duration-300 relative overflow-hidden group">
    //         <span className="relative z-10">Explore Our Solutions</span>
    //         <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"/>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default IndustriesFlowingWave;
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Modal from '../Modal';
import Contact from '../Contact';

const Hero = () => {
  const [techSolution, setTechSolution] = useState("Mobile App Development");
  const [animate, setAnimate] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const solutions = [
      "DevOps Development",
      "Web App Development",
      "AI Development",
      "UI & UX Designing",
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % solutions.length;
      setTechSolution(solutions[currentIndex]);
      setAnimate(true);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleAnimationEnd = () => {
    setAnimate(false);
  };

  const handleContactClick = () => {
    setIsModalOpen(true);
  }

  return (
    <>
      {/* Add global styles for keyframes */}
      <style jsx>{`
        @keyframes refinedPop {
          0% {
            transform: scale(0.3);
            opacity: 0;
            color: #60A5FA;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.8;
            color: #818CF8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
            color: #93C5FD;
            text-shadow: 0 0 20px rgba(147, 197, 253, 0.3);
          }
        }

        .animateRefinedPop {
          animation: refinedPop 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -20px) scale(1.1);
          }
          50% {
            transform: translate(0, 20px) scale(0.9);
          }
          75% {
            transform: translate(-20px, -20px) scale(0.95);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-blob {
          animation: blob 10s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        @keyframes float-group-1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(5px, -5px);
          }
        }

        @keyframes float-group-2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-5px, 5px);
          }
        }

        .float-group-1 {
          animation: float-group-1 4s ease-in-out infinite;
        }

        .float-group-2 {
          animation: float-group-2 4s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        @keyframes refinedPop {
          0% {
            transform: scale(0.95);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animateRefinedPop {
          animation: refinedPop 0.5s ease-out forwards;
          display: inline-block;
          transform-origin: center;
        }
      `}</style>

      <section
        id="home"
        className="relative z-10 overflow-hidden bg-black pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px]"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Text Content */}
            <div className="w-full relative">
              {/* Mobile Background Overlay */}
              <div className="absolute inset-0 bg-black/60 sm:bg-transparent -mx-4 px-4 sm:m-0 sm:p-0" />

              <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <div className="flex flex-col sm:flex-row flex-wrap items-baseline">
                    <span className="block whitespace-nowrap">We help you</span>
                    {/* <span className="block whitespace-nowrap sm:ml-2">you</span> */}
                    <span
                      className={`block sm:inline-block sm:ml-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent ${
                        animate ? "animateRefinedPop" : ""
                      }`}
                      style={{ 
                        maxWidth: '100%',
                        overflowWrap: 'break-word'
                      }}
                      onAnimationEnd={handleAnimationEnd}
                    >
                      {techSolution}
                    </span>
                  </div>
                  <div>
                    <span className="block whitespace-nowrap">for your business.</span>
                  </div>
                </div>
              </h1>
              <p className="mt-4 sm:mt-6 md:mt-8 mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-3xl">
                TECHONSY delivers cutting-edge IT solutions that empower
                businesses to thrive in the digital age. From custom software
                development to cloud infrastructure, we're your trusted technology
                partner.
              </p>
              <div className="flex flex-col sm:flex-row items-start justify-start gap-3 sm:gap-4 mt-8 sm:mt-0">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-semibold text-white overflow-hidden rounded-lg transition-all duration-300"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 opacity-30 group-hover:rotate-90 ease"></span>
                  <span className="relative flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Get Started
                  </span>
                </button>
                {/* <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-semibold text-white overflow-hidden rounded-lg transition-all duration-300"
                >
                  <span className="absolute inset-0 w-full h-full border-2 border-white/20 group-hover:border-white/40 rounded-lg backdrop-blur-sm bg-white/5"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:bg-gradient-to-br from-white/10 to-transparent"></span>
                  <span className="relative flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Book a Call
                  </span>
                </Link> */}
              </div>
            </div>

            {/* Right side - SVG Content */}
            <div className="absolute inset-0 w-full h-full overflow-hidden -z-[1]">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square">
                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full opacity-30"
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.2))'
                  }}
                >
                  {/* Central Hub - representing the core technology */}
                  <circle cx="250" cy="250" r="60" fill="url(#gradientCore)" className="animate-glow" />
                  <circle cx="250" cy="250" r="65" stroke="url(#gradient1)" strokeWidth="1" opacity="0.5" />
                  
                  {/* Database Section */}
                  <g className="float-group-1">
                    {/* Main Database Symbol */}
                    <path d="M250 450 
                            C300 450 300 420 250 420
                            C200 420 200 450 250 450Z" 
                          stroke="url(#gradient2)" strokeWidth="2" fill="none" />
                    <path d="M250 420
                            C300 420 300 390 250 390
                            C200 390 200 420 250 420Z" 
                          stroke="url(#gradient2)" strokeWidth="2" fill="none" />
                    <path d="M250 390
                            C300 390 300 360 250 360
                            C200 360 200 390 250 390Z" 
                          stroke="url(#gradient2)" strokeWidth="2" fill="none" />
                    
                    {/* Database Details */}
                    <path d="M235 375 L265 375" stroke="#93C5FD" strokeWidth="1" opacity="0.6" />
                    <path d="M235 405 L265 405" stroke="#93C5FD" strokeWidth="1" opacity="0.6" />
                    <path d="M235 435 L265 435" stroke="#93C5FD" strokeWidth="1" opacity="0.6" />
                    
                    {/* Data Flow Indicators */}
                    <g className="animate-pulse-slow">
                      <circle cx="250" cy="365" r="2" fill="#60A5FA" />
                      <circle cx="250" cy="395" r="2" fill="#818CF8" />
                      <circle cx="250" cy="425" r="2" fill="#93C5FD" />
                    </g>
                  </g>

                  {/* Database Connection Line */}
                  <g className="animate-pulse-slow">
                    <path d="M250 310 
                            C250 330, 250 350, 250 360" 
                          stroke="url(#gradient3)" 
                          strokeWidth="1.5" 
                          strokeDasharray="3,3" />
                    
                    {/* Data Flow Particles */}
                    <circle cx="250" cy="330" r="2" fill="#60A5FA">
                      <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="360;310" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="250" cy="340" r="2" fill="#818CF8">
                      <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="310;360" dur="3s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* Connected Devices and Services - Group 1 */}
                  <g className="float-group-1">
                    {/* Mobile App Icon - More detailed */}
                    <rect x="350" y="150" width="40" height="70" rx="5" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
                    <rect x="355" y="155" width="30" height="45" rx="2" stroke="#60A5FA" strokeWidth="1" fill="none" />
                    <circle cx="370" cy="210" r="4" stroke="#818CF8" strokeWidth="2" />
                    <line x1="360" y1="165" x2="380" y2="165" stroke="#60A5FA" strokeWidth="1" />
                    <line x1="360" y1="175" x2="380" y2="175" stroke="#60A5FA" strokeWidth="1" opacity="0.5" />
                    
                    {/* Web Development Icon - More detailed */}
                    <rect x="150" y="100" width="70" height="50" rx="5" stroke="url(#gradient2)" strokeWidth="2" fill="none" />
                    <path d="M155 110 h60 M155 120 h40 M155 130 h50" stroke="#93C5FD" strokeWidth="1" opacity="0.7" />
                    <rect x="155" y="115" width="15" height="15" stroke="#93C5FD" strokeWidth="1" fill="none" opacity="0.5" />
                  </g>

                  {/* Connected Devices and Services - Group 2 */}
                  <g className="float-group-2">
                    {/* Main Cloud */}
                    <path d="M350 350 Q380 350 380 320 Q380 290 350 290 Q350 270 330 270 Q310 270 310 290 Q280 290 280 320 Q280 350 310 350 Z" 
                          stroke="url(#gradient3)" strokeWidth="2" fill="none" />
                    
                    {/* DevOps Infinity Symbol */}
                    <path d="M315 310 C325 300, 335 300, 345 310 C355 320, 365 320, 375 310" 
                          stroke="#93C5FD" strokeWidth="1.5" fill="none" />
                    <path d="M315 310 C325 320, 335 320, 345 310 C355 300, 365 300, 375 310" 
                          stroke="#93C5FD" strokeWidth="1.5" fill="none" />
                    
                    {/* CI/CD Pipeline Arrows */}
                    <path d="M290 300 L300 300 L297 297 M300 300 L297 303" stroke="#60A5FA" strokeWidth="1" />
                    <path d="M360 300 L370 300 L367 297 M370 300 L367 303" stroke="#60A5FA" strokeWidth="1" />
                    
                    {/* Container Symbol */}
                    <rect x="325" y="285" width="12" height="12" stroke="#818CF8" strokeWidth="1" fill="none" />
                    <line x1="325" y1="289" x2="337" y2="289" stroke="#818CF8" strokeWidth="1" />
                  </g>

                  {/* Software Development Symbols - Group 1 */}
                  <g className="float-group-1">
                    {/* Code Editor Window */}
                    <rect x="150" y="100" width="70" height="50" rx="5" stroke="url(#gradient2)" strokeWidth="2" fill="none" />
                    {/* Window Controls */}
                    <circle cx="160" cy="110" r="2" fill="#FF5F57"/>
                    <circle cx="170" cy="110" r="2" fill="#FFBD2E"/>
                    <circle cx="180" cy="110" r="2" fill="#28C840"/>
                    {/* Code Lines */}
                    <path d="M155 125 h50 M155 135 h30 M155 145 h40" stroke="#93C5FD" strokeWidth="1" opacity="0.7" />
                    
                    {/* Git Branch Symbol */}
                    <circle cx="190" cy="130" r="3" fill="none" stroke="#93C5FD" strokeWidth="1" />
                    <path d="M190 133 L190 140 L200 140" stroke="#93C5FD" strokeWidth="1" fill="none" />
                    
                    {/* Database Symbol */}
                    <path d="M210 130 Q220 130 220 135 Q220 140 210 140 Q200 140 200 135 Q200 130 210 130" 
                          stroke="#818CF8" strokeWidth="1" fill="none" />
                    <path d="M200 135 Q200 145 210 145 Q220 145 220 135" 
                          stroke="#818CF8" strokeWidth="1" fill="none" opacity="0.5" />
                  </g>

                  {/* Code/Software Development - Group 2 */}
                  <g className="float-group-2">
                    {/* Code Brackets */}
                    <path d="M130 350 L160 320 L130 290" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
                    <path d="M190 350 L160 320 L190 290" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
                    
                    {/* Function Symbol */}
                    <path d="M145 320 Q155 320 155 310 Q155 300 165 300" stroke="#818CF8" strokeWidth="1" fill="none" />
                    <text x="162" y="305" fill="#818CF8" fontSize="8">ƒ</text>
                    
                    {/* API Endpoints */}
                    <path d="M140 335 L150 335 M145 332 L145 338" stroke="#93C5FD" strokeWidth="1" />
                    <path d="M170 335 L180 335 M175 332 L175 338" stroke="#93C5FD" strokeWidth="1" />
                  </g>

                  {/* Connection Lines with improved styling */}
                  <g className="animate-pulse-slow">
                    <path d="M250 190 C250 220, 250 220, 250 250" stroke="url(#gradient1)" strokeWidth="1.5" strokeDasharray="3,3" />
                    <path d="M310 250 C340 220, 350 200, 370 180" stroke="url(#gradient2)" strokeWidth="1.5" strokeDasharray="3,3" />
                    <path d="M310 250 C330 280, 340 300, 350 320" stroke="url(#gradient3)" strokeWidth="1.5" strokeDasharray="3,3" />
                    <path d="M190 250 C170 280, 160 300, 160 320" stroke="url(#gradient1)" strokeWidth="1.5" strokeDasharray="3,3" />
                    <path d="M190 250 C180 200, 180 150, 180 120" stroke="url(#gradient2)" strokeWidth="1.5" strokeDasharray="3,3" />
                  </g>

                  {/* Tech Particles with glow effect */}
                  <g className="animate-glow">
                    <circle cx="150" cy="150" r="3" fill="#60A5FA">
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="350" cy="150" r="3" fill="#818CF8">
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="150" cy="350" r="3" fill="#93C5FD">
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="350" cy="350" r="3" fill="#60A5FA">
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* Gradients */}
                  <defs>
                    <radialGradient id="gradientCore" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#93C5FD" />
                      <stop offset="100%" stopColor="#60A5FA" />
                    </radialGradient>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60A5FA"/>
                      <stop offset="100%" stopColor="#818CF8"/>
                    </linearGradient>
                    <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#93C5FD"/>
                      <stop offset="100%" stopColor="#60A5FA"/>
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#818CF8"/>
                      <stop offset="100%" stopColor="#93C5FD"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Background Gradient Effects */}
            <div className="absolute right-0 top-0 -z-10 opacity-10 sm:opacity-20">
              <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 blur-[150px] animate-pulse" />
            </div>
            <div className="absolute bottom-0 left-0 -z-10 opacity-10 sm:opacity-20">
              <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 blur-[150px] animate-pulse" />
            </div>
            
            {/* Additional decorative elements */}
            <div className="absolute left-1/2 top-0 -z-10 opacity-5 sm:opacity-10">
              <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-b from-cyan-500 to-transparent blur-[100px]" />
            </div>
            <div className="absolute right-1/4 bottom-0 -z-10 opacity-5 sm:opacity-10">
              <div className="h-[300px] w-[300px] rounded-full bg-gradient-to-t from-blue-500 to-transparent blur-[80px]" />
            </div>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Contact isPopup={true} onClose={() => setIsModalOpen(false)} />
        </Modal>
      </section>
    </>
  );
};

export default Hero;

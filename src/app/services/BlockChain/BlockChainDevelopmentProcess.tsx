'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineQrcode, HiOutlineShieldCheck, HiOutlineClipboardCheck, HiOutlineCloudUpload, HiOutlineDesktopComputer, HiOutlinePuzzle } from 'react-icons/hi';
import Image from 'next/image';
import { HiOutlineQrCode } from 'react-icons/hi2';

export default function BlockChainDevelopmentProcess() {
  const [openSection, setOpenSection] = useState(null);
  const contentRef = useRef(null);
  const scrollTimeout = useRef(null);
  const [showScrollbar, setShowScrollbar] = useState(false);

  const sections = [
    { id: 1, title: 'Requirement Gathering and Elicitation', icon: <HiOutlineLightBulb className="text-gradient text-3xl" /> },
    { id: 2, title: 'Blockchain-Integrated Solution Designing', icon: <HiOutlineQrCode className="text-gradient text-3xl" /> },
    { id: 3, title: 'Smart Contract Development', icon: <HiOutlineShieldCheck className="text-gradient text-3xl" /> },
    { id: 4, title: 'UI and Admin Interface Development', icon: <HiOutlineDesktopComputer className="text-gradient text-3xl" /> },
    { id: 5, title: 'Component Integration', icon: <HiOutlinePuzzle className="text-gradient text-3xl" /> },
    { id: 6, title: 'UAT and QA on Testnets and Custom Environments', icon: <HiOutlineClipboardCheck className="text-gradient text-3xl" /> },
    { id: 7, title: 'Production Level Deployment', icon: <HiOutlineCloudUpload className="text-gradient text-3xl" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      setShowScrollbar(true);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => setShowScrollbar(false), 2000);
    };
    contentRef.current?.addEventListener('scroll', handleScroll);
    return () => contentRef.current?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gradient leading-tight">
            Blockchain {" "}
            <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 text-transparent bg-clip-text">
              Development
            </span> Process
          </h2>
          <div className="flex justify-center lg:justify-center">
            <Image src="/images/blockchain/bctdevelopmentprocess.png" alt="Blockchain Development Process" width={350} height={350} className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Right Content - Scrollable Accordion */}
        <motion.div 
          className={`space-y-4 overflow-y-auto h-[70vh] p-4 transition-all duration-300 ${showScrollbar ? 'scrollbar-visible' : 'scrollbar-hidden'}`} 
          ref={contentRef}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          {sections.map((section) => (
            <motion.div 
              key={section.id} 
              className="border border-gray-700 rounded-lg shadow-lg bg-gray-900 bg-opacity-50 backdrop-blur-lg p-4 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <button
                className="flex justify-between items-center w-full text-left p-2 hover:bg-gray-800 rounded-md transition-all duration-300"
                onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
              >
                <div className="flex items-center gap-3">
                  {section.icon}
                  <span className="text-lg font-semibold text-gradient">{section.title}</span>
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scrollbar Styles */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(to right, #1e3a8a, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .scrollbar-hidden::-webkit-scrollbar {
          width: 8px;
          opacity: 0;
        }
        .scrollbar-visible::-webkit-scrollbar {
          width: 8px;
          opacity: 1;
        }
        .scrollbar-visible::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #1e3a8a, #2563eb, #3b82f6);
          border-radius: 4px;
        }
        .scrollbar-visible::-webkit-scrollbar-track {
          background: #1e293b;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
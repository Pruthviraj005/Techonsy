"use client";
'';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative max-w-[1000px] min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 bg-gray-900 text-white overflow-hidden mx-auto ">
            {/* Left Content */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6 }}
                className="max-w-2xl text-center lg:text-left relative z-10 p-6 lg:pl-10"
            >
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 mt-16"
                >
                   <span className='text-blue-400'>Flutter</span> App Development Company
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6"
                >
                    We specialize in crafting high-performance Flutter applications with intuitive user interfaces, smooth animations, and cutting-edge design. Our solutions ensure fast loading times, seamless functionality, and an engaging user experience tailored to your business needs.
                </motion.p>
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    <Link href="/get-started">
                        <button className="px-6 py-3 text-base sm:text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-500 transition duration-300 flex items-center space-x-2 mx-auto lg:mx-0">
                            <span>Get Started</span>
                            <motion.span 
                                initial={{ x: 0 }}
                                animate={{ x: 5 }}
                                transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.5 }}
                            >➡️</motion.span>
                        </button>
                    </Link>
                </motion.div>
            </motion.div>
            
            {/* Right Image - Hidden on Small & Medium Screens */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.1 }}
                className="relative z-10 p-6 lg:pr-10  justify-center hidden lg:block"
            >
                <Image src="/images/technology/mobile/flutter/flutter.svg" alt="Flutter Logo" width={250} height={250} className="object-contain" />
            </motion.div>

            {/* SVG Background */}
            <div className="absolute inset-0 w-full h-full opacity-10 mb-20">
                <svg className="w-full h-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,400 C200,300 600,500 800,400 L800,600 L0,600 Z" fill="#2d3748" opacity="0.3" />
                    <circle cx="150" cy="200" r="80" fill="#4a5568" opacity="0.3" />
                    <circle cx="650" cy="400" r="100" fill="#718096" opacity="0.3" />
                    <rect x="300" y="100" width="200" height="100" fill="#2c5282" opacity="0.2" />
                </svg>
            </div>
        </section>
    );
}

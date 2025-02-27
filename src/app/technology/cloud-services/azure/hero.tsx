'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ButtonComp from '@/components/Common/ButtonComp';

export default function Hero() {
    return (
        <section className=" bg-gray-900 border-b-[0.5px] border-b-blue-900 ">
            {/* SVG Background */}
            <div className="absolute inset-0 w-full h-full opacity-10 mb-20 ">
                    <svg className="w-full h-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,400 C200,300 600,500 800,400 L800,600 L0,600 Z" fill="#2d3748" opacity="0.3" />
                        <circle cx="150" cy="200" r="80" fill="#4a5568" opacity="0.3" />
                        <circle cx="650" cy="400" r="100" fill="#718096" opacity="0.3" />
                        <rect x="300" y="100" width="200" height="100" fill="#2c5282" opacity="0.2" />
                    </svg>
                </div>
            <div className='mx-auto max-w-6xl w-[100vw] min-h-[80vh] flex flex-col gap-6 lg:flex-row items-center justify-center lg:justify-between px-6 text-white overflow-hidden'>
            {/* Left Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -100 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="max-w-2xl text-center lg:text-left relative z-10 p-6 lg:pl-10 flex flex-col gap-5 lg:gap-8"
                >
                    <motion.h1 
                        initial={{ opacity: 0, y: -50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-tr from-blue-900 via-blue-400 to-white text-transparent bg-clip-text"
                    >
                    Azure Development
                    </motion.h1>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
                        className="text-md sm:text-base leading-relaxed mb-4 "
                    >
                        <p>Unlock Cloud Power with Microsoft Azure</p>
                        <p className="mt-2">
                            Seamlessly transition to the cloud with Microsofts comprehensive ecosystem. Harness the power of SaaS, PaaS, and IaaS to optimize cost, improve efficiency, and scale your business effortlessly.
                        </p>
                    </motion.div>
                    
                    <div className='flex justify-center items-center lg:justify-start'>
                        <ButtonComp/>
                    </div>
                </motion.div>
                
                {/* Right Image - Hidden on Small & Medium Screens */}
                <motion.div 
                    initial={{ opacity: 0, x: 100 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 p-6 lg:pr-10 justify-center hidden md:block"
                >
                    <Image src="/images/technology/cloud-services/azure/azure.svg" alt="Azure Logo" width={300} height={300} className="object-contain" />
                </motion.div>

                
            </div>
        </section>
    );
}
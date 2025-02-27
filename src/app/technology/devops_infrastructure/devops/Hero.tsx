'use client';

import background from '../../../../../public/images/technology/Devops_infrastructure/devops/Rect Light (3).svg';
import logo from '../../../../../public/images/technology/Devops_infrastructure/devops/devops-2.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';


export default function HeroSection() {
  return (
    <div className='h-screen relative border-b-[0.5px] border-b-cyan-600'>
        <Image 
            src={background} 
            alt="Background" 
            layout="fill" 
            objectFit="cover" 
            className="absolute inset-0 z-0 h-screen"
        />
      
        <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden text-white max-w-[1000px] mx-auto text-center gap-10 pb-10   ">
            {/* Logo */}

            {/* Hero Content */}
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="z-10  "
            >
                  <div className=''> 
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-300 to-cyan-500 text-transparent bg-clip-text mt-28 px-10 ">
                        DevOps Automation & Cloud Infrastructure
                    </h1>
            
                    
                    <motion.div 
                        animate={{ boxShadow: ["0px 4px 20px rgba(0,255,255,0.5)", "0px 6px 28px rgba(0,255,255,0.8)", "0px 4px 20px rgba(0,255,255,0.5)"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="rounded-2xl w-[200px] h-[100px] sm:w-[250px] sm:h-[120px] md:w-[300px] md:h-[150px] mx-auto my-10 "
                    >
                        <Image 
                            src={logo} 
                            alt="Logo" 
                            width={300} 
                            height={150} 
                            className="w-full h-full object-contain rounded-2xl"
                        />
                    </motion.div>
                    
                    <p className="mt-8 text-lg text-slate-400 max-w-2xl mx-auto ">
                        Streamline your CI/CD pipelines, manage cloud deployments, and enhance system reliability with our DevOps solutions.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }} 
                        className='mt-10'
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.05, // Slightly enlarges on hover
                                backgroundColor: "#0f172a", // Darker shade on hover
                                boxShadow: "0px 4px 20px rgba(0, 255, 255, 0.4)", // Neon glow effect
                            }}
                            whileTap={{ scale: 0.95 }} // Click effect
                            className="relative px-8 py-3 text-lg font-bold border-cyan-500 border-[0.5px] text-gray-200 uppercase rounded-full bg-gradient-to-r from-gray-900 to-black shadow-lg transition-all duration-300 ease-in-out overflow-hidden"
                            >
                                <span className="relative z-10 text-cyan-400">Get Started</span>

                                {/* Background Effect */}
                                <span className="absolute inset-0 bg-gray-800 opacity-20 transition duration-300 "></span>

                                {/* Glowing Border Animation */}
                                <span className="absolute inset-0 rounded-full border-2 border-transparent transition-all duration-500 "></span>
                        </motion.button>
                    </motion.div>
                </div>  
            </motion.div>
        </div>
    </div>
  );
}
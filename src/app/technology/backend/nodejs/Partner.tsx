'use client';

import { motion } from 'framer-motion';
import { Settings, Zap, Code, LifeBuoy } from 'lucide-react';

const roadmapSteps = [
    {
        title: 'Expertise in Scalable Solutions',
        description: 'We specialize in building robust, scalable Node.js applications that handle high traffic and ensure optimal performance.',
        icon: <Settings size={28} className="text-[#00bcd4]" />, 
    },
    {
        title: 'Fast Development & Deployment',
        description: 'Our team uses efficient development practices, ensuring quicker time-to-market with faster deployment cycles and seamless updates.',
        icon: <Zap size={28} className="text-[#00bcd4]" />, 
    },
    {
        title: 'Custom Solutions',
        description: 'We offer tailored Node.js solutions that align with your specific business needs, optimizing functionality and streamlining operations.',
        icon: <Code size={28} className="text-[#00bcd4]" />, 
    },
    {
        title: 'End-to-End Support',
        description: 'From initial consultation to post-deployment maintenance, we provide comprehensive support to ensure your Node.js applications perform seamlessly.',
        icon: <LifeBuoy size={28} className="text-[#00bcd4]" />, 
    }
];

export default function NodeJsRoadmap() {
    return (
        <section className="relative w-full max-w-6xl mx-auto py-16 px-6 bg-[#121826] overflow-hidden text-white text-center">
            {/* Animated SVG Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                <svg className="absolute top-0 left-0 w-full h-full opacity-10 animate-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#00bcd4" fillOpacity="0.5" d="M0,160L40,186.7C80,213,160,267,240,256C320,245,400,171,480,133.3C560,96,640,96,720,138.7C800,181,880,267,960,277.3C1040,288,1120,224,1200,186.7C1280,149,1360,139,1400,133.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
                </svg>
            </div>

            {/* Section Heading */}
            <motion.h2 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                className="text-3xl font-bold bg-gradient-to-r from-[#00bcd4] to-[#4caf50] text-transparent bg-clip-text relative z-10 mb-12"
            >
                Your Trusted Node.js Development Partner
            </motion.h2>

            {/* Roadmap Steps */}
            <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-6xl mx-auto px-4">
                {roadmapSteps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="relative w-full flex flex-col sm:flex-row items-center p-4 border-l-4 border-[#00bcd4] bg-gradient-to-r from-[#1e293b] to-[#334155] rounded-lg shadow-md text-center sm:text-left transition-all duration-300 hover:shadow-lg"
                    >
                        <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#00bcd4] rounded-full text-white animate-pulse">
                            {step.icon}
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-4 text-left">
                            <h3 className="text-md sm:text-lg font-semibold text-[#00bcd4]">{step.title}</h3>
                            <p className="text-gray-300 text-sm sm:text-base mt-1">{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

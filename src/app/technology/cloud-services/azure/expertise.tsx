'use client';

import { motion } from 'framer-motion';
import dynamic from "next/dynamic";
import { FaCloud, FaServer, FaTools, FaMobileAlt, FaNetworkWired, FaChartLine, FaSync, FaWindows } from 'react-icons/fa';
import svgimg from './expertise.json';

const expertiseData = [
    { icon: <FaCloud />, text: 'New Product/Solution Development on Azure platform', color: 'bg-blue-500' },
    { icon: <FaServer />, text: 'Apps and Infra Migration to Azure', color: 'bg-green-500' },
    { icon: <FaTools />, text: 'Re-Engineering Existing Application', color: 'bg-yellow-500' },
    { icon: <FaMobileAlt />, text: 'Cloud App for Web and Mobile', color: 'bg-purple-500' },
    { icon: <FaNetworkWired />, text: 'Azure-based IoT Platforma', color: 'bg-red-500' },
    { icon: <FaChartLine />, text: 'Analytics Solutions with Azure Paas', color: 'bg-indigo-500' },
    { icon: <FaSync />, text: 'Integration of Azure applications with existing systems', color: 'bg-teal-500' },
    { icon: <FaWindows />, text: 'Support and maintain Windows Azure applications', color: 'bg-pink-500' },
];

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function Expertise() {
    return (
        <section className="py-10 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center relative">
            {/* Left Image - Hidden on sm */}
            <div className="w-1/3 hidden md:block">
                <Lottie
                    animationData={svgimg}
                    play
                    loop
                    className="w-full max-w-[350px] h-auto object-contain"
                />
            </div>

            {/* Expertise List */}
            <div className="w-full md:w-2/3 flex flex-col items-center justify-center relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-center">Azure Solution Development Expertise</h2>
                <div className="w-12 h-1 bg-blue-600 mb-6"></div>
                <div className="relative flex flex-col items-center w-full">
                    <div className="absolute w-1 bg-gray-500 top-0 bottom-0 left-6 transform -translate-x-1/2"></div>
                    <ul className="space-y-6 w-full px-4">
                        {expertiseData.map((item, index) => (
                            <motion.li 
                                key={index} 
                                initial={{ opacity: 0, x: -50 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center space-x-4 p-4 rounded-lg shadow-md relative bg-gray-800 w-full"
                            >
                                <motion.div 
                                    className={`w-12 h-12 flex items-center justify-center text-white rounded-full text-xl shadow-lg ${item.color} relative z-10`} 
                                    animate={{ scale: [1, 1.1, 1] }} 
                                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                                >
                                    {item.icon}
                                </motion.div>
                                <p className="text-white text-lg pl-4">{item.text}</p>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

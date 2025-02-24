'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Rocket, Layout, Video, Server, Database } from 'lucide-react';

const solutions = [
    {
        title: 'Interactive Chat Solutions',
        description: 'Enhance customer engagement with AI-powered chatbots built on Node.js. Ensure seamless real-time interactions and instant query resolution.',
        icon: <MessageCircle size={28} className="text-[#00bcd4]" />, 
    },
    {
        title: 'MVP Development',
        description: 'Accelerate time-to-market with robust MVPs powered by Node.js. Identify potential flaws early and optimize performance.',
        icon: <Rocket size={28} className="text-[#00bcd4]" />, 
    },
    {
        title: 'Single Page Applications (SPA)',
        description: 'Deliver lightning-fast, dynamic user experiences with high-performance SPAs using Node.js for real-time interactions.',
        icon: <Layout size={28} className="text-[#00bcd4]" />, 
    },
    {
        title: 'Streaming Applications',
        description: 'Build highly scalable and interactive streaming platforms with Node.js. Optimize real-time data flow for better engagement.',
        icon: <Video size={28} className="text-[#00bcd4]" />, 
    },
    {
        title: 'REST API Development',
        description: 'Develop secure, high-speed RESTful APIs with Node.js. Ensure seamless integration and smooth communication.',
        icon: <Server size={28} className="text-[#00bcd4]" />, 
    },
    {
        title: 'Data-Driven Backend Solutions',
        description: 'Utilize Node.js for scalable backend systems. Process large datasets, optimize performance, and unlock valuable insights.',
        icon: <Database size={28} className="text-[#00bcd4]" />, 
    }
];

export default function NodeJsSolutions() {
    return (
        <section className="relative w-full max-w-[1000px] mx-auto py-16 px-6 bg-transparent overflow-hidden text-white text-center">
            {/* Background Gradient Animation */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1.5 }}
                className="absolute inset-0 w-full h-full bg-transparent opacity-25 z-0" 
            />
            
            <motion.h2 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00bcd4] to-[#b388eb] relative z-10 mb-12"
            >
                Innovative Node.js Solutions for Scalable, High-Performance Applications
            </motion.h2>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {solutions.map((solution, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative group w-full max-w-[250px] h-[250px] flex items-center justify-center rounded-full border-2 border-[#00bcd4] p-4 hover:shadow-lg hover:shadow-[#00bcd4] transition-transform mx-auto"
                    >
                        <motion.div 
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-[#1e293b] opacity-80 rounded-full" 
                        />
                        <div className="relative z-10 flex flex-col items-center text-center">
                            {solution.icon}
                            <motion.h3 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                                className="text-lg font-semibold text-[#00bcd4] mt-2"
                            >
                                {solution.title}
                            </motion.h3>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.2, delay: index * 0.3 }}
                                className="text-gray-300 text-xs mt-1"
                            >
                                {solution.description}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
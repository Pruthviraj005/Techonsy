"use client";
'';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import servicesAnimation from './services.json';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

export default function Services() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-[1000px] w-full mx-auto px-6 sm:px-10 gap-10 py-16 min-h-screen bg-gradient-to-r from-blue-900 via-blue-900 to-black text-white overflow-hidden relative">
            
            {/* Left Content */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                className="flex-1 text-center md:text-left flex flex-col justify-center relative"
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Transform Your <span className="text-blue-400">Digital Presence</span> with Expert Flutter Development
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                    We provide a full range of Flutter development services, including UI/UX design, custom app development, maintenance, and support. Our experts ensure that your app runs smoothly with cutting-edge technology and seamless user experience.
                </p>
                <ul className="text-base sm:text-lg md:text-xl text-gray-300 space-y-2">
                    <li>✅ Custom Flutter App Development</li>
                    <li>✅ Cross-Platform Solutions</li>
                    <li>✅ UI/UX Design and Prototyping</li>
                    <li>✅ App Maintenance and Support</li>
                </ul>
            </motion.div>

            {/* Right Animated Lottie Image */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                whileHover={{ scale: 1.05 }}
                className="flex-1 flex justify-center items-center relative"
            >
                <Lottie 
                    animationData={servicesAnimation} 
                    play 
                    loop 
                    className="w-[70%] sm:w-[80%] md:w-[90%] max-w-[350px] md:max-w-[400px] h-auto object-contain" 
                />
            </motion.div>
        </section>
    );
}

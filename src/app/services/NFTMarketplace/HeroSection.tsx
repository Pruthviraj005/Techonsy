"use client";
'';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['-100%', '0%']);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Animated Background */}
            <motion.div
                className="absolute inset-0"
                style={{ y }} 
            >
                <img
                    // src='/images/nft/nftt.jpg'
                    alt="NFT Marketplace Development"
                    className="object-cover w-full h-full saturate-150"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white text-shadow-lg">
                    <span className="block">NFT Marketplace Development</span>
                    Services
                </h1>
                <p className="text-xl mb-8 text-gray-300 text-shadow-md">
                    The asset landscape is turning digital; seize the rising momentum with an NFT marketplace.
                </p>
                <motion.button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Consult Our Experts
                </motion.button>
            </div>
        </div>
    );
};

export default HeroSection;

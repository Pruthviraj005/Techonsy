'use client';
import React from 'react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <motion.section 
            className="py-20 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-10"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-10 rounded-2xl border border-gray-700 backdrop-blur-sm">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Ready to Build Your NFT Marketplace?</h2>
                    <p className="text-xl text-gray-300 mb-8 text-center">
                        Get in touch with our blockchain experts to discuss your project requirements and how we can help bring your NFT marketplace vision to life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button 
                            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Schedule a Free Consultation
                        </motion.button>
                        <motion.button 
                            className="bg-transparent border-2 border-purple-500 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-500/10 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Case Studies
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default CTASection;

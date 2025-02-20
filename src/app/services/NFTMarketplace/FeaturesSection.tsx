'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGem, FaFileContract, FaHammer, FaWallet, FaChair, FaChartLine } from 'react-icons/fa';

const FeaturesSection: React.FC = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const features = [
        {
            title: "Minting Engine",
            description: "Effortlessly create NFTs with our intuitive minting engine, supporting various file formats and metadata standards.",
            icon: FaGem,
        },
        {
            title: "Smart Contracts",
            description: "Ensure secure and transparent transactions with audited smart contracts.",
            icon: FaFileContract,
        },
        {
            title: "Bidding System",
            description: "Maximize revenue potential with advanced auction mechanisms.",
            icon: FaHammer,
        },
        {
            title: "Wallet Integration",
            description: "Provide users with seamless access through leading crypto wallets.",
            icon: FaWallet,
        },
        {
            title: "Multi-chain Support",
            description: "Expand your reach with support for multiple blockchain networks.",
            icon: FaChair,
        },
        {
            title: "Analytics Dashboard",
            description: "Gain insights with comprehensive data visualization tools.",
            icon: FaChartLine,
        }
    ];

    return (
        <motion.section
            className="py-20 bg-gray-900/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
        >
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    variants={fadeIn}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive NFT Marketplace Features</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Build a platform that stands out with cutting-edge features tailored to your business needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                            variants={fadeIn}
                            whileHover={{ scale: 1.05 }} // Scale effect on hover
                        >
                            <div className="text-4xl mb-4">
                                <feature.icon />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default FeaturesSection;

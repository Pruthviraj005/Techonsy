'use client';

import { motion } from 'framer-motion';
import { FaDollarSign, FaShieldAlt, FaRocket, FaExpand, FaGlobe, FaCogs } from 'react-icons/fa';

const benefits = [
    { 
        icon: <FaDollarSign className="text-blue-500 text-4xl" />, 
        title: 'Cost Efficiency',
        description: 'Minimize capital investments on hardware, data, and infrastructure by utilizing Azure’s cloud data centers, reducing maintenance costs.',
        color: 'blue'
    },
    { 
        icon: <FaShieldAlt className="text-blue-500 text-4xl" />, 
        title: 'Robust Security',
        description: 'Secure access to enterprise data with advanced login protocols and constantly updated security features for enhanced protection.',
        color: 'blue'
    },
    { 
        icon: <FaRocket className="text-blue-500 text-4xl" />, 
        title: 'Agility & Flexibility',
        description: 'Streamline development with continuous testing, feedback integration, and risk mitigation strategies to address potential bottlenecks.',
        color: 'blue'
    },
    { 
        icon: <FaExpand className="text-purple-500 text-4xl" />, 
        title: 'Seamless Scalability',
        description: 'Easily adjust to changing business demands without extra coding or disruption, allowing for smooth upscaling or downscaling.',
        color: 'purple'
    },
    { 
        icon: <FaGlobe className="text-purple-500 text-4xl" />, 
        title: 'Global Connectivity',
        description: 'Leverage Azure’s worldwide data centers for dynamic collaboration, sharing, and seamless access across global ecosystems.',
        color: 'purple' 
    },
    { 
        icon: <FaCogs className="text-purple-500 text-4xl" />, 
        title: 'Comprehensive Services',
        description: 'Migrate from legacy systems and implement custom solutions with a wide range of robust services, including SharePoint and Dynamics CRM.',
        color: 'purple' 
    }
];

export default function AzureBenefits() {
    return (
        <section className="py-16 px-6 max-w-6xl mx-auto text-white text-center">
            <motion.h2 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text"
            >
                Unlock the Full Potential of Azure App Development
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, boxShadow: `0px 0px 15px var(--tw-shadow-color)`, borderColor: `var(--tw-shadow-color)` }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`p-6 rounded-xl shadow-lg border-2 shadow-${benefit.color}-500 border-${benefit.color}-500 bg-${benefit.color}-900/30 bg-opacity-60 backdrop-blur-lg flex flex-col items-center transition-transform duration-300`}
                    >
                        <motion.div 
                            whileHover={{ rotate: 10, scale: 1.2 }}
                            className="mb-4"
                        >
                            {benefit.icon}
                        </motion.div>
                        <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                        <p className="text-sm text-gray-300">{benefit.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
"use client";
'';
import React from 'react';
import { motion } from 'framer-motion';

const ProcessSection: React.FC = () => {
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

    const steps = [
        {
            step: "1",
            title: "Requirements Analysis",
            description:
                "We collaborate closely to understand your business goals, ensuring a marketplace aligned with your vision.",
        },
        {
            step: "2",
            title: "Architecture Design",
            description:
                "Our experts design a scalable and secure architecture for optimal user experience.",
        },
        {
            step: "3",
            title: "Smart Contract Development",
            description:
                "We develop and audit custom smart contracts that form the secure backbone of your platform.",
        },
        {
            step: "4",
            title: "Frontend Development",
            description:
                "Creating an intuitive UI/UX designed to maximize user engagement.",
        },
        {
            step: "5",
            title: "Testing & Deployment",
            description:
                "Rigorous testing ensures a secure and bug-free deployment.",
        },
        {
            step: "6",
            title: "Support & Maintenance",
            description:
                "Ongoing support and maintenance to keep your platform competitive.",
        }
    ];

    return (
        <motion.section
          className="py-20"
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Our NFT Marketplace Development Process</h2>
                  <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                      A systematic approach to building secure and scalable NFT platforms.
                  </p>
              </motion.div>

              <div className="relative">
                  {/* Timeline connector */}
                  <div className="absolute left-[50%] transform -translate-x-[50%] h-full w-[2px] bg-gradient-to-b from-purple-600 to-blue-600 hidden md:block"></div>

                  {steps.map((step, index) => (
                      <motion.div
                          className={`flex md:flex-row mb-[30px] ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                          key={index}
                          variants={fadeIn}
                      >
                          <div className={`md:w-[50%] ${index % 2 === 0 ? 'md:text-right pr-[30px]' : 'md:text-left pl-[30px]'}`}>
                              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-[30px] rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-[300ms]">
                                  <h3 className="text-xl font-bold mb-[10px] flex items-center gap-[10px]">
                                      <motion.span 
                                          whileHover={{ scale : 1.1 }} // Scale effect on hover for step number
                                          transition={{ duration : 0.3 }}
                                          className={`inline-flex items-center justify-center h-[32px] w-[32px] rounded-full bg-purple600 text-white text-sm`}
                                      >
                                          {step.step}
                                      </motion.span>
                                      {step.title}
                                  </h3>
                                  <p className="text-gray400">{step.description}</p>
                              </div>
                          </div>

                          {/* Placeholder for future content */}
                          <div className={`md:w-[50%]`}></div> 
                      </motion.div>
                  ))}
              </div>
          </div>
      </motion.section>
    );
};

export default ProcessSection;

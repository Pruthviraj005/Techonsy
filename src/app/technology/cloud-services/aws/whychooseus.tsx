'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, DollarSign, Laptop, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Expert AWS Cloud Migration",
    description: " Seamlessly transition to the cloud with our proven AWS migration strategies, minimizing disruption and ensuring smooth implementation",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Custom Cloud Solutions for Your Business",
    description: "Our AWS experts craft solutions tailored to your unique business needs, boosting efficiency and aligning with your future goals.",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Scalable & Cost-Effective Pricing Models",
    description: "Take advantage of flexible pricing options that adapt to your business's changing needs, ensuring optimal cost management.",
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Focused & Skilled AWS Development Teams",
    description: "Work with a dedicated team of AWS professionals, giving you unmatched attention and expertise to drive your project’s success.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Agile Resource Flexibility",
    description: "Benefit from a flexible, responsive team structure that adapts to project demands, ensuring seamless collaboration, timely delivery, and top-quality results.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Transparent Project Management",
    description: "Stay informed with clear communication through dedicated Project Managers, ensuring transparency and smooth collaboration throughout the process.",
  }
];

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className=" p-6 rounded-xl hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-blue-900/30 min-h-[320px] flex flex-col justify-between">
        {/* Glowing orb effect */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-500 rounded-full blur-lg group-hover:blur-xl group-hover:scale-150 transition-all duration-300" />

        <div className="relative flex flex-col flex-grow">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
            className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20"
          >
            {icon}
          </motion.div>

          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>

          <p className="text-blue-100/80 leading-relaxed flex-grow">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <div className="bg-gradient-to-br from-black via-[#0013248b] to-black py-24 px-4 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-4 opacity-20">
        {[...Array(64)].map((_, i) => (
          <motion.div
            key={i}
            className="w-full h-full bg-blue-500/10 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Unlock the Power of {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            AWS with Our Expertise
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg max-w-3xl mx-auto"
          >
            Cloud migration is a critical business decision for any enterprise. As an experienced cloud-based application development company, you can put your trust in us for the best migration strategy and project completion.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
      
      {/* Floating particles
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-[90%] bg-[#0d011a3f] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))} */}
    </div>
  );
};

export default WhyChooseUsSection;

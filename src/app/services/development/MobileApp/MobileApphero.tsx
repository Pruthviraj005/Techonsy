'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaUsers, FaLock, FaHeadphones, FaCode, FaThumbsUp, FaStar } from 'react-icons/fa';

const MobileAppHero = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl font-bold text-center text-blue-500"
        >
          Leading Mobile App Developers
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-10 items-center mt-16">
          <div className="space-y-8">
            <FeatureCard icon={<FaUsers />} title="Team of Experts" text="Top developers assigned to your project." />
            <FeatureCard icon={<FaHeadphones />} title="1-ON-1 Meetings" text="Personalized guidance at every step." />
            <FeatureCard icon={<FaCode />} title="Best Code Practices" text="Ensuring high-quality and scalable code." />
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{ rotate: 5, scale: 1.05 }}
            className="flex justify-center"
          >
            <Image
              src="/images/mobileApp/mobile-dev.png"
              width={400}
              height={1000}
              alt="Mobile App"
              className="rounded-lg shadow-xl transition-transform duration-300 ease-in-out"
            />
          </motion.div>

          <div className="space-y-8">
            <FeatureCard icon={<FaLock />} title="Privacy & Security" text="Your data remains fully secure." />
            <FeatureCard icon={<FaThumbsUp />} title="Cross-Platform Dev" text="Build for iOS and Android efficiently." />
            <FeatureCard icon={<FaStar />} title="Support & Maintenance" text="Ongoing updates and assistance." />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05, backgroundColor: '#1E293B' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex items-center bg-gray-900 p-5 rounded-lg shadow-lg transform transition-all duration-300"
    >
      <div className="text-blue-500 text-3xl mr-4">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400">{text}</p>
      </div>
    </motion.div>
  );
};

export default MobileAppHero;

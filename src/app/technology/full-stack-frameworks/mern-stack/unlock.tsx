"use client";
''

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });
import mysqlAnimation from "./mern.json"

const Unlock = () => {
  return (
    <section className="relative min-h-screen flex justify-center items-center py-16 px-6">
      {/* Glowing Gradient Background */}
      <div className="relative z-10 container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Lottie loop animationData={mysqlAnimation} play style={{ width: 400, height: 400 }} />
        </motion.div>
    
        {/* Right Content */}
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Unlock the Power of React Application Development
            <span className="text-blue-400"> & Cost Efficiency</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 mb-4"></div>
          <p className="text-lg text-gray-400 leading-relaxed">
          Looking for top-notch ReactJS development? ReactJS is a robust, open-source JavaScript library for building fast, dynamic, and reusable UI components. With its virtual DOM, React enhances app performance, making it ideal for high-speed, scalable applications.
Our expert developers stay ahead of trends, using the latest tools and techniques to deliver custom React applications that meet your business goals. We ensure efficient, on-time delivery while crafting seamless, high-performance digital experiences. Partner with us to bring your vision to life with ReactJS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Unlock;

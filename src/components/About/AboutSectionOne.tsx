"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ImageWithOverlay = () => (
  <div className="relative w-full h-full">
    {/* Background Shape */}
    <div className="absolute -top-6 -right-6 w-full h-full rounded-[40px] bg-gradient-to-r from-blue-200/30 to-indigo-200/30 dark:from-blue-500/10 dark:to-indigo-500/10 transform rotate-2"></div>
    {/* Main Container */}
    <div className="relative w-full h-full overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/about/meeting-image.jpg"
          alt="Team meeting"
          width={800}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Overlays and Decorative Elements */}
      <div className="absolute inset-0">
        {/* Main Diagonal Overlay */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/90 to-white/0 dark:from-gray-900/90 dark:to-gray-900/0 transform translate-x-[30%] skew-x-[10deg]"></div>
        
        {/* Decorative Lines */}
        <div className="absolute right-0 h-full w-[4px] bg-gradient-to-b from-blue-500/20 to-indigo-500/20"></div>
        <div className="absolute right-12 h-full w-[2px] bg-gradient-to-t from-blue-500/10 to-indigo-500/10"></div>
        
        {/* Top Right Corner Elements */}
        <div className="absolute top-8 right-8 flex space-x-1">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-6 bg-blue-500/20 transform -skew-y-[20deg] animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            ></div>
          ))}
        </div>

        {/* Bottom Left Corner Elements */}
        <div className="absolute bottom-8 left-8">
          <div className="w-20 h-20 rounded-full border-2 border-blue-500/20 animate-spin-slow"></div>
          <div className="absolute -inset-2 border-2 border-indigo-500/20 rounded-full animate-reverse-spin"></div>
        </div>

        {/* Floating Dots */}
        <div className="absolute top-1/4 left-1/4 flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-blue-500/30 animate-float"
              style={{ animationDelay: `${i * 300}ms` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Add these styles to your global CSS or as a style tag in your component
const styles = `
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes reverse-spin {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
  .animate-reverse-spin {
    animation: reverse-spin 15s linear infinite;
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

const AboutSectionOne = () => {
  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                  Techonsy Software
                </h1>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
              >
                Your Trusted Partner in Digital Innovation
              </motion.h2>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              A leading software development company specializing in cutting-edge web and mobile solutions. 
              Since our inception in 2023, we have been committed to driving digital transformation 
              and delivering high-performance software solutions. We look forward to collaborating 
              with you to turn ideas into reality.
            </motion.p>
          </motion.div>

          {/* Right SVG Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full max-w-[600px] mx-auto">
              <div className="aspect-[3/2] w-full">
                <ImageWithOverlay />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};


export default AboutSectionOne;


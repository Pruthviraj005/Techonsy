'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AngularDevelopment() {
  return (
    <div className='py-16 px-6 md:px-20 text-white bg-gradient-to-br from-[#01030482] via-[#011327] to-[#01030482]'>
      <section className='max-w-6xl mx-auto'>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <motion.div 
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src="/images/angular/angular-development.png" 
              alt="Angular Development"
              width={400}
              height={400}
              className="w-60 sm:w-72 md:w-96 lg:w-[300px] object-contain drop-shadow-xl mx-auto"
            />
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Build high-performance <br className="hidden md:block" /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
                MVC capable
              </span> dynamic AngularJS Applications
            </h2>
            
            <div className="w-24 h-1 bg-blue-500 mt-4 mb-6"></div>

            <p className="text-gray-300 leading-relaxed">
              Are you looking for an Angular development agency? <span className="font-semibold text-red-500">AngularJS</span>, founded by Google, is an open-source JavaScript framework. It is primarily used to develop MVC-enabled web applications with two-way data binding and regular DOM manipulation.
            </p>

            <p className="mt-4 text-gray-300">
              We offer the best <span className="font-semibold text-blue-500"> Angular development services</span> by integrating the latest tools and technologies, ensuring high performance, security, and efficiency.
            </p>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
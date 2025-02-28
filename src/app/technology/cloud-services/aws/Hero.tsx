'use client';
import ButtonComp from '@/components/Common/ButtonComp';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-black to-[#011321b7] min-h-[600px] flex items-center relative overflow-hidden border-b-[0.5px] border-cyan-800">
      {/* Animated background elements */}
      <motion.div 
        className="absolute w-96 h-96 bg-blue-500/10 rounded-full -top-20 -left-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto max-w-6xl px-6 lg:py-28">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-white text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-slate-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Empower Your Business with <span className='text-yellow'>AWS</span> Development
            </motion.h1>

            <motion.p 
              className="text-lg text-gray-300 mb-8 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Future-proof your business with intelligent AWS development services. Build robust, scalable cloud infrastructure and manage seamless implementation for long-term success.
            </motion.p>

            <ButtonComp/>
          </motion.div>

          {/* Logo/Image Section - Hidden on Mobile */}
          <motion.div 
            className="flex-1  justify-center sm:block hidden  md:flex" // Hidden on small screens
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="relative w-72 h-72">
              <motion.div 
                className="absolute inset-0 bg-blue-500/20 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
              />
              
              {/* Image - Hidden on Mobile */}
              <Image 
                src="/images/technology/cloud-services/aws/aws.png"
                alt="Hero Image"
                width={288}
                height={288}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
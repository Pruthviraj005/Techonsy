'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AndroidDevelopment() {
  return (
    <div className='w-full bg-gradient-to-br from-[#0a0f1a] via-slate-950 to-black'>
      <section className="max-w-6xl mx-auto relative flex flex-col lg:flex-row items-center justify-between py-20 px-6 lg:px-0
        text-center lg:text-left  text-white ">

        {/* Text Content */}
        <div className="lg:w-1/2 max-w-3xl">
          <motion.h2
            className="text-2xl text-slate-300 sm:text-4xl md:text-5xl font-extrabold leading-tight  drop-shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Transforming Ideas into <span className=" bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent" >Powerful Android Apps</span>
          </motion.h2>

          <div className="w-16 h-1 bg-blue-500 my-4 mx-auto lg:mx-0"></div>

          <motion.p
            className="text-sm sm:text-lg text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            We specialize in crafting custom, user-friendly Android applications tailored to your business needs. Our team leverages 
            cutting-edge technology and innovative solutions to bring your ideas to life with high-performance apps. 
            From design to deployment, we ensure seamless integration and scalability, delivering a product that stands out in 
            the competitive mobile market.
          </motion.p>

          {/* Key Feature Points */}
          <motion.div 
            className="mt-6 space-y-4 text-sm sm:text-base text-gray-300 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p>🚀 High-performance Android apps with Google integration.</p>
            <p>🎨 Expert UI/UX design with seamless and engaging experiences.</p>
            <p>📈 Scalable development optimized for performance and business growth.</p>
            <p>💡 Tailored solutions for startups & enterprises to unlock revenue opportunities.</p>
          </motion.div>
        </div>

        {/* Illustration Image */}
        <motion.div
          className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/android/development.png"
            alt="Android Development"
            width={550}
            height={550}
            className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-[550px] object-contain"
          />
        </motion.div>
      </section>
    </div>
  );
}

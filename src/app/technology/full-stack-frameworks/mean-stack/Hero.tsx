"use client";
'';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const techStack = [
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#000000" },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg", color: "#DD0031" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
  ];

  const positions = [
    { x: -120, y: -50 },
    { x: 120, y: -50 },
    { x: -120, y: 50 },
    { x: 120, y: 50 },
  ];

  return (
    <div className="w-full">
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          background: [
            'linear-gradient(45deg, #001a35, #000b1a)',
            'linear-gradient(135deg, #001a35, #000b1a)',
            'linear-gradient(225deg, #001a35, #000b1a)',
            'linear-gradient(315deg, #001a35, #000b1a)',
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'mirror' }}
      />
      <div className="relative min-h-screen mx-auto flex  items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 md:py-20 max-w-6xl">
        <div className="relative z-10 max-w-7xl mx-auto w-full text-center flex flex-col">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Unlock the Power of <span className='lg:text-6xl text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>MEAN</span> Stack Development          
          </motion.h1>

          <motion.p 
            className="text-sm sm:text-base md:text-lg text-slate-400 max-w-4xl mx-auto mb-8 sm:mb-12 px-4 sm:px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Leverage the seamless integration of MongoDB, Express.js, AngularJS, and Node.js to build high-performance web applications tailored to your business needs. Our expert MEAN Stack developers deliver efficient and scalable solutions, enhancing your existing apps and driving productivity.
          </motion.p>

          {/* Tech Stack */}
          <div className="relative flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-12">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center"
                initial={{ opacity: 0, x: positions[index].x, y: positions[index].y }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 50, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, filter: 'brightness(1.2)' }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 backdrop-blur-lg rounded-xl p-2 sm:p-3 border border-white/10 shadow-lg hover:border-cyan-400/50 transition-colors">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={60}
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="text-white mt-2 text-xs sm:text-sm font-semibold">{tech.name}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button className="px-4 py-2 sm:px-4 sm:py-2 md:px-8 md:py-3 text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl">
              Start Building Now
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
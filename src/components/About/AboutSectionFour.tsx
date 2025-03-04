"use client";
"";

import { motion } from "framer-motion";

const AboutSectionFour = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-[90vw] mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Commitment to Excellence & Innovation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                We Take Ownership
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Driven by a team of skilled strategists, designers, and developers, we are committed to delivering excellence. 
                We consistently meet client needs with speed and precision, ensuring exceptional results and unwavering quality—exceeding 
                expectations every time.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </span>
                We Work Relentlessly
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                At Techonsy, we cultivate an inclusive, dynamic, and collaborative environment that fuels innovation and growth.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6"
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl transform rotate-1"></div>
              <div className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                <div className="flex items-start mb-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Driving Groundbreaking Innovation</h4>
                    <p className="text-gray-600 dark:text-gray-300">Inspiring creative solutions that lead to transformative results.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl transform -rotate-1"></div>
              <div className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                <div className="flex items-start mb-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fostering Continuous Growth</h4>
                    <p className="text-gray-600 dark:text-gray-300">Empowering personal and professional development at every level.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-2xl transform rotate-1"></div>
              <div className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                <div className="flex items-start mb-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Promoting Work-Life Balance</h4>
                    <p className="text-gray-600 dark:text-gray-300">Supporting flexibility and well-being for a thriving, balanced workforce.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 max-w-[90vw] mx-auto"
        >
          <p className="text-lg font-medium text-gray-900 dark:text-white">
            Our work culture enables us to not only meet expectations but exceed them—every day.
          </p>
        </motion.div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-indigo-500/5 to-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </section>
  );
};

export default AboutSectionFour;

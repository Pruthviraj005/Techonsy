"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TestingApproach() {
  return (
    <section className="text-center py-12 bg-gray-900 text-white relative">
        <div className="absolute inset-0 w-slg opacity-30  bg-gradient-to-br from-[#182a44] to-[#250253] blur-[100px]  animate-rotate rounded-full  z-0"></div>

        <div className="max-w-6xl mx-auto">
            {/* Animated Heading */}
            <motion.h1
            className="text-4xl md:text-4xl font-bold relative inline-block"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            >
            Our Software <span className="text-cyan-500">Testing Approach</span>
            <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"
                whileInView={{ scaleX: 1 }}
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
            />
            </motion.h1>

            {/* Animated Subtext */}
            <motion.p
            className="mt-4 text-gray-300 max-w-4xl mx-auto px-10 py-5"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            >
            To ensure minimized time-to-market and reduced risks, our team diligently follows
            agile and scrum-based testing for the best quality deliverance of applications or software.
            </motion.p>

            <motion.p
            className="mt-2 text-gray-300 max-w-3xl mx-auto px-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            >
            The below chart depicts the structured flow of QA activities comprising an agile sprint.
            </motion.p>

            {/* Animated Image with Scroll Effect */}
            <motion.div
            className="mx-auto my-10 mt-10 px-10 lg:px-0"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            >
            <Image
                src="/images/services/quality_assurance/image copy 2.png"
                height={650}
                width={650}
                alt="testing approach"
                className="invert mx-auto"
            />
            </motion.div>
        </div>
    </section>
  );
}
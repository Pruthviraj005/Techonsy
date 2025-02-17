"use client";

import { motion } from "framer-motion";
import CCProcessCards from "./CCProcessCards";

export default function CCProcesss() {
  return (
    <section className="bg-slate-950 text-white py-16 px-6 md:px-12 text-center">
      <motion.h3
        className="text-lg md:text-xl text-blue-500 font-medium mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Process
      </motion.h3>

      <motion.h1
        className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-4xl mx-auto font-sans"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Optimizes Development, Continuous Integration, <br className="hidden md:inline" />
        And Cloud Scalability For Seamless Operations
      </motion.h1>
      <CCProcessCards />
    </section>
  );
}

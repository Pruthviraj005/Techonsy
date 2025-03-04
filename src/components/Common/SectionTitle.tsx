"use client";
'';

import { motion } from "framer-motion";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "30px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <motion.div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2 
        className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.span
          className="inline-block bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ backgroundPosition: "0% 50%" }}
          whileInView={{ backgroundPosition: "100% 50%" }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        >
          {title}
        </motion.span>
      </motion.h2>
      
      <motion.p 
        className="text-base !leading-relaxed text-body-color md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {paragraph}
      </motion.p>
    </motion.div>
  );
};

export default SectionTitle;

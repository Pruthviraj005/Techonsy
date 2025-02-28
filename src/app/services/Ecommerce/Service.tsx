"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import nodeJsIllustration from "../../../../public/images/services/ecom/online.svg";

const Service = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full mx-auto px-6 md:px-10 gap-10 overflow-hidden p-10 lg:h-[85vh]">
      {/* Left Animated Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the section is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="flex flex-1 justify-center"
      >
        <Image
          src={nodeJsIllustration}
          alt="E-commerce Illustration"
          width={400}
          height={400}
          className="max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[320px]"
        />
      </motion.div>

      {/* Right Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex-[1.5] text-center md:text-left space-y-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white">
          Create Your Seamless <br /> Online Store with Expert <br /> E-commerce Solutions
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
          With the rapid rise of mobile devices and internet accessibility, eCommerce has surged, creating new opportunities for online businesses. We design scalable eCommerce solutions using the best software architecture practices to help your business grow effortlessly.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
          Our custom eCommerce solutions help businesses expand efficiently, offering full-cycle development, including secure online payment processing and seamless integration.
        </p>
      </motion.div>
    </section>
  );
};

export default Service;

"use client";

import { motion } from "framer-motion";
import { 
  FaClock, FaCogs, FaStore, FaSearch, FaUsers, 
  FaShieldAlt, FaBoxes, FaCode, FaSyncAlt, FaChartLine 
} from "react-icons/fa";

const benefits = [
  { icon: <FaClock />, title: "Automate & Save Time", description: "Reduce costs and optimize workflow with automated processes." },
  { icon: <FaCogs />, title: "Customizable Templates", description: "Choose from a variety of flexible and unique designs." },
  { icon: <FaStore />, title: "Full Store Control", description: "Manage features, layouts, and functions effortlessly." },
  { icon: <FaBoxes />, title: "Unlimited Listings", description: "Showcase endless products with no restrictions." },
  { icon: <FaSearch />, title: "SEO-Optimized", description: "Boost visibility and attract more customers organically." },
  { icon: <FaUsers />, title: "User-Friendly Management", description: "An intuitive dashboard for smooth operations." },
  { icon: <FaCode />, title: "Advanced Customization", description: "Tailor your store to outshine the competition." },
  { icon: <FaShieldAlt />, title: "Secure Storage", description: "Protect content, files, and multimedia with high security." },
  { icon: <FaSyncAlt />, title: "Complete Autonomy", description: "Gain full control over your eCommerce experience." },
  { icon: <FaChartLine />, title: "Regular Updates", description: "Enjoy security patches and performance improvements." },
];

const BenefitsSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-400">
      {/* Title with Animated Underline */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white relative inline-block">
          Why Choose <span className="text-purple-500">Our E-commerce Solutions?</span>
        </h2>
      </motion.div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg flex items-center gap-4 border border-gray-700 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-400 transition-all duration-300"
          >
            <motion.div 
              className="text-purple-400 text-3xl"
              whileHover={{ rotate: -5, scale: 1.2 }}
            >
              {benefit.icon}
            </motion.div>
            <div>
              <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;

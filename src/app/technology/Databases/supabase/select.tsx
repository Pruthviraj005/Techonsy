"use client";
"";

import { motion } from "framer-motion";
import { FaLightbulb, FaChartLine, FaUsers, FaTasks } from "react-icons/fa";

const features = [
  {
    icon: <FaLightbulb className="text-blue-500 text-4xl" />,
    title: "Tailored Expertise",
    description:
      "Leverage advanced technical expertise and the latest resources to create Supabase solutions that meet your specific business needs.",
  },
  {
    icon: <FaChartLine className="text-purple-500 text-4xl" />,
    title: "Scalable & Future-Ready Solutions",
    description:
      "Adopt a growth-focused strategy that ensures long-term scalability and maximizes product value using Supabase’s flexible platform.",
  },
  {
    icon: <FaUsers className="text-blue-500 text-4xl" />,
    title: "Seamless Collaboration & Support",
    description:
      "Benefit from a collaborative approach with dedicated teams of developers and strategists, ensuring smooth execution and ongoing success.",
  },
  {
    icon: <FaTasks className="text-purple-500 text-4xl" />,
    title: "Agile & Efficient Delivery",
    description:
      "Utilize agile methodologies for efficient, flexible development that guarantees high-quality Supabase solutions delivered on time and within budget.",
  },
];

export default function Select() {
  return (
    <section className="relative py-16 px-6 w-full flex justify-center">
      <div className="max-w-[1000px] w-full text-white text-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-purple-900 opacity-30 -z-10"></div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text"
        >
          Why Choose Us for Supabase Development?
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

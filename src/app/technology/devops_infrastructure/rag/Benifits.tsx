"use client";
import { motion } from "framer-motion";
import { FaCheckCircle, FaBrain, FaUsers, FaLayerGroup, FaShieldAlt, FaClock } from "react-icons/fa";

const benefits = [
  {
    title: "Enhanced Accuracy",
    desc: "Integrates the latest, relevant data to ensure precise and up-to-date responses.",
    icon: <FaCheckCircle className="text-blue-400 text-3xl" />,
  },
  {
    title: "Better Contextualization",
    desc: "Improves AI’s ability to understand and interpret conversations for more relevant answers.",
    icon: <FaBrain className="text-green-400 text-3xl" />,
  },
  {
    title: "Improved Services",
    desc: "Powers AI applications to deliver personalized, high-quality user experiences and better customer satisfaction.",
    icon: <FaUsers className="text-purple-400 text-3xl" />,
  },
  {
    title: "Scalability",
    desc: "Enables seamless expansion by leveraging external data sources without extensive model retraining.",
    icon: <FaLayerGroup className="text-yellow-400 text-3xl" />,
  },
  {
    title: "Transparency & Accountability",
    desc: "Provides citations for retrieved information, enhancing credibility and trust.",
    icon: <FaShieldAlt className="text-red-400 text-3xl" />,
  },
  {
    title: "Cost & Time Efficiency",
    desc: "Reduces training costs and automates data retrieval, saving time and resources.",
    icon: <FaClock className="text-teal-400 text-3xl" />,
  },
];

const Benefits = () => {
  return (
    <div className="relative bg-gray-900 text-white py-16 px-6 md:px-12">
      {/* Background SVG with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/technology/Devops_infrastructure/rag/rag-bg.svg')" }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 text-transparent bg-clip-text pb-6">
          RAG Benefits to Boost Business Growth
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="border-l-4 border-gray-600 ml-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="relative pl-10 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <div className="absolute -left-7 top-2 w-14 h-14 flex items-center justify-center 
                                bg-gray-800 border-4 border-gray-600 rounded-full 
                                shadow-[0_0_15px_5px_rgba(255,255,255,0.4)] 
                                hover:shadow-[0_0_25px_10px_rgba(59,130,246,0.7)] 
                                transition duration-300">
                  <span className="text-2xl text-white">{benefit.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-300 mt-2">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

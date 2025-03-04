"use client";
import { motion } from "framer-motion";
import { FaClipboardList, FaDatabase, FaCog, FaChartLine, FaShieldAlt, FaSync } from "react-icons/fa";

const processSteps = [
  {
    title: "Business Needs Assessment",
    desc: "Identify goals and AI use cases to ensure seamless RAG implementation.",
    icon: <FaClipboardList />,
    color: "shadow-blue-500",
    bg: "bg-blue-900/20 border-blue-500",
  },
  {
    title: "Data Alignment & Retrieval System",
    desc: "Prepare, structure, and connect data sources for efficient retrieval.",
    icon: <FaDatabase />,
    color: "shadow-blue-500",
    bg: "bg-blue-900/20 border-blue-500",
  },
  {
    title: "LLM Integration & Prompt Engineering",
    desc: "Optimize integration and prompt design for accurate AI responses.",
    icon: <FaCog />,
    color: "shadow-blue-500",
    bg: "bg-blue-900/20 border-blue-500",
  },
  {
    title: "System Training & Fine-Tuning",
    desc: "Continuously enhance RAG performance to improve output quality.",
    icon: <FaChartLine />,
    color: "shadow-blue-500",
    bg: "bg-blue-900/20 border-blue-500",
  },
  {
    title: "Performance Evaluation",
    desc: "Regularly assess system efficiency and adjust for evolving business needs.",
    icon: <FaShieldAlt />,
    color: "shadow-blue-500",
    bg: "bg-blue-900/20 border-blue-500",
  },
  {
    title: "Ongoing Support & Updates",
    desc: "Provide technical assistance and implement the latest RAG advancements.",
    icon: <FaSync />,
    color: "shadow-blue-500",
    bg: "bg-blue-900/20 border-blue-500",
  },
];

const RAGProcess = () => {
  return (
    <div
      className="min-h-screen bg-gray-900 text-white py-16 px-6 md:px-12 relative"
      style={{
        backgroundImage: "url('/images/ai-pattern.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.8, // Adjusted for better contrast
      }}
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 text-transparent bg-clip-text pb-2">
          Our RAG Development Process
        </h2>
        {/* Underline */}
        <div className="w-48 md:w-80 h-1 mx-auto bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            className={`relative p-6 rounded-xl border shadow-lg ${step.bg} ${step.color} transition transform hover:-translate-y-2 hover:shadow-2xl`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className={`p-4 text-3xl text-white rounded-full ${step.bg}`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
            </div>
            <p className="text-gray-300 mt-3">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RAGProcess;

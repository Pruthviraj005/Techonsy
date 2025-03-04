"use client";
import { motion } from "framer-motion";
import { Server, ShieldCheck, Brain, PlugZap } from "lucide-react";

const expertiseOptions = [
  {
    icon: <Server className="w-16 h-16 text-blue-400" />,
    title: "Tailored IoT Solutions",
    description: "We create secure, scalable, and customized IoT applications to meet your unique business needs.",
  },
  {
    icon: <ShieldCheck className="w-16 h-16 text-green-400" />,
    title: "End-to-End Expertise",
    description: "From hardware selection to full-scale development, we handle every aspect of your IoT project.",
  },
  {
    icon: <Brain className="w-16 h-16 text-yellow-400" />,
    title: "Seamless Integration",
    description: "We ensure smooth integration with existing systems, providing a connected and optimized ecosystem.",
  },
  {
    icon: <PlugZap className="w-16 h-16 text-purple-400" />,
    title: "Continuous Support ",
    description: "Our team offers ongoing maintenance and support to keep your IoT solutions running efficiently.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 px-6 md:px-20 lg:px-32 text-gray-100">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-center text-blue-50 drop-shadow-lg"
      >
        Why Choose Us for IoT Development?
      </motion.h2>
      <p className="text-gray-300 text-center mt-8 max-w-2xl mx-auto">
        We always focus on delivering quality IoT app development solutions. Our expertise ensures secure, scalable, and AI-driven IoT ecosystems tailored to your business.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 justify-center">
        {expertiseOptions.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-500 
                       flex flex-col items-center text-center space-y-4"
          >
            <div className="flex justify-center">{option.icon}</div>
            <h3 className="text-2xl font-bold text-white">{option.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">{option.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

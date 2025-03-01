"use client";
''
import { motion } from "framer-motion";

const competencies = [
  {
    title: "Guaranteed Quality Assurance",
    description:
      "Quality is always a priority in MEAN stack development, especially when you partner with us. Our dedicated MEAN stack development experts will take all the essential measures to ensure the solution’s quality and make enhancements wherever necessary.",
    icon: "✅",
    link: "#",
  },
  {
    title: "MEAN And JSON Compatibility",
    description:
      "Using JSON can simplify and streamline the entire development process much more easily. Thanks to the flexibility of MEAN stack development, one can use JSON to streamline data flow without rewriting any codes or formatting different layers.",
    icon: "🛠️",
    link: "#",
  },
  {
    title: "High Speed With Reusable Codes",
    description:
      "High Speed is one of the most significant advantages of using MEAN stack development. Since you can reuse most of the codes with the MEAN stack development procedures, it helps you save a lot of time and resources.",
    icon: "⚡",
    link: "#",
  },
  {
    title: "Uniform Programming Language",
    description:
      "The best thing about MEAN stack development is it provides all the codes in JavaScript that cover every aspect of the development process. This makes it easier to source the right talents for your project and ensure you get nothing short of the best.",
    icon: "📜",
    link: "#",
  },
];

export default function CoreCompetencies() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Core Competencies Of MEAN Stack Development
        </h2>
        <p className="text-gray-300 mt-3">
          Get the most of MEAN stack development services for your software
          development.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {competencies.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transform transition"
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">{item.icon}</span>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-400 mt-3">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-md text-lg font-semibold transition-transform"
        >
          GET IN TOUCH
        </motion.button>
      </div>
    </div>
  );
}
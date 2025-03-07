"use client";
import { motion } from "framer-motion";
import { FaSearch, FaPlusCircle, FaRobot } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Retrieval",
    description:
      "When a user submits a query, the system searches external databases or documents to fetch the most relevant information.",
    icon: <FaSearch className="text-blue-400 text-4xl" />,
  },
  {
    id: 2,
    title: "Augmentation",
    description:
      "The retrieved data is integrated with the model’s existing knowledge, providing additional context for a more accurate response.",
    icon: <FaPlusCircle className="text-green-400 text-4xl" />,
  },
  {
    id: 3,
    title: "Generation",
    description:
      "The AI processes both its internal knowledge and the newly retrieved data to generate a well-informed, precise answer.",
    icon: <FaRobot className="text-purple-400 text-4xl" />,
  },
];

const Introduction = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 text-transparent bg-clip-text pb-6">
        How RAG Works
      </h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg bg-gray-800 shadow-lg"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0">{step.icon}</div>
            <div>
              <h3 className="text-2xl font-semibold border-b-2 border-gray-600 pb-2">{step.title}</h3>
              <p className="text-gray-300 mt-2">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;

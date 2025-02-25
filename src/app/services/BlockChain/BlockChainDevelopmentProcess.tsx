import { motion } from "framer-motion";
import { FaLightbulb, FaChartBar, FaBullseye, FaMapMarkedAlt, FaPencilRuler, FaCogs, FaClipboardCheck, FaRocket, FaHeadset } from "react-icons/fa";

const steps = [
  { id: "01", title: "Conceptualizing", icon: <FaLightbulb /> },
  { id: "02", title: "Business Analysis", icon: <FaChartBar /> },
  { id: "03", title: "Goal Setting", icon: <FaBullseye /> },
  { id: "04", title: "Roadmap", icon: <FaMapMarkedAlt /> },
  { id: "05", title: "Prototyping", icon: <FaPencilRuler /> },
  { id: "06", title: "Development", icon: <FaCogs /> },
  { id: "07", title: "Testing", icon: <FaClipboardCheck /> },
  { id: "08", title: "Deployment", icon: <FaRocket /> },
  { id: "09", title: "Support", icon: <FaHeadset /> },
];

const colors = [
  "bg-gray-900 text-white", "bg-blue-800 text-white", "bg-indigo-700 text-white",
  "bg-slate-800 text-white", "bg-gray-800 text-white", "bg-black text-white",
  "bg-blue-900 text-white", "bg-indigo-800 text-white", "bg-slate-900 text-white"
];

export default function BlockchainProcess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white p-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Blockchain App Development Process</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`p-6 rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-500 transform hover:shadow-xl ${colors[index]}`}
          >
            <div className="text-4xl mb-3 transition-transform transform hover:scale-110">{step.icon}</div>
            <span className="text-lg font-semibold">{step.id}</span>
            <p className="mt-2 text-center font-medium">{step.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

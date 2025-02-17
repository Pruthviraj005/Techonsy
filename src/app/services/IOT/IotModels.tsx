import { FaMoneyBillWave, FaUserTie, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const pricingOptions = [
  {
    icon: <Image src="/images/iot/best-price.png" alt="price" width={80} height={80} />,
    title: "Fixed Price",
    description: "With this model, you negotiate a fixed price for a specific set of IoT app development project.",
    features: ["No add-on cost", "Fixed pricing", "Pay for quality work", "24*7 Support"],
  },
  {
    icon: <Image src="/images/iot/developer.png" alt="price" width={80} height={80} />,
    title: "Hire Developers",
    description: "Hire dedicated IoT app developers who can help you create an IoT-based application.",
    features: ["On time Project updates", "Expert assistance", "Pay per hour", "Dedicated support"],
  },
  {
    icon: <Image src="/images/iot/solution.png" alt="price" width={80} height={80} />,
    title: "White Label Solutions",
    description: "Get a white label IoT app development solution and be ready to outshine this competitive market.",
    features: ["Timely delivery", "Custom solutions", "Real-time updates", "Reasonable pricing"],
  },
];

export default function PricingCards() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 px-6 md:px-20 lg:px-32 text-gray-100">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-center text-blue-50 drop-shadow-lg"
      >
        Affordable IoT Application Development Models
      </motion.h2>
      <p className="text-gray-300 text-center mt-8">
        We always focus on delivering quality IoT app development solutions. Also, we offer reasonable </p>
      <p className="text-gray-300 text-center">solutions to develop IoT apps. Here is a glimpse of our pocket-friendly IoT app development models.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {pricingOptions.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative bg-gray-800 rounded-3xl p-8 shadow-lg transform transition-all overflow-hidden border border-gray-500"
          >
            <motion.div
              // animate={{ borderColor: ["blue","lightblue","gray","white"] }}
              // transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              // className="absolute inset-0 border-1 border-transparent rounded-3xl"
            />
            <div className="flex justify-center mb-6 relative">{option.icon}</div>
            <h3 className="text-2xl font-bold text-center mb-4 text-white relative">{option.title}</h3>
            <p className="text-gray-300 text-center mb-6 text-lg leading-relaxed relative">{option.description}</p>
            <ul className="space-y-3 text-lg relative">
              {option.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✔</span> {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

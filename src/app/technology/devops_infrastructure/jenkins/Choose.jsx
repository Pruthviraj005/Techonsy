"use client";
import { motion } from "framer-motion";
import { FaCogs, FaCode, FaServer, FaLifeRing } from "react-icons/fa";

const timelineData = [
  {
    title: "Expert Integration",
    description:
      "Seamlessly implement Jenkins with Docker, Kubernetes, and cloud platforms for optimized CI/CD pipelines.",
    icon: <FaCogs className="text-white text-2xl" />,
  },
  {
    title: "Custom Automation",
    description:
      "Tailored Jenkins solutions to enhance build automation, testing, and deployment efficiency.",
    icon: <FaCode className="text-white text-2xl" />,
  },
  {
    title: "Scalability & Security",
    description:
      "Enterprise-grade infrastructure ensuring high availability, scalability, and robust security.",
    icon: <FaServer className="text-white text-2xl" />,
  },
  {
    title: "Ongoing Support",
    description:
      "Dedicated DevOps experts providing continuous monitoring, updates, and troubleshooting assistance.",
    icon: <FaLifeRing className="text-white text-2xl" />,
  },
];

export default function JenkinsWhyChooseUs() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Us for Jenkins?
      </h2>

      {/* Timeline Wrapper */}
      <div className="relative flex flex-col md:flex-row items-center w-full max-w-6xl justify-between">
        
        {/* Background Line (Behind Icons) */}
        <div className="absolute top-8 left-0 right-0 w-full h-1 bg-blue-500 hidden md:block"></div>

        {timelineData.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center text-center w-full md:w-1/4 mb-10 md:mb-0">
            
            {/* Vertical Line for Mobile */}
            {index > 0 && (
              <div className="absolute left-1/2 -translate-x-1/2 top-[-30px] w-1 h-16 bg-blue-500 md:hidden"></div>
            )}

            {/* Motion Wrapper for Animation */}
            <motion.div
              className="flex flex-col items-center relative z-10 bg-gray-900 px-4 md:px-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon Circle (Sits on top of the background line) */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>

              {/* Description */}
              <p className="text-sm md:text-base max-w-xs mt-2">{item.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

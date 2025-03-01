"use client";
"";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "High Performance",
    description:
      "Leverage our expertise to build tailor-made MySQL database solutions that meet your unique business requirements, ensuring efficient data management and retrieval.",
    icon: "💾",
    glowColor: "blue-500",
  },
  {
    title: "Scalability",
    description:
      "Improve the performance of your MySQL databases with advanced optimization techniques, including query tuning, indexing, and caching, to enhance application responsiveness and scalability.",
    icon: "⚡",
    glowColor: "pink-500",
  },
  {
    title: "Realibility",
    description:
      "Design scalable database architectures that can handle growing data volumes and user loads, ensuring smooth operations and high availability for your applications.",
    icon: "🔄",
    glowColor: "green-500",
  },
  
];

const MySqlServerDevelopment = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1 }}
      className="relative py-16 px-4 flex justify-center overflow-hidden"
    >
      {/* Background Gradient with Blurred Glow Effect */}
      <div className="absolute inset-0 w-full opacity-50 bg-gradient-to-r from-[#0d1b2a] to-[#1b263b] blur-[50px] animate-pulse"></div>

      {/* Floating Blobs for Unique Aesthetic */}
      <div className="max-w-6xl mx-auto">
        <div className="absolute top-10 left-20 w-40 h-40 bg-blue-500 opacity-20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-pink-500 opacity-20 rounded-full filter blur-3xl animate-float-reverse"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#91EAE4] to-[#7F7FD5] mb-4">
              Why Choose MySQL Server
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-400 mb-8">
          MySQL offers high performance, scalability, and robust security, making it the ideal choice for seamless and reliable database management. Optimize efficiency, reduce costs, and power your applications with MySQL’s advanced features.
          </p>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg bg-[#1a1a1a] border border-gray-700 transition-all relative"
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0px 0px 15px rgba(255, 255, 255, 0.1)`,
                  backgroundColor: "#222222",
                }}
              >
                {/* Floating Glow Effect */}
                <div
                  className={`absolute -top-2 -left-2 w-12 h-12 rounded-full bg-${service.glowColor} opacity-10 filter blur-2xl transition-all`}
                ></div>

                <div className={`text-4xl text-${service.glowColor}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-200 mt-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mt-2">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Animation CSS */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes float-reverse {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
        .animate-float-reverse {
          animation: float-reverse 6s infinite ease-in-out;
        }
      `}</style>
    </motion.section>
  );
};

export default MySqlServerDevelopment;

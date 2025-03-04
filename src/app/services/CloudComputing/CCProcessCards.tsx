"use client";
"";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    title: "Seamless Migration and Infrastructure Management",
    points: [
      "Execute Structured Migration Plan",
      "Ongoing Provisioning and Monitoring",
      "Regular Maintenance",
    ],
    image: "/migration.svg",
  },
  {
    title: "Robust Security and Compliance",
    points: [
      "Comprehensive Risk Assessment",
      "Data Encryption & Secure Access",
      "Regulatory Compliance Monitoring",
    ],
    image: "/integration.svg",
  },
  {
    title: "Scalable Cloud Architecture",
    points: [
      "Auto-scaling Infrastructure",
      "Optimized Resource Allocation",
      "High Availability & Reliability",
    ],
    image: "/security.svg",
  },
];

export default function CCProcessCards() {
  return (
    <section className="relative flex flex-col items-center justify-center space-y-8 py-16 bg-slate-950 min-h-screen px-4 sm:px-8 md:px-12">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="relative w-full max-w-4xl bg-slate-900 text-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ zIndex: cards.length - index }}
        >
          {/* Image Section */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex justify-center items-center">
            <Image
              src={card.image}
              alt={card.title}
              width={250}
              height={250}
              className="object-contain w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
              {card.title}
            </h2>
            <ul className="mt-4 space-y-2">
              {card.points.map((point, i) => (
                <li key={i} className="flex items-center justify-center md:justify-start space-x-2 text-sm sm:text-base md:text-lg font-light">
                  <span className="text-green-500 text-lg sm:text-xl md:text-2xl">✔</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

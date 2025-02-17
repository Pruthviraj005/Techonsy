"use client";

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
    <section className="relative flex flex-col items-center justify-center space-y-10 py-20 bg-slate-950 min-h-screen px-6">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="relative w-full max-w-4xl bg-slate-900 text-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ zIndex: cards.length - index }}
        >
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold">{card.title}</h2>
            <ul className="mt-4 space-y-3">
              {card.points.map((point, i) => (
                <li key={i} className="flex items-center justify-center md:justify-start space-x-2 text-lg font-light">
                  <span className="text-green-500 text-2xl">✔</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52">
            <Image
              src={card.image}
              alt={card.title}
              width={250}
              height={250}
              className="object-contain w-full h-full"
            />
          </div>
        </motion.div>
      ))}
    </section>
  );
}

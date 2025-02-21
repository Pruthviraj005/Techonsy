"use client";

import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollUp() {
  const { scrollY } = useScroll();
  
  useEffect(() => {
    window.document.scrollingElement?.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const opacity = useTransform(scrollY, [0, 200], [0, 1]);
  const scale = useTransform(scrollY, [0, 200], [0.8, 1]);

  return (
    <motion.button
      onClick={scrollToTop}
      style={{
        opacity,
        scale,
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 50,
      }}
      className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full text-white shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </motion.button>
  );
}

"use client";
"";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const features = [
  { emoji: "🚀", title: "Custom Design & Navigation", desc: "Flutter’s modern API and Skia-based rendering allow seamless cross-platform UI and navigation with native-like performance." },
  { emoji: "⚡", title: "Faster Development Cycle", desc: "With hot reload, code reusability, and rapid compilation, Flutter ensures smooth, jank-free graphics and quick iterations." },
  { emoji: "🔗", title: "Effortless Code Sharing", desc: "Write less, do more—Flutter’s extensive libraries and widgets simplify development while maintaining security and efficiency." },
  { emoji: "✅", title: "Reduced QA & Testing Time", desc: "Test once, deploy everywhere—Flutter ensures consistent performance across platforms, minimizing testing efforts." },
  { emoji: "🚀", title: "High Performance with Dart", desc: "Dart’s efficient memory allocation and real-time compilation boost speed, scalability, and flexibility in app development." },
  { emoji: "🎨", title: "Immersive User Experience", desc: "Flutter’s layered architecture and compositing capabilities enable smooth animations, graphics, and dynamic UI elements." },
  { emoji: "💡", title: "Productive Development", desc: "Stateful hot reload allows instant updates without losing state, enabling faster debugging and real-time UI enhancements." },
  { emoji: "🔌", title: "Flexible & Extensible", desc: "Works seamlessly with various development tools, offering thousands of packages for accelerated app development." },
  { emoji: "🌍", title: "Strong Community Support", desc: "A thriving open-source community ensures continuous enhancements, extensive resources, and collaborative innovation." }
];

const Card = ({ children }) => (
  <motion.div 
    className="p-10 sm:p-6 w-[90%] md:w-[80%] lg:w-[900px] bg-transparent text-white bg-gradient-to-r from-gray-600 to-black rounded-2xl border border-gray-700 transition transform shadow-4xl hover:scale-105 hover:border-gray-500"
    whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.3)" }}
  >
    {children}
  </motion.div>
);

const CardContent = ({ children }) => (
  <div className="flex flex-col items-center text-center bg-gray-700 p-4 sm:p-6 rounded-xl shadow-inner">
    {children}
  </div>
);

export default function Features() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative   text-white ">
      <div className="flex flex-col items-center my-20  justify-center w-full max-w-6xl mx-auto rounded-2xl shadow-lg ">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Powerful Features of Flutter for Seamless Development
        </h2>
        
        <div className="relative flex items-center w-full max-w-xl">
          <motion.div
            key={index}
            className="flex-shrink-0 w-full flex justify-center"
            initial={{ opacity: 0, x: -50, rotateY: 90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: 50, rotateY: -90 }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardContent>
                <span className="text-4xl sm:text-5xl">{features[index].emoji}</span>
                <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-200">{features[index].title}</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-300">{features[index].desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="flex justify-center mt-4 space-x-2 ">
          {features.map((_, i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-gray-600'}`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

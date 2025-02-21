'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import './styles.css';

const IndustryWeServe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollXProgress } = useScroll({
    container: containerRef
  });

  const industries = [
    {
      id: 1,
      icon: "/images/industryWeServe/foodDrinks_logo.png",
      image: "/images/industryWeServe/foodDrinks_logo.png",
      title: "Food & Drink",
      description: "We provide solutions for the healthcare industry, enabling better patient care and management.",
      color: "from-orange-400 to-red-500",
      stats: "50+ Projects Delivered"
    },
    {
      id: 2,
      icon: "/images/industryWeServe/education_logo.png",
      image: "/images/industryWeServe/education_logo.png",
      title: "Finance",
      description: "Our services help financial institutions streamline their operations and secure transactions.",
      color: "from-emerald-400 to-teal-500",
      stats: "99.9% Uptime"
    },
    {
      id: 3,
      icon: "/images/industryWeServe/education_logo.png",
      image: "/images/industryWeServe/education_logo.png",
      title: "Education",
      description: "We empower educational institutions with advanced tools for teaching and learning.",
      color: "from-blue-400 to-indigo-500",
      stats: "1M+ Users Served"
    },
    {
      id: 4,
      icon: "/images/industryWeServe/startup_logo.png",
      image: "/images/industryWeServe/startup_logo.png",
      title: "Start-Up",
      description: "Innovative solutions for retail businesses to enhance customer experience and optimize processes.",
      color: "from-purple-400 to-pink-500",
      stats: "90% Growth Rate"
    },
    {
      id: 5,
      icon: "/images/industryWeServe/education_logo.png",
      image: "/images/industryWeServe/education_logo.png",
      title: "Technology",
      description: "Driving innovation for technology companies with tailored solutions.",
      color: "from-yellow-400 to-orange-500",
      stats: "24/7 Support"
    }
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || isInteracting || isMobile) return;

    let scrollInterval: NodeJS.Timeout;
    let scrollAmount = 1;
    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (container.scrollLeft >= (container.scrollWidth - container.clientWidth)) {
          // Smooth reset to start
          const smoothReset = () => {
            container.scrollTo({
              left: 0,
              behavior: 'smooth'
            });
          };
          setTimeout(smoothReset, 1000);
        } else {
          container.scrollLeft += scrollAmount;
        }
      }, 30);
    };

    startScroll();

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [isInteracting, isMobile]);

  // Touch event handlers
  const handleTouchStart = () => setIsInteracting(true);
  const handleTouchEnd = () => {
    // Add a small delay before resuming auto-scroll
    setTimeout(() => setIsInteracting(false), 1000);
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 100% 100%, rgba(99, 102, 241, 0.1) 0, transparent 50%),
              radial-gradient(circle at 0% 0%, rgba(244, 63, 94, 0.1) 0, transparent 50%)
            `
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 dark:from-yellow-400/10 dark:to-orange-500/10 text-yellow-800 dark:text-yellow-200 text-sm font-medium backdrop-blur-sm">
              Empowering Industries
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent"
          >
            Industries We Serve
          </motion.h2>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div 
          className="h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mb-8"
          style={{
            scaleX: scrollXProgress,
            transformOrigin: "left"
          }}
        />

        {/* Industry Cards Container with touch events */}
        <div 
          ref={containerRef}
          className="flex overflow-x-auto pb-8 space-x-6 snap-x snap-mandatory hide-scrollbar scroll-smooth"
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              className="snap-center shrink-0 first:pl-8 last:pr-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 100
                }
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                whileHover={!isMobile ? { scale: 1.02, y: -5 } : {}}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-[300px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden group relative touch-pan-x"
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Card Content */}
                <div className="p-6">
                  {/* Icon Container */}
                  <div className="relative w-16 h-16 mb-6 mx-auto">
                    <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-20 rounded-2xl blur group-hover:opacity-30 transition-all duration-300 group-hover:blur-lg`} />
                    <div className="relative bg-white dark:bg-gray-700 rounded-2xl p-3 transform group-hover:rotate-6 transition-transform duration-300">
                      <Image
                        src={industry.icon}
                        alt={industry.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-center mb-3 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    {industry.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-4 line-clamp-2">
                    {industry.description}
                  </p>

                  {/* Stats Badge */}
                  <div className="flex justify-center">
                    <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${industry.color} bg-opacity-10`}>
                      <span className="text-xs font-medium text-gray-800 dark:text-white">
                        {industry.stats}
                      </span>
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-4 text-center">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${industry.color} bg-clip-text text-transparent group`}
                      href="#"
                    >
                      Learn More
                      <svg 
                        className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicators - Show only on desktop and when not interacting */}
        {!isInteracting && !isMobile && (
          <div className="mt-8 flex justify-center space-x-2">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {isMobile ? "Swipe to explore" : "Hover to pause automatic scrolling"}
            </div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustryWeServe;

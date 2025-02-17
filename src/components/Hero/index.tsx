'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

const Hero = () => {
  const [techSolution, setTechSolution] = useState("Mobile App Development");
  const [animate, setAnimate] = useState(false); // Track animation state

  useEffect(() => {
    const solutions = [
      "in Mobile App Development",
      "in Web App Development",
      "in Software Development",
      "in DevOps Development",
      "by Outsourcing Developers"
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % solutions.length;
      setTechSolution(solutions[currentIndex]);
      setAnimate(true); // Trigger the animation when text changes
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // Reset animation by clearing the class after the animation ends
  const handleAnimationEnd = () => {
    setAnimate(false);
  };

  return (
    <>
      {/* Add global styles for keyframes */}
      <style jsx>{`
        @keyframes refinedPop {
          0% {
            transform: scale(0.3);
            opacity: 0;
            color: #3b82f6; /* Start with a subtle color */
          }
          50% {
            transform: scale(2);
            opacity: 1;
            color: #3b82f6; /* Transition to a brighter color */
          }
          100% {
            transform: scale(1);
            opacity: 1;
            color: #3b82f6; /* End with a vibrant blue */
          }
        }

        .animateRefinedPop {
          animation: refinedPop 2.5s ease-in-out forwards;
        }
      `}</style>

      <section
        id="home"
        className="relative z-10 overflow-hidden bg-gray-900 pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px]"
      >
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[1000px]">
                <div className="">
                  <h1 className="mb-5 text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                    We help you 
                    <span
                      className={`text-blue-500 ${animate ? "animateRefinedPop" : ""}`}
                      onAnimationEnd={handleAnimationEnd} // Reset animation on end
                    >
                    {" "+techSolution+" "}
                    </span>
                     for your business.
                  </h1>
                </div>
                <p className="mb-12 text-lg leading-relaxed text-gray-300 sm:text-xl text-center">
                  TECHONSY delivers cutting-edge IT solutions that empower
                  businesses to thrive in the digital age. From custom software
                  development to cloud infrastructure, we're your trusted
                  technology partner.
                </p>

                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/contact"
                    className="w-full rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-700 sm:w-auto"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/services"
                    className="w-full rounded-lg border border-gray-600 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-800 sm:w-auto"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Gradient Effects */}
        <div className="absolute right-0 top-0 -z-10 opacity-30">
          <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-[120px]" />
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-30">
          <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-[120px]" />
        </div>
      </section>
    </>
  );
};

export default Hero;

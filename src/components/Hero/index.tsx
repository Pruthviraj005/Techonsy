"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Modal from '../Modal';
import Contact from '../Contact';

const Hero = () => {
  const [techSolution, setTechSolution] = useState("Mobile App Development");
  const [animate, setAnimate] = useState(false); // Track animation state
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const solutions = [
      "DevOps Development",
      "Web App Development",
      "AI Development",
      "UI & UX Designing",
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

  const handleContactClick = () => {
    setIsModalOpen(true);
  }

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
                    We specialize in
                    <span
                      className={`text-blue-500 ${animate ? "animateRefinedPop" : ""}`}
                      onAnimationEnd={handleAnimationEnd} // Reset animation on end
                    >
                      {" " + techSolution + " "}
                    </span>
                    to drive your business forward.
                  </h1>
                </div>
                <p className="mb-12 text-center text-xl leading-relaxed text-gray-300 sm:text-2xl">
                  Empowering businesses with AI-driven innovation, custom
                  software, and seamless IT outsourcing for scalable growth.
                </p>

                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <button
                    onClick={handleContactClick}
                    className="w-full rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-700 sm:w-auto"
                  >
                    Work With Us
                  </button>
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Contact />
      </Modal>
    </>
  );
};

export default Hero;

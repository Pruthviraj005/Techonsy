"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function WorkWithUs() {
    const items = [
        {
            title: "Comprehensive Testing Coverage",
            description: "End-to-end quality assurance services, ensuring every stage of development, from design to deployment, is thoroughly tested for performance, security, and usability.",
        },
        {
            title: "Tailored Testing Solutions",
            description: "Our approach is customized to fit your unique project needs, whether it's manual testing, automation, or specialized testing, guaranteeing optimal results for your business.",
        },
        {
            title: "Agile & Efficient Processes",
            description: "We follow agile methodologies, delivering fast, flexible, and reliable testing to ensure your product is launched on time and meets high standards.",
        },
        {
            title: "Seamless Collaboration",
            description: "We work closely with your team throughout the development cycle, ensuring transparency, clear communication, and timely feedback to address any issues early and effectively.",
        },
    ];

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftScroll, setShowLeftScroll] = useState(false);
    const [showRightScroll, setShowRightScroll] = useState(true);

    const handleScroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth",
            });
        }
    };

    const handleScrollVisibility = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftScroll(scrollLeft > 0);
            setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScrollVisibility);
            handleScrollVisibility();
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener("scroll", handleScrollVisibility);
            }
        };
    }, []);

    return (
        <section className="why-work-with-us-section bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 text-white relative">
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold mb-6"
                >
                    Why Work with Us?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-lg mb-12 text-gray-400"
                >
                    Discover why companies trust us with their business needs
                </motion.p>

                <div className="relative mt-10">
                    {showLeftScroll && (
                        <button
                            onClick={() => handleScroll("left")}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-700 p-3 rounded-full shadow-md hover:bg-gray-600 transition-all"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {showRightScroll && (
                        <button
                            onClick={() => handleScroll("right")}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-700 p-3 rounded-full shadow-md hover:bg-gray-600 transition-all"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto hide-scrollbar gap-6 px-6 my-auto h-350px "
                        style={{ scrollSnapType: "x mandatory" }}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="flex-shrink-0 w-full md:w-[350px] lg:h-[300px] transform transition-all duration-900 mt-5"
                                style={{ scrollSnapAlign: "center" }}
                            >
                                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg transition-all transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] cursor-pointer border border-gray-700 flex flex-col justify-between ">
                                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
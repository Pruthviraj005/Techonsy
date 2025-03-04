"use client";
''
import { useState, useEffect, useRef } from "react";

export default function WorkWithUs() {
    const items = [
        { title: 'Expertise & Efficiency', description: 'Benefit from our deep knowledge in Next.js for high-performance, scalable apps.' },
        { title: 'Tailored Solutions', description: 'Customized solutions that ensure seamless integration and user satisfaction.' },
        { title: 'Flawless Integration', description: 'Expert integration of Next.js with existing systems for enhanced functionality.' },
        { title: 'Reliable Support', description: 'Continuous maintenance and quick issue resolution to keep your app updated.' },
    ];

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftScroll, setShowLeftScroll] = useState(false);
    const [showRightScroll, setShowRightScroll] = useState(true);

    useEffect(() => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftScroll(scrollLeft > 0);
            setShowRightScroll(scrollLeft < scrollWidth - clientWidth);
        }
    }, []);

    const handleScroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="why-work-with-us-section dark:bg-gray-900 bg-gray-100 py-16 md:py-24 relative">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
                    Why Choose Us for <span className="text-cyan-600">Next.js Development</span>
                </h2>

                <div className="relative mt-12">
                    {/* Scroll Buttons */}
                    {showLeftScroll && (
                        <button
                            onClick={() => handleScroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 dark:bg-gray-800 p-4 rounded-full shadow-lg hover:bg-cyan-600 hover:text-white transition-all"
                        >
                            ◀
                        </button>
                    )}

                    {showRightScroll && (
                        <button
                            onClick={() => handleScroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 dark:bg-gray-800 p-4 rounded-full shadow-lg hover:bg-cyan-600 hover:text-white transition-all"
                        >
                            ▶
                        </button>
                    )}

                    {/* Scrollable Cards */}
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto space-x-6 px-6 hide-scrollbar"
                        style={{ scrollSnapType: 'x mandatory' }}
                    >
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-80 md:w-96 h-56 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 relative overflow-hidden"
                                style={{ scrollSnapAlign: 'center' }}
                            >
                                {/* Decorative Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-transparent dark:from-cyan-800 opacity-10"></div>

                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white relative">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mt-3 relative">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom CSS for hiding scrollbar */}
            <style>
                {`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                `}
            </style>
        </section>
    );
}
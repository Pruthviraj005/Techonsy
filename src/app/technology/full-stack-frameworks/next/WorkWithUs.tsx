"use client";
''
import { useState, useEffect, useRef } from "react";

export default function WorkWithUs()
{
    const items = [
        {
            title: 'Expertise & Efficiency',
            description: 'Benefit from our deep knowledge in Next.js to create high-performance, scalable web applications focused on speed and user experience.',
        },
        {
            title: 'Tailored Solutions',
            description: 'We deliver solutions customized to your specific business requirements, ensuring seamless integration and user satisfaction.',
        },
        {
            title: 'Flawless Integration',
            description: 'Count on us to expertly integrate Next.js with your existing systems, enhancing your app’s functionality and operational flow.',
        },
        {
            title: 'Reliable Support',
            description: 'With our continuous maintenance and support, we quickly resolve any issues, ensuring your app stays robust and up-to-date.',
        },
    ];
    const [isVisible, setIsVisible] = useState(false);
        const scrollContainerRef = useRef<HTMLDivElement>(null);
        const [showLeftScroll, setShowLeftScroll] = useState(false);
        const [showRightScroll, setShowRightScroll] = useState(true);
    
        // Intersection Observer for fade-in animation
        useEffect(() => {
            const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
            );
    
            const section = document.querySelector(".why-work-with-us-section");
            if (section) {
            observer.observe(section);
            }
    
            return () => {
            if (section) {
                observer.unobserve(section);
            }
            };
        }, []);
    
        // Handle scroll buttons
        const handleScroll = (direction: 'left' | 'right') => {
            if (scrollContainerRef.current) {
            const scrollAmount = 400; // Adjust scroll amount as needed
            const newScrollLeft = scrollContainerRef.current.scrollLeft + 
                (direction === 'left' ? -scrollAmount : scrollAmount);
            
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
            }
        };
    
        // Update scroll button visibility
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
            scrollContainer.addEventListener('scroll', handleScrollVisibility);
            // Initial check
            handleScrollVisibility();
            }
    
            return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScrollVisibility);
            }
            };
        }, []);
    
    return (
        <div>
            <section className={`why-work-with-us-section dark:bg-bg-color-dark relative z-10 py md:py-20  overflow-hidden
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} 
                                transition-all duration-1000 ease-in-out`}>
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-8">
                        Why Choose Us for Your Next.js Development Needs
                    </h2>
                    <div className="relative mt-16">
                    {/* Scroll Buttons */}
                        {showLeftScroll && (
                            <button
                            onClick={() => handleScroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-dark p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                            aria-label="Scroll left"
                            >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            </button>
                        )}
                        
                        {showRightScroll && (
                            <button
                            onClick={() => handleScroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-dark p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                            aria-label="Scroll right"
                            >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            </button>
                        )}

                        <div 
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto hide-scrollbar gap-6  h-[300px] "
                            style={{ scrollSnapType: 'x mandatory' }}
                        >
                            {items.map((item, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 w-full md:w-[400px] transform transition-all duration-900  h-[300px]
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ 
                                transitionDelay: `${index * 200}ms`,
                                scrollSnapAlign: 'center'
                                }}
                            >
                                <div className="bg-white dark:bg-dark  lg:h-[250px] border-b-[0.5px] border-[0.5px] p-6 border-cyan-700 border-opacity-50 rounded-2xl shadow-md shadow-cyan-500/50 ">
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-slate-400">{item.description}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

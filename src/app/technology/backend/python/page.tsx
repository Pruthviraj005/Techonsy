"use client"
import Image from "next/image";
import img from '../../../../../public/images/technology/python-svgrepo-com.svg'
import { useState, useEffect, useRef } from "react";
import { services, techStack, items, industriesData } from './data';
import ButtonComp from "@/components/Common/ButtonComp";
import IndustryWeServe from "@/components/IndustryWeServe";

export default function Python () {

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
        <div className=" ">
          <div className="bg-gradient-to-r from-[#172443ef] to-[#4f430b7a] px-6 lg:px-24 flex flex-col items-center justify-center z-1 relative border-b-[0.5px] border-yellow">
          {/* Background Blur */}
          <div className="absolute bg-black w-full h-full bg-opacity-50 blur-[200px]"></div>

          {/* Content Section */}
          <div className="max-w-6xl text-white flex flex-col justify-center items-center my-20 gap-4 z-10 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              {/* Hide Image on Mobile */}
              <div className="hidden md:block">
                <Image
                  src={img}
                  alt="Python Development"
                  width={400}
                  height={400}
                />
              </div>

              {/* Gradient Heading */}
              <h1 className="text-4xl lg:text-6xl font-bold text-center md:text-left 
                            bg-gradient-to-r from-[#a3bfff] to-[#dfcd7c]
                            bg-clip-text text-transparent">
                Python Development Company
              </h1>
            </div>

            <p className="text-lg mb-6 text-center text-slate-400">
              As the #1 trusted Python development company in India & USA, we
              deliver high-quality, custom web apps, desktop applications, and
              dynamic websites using top-of-the-line frameworks like Python Flask,
              Python Web 2py, and Python Django. With years of experience and a
              result-driven approach, we are the go-to Python development company
              for all your business needs.
            </p>

            <ButtonComp/>
          </div>
        </div>

        <div className="my-10 max-w-[1000px] mx-auto relative  ">
            <div className="absolute inset-0 w-slg opacity-20  bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 blur-[100px]  animate-rotate rounded-full  z-0"></div>
            <header className="text-center py-10 ">
                <h1 className="text-4xl font-bold">Our Python Development Services Includes</h1>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    Our Python development services include all major comprehensive web solutions, such as e-commerce portals, CMS, ERP solutions, chatbots, custom software, and more.
                </p>
            </header>

            <section className="py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6 px-10 content-center">
                    {services.map((service, index) => (
                        <div key={index} className="group border-[0.5px] border-cyan-600 border-opacity-50 p-6 rounded-3xl shadow-md bg-slate-900 backdrop-blur-3xl text-center">
                        <div className="inline-block transition-transform duration-500 group-hover:scale-150">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-100 mt-4">{service.title}</h3>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>

           

        <section className="py-16 border-y-[0.5px] border-slate-500">
          <div className="mx-auto px-4 sm:px-6 text-center max-w-6xl">
            {/* Section Heading */}
            <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
              Craft Your Dream Web App with Python for Powerful and Scalable Business Growth
            </h2>

            <p className="text-lg sm:text-base md:text-xl text-slate-500 dark:text-slate-500 mb-8 md:mb-12">
              Growing businesses need robust platforms that can adapt and evolve with their needs. Python, the language powering some of the world's top websites and applications, offers unmatched scalability, rapid development cycles, and a cost-effective approach.
            </p>

            <div className="flex justify-center items-center mb-6 md:mb-12">
              <h3 className="text-2xl sm:text-xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                Python Development for Scalable Growth
              </h3>
            </div>

            {/* Description Section */}
            <p className="text-base sm:text-sm md:text-lg text-slate-500 dark:text-slate-500 mb-6 md:mb-8">
              In today’s digital world, a well-designed web application is the foundation of any business. It’s the face you present to the public, the platform that generates traffic, and the engine that powers your online presence. But to create the perfect web application, you need the right tools. That's where Python comes in.
            </p>

            <p className="text-base sm:text-sm md:text-lg text-slate-500 dark:text-slate-500 mb-8 md:mb-12">
              At Ahex, we are a team of passionate and experienced Python developers who specialize in crafting custom web applications that meet your specific needs and goals. We leverage the power of Python to build high-performing, scalable, and user-friendly web applications that propel your business forward.
            </p>

            {/* Call to Action Section */}
            <div className="mt-6 md:mt-8">
              <a
                className="mt-4 bg-blue-600 px-6 py-3 text-base sm:text-sm md:text-lg font-medium rounded-md hover:bg-blue-900 max-w-full sm:max-w-[320px] md:max-w-[450px] mx-auto transition-all transform hover:scale-105 duration-300 ease-in-out block"
              >
                Contact us for a Free Consultation
              </a>
            </div>

            <p className="mt-6 md:mt-8 text-base sm:text-sm md:text-lg text-gray-600 dark:text-gray-300">
              Discover how Python development can unlock powerful and scalable growth for your business.
            </p>
          </div>
        </section>

        {/*Python Tech Stack*/}
        <div className="max-w-6xl mx-auto my-10 p-5">
          <h2 className="text-center text-4xl font-bold mb-10">Python Tech Stack</h2>
          <div className="w-full overflow-hidden flex flex-col gap-4">
            {techStack.map((tech, index) => (
            <div key={index} className="flex flex-wrap border border-slate-400 rounded-md">
                <div className="w-full md:w-1/4 bg-blue-600 text-gray-100 font-semibold p-4 flex items-center justify-center">
                {tech.category}
                </div>
                <div className="w-full md:w-3/4 p-4 flex flex-wrap items-center">
                {tech.items.map((item, idx) => (
                    <span key={idx} className="px-4 py-1 w-1/2 md:w-1/4 lg:w-[20%] text-gray-100 md:border-r last:border-r-0 border-slate-400 text-center">
                    {item}
                    </span>
                ))}
                </div>
            </div>
              ))}
          </div>
        </div>
            
        {/*Why Work with Us section */}
        <section className={`why-work-with-us-section dark:bg-bg-color-dark relative z-10 py md:py-20  overflow-hidden
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} 
                            transition-all duration-1000 ease-in-out`}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8">Why Work with Us?</h2>
                <p className="text-center mb-16 text-slate-500 text-2xl">Discover why companies trust us with their business needs</p>

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
                        className={`flex-shrink-0 w-full md:w-[400px] transform transition-all duration-900 
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ 
                        transitionDelay: `${index * 200}ms`,
                        scrollSnapAlign: 'center'
                        }}
                    >
                        <div className="bg-white dark:bg-dark  lg:h-[200px] border-b-[0.5px] border-[0.5px] p-6 border-cyan-700 border-opacity-50 rounded-2xl shadow-md shadow-cyan-500/50 ">
                        <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                        <p className="text-slate-400">{item.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
            
            {/*Work for Any Industry */}
        {/* <section className="pt-16 mb-14">
          <div className="container text-center max-w-full px-4 sm:px-6 lg:px-8 mx-auto">
            <h2 className="text-xl sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
              Work for Any Industry
            </h2>
            <p className="text-3xl sm:text-2xl md:text-4xl text-gray-600 mb-8 md:mb-12">
              Experience Across Different Industries
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12">
              {industriesData.map((industry) => (
                <div key={industry.id} className="flex flex-col items-center justify-center">
                  <div className="mb-4">{industry.icon}</div>
                  <h3 className="text-lg sm:text-base md:text-xl font-semibold text-gray-900 dark:text-white">
                    {industry.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        <IndustryWeServe/>
      </div>
    );
};

"use client";
import React, { useState, useEffect, useRef } from "react";
import {services,expertiseData,projects,blogs,btn} from "./data"
import Image from "next/image";

export default function ConsultingServices() {


  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        const carousel = carouselRef.current;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        if (carousel.scrollLeft >= maxScroll) {
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft += 200;
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isDragging]);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="bg-gray-800 text-white p-4 text-center text-2xl font-bold">
        Consulting Services
      </header>

      <section className="relative min-h-[70vh] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-indigo-900 opacity-75"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-bold">IT Consulting Services</h1>
          <p className="text-lg mt-6">
            Providing the best technology and business IT consulting services
          </p>
            <button className="mt-4 bg-transparent border-2 border-blue-600 px-6 py-2 rounded text-blue-600 hover:bg-transparent hover:border-blue-700 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all duration-300 glow-effect relative">
             <span className="flex items-center">
               <span className="absolute left-0 transform translate-x-[40%] pt-2 z-10">{btn.icon}</span>
               <span className="pl-5">{'Contact Our Experts'}</span>
             </span>
            </button>
          
        </div>
      </section>

      <section className="container mx-auto py-20 px-5 flex  flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <div className="w-full text-center mb-6">
          <p className="text-gray-300 mx-auto max-w-3xl">
            Our consulting services are designed to provide expert guidance and strategic solutions to help businesses navigate complex challenges. We leverage our deep industry knowledge and advanced technology to deliver tailored solutions that drive growth, efficiency, and innovation. Explore our range of services designed to empower your business.
          </p>
        </div>
        <div
          ref={carouselRef}
          className="relative w-full overflow-x-auto cursor-grab pb-4 scrollbar-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex transition-transform  duration-1000">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 shadow-lg rounded-xl text-center flex flex-col items-center justify-center mx-4"
                style={{ width: "200px", height: "200px" }}
              >
                {service.icon}
                <h3 className="text-sm font-semibold">{service.title}</h3>
              </div>
            ))}
            
          </div>
        </div>
        <button className="mt-4 bg-transparent border-2 border-purple-600 px-6 py-2 rounded text-purple-600 hover:bg-transparent hover:border-purple-700 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition-all duration-300 glow-effect relative">
           <span className="flex items-center">
             <span className="absolute left-0 transform translate-x-[40%] pt-2 z-10">{btn.icon}</span>
             <span className="pl-5">{'Contact Our Experts'}</span>
           </span>
        </button>
      </section>
      <section className="container mx-auto py-20 px-5 text-center bg-gray-800 mb-4 rounded-md flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Driving Innovation and Growth</h2>
        <p className="text-lg text-gray-300">
          EMPOWER YOUR BUSINESS WITH CUTTING-EDGE SOLUTIONS AND STRATEGIES
        </p>
        <p className="text-gray-400 mt-4 max-w-3xl">
          Our dedicated team works tirelessly to ensure your business stays ahead of the competition. 
          By leveraging advanced technologies and innovative solutions, we help you achieve sustainable growth and success.
        </p>
        <p className="text-gray-400 mt-4 max-w-3xl">
          Whether you are a startup looking to make an impact or an established enterprise aiming for expansion,
          our strategic insights and technical expertise can guide you to unparalleled success.
        </p>
        <button className="mt-4 bg-transparent border-2 border-orange-600 px-6 py-2 rounded text-orange-600 hover:bg-transparent hover:border-orange-700 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 transition-all duration-300 glow-effect relative">
           <span className="flex items-center">
             <span className="absolute left-0 transform translate-x-[40%] pt-2 z-10">{btn.icon}</span>
             <span className="pl-5">{'Contact Our Experts'}</span>
           </span>
        </button>
      </section>

      <section className="relative min-h-[80vh] mt-[5%]">
          <div className="absolute inset-0 w-full opacity-50 bg-gradient-to-br from-[#182a44] to-[#084e7a] blur-[30px] animate-rotate rounded-full z-0"></div>
          <div className="relative z-10 flex flex-col items-center justify-center px-5 py-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Why Choose Our Expertise</h2>
            <p className="text-gray-300 mb-10 uppercase">Delivering Excellence with Strategic Intelligence</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
              {expertiseData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border-white/10 rounded-xl shadow-lg p-4 group perspective transition-transform duration-1000 hover:scale-105"
                >
                  {item.icon}
                  <h3 className="font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300 text-justify">{item.description}</p>
                </div>
             ))}
           </div>
          </div>
      </section>
      <section className="container mx-auto  px-5 text-center pb-20">
      <h2 className="text-3xl font-bold mb-6 text-white">Our Projects</h2>
      <p className="text-lg mb-12 text-gray-400">
        Explore some of our most exciting projects and see how we innovate.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {projects.map((project, index) => (
    <div
      key={index}
      className="bg-gray-800 p-4 shadow-lg rounded-xl text-center flex flex-col items-center justify-center group hover:bg-blue-700 transition duration-300"
    >
      <div className="w-full h-48 overflow-hidden rounded-t-xl">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={400
          }
          className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-gray-300 mt-2">{project.description}</p>
      </div>
    </div>
  ))}
      </div>
    </section>
    <section className="container mx-auto  px-5 text-center pb-20">
        <h2 className="text-3xl font-bold mb-6 text-white">Our Blogs</h2>
        <p className="text-lg mb-12 text-gray-400">
          Stay updated with the latest trends and insights.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 shadow-lg rounded-xl text-left flex flex-col transition-transform duration-300 hover:scale-105"
            >
              <div className="h-40 bg-cover bg-center mb-4 rounded-md" style={{ backgroundImage: `url('${blog.image}')` }}></div>
              <h3 className="text-xl font-semibold text-white">{blog.title}</h3>
              <p className="text-gray-300 mt-4">
                {blog.description}
              </p>
              <button className="mt-4 bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 self-start">
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

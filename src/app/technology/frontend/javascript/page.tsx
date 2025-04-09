"use client";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import ButtonComp from "@/components/Common/ButtonComp";
import AnimetedLine from "../../../../components/Animation/Services/Javascript/Animatedline";
import { services, technologies, cards, cards2 } from "./data";

// Lazy load IndustryWeServe to improve performance
const IndustryWeServe = dynamic(() => import("@/components/IndustryWeServe"), { ssr: false });

export default function JavaScript() {
  // Memoize services rendering
  const renderedServices = useMemo(() => (
    services.map((service, index) => (
      <div
        key={index}
        className="p-6 bg-slate-800 shadow-md rounded-lg text-center hover:shadow-lg 
                   hover:shadow-orange-600/50 transition-transform transform hover:scale-105"
      >
        <div className="text-4xl">{service.icon}</div>
        <h3 className="text-lg text-slate-100 font-semibold mt-4">{service.name}</h3>
        <p className="text-slate-400 mt-2 text-sm">{service.description}</p>
      </div>
    ))
  ), []);

  // Memoize technologies rendering
  const renderedTechnologies = useMemo(() => (
    technologies.map((tech, index) => (
      <div
        key={index}
        className="w-24 h-24 bg-black border border-orange-600/50 shadow-lg hover:shadow-orange-600/50 
                   flex flex-col items-center justify-center hover:bg-orange-600/25 rounded-lg p-4 
                   transition-transform transform hover:scale-105"
      >
        <p className="text-sm sm:text-base md:text-lg font-semibold">{tech.name}</p>
      </div>
    ))
  ), []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#060912] to-[#012b4b6f] px-6 lg:px-24 flex flex-col relative">
        <div className="h-[85vh] md:h-[70vh] flex items-center relative overflow-hidden mt-12">
          
          {/* Text Content */}
          <div className="relative z-10 max-w-xl mx-auto md:ml-12 lg:ml-20 text-left text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-center md:text-left">
              Develop applications with 
              <span className="text-[#FFB200]"> JavaScript!</span>
            </h1>
            <p className="text-base md:text-lg opacity-80 my-10 text-center md:text-left">
              Create next-gen web and mobile solutions with custom JavaScript development.
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <ButtonComp />
            </div>
          </div>

          {/* Background Image */}
          <div className="hidden sm:block">
            <Image 
              src="/images/technology/frontend/javascript/javascript.svg" 
              alt="JavaScript Technology" 
              width={600} 
              height={600}  
              quality={80} 
              loading="lazy"
              className="w-[60vw] max-w-[350px] md:w-[50vw] md:max-w-[400px] opacity-50"
            />
          </div>

        </div>
      </section>

      {/* JavaScript Development Services */}
      <section className="bg-slate-900 px-4 sm:px-6 lg:px-24 flex flex-col relative py-12 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5ab2f7] to-[#6f7bf7] text-center">
            JavaScript Development Services
          </h2>
          <AnimetedLine />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {renderedServices}
          </div>
        </div>
      </section>

      {/* JavaScript Development Tools & Technologies */}
      <section className="py-12 text-white text-center px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5ab2f7] to-[#12cff3]">
            Our JavaScript Development Tools & Technologies
          </h2>
          <AnimetedLine />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-8 px-6 mt-8">
            {renderedTechnologies}
          </div>
        </div>
      </section>

      {/* Why JavaScript Stands Out */}
      <section className="py-12 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#12cff3]">Why does JavaScript stand out from other technologies?</h2>
        <AnimetedLine />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border border-blue-900 shadow-lg shadow-blue-900 
                         rounded-2xl p-6 flex flex-col items-center text-center 
                         transition-transform hover:scale-105 hover:shadow-blue-500/80"
            >
              {card.icon}
              <h3 className="text-xl font-semibold mt-4 text-white">{card.title}</h3>
              <p className="text-gray-400 mt-2">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Work with Us? */}
      <section className="py-12 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#12cff3]">Why Work with us?</h2>
        <AnimetedLine />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {cards2.map((card, index) => (
            <div
              key={index}
              className="border border-purple-950 shadow-lg shadow-purple-950
                         rounded-2xl p-6 flex flex-col items-center text-center 
                         transition-transform hover:scale-105 hover:shadow-purple-500/80"
            >
              {card.icon}
              <h3 className="text-xl font-semibold mt-4 text-white">{card.title}</h3>
              <p className="text-gray-400 mt-2">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industry We Serve - Lazy Loaded */}
      <IndustryWeServe />
    </>
  );
}

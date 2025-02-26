"use client";

import {services , technologies, cards, cards2, expertise} from "./data";
import AnimetedLine from "../../../../components/Animation/Services/Javascript/Animatedline"
import IndustryWeServe from "@/components/IndustryWeServe";
import Image from "next/image";
import ButtonComp from "@/components/Common/ButtonComp";



export default function JavaScript() {
  
  return (
  <>
    {/* hero */}
    <section className="bg-gradient-to-br from-[#060912] to-[#012b4b6f] px-6 lg:px-24 flex flex-col z-1 relative">
      <div className="h-[85vh] md:h-[70vh] flex items-center relative overflow-hidden mt-12">
        
        {/* Text Content */}
        <div className="relative z-10 max-w-xl mx-auto md:ml-12 lg:ml-20 text-left text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-center md:text-left">
          Develop applications with 
          <span className="text-[#FFB200]"> JavaScript!</span>
        </h1>
        <p className="text-base md:text-lg opacity-80 my-10 text-center md:text-left">
          Create next-gen web and mobile solutions with custom JavaScript development.
          Craft bespoke JavaScript applications for your enterprise with clear structure,
          intuitive site architecture, and easy-to-recognize links.
        </p>
        <div className="mt-6 flex justify-center md:justify-start">
        <ButtonComp />
      </div>
        </div>

        {/* Background Image - Responsive Width & Height */}
          {/* Hide Image on Mobile */}
          <div className="hidden sm:block">
            <Image 
              src="/images/technology/frontend/javascript/javascript.svg" 
              alt="JavaScript Technology" 
              width={600} 
              height={600} 
              className="w-[60vw] max-w-[350px] md:w-[50vw] md:max-w-[400px] 
                        lg:w-[40vw] lg:max-w-[400px] 
                        opacity-30 md:opacity-50 lg:opacity-70 transition-opacity duration-500 ease-in-out"
            />
          </div>

      </div>
    </section>
    {/* Ahex JavaScript Development Services */}
    <section className="bg-slate-900 px-4 sm:px-6 lg:px-24 flex flex-col z-1 relative py-12  mx-auto">
         {/* Title */}
      <div className="max-w-6xl mx-auto">
         <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5ab2f7] to-[#6f7bf7] text-center">
           JavaScript Development Services
         </h2>
         
         <AnimetedLine />
       
         {/* Services Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
           {services.map((service, index) => (
             <div
               key={index}
               className="p-6 bg-slate-800 shadow-md rounded-lg text-center
                          hover:shadow-lg hover:shadow-orange-600/50 transition-transform 
                          transform hover:scale-105"
             >
               <div className="text-4xl">{service.icon}</div>
               <h3 className="text-lg text-slate-100 font-semibold mt-4">
                 {service.name}
               </h3>
               <p className="text-slate-400 mt-2 text-sm">{service.description}</p>
             </div>
           ))}
         </div>
      </div>
     </section>
    {/* Our JavaScript Development Tools & Technologies */}
    <section className="py-12 text-white text-center px-6  mx-auto">
       <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5ab2f7] to-[#12cff3] text-center">
          Our JavaScript Development Tools & Technologies
            </h2>
          <AnimetedLine />
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-8 px-6 mt-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-black border border-orange-600/50 border-t-orange-950 border-r-orange-950 shadow-lg 
                            hover:shadow-orange-600/50 flex flex-col items-center justify-center hover:bg-orange-600/25 rounded-lg p-4 transition-transform 
                            transform hover:scale-105"
              >
                <p className="text-sm sm:text-base md:text-lg font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
       </div>
     </section>
     {/*Why does JavaScript stand out from other technologies? */}
    <section className="py-12 px-6 text-center max-w-6xl mx-auto">
       <h2 className="text-3xl font-bold text-[#12cff3]">Why does JavaScript stand out from other technologies?</h2>
       <AnimetedLine />
       
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
         {cards.map((card, index) => (
           <div
             key={index}
             className="border-[0.5px] border-blue-900 bg-transparent shadow-lg shadow-blue-900 
                        rounded-2xl p-6 flex flex-col items-center text-center 
                        transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/80"
           >
             {card.icon}
             <h3 className="text-xl font-semibold mt-4 text-white">{card.title}</h3>
             <p className="text-gray-400 mt-2">{card.description}</p>
           </div>
         ))}
       </div>
    </section>


    <section className="py-12 px-6 text-center max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-[#12cff3]">Why Work with us?</h2>
      <AnimetedLine />
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {cards2.map((card, index) => (
          <div
            key={index}
            className="border-[0.5px] border-purple-950 bg-transparent shadow-lg shadow-purple-950
                       rounded-2xl p-6 flex flex-col items-center text-center 
                       transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/80"
          >
            {card.icon}
            <h3 className="text-xl font-semibold mt-4 text-white">{card.title}</h3>
            <p className="text-gray-400 mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </section>


    <IndustryWeServe/>
</>
    
    
  );
}

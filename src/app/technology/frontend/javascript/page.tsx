"use client";

import {services , technologies, cards, cards2, expertise} from "./data";

import AnimetedLine from "../../../../components/Animation/Services/Javascript/Animatedline"



export default function JavaScript() {
  
  return (
  <>
    {/* hero */}
    <section className="bg-gradient-to-br from-[#1b1f2a] to-[#4b3a72] px-6 lg:px-24 flex flex-col z-1 relative">
      <div className="h-[90vh] flex items-center bg-yellow-400 relative overflow-hidden">
        {/* Text Content */}
        <div className="relative z-10 max-w-xl ml-8 md:ml-16 lg:ml-20 lg:pr-20 text-left text-white">
          <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Develop high-performing, dynamic applications with JavaScript!
          </h1>
          <p className="text-base md:text-lg mb-6 text-justify">
            Create next-gen web and mobile solutions with custom JavaScript development.
            Craft bespoke JavaScript applications for your enterprise with clear structure,
            intuitive site architecture, and easy-to-recognize links.
          </p>
        </div>
    
        {/* Background Image with Responsive Opacity */}
        <div 
          className="absolute w-[60vh] md:w-[70vh] lg:w-[80vh] h-[60vh] md:h-[70vh] lg:h-[80vh] 
                     right-5 md:right-10 bottom-5 md:bottom-10 bg-contain bg-no-repeat bg-center 
                     opacity-25 md:opacity-35 lg:opacity-70 transition-opacity duration-500 ease-in-out"
          style={{ backgroundImage: 'url(/images/technology/frontend/javascript/javascript.svg)' }}
        ></div>
      </div>
    </section>
    {/* Ahex JavaScript Development Services */}
    <section className="bg-slate-900 px-6 lg:px-24 flex flex-col z-1 relative p-10 max-w-[1000px] mx-auto">
        <h2 className="text-4xl font-bold text-center text-white">Ahex JavaScript Development Services</h2>
        <AnimetedLine />
      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-slate-800 shadow-md rounded-lg text-center hover:shadow-lg hover:shadow-orange-600/50 transition-transform transform hover:scale-105">
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-lg text-slate-100 font-semibold mt-4">{service.name}</h3>
              <p className="text-slate-400 mt-2  text-sm">{service.description}</p>
            </div>
          ))}
        </div>
    </section>
    {/* Our JavaScript Development Tools & Technologies */}
    <section className="py-12 text-white text-center px-6 max-w-[1000px] mx-auto">
       <h2 className="text-3xl font-bold">Our JavaScript Development Tools & Technologies</h2>
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
     </section>
     {/*Why does JavaScript stand out from other technologies? */}
    <section className="py-12 px-6 text-center max-w-[1000px] mx-auto">
       <h2 className="text-3xl font-bold text-white">Why does JavaScript stand out from other technologies?</h2>
       <AnimetedLine />
       
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
         {cards.map((card, index) => (
           <div
             key={index}
             className="border border-blue-500 bg-transparent shadow-lg shadow-blue-500/50 
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


    <section className="py-12 px-6 text-center max-w-[1000px] mx-auto">
      <h2 className="text-3xl font-bold text-white">Why Work with us?</h2>
      <AnimetedLine />
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {cards2.map((card, index) => (
          <div
            key={index}
            className="border border-purple-500 bg-transparent shadow-lg shadow-purple-500/50 
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


    <section className="text-center  py-10 px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1000px] mx-auto">
       <header>
         <h3 className="text-sm text-blue-500 uppercase">Work for Any Industry</h3>
         <h2 className="text-3xl font-bold">Experience Across Different Industries</h2>
       </header>
     
       {/* Animated Line */}
       <div className="relative flex justify-center my-4">
         <div className="h-1 bg-blue-500 w-16 animate-pulse" />
       </div>
     
       {/* Responsive Circular Cards */}
       <div className=" ml-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10 mx-auto">
         {expertise.map((industry, index) => (
           <div
             key={index}
             className="flex flex-col items-center justify-center 
                        w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 
                        bg-blue-950 shadow-lg rounded-full border border-gray-300 
                        transition-transform duration-500 ease-in-out 
                        hover:scale-110 hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.8)]"
             style={{ transitionDelay: `${index * 100}ms` }} // Staggered Effect
           >
             <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">{industry.icon}</span>
             <p className="text-[12px]  mt-2 text-white text-center">
               {industry.title}
             </p>
           </div>
         ))}
       </div>
    </section>
</>
    
    
  );
}

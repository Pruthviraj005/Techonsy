"use client";

import { FaAward } from "react-icons/fa6";
import { MdSavings, MdAutoGraph  } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiGrowth } from "react-icons/gi";
import AnimatedLine from "./animatedline";

export const cards2 = [
    {
      icon: <FaAward  size={40} className="text-blue-500" />, 
      title: "Thriving in the industry since 13 years",
      description: "Javascript processes on the user's system, reducing the need for server communication, making applications more efficient.",
    },
    {
      icon: <MdSavings  size={40} className="text-blue-500" />,
      title: "Cost-efficient services",
      description: "Running Javascript without waiting for a server response ensures faster load times and improved UI responsiveness.",
    },
    {
      icon: <MdAutoGraph  size={40} className="text-blue-500" />,
      title: "Top-notch services",
      description: "Javascript is versatile, working in different environments like web pages, servers, and applications.",
    },
    {
      icon: <HiLightBulb size={40} className="text-blue-500" />,
      title: "We believe in innovation",
      description: "Companies prefer Javascript for its intuitive experiences and exceptional services to users.",
    },
    {
      icon: <GiGrowth size={40} className="text-blue-500" />,
      title: "Enhanced customer experience",
      description: "Frequent standardization updates ensure improvements, making Javascript a favorite among developers.",
    },
    {
      icon: <RiCustomerService2Fill size={40} className="text-blue-500" />,
      title: "Customer support",
      description: "Javascript enhances user interfaces with various components, making web apps more engaging and interactive.",
    },
  ];



const WhyWork=()=>{
    return (<section className="py-12 px-6 text-center max-w-[1000px] mx-auto">
        <h2 className="text-3xl font-bold text-white">Why Work with us?</h2>
        <AnimatedLine />
      
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
      </section>);
}

export default WhyWork;
"use client";
import IndustryWeServe from "@/components/IndustryWeServe";
import { FaShoppingCart, FaRegMoneyBillAlt, FaBuilding, FaUtensils, FaGraduationCap, FaHeartbeat, FaRocketchat } from "react-icons/fa";


export default function Industries()
{
    const industriesData = [
        { id: 1, name: "Retail & Ecommerce", icon: <FaShoppingCart size={40} color="#FF6347" /> },
        { id: 2, name: "Finance & Marketing", icon: <FaRegMoneyBillAlt size={40} color="#FFD700" /> },
        { id: 3, name: "Real Estate & Construction", icon: <FaBuilding size={40} color="#008080" /> },
        { id: 4, name: "Food & Hospitality", icon: <FaUtensils size={40} color="#FF4500" /> },
        { id: 5, name: "Education & Learning", icon: <FaGraduationCap size={40} color="#4B0082" /> },
        { id: 6, name: "Health & Fitness", icon: <FaHeartbeat size={40} color="#32CD32" /> },
    ];
    
    return (
      <div>
        <IndustryWeServe/>
      </div>
        // <section className="pt-16 mb-14 max-w-6xl mx-auto">
        //     <div className="container text-center max-w-full px-4 sm:px-6 lg:px-8 mx-auto">
        //         <h2 className="text-xl sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
        //            Work for Any Industry
        //           </h2>
        //         <p className="text-3xl sm:text-2xl md:text-4xl text-gray-600 mb-8 md:mb-12">
        //            Experience Across Different Industries
        //         </p>
       
        //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12">
        //             {industriesData.map((industry) => (
        //            <div 
        //            key={industry.id} 
        //            className="flex flex-col items-center justify-center p-6 rounded-lg transition-all duration-300 ease-in-out 
        //            shadow-lg bg-white dark:bg-gray-900 hover:shadow-2xl hover:shadow-blue-500/80 
        //            hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
        //          >
        //            <div className="mb-4 text-4xl">{industry.icon}</div>
        //            <h3 className="text-lg sm:text-base md:text-xl font-semibold text-gray-900 dark:text-white">
        //              {industry.name}
        //            </h3>
        //          </div>
        //            ))}
        //         </div>
        //     </div>
        // </section>
    )
}
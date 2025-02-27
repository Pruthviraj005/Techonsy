import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { 
  FaSlack, FaGoogleDrive, FaCloud, FaSalesforce, 
  FaAws, FaHubspot, FaEnvelope 
} from "react-icons/fa";
import { 
  HiOutlineChatBubbleLeftRight, HiOutlineSparkles, 
  HiOutlineWrenchScrewdriver, HiOutlineAcademicCap 
} from "react-icons/hi2";
import { LuAtom } from "react-icons/lu";
import { TbArrowBigDown, TbArrowBigUp  } from "react-icons/tb"; 

const IntegrationSection = () => {
  return (
    <section className="bg-gray-900 py-16 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        
        {/* Left Section - Integration Icons */}
        <div className="w-full md:w-1/4 flex flex-col items-center">
          <div className="grid grid-cols-3 gap-4">
            {[FaSlack, FaGoogleDrive, FaCloud, FaSalesforce, FaAws, FaHubspot, FaEnvelope].map((Icon, index) => (
              <div key={index} className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-lg p-2">
                <Icon className="text-white text-2xl" />
              </div>
            ))}
            <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-lg p-2">
              <span className="text-white text-2xl">+</span>
            </div>
          </div>
        </div>

        {/* Middle Processing Block */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
            
            {/* Mobile View - Vertical Arrows */}
            <div className="flex md:hidden flex-col items-center">
             <TbArrowBigUp className="text-blue-500 text-3xl mt-2" />
              <p className="text-gray-400 text-sm mb-2">YOUR USER DATA</p>
              <div className="bg-black p-6 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-16 h-16 border border-gray-600 rounded-lg flex items-center justify-center">
                <LuAtom className="text-3xl" />
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-2">AI APPLICATION</p>
              <TbArrowBigDown className="text-blue-500 text-3xl mt-2" />
            </div>

            {/* Desktop View - Horizontal Arrows */}
            <div className="hidden md:flex absolute left-[-220px] flex-col items-center">
              <FaArrowLeftLong className="text-lime-400 text-2xl w-36" />
              <p className="text-gray-400 text-sm mt-1">YOUR USER DATA</p>
              <FaArrowRightLong className="text-lime-400 text-2xl w-36" />
            </div>

            {/* Processing Block */}
            <div className="hidden md:flex bg-black p-6 rounded-xl items-center justify-center shadow-lg">
              <div className="w-16 h-16 border border-gray-600 rounded-lg flex items-center justify-center">
                <LuAtom className="text-3xl" />
              </div>
            </div>

            <div className="hidden md:flex absolute right-[-220px] flex-col items-center">
              <FaArrowLeftLong className="text-blue-500 text-2xl w-36" />
              <p className="text-gray-400 text-sm mt-1">AI APPLICATION</p>
              <FaArrowRightLong className="text-blue-500 text-2xl w-36" />
            </div>
          </div>
        </div>

        {/* Right Section - AI Application Categories */}
        <div className="w-full md:w-1/4 flex flex-col space-y-4">
          {[  
            { text: "Chat Apps", icon: HiOutlineChatBubbleLeftRight },  
            { text: "AI Assistants", icon: HiOutlineSparkles },  
            { text: "AI Tools", icon: HiOutlineWrenchScrewdriver },  
            { text: "Research", icon: HiOutlineAcademicCap }  
          ].map(({ text, icon: Icon }, index) => (
            <div key={index} className="w-full px-6 py-3 border border-gray-600 text-white rounded-lg flex items-center justify-between hover:bg-gray-800 transition">
              <span className="flex items-center space-x-2">
                <Icon className="text-blue-400 text-xl" />
                <span>{text}</span>
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IntegrationSection;

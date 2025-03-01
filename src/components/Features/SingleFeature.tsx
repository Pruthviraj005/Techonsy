"use client";
'';

import { useState } from "react";
import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (isExpanded) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <div className="group grow relative" onClick={handleClick}>
      <div className="wow fadeInUp flex flex-col" data-wow-delay="2s">
        {/* Main Content Row */}
        <div 
          className="flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-800 p-3 rounded-lg transition-all duration-300 cursor-pointer"
        >
          <div className="rounded-md bg-primary bg-opacity-10 text-primary p-2 transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-black dark:text-white flex-1">
            {title}
          </h3>
          <svg 
            className={`w-5 h-5 text-primary transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Expandable Content */}
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg mt-2">
            <p className="text-base font-medium leading-relaxed">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
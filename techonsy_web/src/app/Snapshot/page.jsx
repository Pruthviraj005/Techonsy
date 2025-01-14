'use client'

import React, { useState, useEffect, useRef } from 'react';

const SnapshotPage = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [retention, setRetention] = useState(0);
  const [team, setTeam] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setIsAnimated(true);

    // Start the counting animation
    intervalRef.current = setInterval(() => {
      if (years < 10) {
        setYears(prevYears => prevYears + 1);
      }
      if (projects < 250) {
        setProjects(prevProjects => prevProjects + 5);
      }
      if (retention < 97) {
        setRetention(prevRetention => prevRetention + 1);
      }
      if (team < 40) {
        setTeam(prevTeam => prevTeam + 1);
      }
    }, 50); // Adjust the interval time as needed

    // Clear the interval after the animation completes
    setTimeout(() => {
      clearInterval(intervalRef.current);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    
  
         <div className="bg-gray-900 bg-opacity-90 min-h-fit flex flex-col items-center justify-center">
         <h2 className={`text-4xl lg:text-5xl font-bold text-gray-200 mb-16 mt-10 ml-8 ${isAnimated && 'animate-fadeIn'} font-sans`}>Snapshot of Our Success</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center">
                    <span className="text-blue-600 font-bold text-4xl">{years}+</span>
                    <p className="text-gray-600 mt-2">Years in Business</p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center">
                    <span className="text-blue-600 font-bold text-4xl">{projects}+</span>
                    <p className="text-gray-600 mt-2">Projects Delivered Globally</p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center">
                    <span className="text-blue-600 font-bold text-4xl">{retention}%</span>
                    <p className="text-gray-600 mt-2">Global Client Retention Rate</p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center">
                    <span className="text-blue-600 font-bold text-4xl">{team}+</span>
                    <p className="text-gray-600 mt-2">Team Members</p>
                </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mt-10 mb-10 w-40">Learn More</button>
    </div>

   
    
  );
};

export default SnapshotPage;
import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Shield, 
  Cloud, 
  Activity, 
  ClipboardCheck, 
  Database, 
  BarChart2, 
  Settings, 
  Server, 
  HardDrive, 
  UserCheck 
} from 'lucide-react';

const servicesList = [
  { icon: <Clock size={18} />, title: "24×7 Managed Services" },
  { icon: <Shield size={18} />, title: "Flexible Support" },
  { icon: <Cloud size={18} />, title: "Cloud and On-premise Upgrades and Migrations" },
  { icon: <Activity size={18} />, title: "Health Checks" },
  { icon: <ClipboardCheck size={18} />, title: "Assessments" },
  { icon: <Database size={18} />, title: "Database Environment Refreshes" },
  { icon: <BarChart2 size={18} />, title: "Performance Tuning and Maintenance" },
  { icon: <Settings size={18} />, title: "Ops Manager" },
  { icon: <Server size={18} />, title: "Atlas" },
  { icon: <HardDrive size={18} />, title: "Backup and Disaster Recovery" },
  { icon: <UserCheck size={18} />, title: "User Support and Training" }
];

const MongoDBCompactServices = () => {
  const [animatedItems, setAnimatedItems] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    // Stagger animation for list items
    const interval = setInterval(() => {
      setAnimatedItems(prev => {
        if (prev.length >= servicesList.length) {
          clearInterval(interval);
          return prev;
        }
        return [...prev, prev.length];
      });
    }, 80);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 p-8 rounded-lg max-w-3xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
        Why Partner with <span className="text-blue-400 relative">
        Us
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"></span>
          </span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
        {servicesList.map((service, index) => (
          <div 
            key={index}
            className={`flex items-center py-2 transition-all duration-500 transform ${
              animatedItems.includes(index) ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              hoveredIndex === index ? 'bg-blue-500 text-white' : 'bg-blue-900/40 text-blue-400'
            } transition-all duration-300 mr-3`}>
              {service.icon}
            </div>
            <span className={`text-sm ${
              hoveredIndex === index ? 'text-blue-300' : 'text-gray-300'
            } transition-colors duration-300`}>
              {service.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MongoDBCompactServices;
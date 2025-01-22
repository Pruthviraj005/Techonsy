'use client';
import React, { useState } from 'react';
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-black text-white">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-12">
          {/* Company Logo/Name */}
          <div className="flex items-center space-x-2 pr-12">
            <div className="w-6 h-6 bg-orange-500 rounded-full" />
            <span className="text-lg font-bold">Techonsy</span>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center">
            {/* Expertise Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('expertise')}
                className="flex items-center space-x-1 px-4 h-12 hover:text-gray-300 transition-colors"
              >
                <span>Expertise</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${
                  openDropdown === 'expertise' ? 'rotate-180' : ''
                }`} />
              </button>
              {openDropdown === 'expertise' && (
                <div className="absolute top-full left-0 mt-0 w-48 bg-black shadow-lg py-2 z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-800">Development</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-800">Design</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-800">Consulting</a>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center space-x-1 px-4 h-12 hover:text-gray-300 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${
                  openDropdown === 'services' ? 'rotate-180' : ''
                }`} />
              </button>
              {openDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-0 w-48 bg-black shadow-lg py-2 z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-800">Web Development</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-800">Mobile Apps</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-800">Cloud Services</a>
                </div>
              )}
            </div>

            {/* About Us */}
            <a href="#" className="px-4 h-12 flex items-center hover:text-gray-300 transition-colors">
              About us
            </a>

            {/* Careers */}
            <a href="#" className="px-4 h-12 flex items-center hover:text-gray-300 transition-colors">
              Careers
            </a>

            {/* Contact */}
            <a href="#" className="px-4 h-12 flex items-center hover:text-gray-300 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
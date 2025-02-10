"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ThemeToggler from "./ThemeToggler";
import menuData from './menuData';
import { FiMenu, FiX } from 'react-icons/fi';
import { Menu } from "@/types/menu";

const Header = () => {
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmenu = (menuId: number) => {
    setOpenSubmenu(openSubmenu === menuId ? null : menuId);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setOpenSubmenu(null);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  const renderDesktopSubmenuServices = (submenu: Menu[]) => (
    <div className="grid grid-cols-3 gap-6 px-6">
      {submenu.map((category) => (
        <div key={category.id} className="space-y-3">
          <h3 className="text-white font-semibold mb-2">{category.title}</h3>
          {category.submenu && (
            <ul className="space-y-2">
              {category.submenu.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path || '#'}
                    className="block text-gray-300 hover:text-red-500 text-sm py-1"
                    target={item.newTab ? "_blank" : undefined}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );

  const renderDesktopSubmenuTechnology = (submenu: Menu[]) => (
    <div className="grid grid-cols-5 gap-6 px-6">
      {submenu.map((category) => (
        <div key={category.id} className="space-y-3">
          <h3 className="text-white font-semibold mb-2">{category.title}</h3>
          {category.submenu && (
            <ul className="space-y-2">
              {category.submenu.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path || '#'}
                    className="block text-gray-300 hover:text-red-500 text-sm py-1"
                    target={item.newTab ? "_blank" : undefined}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );

  const renderMobileSubmenu = (submenu: Menu[]) => (
    <div className="flex flex-col space-y-4 overflow-y-auto max-h-[400px]"> {/* Adjust max-h as needed */}
      {submenu.map((category) => (
        <div key={category.id} className="space-y-3">
          <h3 className="text-white font-semibold mb-2">{category.title}</h3>
          {category.submenu && (
            <ul className="space-y-2">
              {category.submenu.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path || '#'}
                    className="block text-gray-300 hover:text-red-500 text-sm py-1"
                    target={item.newTab ? "_blank" : undefined}
                    onClick={closeMobileMenu}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );

  const renderMenuItem = (item: Menu) => (
    <div key={item.id} className="relative">
      {item.submenu ? (
        <div>
          <button
            onClick={() => handleSubmenu(item.id)}
            className="flex items-center text-white hover:text-red-500 font-medium text-base py-2"
          >
            {item.title}
            <svg
              className={`ml-2 w-4 h-4 transition-transform ${openSubmenu === item.id ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openSubmenu === item.id && !isMobileMenuOpen && item.title === "Services" && (  // Desktop Submenu for Services
            <div className="lg:absolute left-0 w-[600px] bg-black shadow-lg py-4">
              <div className="container mx-auto">
                {renderDesktopSubmenuServices(item.submenu)}
              </div>
            </div>
          )}
          {openSubmenu === item.id && !isMobileMenuOpen && item.title === "Technology" && (  // Desktop Submenu for Technology
            <div className="lg:absolute left-1/2 -translate-x-1/2 w-[700px] bg-black shadow-lg py-4">
              <div className="container mx-auto">
                {renderDesktopSubmenuTechnology(item.submenu)}
              </div>
            </div>
          )}

          {isMobileMenuOpen && openSubmenu === item.id && ( // Mobile Submenu
            <div className="bg-black shadow-lg rounded-md py-2 px-4">
              {renderMobileSubmenu(item.submenu)}
            </div>
          )}
        </div>
      ) : (
        <Link
          href={item.path || '#'}
          className="text-white hover:text-red-500 font-medium text-base py-2 block"
          target={item.newTab ? "_blank" : undefined}
          onClick={closeMobileMenu}
        >
          {item.title}
        </Link>
      )}
    </div>
  );

  return (
    <header className="bg-[#0B1120] fixed w-full top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex-shrink-0">
            <img
              src="/images/logo/techonsylogo.png"
              alt="Techonsy"
              className="h-12 w-auto"
            />
          </Link>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-white text-2xl focus:outline-none">
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          <div className={`lg:flex items-center space-x-12 ${isMobileMenuOpen ? 'flex flex-col fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-[#0B1120] z-50 p-6 overflow-y-auto' : 'hidden'}`}>
            <nav className="lg:flex flex-col lg:flex-row items-center space-x-12">
              {menuData.map((item) => renderMenuItem(item))}
            </nav>
            <div className="pl-4">
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

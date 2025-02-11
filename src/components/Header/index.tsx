"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
// import ThemeToggler from "./ThemeToggler";
import menuData from './menuData';
import { FiMenu, FiX } from 'react-icons/fi';
import { Menu } from "@/types/menu";

const Header = () => {
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<'left' | 'right'>('left');
  const technologyDropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [activeHireTalentCategory, setActiveHireTalentCategory] = useState<number | null>(null);
  const hireTalentDropdownRef = useRef<HTMLDivElement>(null);
  const [hireTalentDropdownPosition, setHireTalentDropdownPosition] = useState<'left' | 'right'>('left');
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSubmenu = (menuId: number) => {
    setOpenSubmenu(openSubmenu === menuId ? null : menuId);
    if (menuId === 6) {
      setActiveHireTalentCategory(menuData.find(item => item.id === 6)?.submenu?.[0]?.id || null);
    }
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

  useEffect(() => {
    const checkDropdownPosition = () => {
      if (technologyDropdownRef.current) {
        const rect = technologyDropdownRef.current.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        if (rect.right > windowWidth) {
          setDropdownPosition('right');
        } else {
          setDropdownPosition('left');
        }
      }
    };

    checkDropdownPosition();
    window.addEventListener('resize', checkDropdownPosition);

    return () => {
      window.removeEventListener('resize', checkDropdownPosition);
    };
  }, [openSubmenu]);

  useEffect(() => {
    const checkHireTalentDropdownPosition = () => {
      if (hireTalentDropdownRef.current) {
        const rect = hireTalentDropdownRef.current.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        if (rect.right > windowWidth) {
          setHireTalentDropdownPosition('right');
        } else {
          setHireTalentDropdownPosition('left');
        }
      }
    };

    checkHireTalentDropdownPosition();
    window.addEventListener('resize', checkHireTalentDropdownPosition);

    return () => {
      window.removeEventListener('resize', checkHireTalentDropdownPosition);
    };
  }, [openSubmenu]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMobileMenuOpen && openSubmenu !== null && technologyDropdownRef.current && !technologyDropdownRef.current.contains(event.target as Node)) {
        setOpenSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [technologyDropdownRef, openSubmenu, isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMobileMenuOpen && openSubmenu !== null && servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setOpenSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesDropdownRef, openSubmenu, isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMobileMenuOpen && openSubmenu !== null && hireTalentDropdownRef.current && !hireTalentDropdownRef.current.contains(event.target as Node)) {
        setOpenSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hireTalentDropdownRef, openSubmenu, isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutsideMobile = (event: MouseEvent) => {
      if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutsideMobile);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMobile);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
                    className="block text-gray-300 hover:text-sky-500 text-sm py-1"
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
    <div className="grid grid-cols-5 gap-4 px-4">
      {submenu.map((category) => (
        <div key={category.id} className="space-y-2">
          <h3 className="text-white font-semibold mb-1 text-sm">{category.title}</h3>
          {category.submenu && (
            <ul className="space-y-1">
              {category.submenu.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path || '#'}
                    className="block text-gray-300 hover:text-sky-500 text-xs py-0.5"
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

  const renderDesktopSubmenuHireTalent = (submenu: Menu[]) => {
    if (!submenu) return null;

    const activeCategory = submenu.find(cat => cat.id === activeHireTalentCategory);

    return (
      <div className="flex">
        <div className="w-1/4 bg-gray-800 p-4">
          <ul>
            {submenu.map((category) => (
              <li
                key={category.id}
                className={`text-white hover:text-sky-500 py-2 cursor-pointer ${activeHireTalentCategory === category.id ? 'text-sky-500' : ''}`}
                onClick={() => setActiveHireTalentCategory(category.id)}
              >
                {category.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 bg-gray-900 p-6 text-white">
          {activeCategory && (
            <>
              <h3 className="text-2xl font-semibold mb-4">{activeCategory.content}</h3>
              <p className="mb-4">Experience smooth navigation and user-friendly designs with our front-end expertise.</p>
              <Link href={activeCategory.buttonLink || "#"} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-block">
                {activeCategory.buttonText}
              </Link>
              {activeCategory.submenu && (
                <ul className="mt-4">
                  {activeCategory.submenu.map((item) => (
                    <li key={item.id} className="py-1">
                      <Link
                        href={item.path || "#"}
                        className="text-gray-300 hover:text-sky-500 block"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    );
  };

  const renderMobileSubmenu = (submenu: Menu[]) => (
    <div className="flex flex-col space-y-4 overflow-y-auto max-h-[400px]">
      {submenu.map((category) => (
        <div key={category.id} className="space-y-3">
          <h3
            className="text-white font-semibold mb-2 cursor-pointer"
            onClick={() =>
              setActiveMobileSubmenu(activeMobileSubmenu === category.id ? null : category.id)
            }
          >
            {category.title}
          </h3>
          {category.submenu && (
            <ul className={`${activeMobileSubmenu === category.id ? 'block' : 'hidden'} space-y-2`}>
              {category.submenu.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path || '#'}
                    className="block text-gray-300 hover:text-sky-500 text-sm py-1"
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
      <li className="mr-4">
        {item.submenu ? (
          <div>
            <button
              onClick={() => handleSubmenu(item.id)}
              className="flex items-center text-white font-medium text-base py-2 hover:text-sky-500"
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
            {openSubmenu === item.id && !isMobileMenuOpen && item.title === "Services" && (
              <div className="lg:absolute left-0 w-[600px] bg-black shadow-lg py-4" ref={servicesDropdownRef}>
                <div className="container mx-auto">
                  {renderDesktopSubmenuServices(item.submenu)}
                </div>
              </div>
            )}
            {openSubmenu === item.id && !isMobileMenuOpen && item.title === "Technology" && (
              <div
                className={`lg:absolute bg-black shadow-lg py-4`}
                style={{
                  left: dropdownPosition === 'left' ? '50%' : 'auto',
                  right: dropdownPosition === 'right' ? '0' : 'auto',
                  transform: dropdownPosition === 'left' ? 'translateX(-50%)' : 'none',
                  width: '700px',
                }}
                ref={technologyDropdownRef}
              >
                <div className="container mx-auto">
                  {renderDesktopSubmenuTechnology(item.submenu)}
                </div>
              </div>
            )}
            {openSubmenu === item.id && !isMobileMenuOpen && item.title === "Hire Talent" && (
              <div
                className={`lg:absolute bg-black shadow-lg py-4`}
                style={{
                  left: hireTalentDropdownPosition === 'left' ? '50%' : 'auto',
                  right: hireTalentDropdownPosition === 'right' ? '0' : 'auto',
                  transform: hireTalentDropdownPosition === 'left' ? 'translateX(-50%)' : 'none',
                  width: '800px',
                }}
                ref={hireTalentDropdownRef}
              >
                <div className="container mx-auto">
                  {renderDesktopSubmenuHireTalent(item.submenu)}
                </div>
              </div>
            )}

            {isMobileMenuOpen && openSubmenu === item.id && (
              <div className="bg-black shadow-lg rounded-md py-2 px-4">
                {renderMobileSubmenu(item.submenu)}
              </div>
            )}
          </div>
        ) : (
          <Link
            href={item.path || '#'}
            className="text-white font-medium text-base py-2 block hover:text-sky-500"
            target={item.newTab ? "_blank" : undefined}
            onClick={closeMobileMenu}
          >
            {item.title}
          </Link>
        )}
      </li>
    </div>
  );

  return (
    <>
      <header className={`bg-[#0B1120] fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'centered-header' : ''}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-[72px]">
            <Link href="/" className="flex-shrink-0">
              <img
                src="/images/logo/techonsylogo.png"
                alt="Techonsy"
                className="h-12 w-auto"
              />
            </Link>

            <div className="lg:hidden">
              <button onClick={toggleMobileMenu} className="text-white text-2xl focus:outline-none">
                {isMobileMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>

            <div
              className={`lg:flex items-center justify-between ${isMobileMenuOpen ? 'flex flex-col fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-[#0B1120] z-50 p-6 overflow-y-auto' : 'hidden'}`}
              ref={mobileMenuRef}
            >
              <nav className="lg:flex flex-row items-center  flex-grow">
                <ul className="lg:flex flex-row items-center space-x-6">
                  {menuData.map((item) => renderMenuItem(item))}
                </ul>
              </nav>
              <div className="flex items-center  space-x-8">
                <Link
                  href="/contact"
                  className="bg-[#1DA1F2] hover:bg-[#55ACEE] text-white font-bold py-2 px-4 rounded"
                >
                  Contact Us
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      </header>
      <style jsx>{`
        .centered-header {
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%; /* Adjusted width */
          max-width: 1200px;
          border-radius: 5px; /* Adjusted border-radius */
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adjusted box-shadow */
          background-color: rgba(11, 17, 32, 0.95); /* Adjusted background color */
          padding: 5px 10px; /* Adjusted padding */
        }
      `}</style>
    </>
  );
};

export default Header;

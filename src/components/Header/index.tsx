"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import menuData from './menuData';
import { FiMenu, FiX } from 'react-icons/fi';
import { Menu } from "@/types/menu";
import { motion, useScroll, useTransform } from 'framer-motion';

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
  const [activeLink, setActiveLink] = useState(null);
  const [activeService,setActiveService] = useState(null);
  const [menuDataLink,setMenuDataLink] = useState(null)

  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(11, 17, 32, 1)", "rgba(11, 17, 32, 0.98)"]
  );
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerBorderRadius = useTransform(scrollY, [0, 100], [0, 50]);
  const headerWidth = useTransform(scrollY, [0, 100], ["100%", "90%"]);
  const headerTranslateY = useTransform(scrollY, [0, 100], [0, 10]);

  const handleSubmenu = (menuId: number) => {
    setOpenSubmenu(openSubmenu === menuId ? null : menuId);
    if (menuId === 6) {
      setActiveHireTalentCategory(menuData.find(item => item.id === 6)?.submenu?.[0]?.id || null);
    }
  };

  const closeAllMenus = () => {
    setOpenSubmenu(null);
    setIsMobileMenuOpen(false);
    setActiveMobileSubmenu(null);
   
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
      if (window.scrollY > 0) {
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

  // Updated Services submenu rendering for desktop
  const renderDesktopSubmenuServices = (submenu: Menu[]) => (
    <div className="grid grid-cols-3 gap-6 p-6">
      {submenu.map((item) => (
        <div key={item.id}>
          <Link
            href={item.path || '#'}
            className={`block text-gray-300 hover:text-sky-500 text-sm py-1 ${
              activeLink === item.id
                ? "text-sky-500"
                : "text-gray-300 hover:text-sky-500"
            }`}
            target={item.newTab ? "_blank" : undefined}
            onClick={() => {
              setActiveLink(item.id);
              closeAllMenus();
            }}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );

  const renderDesktopSubmenuTechnology = (submenu: Menu[]) => {
    const rows = [];
    for (let i = 0; i < submenu.length; i += 4) {
      rows.push(submenu.slice(i, i + 4));
    }

    return (
      <div className="px-4">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-4 gap-4 mb-6">
          {row.map((category) => (
            <div key={category.id} className="space-y-2" >
              <h3 className="text-white font-semibold mb-1 text-sm">
                {category.title}
              </h3>
              {category.submenu && (
                <ul className="space-y-1">
                  {category.submenu.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.path || "#"}
                        className={`block text-xs py-0.5 ${
                          activeLink === item.id
                            ? "text-sky-500"
                            : "text-gray-300 hover:text-sky-500"
                        }`}
                        style={{ fontSize: "0.95rem" }}
                        target={item.newTab ? "_blank" : undefined}
                        onClick={() => {
                          setActiveLink(item.id);
                          closeAllMenus();
                        }}
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
      ))}
    </div>
    );
  };

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
              <Link 
                href={activeCategory.buttonLink || "#"} 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-block"
                onClick={closeAllMenus}
              >
                {activeCategory.buttonText}
              </Link>
              {activeCategory.submenu && (
                <ul className="mt-4">
                  {activeCategory.submenu.map((item) => (
                    <li key={item.id} className="py-1">
                      <Link
                        href={item.path || "#"}
                        className="text-gray-300 hover:text-sky-500 block"
                        onClick={closeAllMenus}
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

  // Updated to handle Services menu specially
  const renderMobileSubmenu = (submenu: Menu[], menuId: number) => {
    // Special handling for Services menu (id: 4)
    if (menuId === 4) {
      return (
        <div className="flex flex-col space-y-2 overflow-y-auto max-h-[400px] px-1">
          {submenu.map((item) => (
            <div key={item.id}>
              <Link
                href={item.path || '#'}
                className="block text-gray-300 hover:text-sky-500 text-sm py-1"
                target={item.newTab ? "_blank" : undefined}
                onClick={closeAllMenus}
                
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      );
    }
    
    // Original logic for other menu items
    return (
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
                      onClick={closeAllMenus}
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
  };

  const renderMenuItem = (item: Menu) => (
    <div key={item.id} className="relative">
      <li className="mr-4">
        {item.submenu ? (
          <div>
            <button
              onClick={() => {handleSubmenu(item.id)
                setMenuDataLink(item.id)
                }}
              // className="flex items-center text-white font-medium text-base py-2 hover:text-sky-500  "
              className={`flex items-center  font-medium text-base py-2 hover:text-sky-500 ${
                menuDataLink === item.id
                  ? "text-sky-500"
                  : "text-gray-300 hover:text-sky-500"
              }`}
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
                  width: '950px',
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
                {renderMobileSubmenu(item.submenu, item.id)}
              </div>
            )}
          </div>
        ) : (
          <Link
            href={item.path || '#'}
            className="text-white font-medium text-base py-2 block hover:text-sky-500"
            target={item.newTab ? "_blank" : undefined}
            onClick={closeAllMenus}
          >
            {item.title}
          </Link>
        )}
      </li>
    </div>
  );

  return (
    <>
      <motion.header
      style={{
        position: 'fixed',
        width: headerWidth,
        backgroundColor: headerBackground,
        borderRadius: headerBorderRadius,
        scale: headerScale,
        y: headerTranslateY,
        left: '50%',
        x: '-50%',
        zIndex: 50,
        willChange: 'transform, opacity', // Optimized for performance
        }}
        initial={{ y: -120, opacity: 0, scale: 0.85 }} 
        animate={{ y: 0, opacity: 1, scale: 1 }} 
        transition={{
          type: "spring",
          stiffness: 160,  // Increased stiffness for a snappier feel
          damping: 20,     // Balanced damping for smooth deceleration
          mass: 0.6,       // Reduced mass for quicker response
          velocity: 2,     // Higher initial velocity for a more dynamic entry
        }}
        >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-[72px]">
            <Link href="/" className="flex-shrink-0" onClick={() => {
               setActiveLink(null);
               setMenuDataLink(null);
            }}>
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
              <nav className="lg:flex flex-row items-center flex-grow">
                <ul className="lg:flex flex-row items-center space-x-6">
                  {menuData.map((item) => renderMenuItem(item))}
                </ul>
              </nav>
              <div className="flex items-center space-x-8">
                <Link
                  href="/contact"
                  className="bg-[#1DA1F2] hover:bg-[#55ACEE] text-white font-bold py-2 px-4 rounded"
                  onClick={closeAllMenus}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <style jsx>{`
        @media (max-width: 1024px) {
          header {
            width: 100% !important;
            border-radius: 0 !important;
            transform: none !important;
            left: 0 !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
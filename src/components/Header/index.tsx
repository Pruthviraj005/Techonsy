"use client";

import React from 'react';
import Link from 'next/link';
import ThemeToggler from "./ThemeToggler";
import menuData from './menuData';
import { Menu } from '@/types/menu';

const Header = () => {
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);

  const handleSubmenu = (menuTitle: string) => {
    setOpenSubmenu(openSubmenu === menuTitle ? null : menuTitle);
  };

  const renderServicesSubmenu = (submenu: Menu[]) => (
    <div className="absolute right-0 top-full bg-black shadow-lg rounded-md py-4 w-[800px] grid grid-cols-3 gap-4">
      {submenu.map((category) => (
        <div key={category.id} className="px-4">
          <h3 className="text-white font-semibold mb-2">{category.title}</h3>
          {category.submenu && (
            <ul className="space-y-2">
              {category.submenu.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path || '#'}
                    className="block text-gray-300 hover:text-red-500 text-sm py-1"
                    target="_blank"
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

  const renderTechnologySubmenu = (submenu: Menu[]) => (
    <div className="absolute left-0 w-screen bg-black shadow-lg py-4">
      <div className="container mx-auto">
        <div className="flex justify-between px-6">
          {submenu.map((category) => (
            <div key={category.id} className="px-4">
              <h3 className="text-white font-semibold mb-2">{category.title}</h3>
              {category.submenu && (
                <ul className="space-y-2">
                  {category.submenu.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.path || '#'}
                        className="block text-gray-300 hover:text-red-500 text-sm py-1"
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
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
      </div>
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

          <div className="flex items-center space-x-12">
            <nav className="flex items-center space-x-12">
              {menuData.map((item) => (
                <div key={item.id} className="relative">
                  {item.submenu ? (
                    <div className="relative">
                      <button
                        onClick={() => handleSubmenu(item.title)}
                        className="flex items-center text-white hover:text-red-500 font-medium text-base py-2"
                      >
                        {item.title}
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openSubmenu === item.title && (
                        <div className="fixed inset-0 top-[72px] bg-black bg-opacity-50 z-40"
                          onClick={() => setOpenSubmenu(null)}>
                          <div className="relative" onClick={e => e.stopPropagation()}>
                            {item.title === "Services"
                              ? renderServicesSubmenu(item.submenu)
                              : renderTechnologySubmenu(item.submenu)}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.path || '#'}
                      className="text-white hover:text-red-500 font-medium text-base py-2"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
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

"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const usePathName = usePathname();

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  return (
    <header
      className={`header left-0 top-0 z-40 w-full ${
        sticky
          ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={sticky ? "py-5 lg:py-2" : "py-8"}
            >
              <Image
                src="/images/logo/techonsylogo.png"
                alt="techonsy pvt. ltd."
                width={140}
                height={30}
                className="w-auto dark:hidden"
              />
              <Image
                src="/images/logo/techonsylogo.png"
                alt="Techonsy pvt. ltd"
                width={140}
                height={30}
                className="hidden w-auto dark:block"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={navbarToggleHandler}
            className="lg:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Toggle Menu"
          >
            <span
              className={`block h-0.5 w-6 bg-black dark:bg-white transition-all duration-300 ${
                navbarOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black dark:bg-white mt-1.5 transition-all duration-300 ${
                navbarOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black dark:bg-white mt-1.5 transition-all duration-300 ${
                navbarOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>

          {/* Navigation and Theme Toggler */}
          <div
            className={`lg:flex items-center justify-end flex-1 ${
              navbarOpen ? "block absolute top-full left-0 right-0 bg-white dark:bg-dark" : "hidden"
            } lg:relative lg:bg-transparent`}
          >
            <nav className="lg:flex lg:items-center">
              <ul className="lg:flex lg:space-x-8">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative px-4 lg:px-0">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={`block py-2 text-base ${
                          usePathName === menuItem.path
                            ? "text-primary dark:text-white"
                            : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => handleSubmenu(index)}
                          className="flex items-center w-full py-2 text-base text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        >
                          {menuItem.title}
                          <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                        <div
                          className={`lg:absolute lg:left-0 lg:top-full lg:w-48 lg:shadow-lg lg:rounded-lg lg:bg-white lg:dark:bg-dark ${
                            openIndex === index ? "block" : "hidden"
                          } lg:group-hover:block`}
                        >
                          {menuItem.submenu.map((submenuItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={submenuItem.path}
                              className="block px-4 py-2 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              {submenuItem.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="px-4 py-2 lg:py-0 lg:pl-8">
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react'
import Link from "next/link";

function Navbar() {
    return (
        <>
          <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white sticky top-0 z-50 place-items-center">
          <div className="text-xl font-bold flex items-center space-x-2 group transition duration-300 p-2 rounded-md">
              {/* Logo */}
              <img
                className="w-16 h-auto animate-logo-fade-in transition-transform duration-300 group-hover:scale-90"
                src="/techonsy_logo.jpg"
                alt="Techonsy Logo"
              />
              <Link
                href="/"
                className="hover:text-blue-500 text-xl hidden md:block transition-all duration-300 group-hover:text-blue-600"
              >
                Techonsy
              </Link>
            </div>

    
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-blue-500">Home</Link>
              <Link href="/about" className="hover:text-blue-500">About</Link>
              <Link href='/Services' className="hover:text-blue-500" >Services</Link>
              <Link href="/Careers" className="hover:text-blue-500">Careers</Link>
              <Link href="/Contact" className="hover:text-blue-500">Contact</Link>
            </div>
    
    
            <div className="flex items-center space-x-4">
    
              <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.95-7.05l-1.41 1.41m-11.31 0l-1.41-1.41m14.14 14.14l-1.41-1.41m-11.31 0l-1.41 1.41" />
                </svg>
              </button>
    
    
              <a href="#quote" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                FAQ's
              </a>
            </div>
    
    
            <div className="md:hidden">
              <button className="text-white hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </>
      )
}

export default Navbar


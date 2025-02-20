// technology/databases/PostgreSQL/components/Hero.tsx
'use client';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-32 flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/images/postgresql/postgresqll.jpg')] bg-cover bg-center opacity-40" // Increased opacity to 40%
        style={{ opacity: 0.4 }} // Adjusted here as well
      ></div>

      {/* Content Container */}
      <div className="container mx-auto text-left relative z-10 w-3/4 md:w-2/3">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Maximize Performance with PostgreSQL Expertise

        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Access precise database implementations, optimization, and tuning with PostgreSQL.
        </p>
        <p className="text-lg md:text-xl text-gray-200">
        Ensure optimal performance and reliability with expert PostgreSQL DBAs, delivering seamless operations without compromising security.

        </p>
      </div>
    </div>
  );
};

export default Hero;

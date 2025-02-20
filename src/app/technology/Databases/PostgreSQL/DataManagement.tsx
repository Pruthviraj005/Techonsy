// technology/databases/PostgreSQL/components/DataManagement.tsx
'use client';
import React from 'react';

const DataManagement = () => {
  return (
    <section className="bg-gradient-to-b bg-gray-900 to-purple-500 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Unleash the Power of PostgreSQL for Seamless Data Management
          </h2>
          <p className="mb-4 text-gray-200">
            Leverage the power of PostgreSQL, one of the most robust open-source relational
            databases, for unmatched data integrity, security, and reliability.
          </p>
          <p className="mb-4 text-gray-200">
            Rely on PostgreSQL to manage transactional data, drive application performance,
            and support critical decision-making. Maximize PostgreSQL's advanced features
            for rapid, powerful data management and integrate managed data services into
            your application for seamless operation.
          </p>
          <p className="text-gray-200">
            Focus on your business while we handle time-consuming tasks like setup and
            maintenance with expert PostgreSQL database management services.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src="/images/postgresql/Postgresql2.png"
            alt="PostgreSQL Servers"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default DataManagement;

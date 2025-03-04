"use client";
'';
import React from 'react';
import { Database, Code, Users, Search, GitBranch, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Enterprise Features',
    description: 'Unlock flexible, high-performance DBMS capabilities.',
    Icon: Database,
  },
  {
    title: 'Advanced Functions',
    description: 'Utilize stored procedures and efficient SQL processes.',
    Icon: Code,
  },
  {
    title: 'Collaborative Community',
    description: 'Benefit from shared knowledge across a global network.',
    Icon: Users,
  },
  {
    title: 'Efficient Indexing',
    description: 'Speed up queries with advanced indexing techniques.',
    Icon: GitBranch,
  },
  {
    title: 'ACID Compliance',
    description: 'Support multi-transaction processes with full reliability.',
    Icon: ShieldCheck,
  },
  {
    title: 'Advanced Search',
    description: 'Perform full-text and vector-based searches effortlessly.',
    Icon: Search,
  },
];

const Development = () => {
  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">
            Why Choose PostgreSQL Development
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Some of the best features and benefits of PostgreSQL development services are discussed below.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 
                         transform transition-all duration-300 
                         hover:bg-gray-700 hover:scale-105
                         hover:shadow-lg shadow-md"
              >
                <div className="flex justify-center mb-4">
                  <feature.Icon 
                    className="h-12 w-12 text-blue-500" 
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
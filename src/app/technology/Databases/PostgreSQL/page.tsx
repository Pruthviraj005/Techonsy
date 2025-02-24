'use client';

import React from 'react';
import Hero from './Hero';
import DataManagement from './DataManagement';
import Development from './Development';
import WhyChooseUs from './WhyChooseUS';
import IndustriesFlowingWave from './industry';


export default function PostgreSQL() {
    return (
    <>
      <Hero />
      <DataManagement/>
      <Development/>
      <WhyChooseUs/>
      <IndustriesFlowingWave/>
      
    </>
  );
};


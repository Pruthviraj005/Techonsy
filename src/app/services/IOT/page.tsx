'use client'
import React from 'react'
import IotBanner from './IotBanner'
import IotDevelopment from './IotDevelopment'
import IotServices from './IotServices'
import IotModels from './IotModels'
import TechnologyExpertise from './TechnologyExpertise'
import IotIndustry from './IotIndustry'
import IotProcess from './IotProcess'

function page() {
  return (
    <>
      <IotBanner />
      <IotServices />
      <IotDevelopment />
      <IotModels />
      <TechnologyExpertise />
      <IotIndustry />
      <IotProcess />
    </>
  )
}

export default page

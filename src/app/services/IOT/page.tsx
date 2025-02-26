'use client'
import React from 'react'
import IotBanner from './IotBanner'
import IotDevelopment from './IotDevelopment'
import IotServices from './IotServices'
import TechnologyExpertise from './TechnologyExpertise'
import IotIndustry from './IotIndustry'
import IotProcess from './IotProcess'
import IotSection from './IotSection'
import WhyChooseUs from './WhyChooseUs'
import IotIndustrySection from './IotIndustrySection'
import RelatedBlogs from './RelatedBlogs'

function page() {
  return (
    <>
      <IotBanner />
      <IotSection />
      <IotServices />
      <IotDevelopment />
      <WhyChooseUs />
      <IotIndustrySection />
      <RelatedBlogs />
      {/* <TechnologyExpertise />
      <IotIndustry />
      <IotProcess /> */}
    </>
  )
}

export default page

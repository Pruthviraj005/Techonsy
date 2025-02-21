import React from 'react'
import IosBanner from './IosBanner'
import IosApplications from './IosApplications'
import IosProcess from './IosProcess'
import IosFeatures from './IosFeatures'
import IosExpertise from './IosExpertise'
import IndustriesWeServe from './IndustriesWeServe'
import RelatedBlogs from './RelatedBlogs'

function page() {
  return (
    <>
      <IosBanner />
      <IosApplications />
      <IosProcess />
      <IosFeatures />
      <IosExpertise />
      <IndustriesWeServe />
      <RelatedBlogs />
    </>
  )
}

export default page

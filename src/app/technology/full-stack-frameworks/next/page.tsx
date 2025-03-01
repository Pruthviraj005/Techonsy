"use client";

import ExpertiseSection from './ExpertiseSection'
import Hero from './Hero'
import Industries from './industries'
import InfoSection from './InfoSection'
import TechStackSection from './TechStackSection'
import WorkWithUs from './WorkWithUs'

export default function Next()
{
    return (
        <div>
            <Hero/>
            <InfoSection/>
            <ExpertiseSection/>
            <TechStackSection/>
            <WorkWithUs/>
            <Industries/>
        </div>
    )
}
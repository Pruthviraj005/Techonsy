
'use client'

import dynamic from "next/dynamic";

const IndustryWeServe = dynamic(() => import("@/components/IndustryWeServe"));
const DevelopmentExperties = dynamic(() => import("./DevelopmentExperties"));
const Hero = dynamic(() => import("./Hero"));
const InfoSection = dynamic(() => import("./InfoSection"));
const TestingApproach = dynamic(() => import("./TestingApproach"));
const TestingPhase = dynamic(() => import("./TestingPhase"));
const WorkWithUs = dynamic(() => import("./Workwithus"));

export default function QualityAssurance()
{
    return (
        <div>
            <Hero/>
            <InfoSection/>
            <DevelopmentExperties/>
            <TestingPhase/>
            <TestingApproach/>
            <WorkWithUs/>
            <IndustryWeServe/>
        </div>
    )
}
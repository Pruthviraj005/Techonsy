import IndustryWeServe from "@/components/IndustryWeServe";
import DevelopmentExperties from "./DevelopmentExperties";
import Hero from "./Hero";
import InfoSection from "./InfoSection";
import TestingApproach from "./TestingApproach";
import TestingPhase from "./TestingPhase";
import WorkWithUs from "./Workwithus";

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
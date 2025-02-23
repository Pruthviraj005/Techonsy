'use client'
import AWSBenefitsSection from "./awsBenefits";
import AWSCloudSection from "./AWSCloudSection";
import ExperienceAcross from "./Experience";
import Hero from "./Hero";
import WhyChooseUsSection from "./whychooseus";
export default function aws(){
    return(
        <>
            <Hero/>
            <AWSCloudSection/>
            <AWSBenefitsSection/>
            <WhyChooseUsSection/>
            <ExperienceAcross/>
        </>
    );
}
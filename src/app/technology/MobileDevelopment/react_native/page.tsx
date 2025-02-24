import Hero from "./Hero"
import ReactNativeDevelopment from "./ReactNativeDevelopment"
import ExpertiseSection from "./Expertise"
import BusinessGrowthSection from "./BusinessGrowth"
import TechToolsSection from "./TechTools"
import TechnologyStack from "./TechnologyStack"
import WorkWithUs from "./Workwithus"
import Industries from "./Industries"
import ReactNativeServices from "./services"

export default function ReactNative()
{
    return (
        <div className="overflow-x-hidden w-full">
            <Hero/>
            <ReactNativeDevelopment/>
            <ExpertiseSection/>
            <BusinessGrowthSection/>
            <TechToolsSection/>
            <TechnologyStack/>
            <ReactNativeServices/>
            <WorkWithUs/>
            <Industries/>
        </div>
    )
}
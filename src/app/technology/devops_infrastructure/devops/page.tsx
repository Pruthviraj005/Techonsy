import DevOpsServices from "./DevOpsServices"
import HeroSection from "./Hero"
import InfoSection from "./SecondSection"
import TechExpertise from "./TechExpertise"

export default function Devops()
{
    return (
        <div>
            <HeroSection/>
            <InfoSection/>
            <DevOpsServices/>
            <TechExpertise/>
        </div>
    )
}
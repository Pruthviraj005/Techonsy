import Benefits from "./Benefits";
import ChallengesSection from "./ChallengesSection";
import DevelopmentProcess from "./DevelopmentProcess";
import IndustryExpertise from "./IndustryExpertise";
import MobileAppBanner from "./MobileAppBanner";
import MobileAppHero from "./MobileApphero";
import MobileTechnologies from "./MobileTechnologies";

export default function MobileApp() {
  return (
    <>
          {/* <MobileAppHero/> */}
          <MobileAppBanner />
          <ChallengesSection />
          <MobileTechnologies/>
          <IndustryExpertise/>
          <DevelopmentProcess/>
          <Benefits/>
    </>
  );
}

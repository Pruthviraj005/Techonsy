import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionFour from "@/components/About/AboutSectionFour";
import AboutSectionFive from "@/components/About/AboutSectionFive";
import AboutSectionSix from "@/components/About/AboutSectionSix";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Techonsy Software | Your Trusted Technology Partner",
  description: "Learn about Techonsy Software, a leading software development company specializing in cutting-edge web and mobile solutions. Discover our commitment to innovation and excellence.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Learn about Techonsy Software, a leading software development company specializing in cutting-edge web and mobile solutions. Discover our commitment to innovation and excellence."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <AboutSectionFour />
      <AboutSectionFive />
      <AboutSectionSix />
    </>
  );
};

export default AboutPage;

'use client';
import HeroSection from "./hero";
import Development from "./development";
import Process from "./process"
import Benefits from "./benifits";
import Partner from "./partner";
import ExperienceAcross from './experience'

export default function Nest(){
    return(<>
      <HeroSection/>
      <Development/>
      <Process/>
      <Benefits/>
      <Partner/>
      <ExperienceAcross/>
    </>);
}
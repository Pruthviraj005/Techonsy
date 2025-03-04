"use client";
'';
import HeroSection from "./hero"
import GoogleAppEngineSection from "./exp";
import Experiance from "./experience";
import GoogleCloudTools from "./tools";
import CloudCapabilities from "./capabilities"; 
import WhyChoose from "./whychoose";

export default function Googlecloud(){
    return(
        <>
         <HeroSection/>
         <Experiance/>
         <GoogleAppEngineSection/>
         <GoogleCloudTools/>
         <CloudCapabilities/>
         <WhyChoose/>
         
        </>
    );
}
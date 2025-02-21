'use client';
import DevelopmentProcess from "./DevelopmentProcess";
import Hero from "./Hero";
import ReactFeatures from "./reactFeatures";
import ReactServices from "./reactServices";
import Services from "./Services";
export default function reactjs(){
    return(
       <>
            <Hero/> 
            <ReactServices/>
            <Services/>
            <ReactFeatures/>
            <DevelopmentProcess/>
       </> 
    );
}

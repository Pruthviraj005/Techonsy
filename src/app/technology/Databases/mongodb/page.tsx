"use client";
'';


import Hero from "./Hero";
import IndustriesWeServe from "./industry";
import MongoBenefits from "./mongoBnefits";
import MongoService from "./mongoService";
import MongoSolution from "./MongoSolution";
export default function MongoDB(){
    return(
       <>
            <Hero/>
            <MongoSolution/>
            <MongoBenefits/>
            <MongoService/>
            <IndustriesWeServe/>
       </> 
    );
}

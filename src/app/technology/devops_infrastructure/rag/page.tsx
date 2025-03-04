"use client";
import Hero from "./Hero";
// import Integration from "./Integration"
import Introduction from "./Introduction";
import Benefits from "./Benifits";
import Process from "./Process"
import IndustryWeServe from "@/components/IndustryWeServe";
export default function Rag(){
    return (<>
     <Hero/>
     <Introduction/>
     {/* <Integration/> */}
     <Benefits/>
     <Process/>
     <IndustryWeServe/>
    </>)
}
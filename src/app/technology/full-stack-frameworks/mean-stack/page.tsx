"use client";
import MeanCompetencies from "./CoreComponent";
import Hero from "./Hero";
import Industries from "./Industries";
import InfoSection from "./InfoSections";
import MeanStackProcess from "./MeanStackProcess";
import WorkWithUs from "./WorkWithUs";

export default function Node()
{
    return (
        <div>
            <Hero/>
            <InfoSection/>
            <MeanCompetencies/>
            <MeanStackProcess/>
            <WorkWithUs/>
            <Industries/>
        </div>
    )
}
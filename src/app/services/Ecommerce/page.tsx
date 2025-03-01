'use client'

import dynamic from 'next/dynamic'

const Hero = dynamic(() => import("./Hero"));
const Service = dynamic(() => import("./Service"));
const Benefits = dynamic(() => import("./Benifits"));
const Solutions = dynamic(() => import("./Solutions"));
const IndustryWeServe = dynamic(() => import("@/components/IndustryWeServe"));
const Whyus = dynamic(() => import("./Whyus"));

export default function Ecommerce(){
    return(<>
    <Hero/>
    <Service/>
    <Benefits/>
    <Solutions/>
    <IndustryWeServe />
    <Whyus/>
    </>)
}
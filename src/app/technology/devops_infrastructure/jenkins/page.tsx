import Hero from './Hero'
import PlugIn from './PlugIn'
import Services from './Services'
import Features from './Features'
import Choose from './Choose'
import IndustryWeServe from "@/components/IndustryWeServe";

export default function Jenkins(){
    return (<>
     <Hero/>
     <PlugIn/>
     <Services/>
     <Features/>
     <IndustryWeServe />
     <Choose/>
    </>)
}
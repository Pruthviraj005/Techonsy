
import Services from './service';
import Expertise from './expertise';
import Solution from './Solution';
import Performance from './performance';
import List from './list';
import ExperienceAcross from './ExperienceAcross'
import Partner from './Partner';
import Hero from './hero';
export default function Node(){
    return(<>
    <Hero/>
    <Services/>
    <Solution/>
    <Expertise/>
    <Performance/>
    <List/>
    <Partner/>
    <ExperienceAcross/>
    
      
    </>);
}
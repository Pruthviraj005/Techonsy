"use client";
import Hero from './hero'
import Services from './service';
import Expertise from './expertise';
import Solution from './solutions';
import Performance from './performance';
import List from './list';
import ExpertiseAcross from './experianceacross'
import Partner from './Partner';
export default function Node(){
    return(<>
    <Hero/>
    <Services/>
    <Solution/>
    <Expertise/>
    <Performance/>
    <List/>
    <Partner/>
    <ExpertiseAcross/>
    
      
    </>);
}
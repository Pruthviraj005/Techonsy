import Hero from './hero'
import ManagedMySql from './ManagedMySql'
import MySqlServerDevelopment from './mysqlserverdevelopment'
import WhyMySql from './whychoose'
import WhyWork from './whywork'
import ExperienceAcross from './experianceacross'
export default function MySql(){
    return(<>
     <Hero/>
     <ManagedMySql/>
     <MySqlServerDevelopment/>
     <WhyMySql/>
     <WhyWork/>
     <ExperienceAcross/>
    </>)
}
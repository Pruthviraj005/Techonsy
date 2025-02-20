import FeaturesGrid from "./FeaturesGrid";
import FirebaseDevelopment from "./FirebaseDevelopment";
import FirebaseServices from "./FirebaseServices";
import FirebaseTechnologies from "./FirebaseTechnologies";
import Hero from "./Hero";

export default function Firebase()
{
    return (
        <div>
            <Hero/>
            <FirebaseDevelopment/>
            <FirebaseServices/>
            <FeaturesGrid/>
            <FirebaseTechnologies/>
        </div>
    )
}
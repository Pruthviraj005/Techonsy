import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto">
          <SectionTitle
            title="Services"
            paragraph="Discover our cutting-edge solutions designed to empower your business. Explore the key features tailored to meet your needs."
            center
          />
          <div className="flex gap-[10px] flex-col">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

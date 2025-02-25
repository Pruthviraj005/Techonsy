import StickyScrollContainer from "./StickyScrollContainer";

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-950 text-white py-16 px-8">
      <div className="max-w-5xl mx-auto text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Why Partner with Us for Blockchain Development?
        </h1>
      </div>
      <StickyScrollContainer />
    </section>
  );
}
import StickyScrollContainer from "./StickyScrollContainer";

export default function BlockchainSecurity() {
  return (
    <section className="bg-gray-950 text-white py-16 px-8">
      <div className="max-w-5xl mx-auto text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Unlock 360-Degree Security for Your Business with Our Blockchain App Development Services
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Whether you are someone just starting a venture or a large-scale enterprise looking to automate business,
          our reliable and secure custom blockchain development services have got you covered.
        </p>
      </div>
      <StickyScrollContainer />
    </section>
  );
}
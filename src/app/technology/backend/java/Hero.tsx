

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/technology/Java.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold">Java Development Company</h1>
        <p className="mt-4 text-lg md:text-xl font-semibold">
          Build secure, robust, and scalable web applications to revitalize your business
        </p>
        <p className="mt-2 text-sm md:text-lg max-w-2xl mx-auto">
          At Radixweb, we offer cutting-edge Java app development services to meet the mobile and web application needs of varied enterprises
        </p>
        <div className="mt-6 animate-bounce">
          <span className="text-3xl">⬇️</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

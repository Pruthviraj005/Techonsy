export default function web() {
  const solutions = [
    "Customer Relation Management",
    "eCommerce Solutions",
    "eLearning Portal Development",
    "Real Estate Management System",
    "Project Management System",
    "Online Ordering System",
    "Management Information System",
    "Employee Management System",
  ];

  const approachListStyle = {
    fontSize: '14px',
    color: '#D1D5DB',
    fontWeight: '400',
  };

  const headingStyle = {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: '1.875rem',  // Equivalent to text-3xl, adjust as needed
    lineHeight: '2.25rem', // Adjust as needed
    textAlign: 'center' as const,
  };

  const benefitsDescription =
    "The web development services in India are not just cost-efficient, but also deliver promising and profitable results to the clients. These web development experts are focused on building engaging and unique web solutions that seem creative and attractive to the end-users. Hire web developers in India to experience more productivity, enhance creativity, and receive highly performing solutions.";

  const phases = [
    "Discovery and Planning",
    "Strategy and Architecture Design",
    "UI/UX Design",
    "Development and Integration",
    "Testing and Quality Assurance",
    "Deployment and Launch",
    "Training and Handover",
    "Support and Maintenance",
  ];

  const benefits = [
    { title: "User Interactive Solutions", image: "/images/services/11.png" },
    { title: "Transparency with Clients", image: "/images/services/22.png" },
    { title: "Valuable Security Systems", image: "/images/services/33.png" },
    { title: "Efficient Client Support", image: "/images/services/44.png" },
    { title: "Best Tech-Stack in Use", image: "/images/services/55.png" },
    { title: "Less Cost Better Quality", image: "/images/services/66.png" },
  ];

  return (
    <>
      <section id="webDevelopment" className="py-16 md:py-20 lg:py-28">
        {/* Apply flex and justify-center to center the content horizontally */}
        <div className="container mx-auto px-4 flex justify-center">
          {/* Inner container to hold the content and limit its width */}
          <div className="max-w-screen-lg w-full">

            {/* <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Web Development Services
              </h1>
            </div> */}

            {/* Hero Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                {/* Breadcrumb */}
                <div className="mb-8">
                  <p className="text-sm text-gray-600">
                    <span>Services</span>
                    <span className="mx-2">/</span>
                    <span>Web Development</span>
                  </p>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Innovative Web Development <br />
                  Solutions for Seamless Digital Experiences
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Explore our comprehensive web development services designed to elevate your online
                  presence. From dynamic websites to robust e-commerce platforms, our we craft
                  tailored solutions that blend creativity with functionality. Harness the power of cutting-
                  edge technologies for a user-centric web experience. Contact us to transform your
                  digital vision into reality.
                </p>
                <button className="bg-blue-500 hover:bg-[#55ACEE] text-white font-bold py-2 px-6 rounded">
                  Contact us
                </button>
              </div>
              <div className="order-1 md:order-2 relative">
                {/* Image with curved edges and shadow */}
                <img
                  src="/images/services/webdev.jpg"
                  alt="Web Development Examples"
                  className="rounded-3xl shadow-2xl w-full md:w-auto" //Make responsive image
                  style={{ maxWidth: '700px' }}
                />
              </div>
            </div>

            {/* Tailored Solutions Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Tailored Solutions for Your Unique Needs
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                At AppMakersLA, we understand that every business is unique. Our web development
                services go beyond the ordinary, offering customization based on your specific
                requirements. Whether it's a dynamic website or a feature-rich e-commerce platform,
                we tailor our solutions to align seamlessly with your brand identity and business
                objectives. Your vision, our expertise—let's create something extraordinary together.
              </p>
            </div>
            {/* Tech-Driven Excellence Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Tech-Driven Excellence
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Empower your web presence with our cutting-edge technologies. Our skilled team excels
                in a spectrum of technologies for frontend development, including React, Vue, Next.js,
                and Python. On the backend, we leverage the power of Node and Python. Dive into the
                realm of advanced logic and algorithms crafted by our experts. Experience robust server
                infrastructure with AWS and GCP, coupled with efficient DevOps practices using Github
                and Gitlab. Elevate your digital experience with technology that defines excellence.
              </p>
            </div>

            {/* Technologies We Work With Section */}
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Technologies we work with:
              </h2>
            </div>

            {/* Our Solutions Section */}
            <div className="py-16">
              <div className="md:flex md:items-start">
                <div className="md:w-7/12 lg:w-7/12 mb-6 md:mb-0">
                  <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                    Our Solutions
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Finding the best possible solutions to add value to your start-up ideas and turn
                    them into actual products. We develop quick mockups that are easy to navigate,
                    user-friendly, relate to business's vision.
                    <br /><br />
                    As an industry veteran, we, at YES IT Labs onboard experts that closely work
                    with organizations to understand their vision, project needs, avoid unplanned
                    costs and minimize the ROI at a later stage. We validate concepts, set clear
                    expectations, and identify the potential bottlenecks to ensure smooth
                    functionality.
                  </p>
                  <button className="bg-blue-500 hover:bg-[#55ACEE] text-white font-bold py-2 px-6 rounded">
                    View More
                  </button>
                </div>

                <div className="md:w-5/12 lg:w-5/12">
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    {solutions.map((solution, index) => (
                      <div className="text-center" key={index}>
                        <img
                          src={`/images/services/${index + 1}.png`}
                          alt={solution}
                          className="mx-auto h-10"
                        />
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-1">  {/*Reduced text size and Margin top*/}
                          {solution}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Our Enterprise Web Application Approach Section */}
            <div className="mt-16 py-12">
              <div className="container mx-auto px-4">
                {/* Title and description with left alignment */}
                <div className="mb-8">
                  <h2 className="text-3xl font-semibold text-left" style={{
                    ...headingStyle,
                    textAlign: 'left' // Override the center alignment from headingStyle
                  }}>
                    Our Enterprise Web Application Approach
                  </h2>
                  <p style={approachListStyle} className="max-w-2xl">
                    With decades of experience, we prioritize customer satisfaction while tailoring our process to
                    fit all business ecosystems.
                  </p>
                </div>

                {/* Content section with image and phases */}
                <div className="md:flex md:items-start gap-8">
                  {/* Left section with image */}
                  <div className="md:w-5/12 lg:w-5/12 mb-6 md:mb-0">
                    <img
                      src="/images/services/image.png"
                      alt="Enterprise Approach"
                      className="max-w-full h-auto"
                      style={{ maxHeight: '250px' }}
                    />
                  </div>

                  {/* Right section with phases in two columns */}
                  <div className="md:w-7/12 lg:w-7/12">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                      {/* First column */}
                      <div className="space-y-6">
                        {phases.slice(0, 4).map((phase, index) => (
                          <div key={index} className="flex items-center space-x-2" style={approachListStyle}>
                            <span>↓</span>
                            <span>{phase}</span>
                          </div>
                        ))}
                      </div>
                      {/* Second column */}
                      <div className="space-y-6">
                        {phases.slice(4).map((phase, index) => (
                          <div key={index} className="flex items-center space-x-2" style={approachListStyle}>
                            <span>{index === phases.slice(4).length - 1 ? '↑' : '↓'}</span>
                            <span>{phase}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="mt-8 text-center" style={approachListStyle}>
                      We have a dedicated team to maintain and support your software applications. They will
                      monitor and upgrade the software as your business needs change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Benefits of Working with a Web Development Company */}
            <div className="mt-16 py-12">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl font-semibold text-center mb-4" style={{
                  ...headingStyle,
                  whiteSpace: "pre-line", // Allow line breaks in the heading
                  fontSize: '1.75rem',
                  textAlign: 'center' as const
                }}>
                  Benefits of Working with a{"\n"}Web Development Company in India
                </h2>
                <p className="text-center mb-8" style={approachListStyle}>
                  {benefitsDescription}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="text-center">
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        className="mx-auto h-12 mb-2"
                      />
                      <h3 className="text-sm font-semibold" style={approachListStyle}>
                        {benefit.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

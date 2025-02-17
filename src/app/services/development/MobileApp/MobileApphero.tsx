'use client'

const MobileAppHero = () => {
    return (
      <div className="bg-white">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <p className="text-pink-500 font-semibold">Services / Mobile App Development</p>
              <h1 className="text-4xl font-bold mt-2 leading-tight">
                Custom Mobile App Development Solutions:
                <span className="text-pink-500"> Transforming Your Ideas into Reality</span>
              </h1>
              <p className="mt-4 text-gray-600">
                Elevate your business with our expert custom mobile app development services.
                Our dedicated team crafts tailored solutions, seamlessly integrating cutting-edge
                technologies and user-centric design.
              </p>
              <button className="mt-6 bg-pink-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-pink-600">
                Schedule your free consultation
              </button>
            </div>
  
            {/* Right Image */}
            <div className="relative">
              <img
                src="/images/mobile-dev.png"
                alt="Mobile App Development"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
  
        {/* Challenges Section */}
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-gray-900">Challenges Faced:</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {/* Left Box */}
            <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-600">
                Common <br /> Mobile Application Development Challenges That Businesses Face
              </h3>
              <p className="mt-2 text-gray-600">
                Without professional assistance, businesses may face several mobile app development challenges.
              </p>
            </div>
  
            {/* Middle Box */}
            <div className="bg-pink-100 shadow-lg rounded-lg p-6">
              <ul className="text-gray-700 space-y-2">
                <li>🚀 Defining Clear Objectives</li>
                <li>💰 Budget Constraints</li>
                <li>📱 Ensuring a Seamless User Experience</li>
                <li>📈 App Marketing and User Acquisition</li>
                <li>🔧 Post-Launch Maintenance and Updates</li>
              </ul>
            </div>
  
            {/* Right Box */}
            <div className="bg-pink-200 shadow-lg rounded-lg p-6">
              <ul className="text-gray-700 space-y-2">
                <li>✅ Platform Selection</li>
                <li>👨‍💻 Finding the Right Development Team</li>
                <li>🔒 Security and Data Privacy</li>
                <li>📊 Keeping up with Technology Trends</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MobileAppHero;
  
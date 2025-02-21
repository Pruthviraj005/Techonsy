import { FaLaptop, FaCode, FaShareAlt, FaMicrochip, FaPlug } from "react-icons/fa";

export default function TechnologyExpertise() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-20 lg:px-32">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">
          Platforms and Technology Expertise
        </h2>
        <div className="w-20 border-b-4 border-blue-500 mx-auto my-4"></div>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Our IoT development team has in-depth knowledge of the following IoT platforms and protocols.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* IoT Platform Card */}
        <div className="bg-gray-800 backdrop-blur-lg shadow-xl border border-gray-700 rounded-xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="relative flex items-center justify-center mb-6">
            <span className="absolute w-16 h-16 bg-blue-500 opacity-30 rounded-full"></span>
            <FaLaptop className="text-5xl text-blue-400 relative" />
          </div>
          <h3 className="text-2xl font-semibold text-white">IOT Platform</h3>
          <ul className="text-gray-300 text-lg mt-4 space-y-2">
            <li>🚀 AWS IoT</li>
            <li>☁ Google Cloud IoT</li>
            <li>🔗 Azure IoT</li>
          </ul>
        </div>

        {/* Development Frameworks Card */}
        <div className="bg-gray-800 backdrop-blur-lg shadow-xl border border-gray-700 rounded-xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="relative flex items-center justify-center mb-6">
            <span className="absolute w-16 h-16 bg-green-500 opacity-30 rounded-full"></span>
            <FaCode className="text-5xl text-green-400 relative" />
          </div>
          <h3 className="text-2xl font-semibold text-white">Development Frameworks</h3>
          <ul className="text-gray-300 text-lg mt-4 space-y-2">
            <li>🔥 Firebase</li>
            <li>🛠 RDTM</li>
            <li>🟢 Node.Js</li>
            <li>📡 IoT.Js</li>
            <li>🅰 Angular.Js</li>
            <li>⚛ React.Js</li>
            <li>💻 PHP</li>
          </ul>
        </div>

        {/* Connectivity Card */}
        <div className="bg-gray-800 backdrop-blur-lg shadow-xl border border-gray-700 rounded-xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="relative flex items-center justify-center mb-6">
            <span className="absolute w-16 h-16 bg-purple-500 opacity-30 rounded-full"></span>
            <FaShareAlt className="text-5xl text-purple-400 relative" />
          </div>
          <h3 className="text-2xl font-semibold text-white">Connectivity</h3>
          <ul className="text-gray-300 text-lg mt-4 space-y-2">
            <li>📶 WiFi</li>
            <li>📡 Cellular (2G, 3G, 4G, LTE)</li>
            <li>🎧 Bluetooth</li>
            <li>🔌 ZigBee</li>
            <li>📲 NFC</li>
            <li>📀 RFID</li>
            <li>🔗 Ethernet</li>
          </ul>
        </div>

        {/* Sensors Card */}
        <div className="bg-gray-800 backdrop-blur-lg shadow-xl border border-gray-700 rounded-xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="relative flex items-center justify-center mb-6">
            <span className="absolute w-16 h-16 bg-cyan-500 opacity-30 rounded-full"></span>
            <FaMicrochip className="text-5xl text-cyan-400 relative" />
          </div>
          <h3 className="text-2xl font-semibold text-white">Sensors</h3>
          <ul className="text-gray-300 text-lg mt-4 space-y-2">
            <li>🔍 Proximity and Presence</li>
            <li>🌡 Temperature</li>
            <li>💧 Humidity and Moisture</li>
            <li>⚖ Load, Force, and Pressure</li>
            <li>🎥 Motion and More</li>
          </ul>
        </div>

        {/* Third-Party APIs Card */}
        <div className="bg-gray-800 backdrop-blur-lg shadow-xl border border-gray-700 rounded-xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="relative flex items-center justify-center mb-6">
            <span className="absolute w-16 h-16 bg-orange-500 opacity-30 rounded-full"></span>
            <FaPlug className="text-5xl text-orange-400 relative" />
          </div>
          <h3 className="text-2xl font-semibold text-white">Third-Party APIs</h3>
          <ul className="text-gray-300 text-lg mt-4 space-y-2">
            <li>🎙 Google Assistant</li>
            <li>🏡 Apple HomeKit</li>
            <li>📡 Google Home</li>
            <li>🗣 Alexa Voice Service</li>
            <li>🤖 Android Things</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

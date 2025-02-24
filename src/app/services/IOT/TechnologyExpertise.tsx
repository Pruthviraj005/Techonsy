import { FaLaptop, FaCode, FaShareAlt, FaMicrochip, FaPlug } from "react-icons/fa";

export default function TechnologyExpertise() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 px-6 sm:px-10 md:px-16 lg:px-24">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Platforms and Technology Expertise
        </h2>
        <div className="w-20 border-b-4 border-blue-500 mx-auto my-4"></div>
        <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
          Our IoT development team has in-depth knowledge of the following IoT platforms and protocols.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {data.map((item, index) => (
          <div key={index} className="bg-gray-800 backdrop-blur-lg shadow-xl border border-gray-700 rounded-xl p-6 sm:p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative flex items-center justify-center mb-6">
              <span className={`absolute w-16 h-16 ${item.bgColor} opacity-30 rounded-full`}></span>
              <item.icon className={`text-4xl sm:text-5xl ${item.textColor} relative`} />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">{item.title}</h3>
            <ul className="text-gray-300 text-sm sm:text-lg mt-3 sm:mt-4 space-y-2">
              {item.items.map((subItem, subIndex) => (
                <li key={subIndex}>{subItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// Data for Cards
const data = [
  {
    title: "IOT Platform",
    icon: FaLaptop,
    bgColor: "bg-blue-500",
    textColor: "text-blue-400",
    items: ["🚀 AWS IoT", "☁ Google Cloud IoT", "🔗 Azure IoT"],
  },
  {
    title: "Development Frameworks",
    icon: FaCode,
    bgColor: "bg-green-500",
    textColor: "text-green-400",
    items: ["🔥 Firebase", "🛠 RDTM", "🟢 Node.Js", "📡 IoT.Js", "🅰 Angular.Js", "⚛ React.Js", "💻 PHP"],
  },
  {
    title: "Connectivity",
    icon: FaShareAlt,
    bgColor: "bg-purple-500",
    textColor: "text-purple-400",
    items: ["📶 WiFi", "📡 Cellular (2G, 3G, 4G, LTE)", "🎧 Bluetooth", "🔌 ZigBee", "📲 NFC", "📀 RFID", "🔗 Ethernet"],
  },
  {
    title: "Sensors",
    icon: FaMicrochip,
    bgColor: "bg-cyan-500",
    textColor: "text-cyan-400",
    items: ["🔍 Proximity and Presence", "🌡 Temperature", "💧 Humidity and Moisture", "⚖ Load, Force, and Pressure", "🎥 Motion and More"],
  },
  {
    title: "Third-Party APIs",
    icon: FaPlug,
    bgColor: "bg-orange-500",
    textColor: "text-orange-400",
    items: ["🎙 Google Assistant", "🏡 Apple HomeKit", "📡 Google Home", "🗣 Alexa Voice Service", "🤖 Android Things"],
  },
];

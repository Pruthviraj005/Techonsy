import { FaCode, FaChartBar, FaUsers, FaSyncAlt, FaRocket, FaBolt } from "react-icons/fa";

const features = [
  {
    title: "Proven Expertise",
    description: "Harness the power of seasoned Firebase professionals to build scalable, high-performance applications.",
    icon: <FaCode className="text-yellow-400" />,
    border:"text-yellow-400"
  },
  {
    title: "Results-Driven Approach",
    description: "Unlock measurable growth and business impact with Firebase solutions tailored to your strategic goals.",
    icon: <FaChartBar className="text-blue-400" />,
    border:"text-blue-400"
  },
  {
    title: "Scalability at Every Stage",
    description: "Design future-proof applications that evolve with your business, ensuring long-term sustainability.",
    icon: <FaUsers className="text-green-400" />,
    border:"text-green-400"
  },
  {
    title: "End-to-End Support",
    description: "From initial consulting to post-launch optimization, our experts guide you at every step.",
    icon: <FaSyncAlt className="text-purple-400" />,
    border:"text-purple-400"
  },
  {
    title: "Agile & Adaptive",
    description: "Leverage agile development for rapid iterations, seamless updates, and enhanced project efficiency.",
    icon: <FaRocket className="text-red-400" />,
    border:"text-red-400"
  },
  {
    title: "Lightning-Fast Deployment",
    description: "Deliver high-quality Firebase solutions on time and within budget, ensuring customer satisfaction.",
    icon: <FaBolt className="text-orange-400" />,
    border:"text-orange-400"
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-900 text-white border-t-[0.5px] border-t-cyan-600">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Why Choose Us for Firebase Development Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-800 shadow-lg rounded-xl p-6 border-b-4 border-teal-400 hover:border-teal-950 transition-all duration-300 flex items-start space-x-4`}
            >
              <div className="text-4xl">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-300 mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
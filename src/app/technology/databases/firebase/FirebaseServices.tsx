import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Streamlined Firebase Development",
    description:
      "Accelerate web and mobile app development with Firebase, ensuring seamless integration, efficient bug fixes, smooth deployment, and enhanced user engagement.",
  },
  {
    title: "Secure Cloud Solutions",
    description:
      "Store, sync, and manage your app and website data securely with Firebase’s powerful NoSQL cloud database.",
  },
  {
    title: "High-Performance Mobile & Web Apps",
    description:
      "Develop fast, scalable Android and iOS applications while delivering seamless web experiences with offline functionality.",
  },
  {
    title: "Next-Gen Cloud Firestore",
    description:
      "Utilize Firebase’s advanced database for real-time data sync, intuitive operations, and lightning-fast queries.",
  },
  {
    title: "Seamless Migration & Upgrades",
    description:
      "Effortlessly transition to a cloud-based infrastructure with zero downtime and smooth data migration.",
  },
  {
    title: "Reliable Support & Maintenance",
    description:
      "Ensure uninterrupted performance with expert support, proactive troubleshooting, and ongoing Firebase optimization.",
  },
];

export default function FirebaseServices() {
  return (
    <div className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-16 px-6 sm:px-12 md:px-20 border-t-[0.5px] border-y-cyan-600">
        <section className="max-w-[1000px] mx-auto">
        <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow to-red-500 text-transparent bg-clip-text">
        End-to-End Firebase Development & Cloud Solutions
        </h2>
            <p className="mt-4 text-lg text-gray-300 py-4">
                Enlist Firebase for <span className="text-blue-400 ">web development</span> and <span className="text-blue-400">mobile app development</span> by Google to add lucidity and effortlessness to product development, improvement, integration, bug-fixes, and discharge measures while adding to app promotion, user engagement, and user experience.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto mt-12">
            {services.map((service, index) => (
            <div key={index} className="flex items-start gap-4">
                <CheckCircle className="text-green-400 w-10 h-6" />
                <div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-300 mt-2">{service.description}</p>
                </div>
            </div>
            ))}
        </div>
        </section>
    </div>
  );
}
import Link from "next/link";

export default function DevelopmentServicesPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Development Services</h1>
      <p className="text-gray-600 mb-6">
        Explore our cutting-edge development solutions tailored to your business needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link key={service.id} href={`/Services/development/${service.slug}`} className="block p-6 bg-white shadow-md rounded-lg hover:bg-gray-100 transition">
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="text-gray-500">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

const services = [
  { id: 1, title: "Mobile App Development", slug: "MobileApp", description: "Build high-performance mobile applications tailored to your needs." },
  { id: 2, title: "Web Development", slug: "WebDevelopment", description: "Craft responsive and scalable websites with modern frameworks." },
  { id: 3, title: "Cross Platform App Development", slug: "CrossPlatform", description: "Develop apps that work seamlessly across multiple platforms." },
  { id: 4, title: "Ecommerce & CMS", slug: "Ecommerce", description: "Create feature-rich ecommerce and content management solutions." },
];

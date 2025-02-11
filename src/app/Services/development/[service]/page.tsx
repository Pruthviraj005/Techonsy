import { useRouter } from "next/router";

const serviceDetails = {
  MobileApp: {
    title: "Mobile App Development",
    description: "We create feature-rich, high-performance mobile applications tailored to your business needs.",
  },
  WebDevelopment: {
    title: "Web Development",
    description: "Craft responsive and scalable websites with modern frameworks and best practices.",
  },
  CrossPlatform: {
    title: "Cross Platform App Development",
    description: "Build apps that run seamlessly across multiple platforms like iOS, Android, and Web.",
  },
  Ecommerce: {
    title: "Ecommerce & CMS",
    description: "Create powerful ecommerce stores and content management systems with scalable solutions.",
  },
};

export default function ServicePage({ params }: { params: { services: string } }) {
  const { services } = params;
  const service = serviceDetails[services as keyof typeof serviceDetails];

  if (!service) {
    return <h1 className="text-2xl font-bold text-red-500">Service Not Found</h1>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
}

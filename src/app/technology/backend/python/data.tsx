import { FaCode, FaMobileAlt, FaBrain, FaPlug, FaDatabase, FaServer } from "react-icons/fa";
import { FaShoppingCart, FaRegMoneyBillAlt, FaBuilding, FaUtensils, FaGraduationCap, FaHeartbeat, FaRocketchat } from "react-icons/fa";

export const services = [
    {
        title: 'Python Web Development',
        description: 'Hire experienced web developers to take advantage of proven Python web development solutions by building feature-packed websites that give visitors an amazing user experience and boost brand trust.',
        icon: <FaCode className="text-orange-500 text-3xl" />
    },
    {
        title: 'Application Development',
        description: 'Our experienced Python developers will develop the highest quality application while keeping your vision in mind. This will enable you to achieve the highest level of business success while providing your clients with the highest quality online user experience.',
        icon: <FaMobileAlt className="text-yellow-500 text-3xl" />
    },
    {
        title: 'AI & Machine Learning',
        description: 'AI and machine learning can be used to find problems in your production line, identify more efficient ways of managing your supply chain, reduce fraud and waste and generally improve your business. Python is the foundation of many AI and machine learning technologies.',
        icon: <FaBrain className="text-green-500 text-3xl" />
    },
    {
        title: 'API Developments & Integration',
        description: 'Design robust, critical API integration solutions (REST, event driven, hyper-media) to integrate into your Python application to guarantee maximum performance and seamless exchange of critical data.',
        icon: <FaPlug className="text-blue-500 text-3xl" />
    },
    {
        title: 'Data Migration',
        description: 'Migrate data effortlessly and securely from legacy systems to the latest Python iterations. Ahex’s experts can help you move your outdated apps to cutting-edge Python applications, making them secure, reliable, and faster.',
        icon: <FaDatabase className="text-purple-500 text-3xl" />
    },
    {
        title: 'CMS Development',
        description: 'As a custom Python web development company, we have over a decade of experience in building custom SaaS solutions for enterprises and start-up clients. Our Python technology team uses this robust and scalable language to create solutions that are easy to maintain, versatile and efficient.',
        icon: <FaServer className="text-indigo-500 text-3xl" />
    }
];

export const techStack = [
    { category: "Frameworks", items: ["django", "web2py", "Flask"] },
    { category: "Tools", items: ["Spyder", "Thonny", "Sublime Text", "Visual Studio"] },
    { category: "Database", items: ["MySQL", "Oracle", "MongoDB", "MS-SQL", "PostgreSQL"] },
    { category: "Server", items: ["AWS", "Apache", "Nginx", "Serverless"] },
];

export const items = [
    {
        title: 'Thriving in the industry since 13 years',
        description: 'We have high expertise in developing products by utilizing the latest technologies for different industries.',
    },
    {
        title: 'We believe in innovation',
        description: 'Implementing constant innovative strategies to stand out in the market.',
    },
    {
        title: 'Cost-efficient services',
        description: 'Best quality services at a decent price with highly efficient developers.',
    },
    {
        title: 'Enhanced customer experience',
        description: 'Building highly interactive applications that catch the eye of target audiences.',
    },
    {
        title: 'Top-notch services',
        description: 'Endless efforts put forth to ensure the best products in the market.',
    },
    {
        title: 'Customer support',
        description: 'We provide customer support post-product delivery to ensure higher conversion rates.',
    },
];

export const industriesData = [
    { id: 1, name: "Retail & Ecommerce", icon: <FaShoppingCart size={40} color="#FF6347" /> },
    { id: 2, name: "Finance & Marketing", icon: <FaRegMoneyBillAlt size={40} color="#FFD700" /> },
    { id: 3, name: "Real Estate & Construction", icon: <FaBuilding size={40} color="#008080" /> },
    { id: 4, name: "Food & Hospitality", icon: <FaUtensils size={40} color="#FF4500" /> },
    { id: 5, name: "Education & Learning", icon: <FaGraduationCap size={40} color="#4B0082" /> },
    { id: 6, name: "Health & Fitness", icon: <FaHeartbeat size={40} color="#32CD32" /> },
    { id: 7, name: "Startups", icon: <FaRocketchat size={40} color="#1E90FF" /> },
];
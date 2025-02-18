import { FaBolt, FaRocket, FaCodeBranch, FaStar, FaSync, FaCogs } from 'react-icons/fa';
import { FaAward } from "react-icons/fa6";
import { MdSavings, MdAutoGraph  } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiGrowth } from "react-icons/gi";
 
 
 export const services = [
    { name: "Angular", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, lorem ut placerat tincidunt, lorem metus cursus dui, sit amet sodales turpis lorem ac odio. Fusce scelerisque, lorem id dignissim egestas, felis ligula lobortis ligula, eu malesuada risus libero et lorem. Ut id velit nisi. Aenean lobortis massa non nunc laoreet, et ultricies nunc eleifend. Aliquam id bibendum nunc. Curabitur euismod vehicula nulla sit amet porttitor. Integer at lorem lorem. Mauris egestas risus ac ante consectetur maximus.", icon: "🔺" },
    { name: "ReactJS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, lorem ut placerat tincidunt, lorem metus cursus dui, sit amet sodales turpis lorem ac odio. Fusce scelerisque, lorem id dignissim egestas, felis ligula lobortis ligula, eu malesuada risus libero et lorem. Ut id velit nisi. Aenean lobortis massa non nunc laoreet, et ultricies nunc eleifend. Aliquam id bibendum nunc. Curabitur euismod vehicula nulla sit amet porttitor. Integer at lorem lorem. Mauris egestas risus ac ante consectetur maximus.", icon: "⚛️" },
    { name: "NodeJS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, lorem ut placerat tincidunt, lorem metus cursus dui, sit amet sodales turpis lorem ac odio. Fusce scelerisque, lorem id dignissim egestas, felis ligula lobortis ligula, eu malesuada risus libero et lorem. Ut id velit nisi. Aenean lobortis massa non nunc laoreet, et ultricies nunc eleifend. Aliquam id bibendum nunc. Curabitur euismod vehicula nulla sit amet porttitor. Integer at lorem lorem. Mauris egestas risus ac ante consectetur maximus.", icon: "🟢" },
    { name: "jQuery", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, lorem ut placerat tincidunt, lorem metus cursus dui, sit amet sodales turpis lorem ac odio. Fusce scelerisque, lorem id dignissim egestas, felis ligula lobortis ligula, eu malesuada risus libero et lorem. Ut id velit nisi. Aenean lobortis massa non nunc laoreet, et ultricies nunc eleifend. Aliquam id bibendum nunc. Curabitur euismod vehicula nulla sit amet porttitor. Integer at lorem lorem. Mauris egestas risus ac ante consectetur maximus.", icon: "📜" },
  ];
  export const tools = ["Angular Js", "Node Js", "Vue Js", "jQuery", "Ext Js", "Titanium", "PhoneGap", "GWT", "Win Js", "Ajax", "Json", "Xml", "XSLT"];
  export const industries = ["Retail & Ecommerce", "Finance & Marketing", "Real Estate & Construction", "Food & Hospitality", "Education & Learning", "Health & Fitness", "Startups"];
  export const technologies = [
    { name: 'Angular JS' },
    { name: 'Node JS' },
    { name: 'Vue JS' },
    { name: 'jQuery' },
    { name: 'Ext JS' },
    { name: 'Titanium'},
    { name: 'PhoneGap' },
    { name: 'GWT' },
    { name: 'Win JS'},
    { name: 'Ajax'},
    { name: 'JSON'},
    { name: 'XML'},
    { name: 'XSLT'},
  ];

  export const cards = [
    {
      icon: <FaBolt size={40} className="text-blue-500" />, 
      title: "Higher Efficiency",
      description: "Javascript processes on the user's system, reducing the need for server communication, making applications more efficient.",
    },
    {
      icon: <FaRocket size={40} className="text-blue-500" />,
      title: "Outstanding Speed",
      description: "Running Javascript without waiting for a server response ensures faster load times and improved UI responsiveness.",
    },
    {
      icon: <FaCodeBranch size={40} className="text-blue-500" />,
      title: "Multi Purpose",
      description: "Javascript is versatile, working in different environments like web pages, servers, and applications.",
    },
    {
      icon: <FaStar size={40} className="text-blue-500" />,
      title: "Immensely Popular",
      description: "Companies prefer Javascript for its intuitive experiences and exceptional services to users.",
    },
    {
      icon: <FaSync size={40} className="text-blue-500" />,
      title: "Frequent Updates",
      description: "Frequent standardization updates ensure improvements, making Javascript a favorite among developers.",
    },
    {
      icon: <FaCogs size={40} className="text-blue-500" />,
      title: "Enriched with High Functionality",
      description: "Javascript enhances user interfaces with various components, making web apps more engaging and interactive.",
    },
  ];

  export const cards2 = [
    {
      icon: <FaAward  size={40} className="text-blue-500" />, 
      title: "Thriving in the industry since 13 years",
      description: "Javascript processes on the user's system, reducing the need for server communication, making applications more efficient.",
    },
    {
      icon: <MdSavings  size={40} className="text-blue-500" />,
      title: "Cost-efficient services",
      description: "Running Javascript without waiting for a server response ensures faster load times and improved UI responsiveness.",
    },
    {
      icon: <MdAutoGraph  size={40} className="text-blue-500" />,
      title: "Top-notch services",
      description: "Javascript is versatile, working in different environments like web pages, servers, and applications.",
    },
    {
      icon: <HiLightBulb size={40} className="text-blue-500" />,
      title: "We believe in innovation",
      description: "Companies prefer Javascript for its intuitive experiences and exceptional services to users.",
    },
    {
      icon: <GiGrowth size={40} className="text-blue-500" />,
      title: "Enhanced customer experience",
      description: "Frequent standardization updates ensure improvements, making Javascript a favorite among developers.",
    },
    {
      icon: <RiCustomerService2Fill size={40} className="text-blue-500" />,
      title: "Customer support",
      description: "Javascript enhances user interfaces with various components, making web apps more engaging and interactive.",
    },
  ];
  export const expertise = [
    { title: "Retail & Ecommerce", color: "text-blue-500", icon: "🛒" },
    { title: "Finance & Marketing", color: "text-green-500", icon: "💰" },
    { title: "Real Estate", color: "text-teal-500", icon: "🏡" },
    { title: "Food & Hospitality", color: "text-blue-500", icon: "🍽️" },
    { title: "Education & Learning", color: "text-purple-500", icon: "🎓" },
    { title: "Health & Fitness", color: "text-orange-500", icon: "🏋️" },
    
  ];
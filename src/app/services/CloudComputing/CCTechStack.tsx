"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaAws, FaMicrosoft, FaGoogle, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiArgo, SiAnsible, SiElasticstack, SiPrometheus, SiPortainer, SiElastic } from "react-icons/si";
import Image from "next/image";

const techStack = [
  { icon: <Image src="/images/cloudcomputing/aws.png" alt="aws" width={50} height={50} />, name: "AWS" },
  { icon: <Image src="/images/cloudcomputing/azure.png" alt="aws" width={50} height={50} />, name: "Azure" },
  { icon: <Image src="/images/cloudcomputing/gcp.png" alt="aws" width={50} height={50} />, name: "GCP" },
  { icon: <Image src="/images/cloudcomputing/docker.png" alt="aws" width={50} height={50} />, name: "Docker" },
  { icon: <Image src="/images/cloudcomputing/kubernetes.png" alt="aws" width={50} height={50} />, name: "Kubernetes" },
  { icon: <Image src="/images/cloudcomputing/terraform.png" alt="aws" width={50} height={50} />, name: "Terraform" },
  { icon: <Image src="/images/cloudcomputing/git.png" alt="aws" width={50} height={50} />, name: "Git" },
  { icon: <SiArgo className="text-orange-500" size={50}/>, name: "Argo CD" },
  { icon: <SiAnsible className="text-orange-500" size={50}/>, name: "Ansible" },
  { icon: <SiElastic className="text-blue-500" size={50}/>, name: "Elastic Stack" },
  { icon: <SiPrometheus className="text-red-800" size={50} />, name: "Prometheus" },
  { icon: <SiPortainer className="text-blue-400" size={50} /> , name: "Portainer" },
];

export default function CCTechStack() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.h1>

        {/* Grid Container */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center space-y-3 transform hover:scale-105 hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {tech.icon}
              <h3 className="text-lg font-semibold text-gray-800">{tech.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

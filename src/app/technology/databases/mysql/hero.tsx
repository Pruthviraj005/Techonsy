"use client"

import Image from "next/image";
import { motion } from "framer-motion";
const Hero=()=>{
    return (
        <section className="bg-gradient-to-br from-[#18232e] to-[#256b99] py-16 px-6 flex justify-center items-center min-h-screen">
           <div className="mt-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
             {/* Left Content */}
             <div className="text-white max-w-lg">
               <h2 className="text-5xl md:text-5xl font-bold mb-4">MySQL Development</h2>
               <p className="text-lg leading-relaxed mb-6">
                 Experience comprehensive MySQL services, from consulting to implementation, 
                 to enhance efficiency and streamline your database operations. Automate tasks, 
                 accelerate application deployment, and deliver modern cloud-native database 
                 applications with MySQL services.
               </p>
               <p className="text-lg leading-relaxed mb-6">
                 Deploy fast and reliable custom-built solutions, supporting multi-user and 
                 multi-thread processes, both on-premise and in the cloud. Build high-performing, 
                 scalable, and robust applications with MySQL, empowering your business for success.
               </p>
               <motion.a
                 href="#"
                 whileHover={{ scale: 1.1 }}
                 className="inline-block bg-blue-600 text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
               >
                 Get Started →
               </motion.a>
             </div>
     
             {/* Right Image */}
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
               className="flex justify-center"
             >
               <div className="bg-gray-900 p-4 rounded-lg shadow-xl shadow-gray-800 relative">
                 <Image
                   src="/images/technology/databases/mysql/mysql-logo.svg"
                   alt="MySQL Logo"
                   width={400}
                   height={400}
                   className="object-contain"
                 />
               </div>
             </motion.div>
           </div>
        </section>
    );
}

export default Hero;
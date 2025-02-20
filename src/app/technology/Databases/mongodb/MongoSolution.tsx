import { motion } from "framer-motion";
import Image from "next/image";

const MongoDBFeature = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white p-10 min-h-[70vh]">
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image src="/images/technology/mongosol.png" alt="MongoDB Illustration" width={400} height={300} />
      </motion.div>
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-blue-500">MongoDB: The Ultimate Solution for Scalable, Real-Time Data</h1>
        <div className="w-16 h-1 bg-blue-500 my-4 mx-auto md:mx-0" />
        <p className="text-gray-300">
        Leverage MongoDB’s scalability and flexibility to solve modern development challenges. Easily deploy and manage
         complex clusters while supporting large datasets and real-time interactions.
Scale non-relational databases with managed services for high availability and reliable performance.

        </p>
        <p className="mt-2 text-gray-300">
        Benefit from MongoDB’s expertise in distributed data systems, ensuring secure data management on-premises and in the cloud. Ideal for evolving schemas, 
        JSON-based apps, and custom server configurations
        </p>
      </motion.div>
    </div>
  );
};

export default MongoDBFeature;

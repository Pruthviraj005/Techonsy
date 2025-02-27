'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const tools = [
  { name: 'Google Big Query', src: '/images/technology/cloud-services/google-cloud/bigquery.svg' },
  { name: 'Google Cloud Storage', src: '/images/technology/cloud-services/google-cloud/storage.svg' },
  { name: 'Google Cloud Platform', src: '/images/technology/cloud-services/google-cloud/platform.png' },
  { name: 'Google App Engine', src: '/images/technology/cloud-services/google-cloud/app_engine.svg' },
  { name: 'Google Cloud SQL', src: '/images/technology/cloud-services/google-cloud/cloud_sql.svg' },
];

export default function GoogleCloudTools() {
  return (
    <section className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-white drop-shadow-[0_0_15px_rgba(0,200,255,0.8)]">
          Google Cloud Tools We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="bg-none p-6 rounded-lg w-48 flex flex-col items-center border border-none"
              animate={{ y: [0, -10, 0].map(y => y + Math.random() * 5 - 2.5) }}
              transition={{ repeat: Infinity, duration: 2 + Math.random() }}
            >
              <motion.div
                className="drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                whileHover={{ scale: 1.1 }}
              >
                <Image src={tool.src} alt={tool.name} width={60} height={60} />
              </motion.div>
              <motion.p
                className="mt-4 text-white font-semibold text-lg shadow-md hover:shadow-lg hover:text-blue-400"
                whileHover={{ scale: 1.05 }}
              >
                {tool.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

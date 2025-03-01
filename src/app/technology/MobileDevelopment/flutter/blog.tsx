"use client";
'';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const blogs = [
  {
    title: "The Future of AI: Beyond Machine Learning",
    excerpt: "Exploring the next frontier in AI development, from quantum computing to ethical considerations.",
    image: "/images/blog/ai_future.jpg",
    link: "/",
  },
  {
    title: "Design Thinking in Tech Innovation",
    excerpt: "How a user-centered approach can drive groundbreaking digital experiences.",
    image: "/images/blog/design_thinking.jpg",
    link: "/",
  },
  {
    title: "Why Minimalism is the Future of UI/UX",
    excerpt: "Simplicity and clarity: The key principles guiding the next generation of digital design.",
    image: "/images/blog/minimal_ui.jpg",
    link: "/",
  },
];

export default function Blog() {
  return (
    <section className="w-full max-w-[1000px] mx-auto p-6 sm:p-10 text-white bg-gray-900 rounded-2xl shadow-lg">
      <h2 className="text-3xl sm:text-4xl font-bold mt-52 mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Featured Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden bg-gray-800 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image src={blog.image} alt={blog.title} width={400} height={250} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-300 mb-4">{blog.excerpt}</p>
              <Link href={blog.link}>
                <span className="text-blue-400 hover:underline">Read More →</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
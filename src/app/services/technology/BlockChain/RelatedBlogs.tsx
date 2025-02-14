'use client'

export default function RelatedBlogs() {
  const blogs = [
    {
      title: "An Entrepreneur’s Guide on the Blockchain Technology and Its Uses",
      image: "/images/bitcoin.jpg", // Replace with actual image path
      link: "#",
    },
    {
      title: "A Comprehensive Guide on Blockchain App Development Cost",
      image: "/images/bitcoin1.jpg", // Replace with actual image path
      link: "#",
    },
    {
      title: "How Much Does It Cost to Make A Crypto Wallet App on Blockchain?",
      image: "/images/bitcoin2.jpg", // Replace with actual image path
      link: "#",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-black to-blue-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Related Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white text-black rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <a href={blog.link} className="text-blue-600 font-medium flex items-center mt-2 hover:underline">
                  Read more <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

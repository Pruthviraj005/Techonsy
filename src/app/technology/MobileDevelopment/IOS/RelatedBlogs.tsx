'use client';

export default function RelatedBlogs() {
  const blogs = [
    {
      title: "8 Reasons why Swift development can keep you ahead of the game",
      image: "/images/ios/blog1.png", // Replace with actual image path
      link: "#",
    },
    {
      title: "React Native vs Swift: Which One to Choose for iOS Development?",
      image: "/images/ios/blog2.png", // Replace with actual image path
      link: "#",
    },
    {
      title: "Diving Deep into iOS Programming Languages: Advanced Techniques for iOS App Development",
      image: "/images/ios/blog3.png", // Replace with actual image path
      link: "#",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-50">
          Related Blogs
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-100 text-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />

              {/* Blog Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold leading-tight mt-1">
                  {blog.title}
                </h3>

                {/* Read More Link */}
                <a
                  href={blog.link}
                  className="text-blue-500 font-medium flex items-center mt-3 hover:text-blue-600 transition-colors duration-200"
                >
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

"use client";

import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Blog = () => {
  console.log("Blog Data:", blogData); // Debugging step

  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {Array.isArray(blogData) && blogData.length > 0 ? (
              blogData.map((blog) => (
                <div key={blog.id ?? Math.random()} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                  <SingleBlog blog={blog} />
                </div>
              ))
            ) : (
              <p className="text-center">No blog posts found.</p>
            )}
          </div>

          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a href="#0" className="pagination-link">Prev</a>
                </li>
                <li className="mx-1"><a href="#0" className="pagination-link">1</a></li>
                <li className="mx-1"><a href="#0" className="pagination-link">2</a></li>
                <li className="mx-1"><a href="#0" className="pagination-link">3</a></li>
                <li className="mx-1"><span className="pagination-disabled">...</span></li>
                <li className="mx-1"><a href="#0" className="pagination-link">12</a></li>
                <li className="mx-1"><a href="#0" className="pagination-link">Next</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image"; // Import Next.js Image component

const IndustryWeServe = () => {
  // Sample data for cards with icon and image
  const industries = [
    {
      id: 1,
      icon: "/images/industryWeServe/foodDrinks_logo.png",
      image: "/images/industryWeServe/foodDrinks_logo.png",
      title: "Food & Drink",
      description: "We provide solutions for the healthcare industry, enabling better patient care and management."
    },
    {
      id: 2,
      icon: "/images/industryWeServe/education_logo.png",
      image: "/images/industryWeServe/education_logo.png",
      title: "Finance",
      description: "Our services help financial institutions streamline their operations and secure transactions."
    },
    {
      id: 3,
      icon: "/images/industryWeServe/education_logo.png",
      image: "/images/industryWeServe/education_logo.png",
      title: "Education",
      description: "We empower educational institutions with advanced tools for teaching and learning."
    },
    {
      id: 4,
      icon: "/images/industryWeServe/startup_logo.png",
      image: "/images/industryWeServe/startup_logo.png",
      title: "Start-Up",
      description: "Innovative solutions for retail businesses to enhance customer experience and optimize processes."
    },
    {
      id: 5,
      icon: "/images/industryWeServe/education_logo.png",
      image: "/images/industryWeServe/education_logo.png",
      title: "Technology",
      description: "Driving innovation for technology companies with tailored solutions."
    }
  ];

  return (
    <>
      <section className="container mx-auto max-w-6xl pt-8 px-4">
        {/* Heading Section */}
        <h2 className="mt-8 mb-8 text-center text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          <span className="text-yellow-500">Industries <strong>We Serve</strong></span>
        </h2>

        {/* ✅ Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1} // Default for mobile
          loop={true} // Infinite loop
          autoplay={{
            delay: 3000, // Slide every 3 seconds
            disableOnInteraction: false, // Keep autoplay even after interaction
          }}
          speed={1000} // Adjust speed of transition
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile (320px - 480px)
            480: { slidesPerView: 1 }, // Mobile (up to 768px)
            640: { slidesPerView: 2 }, // Tablet (up to 768px)
            768: { slidesPerView: 2 }, // Tablet portrait
            1024: { slidesPerView: 3 }, // Laptop and up (1024px)
            1200: { slidesPerView: 3 }, // Desktop (1200px)
            1600: { slidesPerView: 3 }, // Large screen
          }}
          className="w-full"
        >
          {industries.map((industry) => (
            <SwiperSlide key={industry.id}>
              <div className="min-w-[250px] max-w-[250px] flex-shrink-0 bg-white rounded-2xl shadow-lg overflow-hidden dark:bg-gray-800 h-[400px] mx-auto">
                {/* Icon */}
                <div className="flex justify-center items-center mt-4">
                  <Image
                    src={industry.icon}
                    alt={`${industry.title} icon`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>

                <div className="p-4 flex flex-col justify-between h-full">
                  {/* Description */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 flex-grow">
                    {industry.description}
                  </p>

                  {/* Image Below Description */}
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover mt-4"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default IndustryWeServe;

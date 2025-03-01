"use client";
"";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Brand } from "@/types/brand";
import brandsData from "./brandsData";
import Image from "next/image";

const Brands = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 text-center">
        {/* Heading Section */}
        <div className="mb-8 sm:mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-yellow-800 dark:text-yellow-200 bg-yellow-100/80 dark:bg-yellow-900/30 rounded-full mb-4">
            Trusted Worldwide
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Our <span className="text-yellow-500">Clients</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Partnering with industry leaders to deliver innovative solutions
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative px-4 sm:px-6">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 z-10" />

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 15 },
              480: { slidesPerView: 3, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 25 },
              768: { slidesPerView: 4, spaceBetween: 30 },
              1024: { slidesPerView: 5, spaceBetween: 35 },
              1280: { slidesPerView: 6, spaceBetween: 40 },
            }}
            className="w-full py-6 sm:py-8"
          >
            {brandsData.map((brand) => (
              <SwiperSlide key={brand.id}>
                <SingleBrand brand={brand} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Second row moving in opposite direction */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={3000}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 15 },
              480: { slidesPerView: 3, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 25 },
              768: { slidesPerView: 4, spaceBetween: 30 },
              1024: { slidesPerView: 5, spaceBetween: 35 },
              1280: { slidesPerView: 6, spaceBetween: 40 },
            }}
            className="w-full py-6 sm:py-8"
          >
            {brandsData.map((brand) => (
              <SwiperSlide key={brand.id}>
                <SingleBrand brand={brand} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="group">
      <div className="flex items-center justify-center px-2 sm:px-3 py-2 sm:py-4 rounded-lg transition-all duration-300 hover:bg-white/50 dark:hover:bg-gray-800/50">
        <a 
          href={href} 
          target="_blank" 
          rel="nofollow noreferrer"
          className="block w-full transition-transform duration-300 group-hover:-translate-y-1"
        >
          <Image
            src={image}
            alt={name}
            width={150}
            height={50}
            className="dark:hidden w-auto h-[25px] sm:h-[35px] md:h-[40px] object-contain mx-auto filter grayscale hover:grayscale-0 transition-all duration-300"
          />
          <Image
            src={imageLight}
            alt={name}
            width={150}
            height={50}
            className="hidden dark:block w-auto h-[25px] sm:h-[35px] md:h-[40px] object-contain mx-auto filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </a>
      </div>
    </div>
  );
};

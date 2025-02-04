"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Brand } from "@/types/brand";
import brandsData from "./brandsData";
import Image from "next/image";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container text-center">
        {/* ✅ Heading Section */}
        <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
          Our <span className="text-yellow-500">Clients</span>
        </h2>

        {/* ✅ Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000} 
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="w-full"
        >
          {brandsData.map((brand) => (
            <SwiperSlide key={brand.id}>
              <SingleBrand brand={brand} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex items-center justify-center px-3 py-[15px]">
      <a href={href} target="_blank" rel="nofollow noreferrer">
        <Image
          src={image}
          alt={name}
          width={150}
          height={50}
          className="dark:hidden"
        />
        <Image
          src={imageLight}
          alt={name}
          width={150}
          height={50}
          className="hidden dark:block"
        />
      </a>
    </div>
  );
};

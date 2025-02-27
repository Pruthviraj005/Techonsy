'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const content = [
  {
    title: 'Thriving in the industry since 13 years',
    description:
      'With over 13 years of experience, we have extensive expertise in developing products using the latest technologies across various industries.',
    image: '/images/angular/image1.png',
  },
  {
    title: 'Cost-efficient services',
    description:
      'We provide high-quality services at a competitive price. Our developers ensure maximum value for your investment.',
    image: '/images/angular/image2.png',
  },
  {
    title: 'Top-notch services',
    description:
      'Our products excel in the market, thanks to the dedication of our team and deep industry expertise.',
    image: '/images/angular/image3.png',
  },
  {
    title: 'We believe in innovation',
    description:
      'We incorporate innovative strategies to ensure our products stand out and reduce time-to-market.',
    image: '/images/angular/image4.png',
  },
  {
    title: 'Enhanced customer experience',
    description:
      'Our team develops highly interactive applications designed to attract target audiences.',
    image: '/images/angular/image5.png',
  },
  {
    title: 'Customer support',
    description:
      'We provide ongoing customer support to optimize conversion rates and align with market trends.',
    image: '/images/angular/image6.png',
  },
];

export default function WhyWorkWithUs() {
  const swiperRef = useRef(null);

  return (
    <div className=" flex flex-col items-center bg-gradient-to-b from-gray-900 to-black text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1000px] w-full">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center">
          Why Work With Us
        </h1>
        <h2 className="text-lg sm:text-xl mb-8 font-light text-center text-gray-300">
          We offer vetted developers with high expertise in delivering high-quality software development services.
        </h2>

        {/* Slider Section */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onBeforeInit={(swiper) => (swiperRef.current = swiper)}
            className="w-full"
          >
            {content.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col items-center text-center bg-gray-800/50 p-6 rounded-xl shadow-lg"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="mb-4"
                  />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-400 mt-2 max-w-lg">{item.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 p-3 bg-gray-800/70 hover:bg-gray-700 rounded-full transition-all z-10"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 p-3 bg-gray-800/70 hover:bg-gray-700 rounded-full transition-all z-10"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
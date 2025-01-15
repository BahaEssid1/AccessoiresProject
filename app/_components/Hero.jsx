"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules'; // Correct import for Swiper v8+
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Solde from './Solde'; // Import the Solde component

function Hero() {
  return (
    <section className="bg-gray-900 text-white">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // Slide every 3 seconds
          disableOnInteraction: false, // Keep autoplay working even if the user interacts
        }}
        pagination={{ clickable: true }}
        navigation
        loop={true} // Ensure it loops back to the first slide
        className="h-96"
        modules={[Pagination, Navigation]} // Register the necessary modules
      >
        {[...Array(3)].map((_, index) => (
          <SwiperSlide key={index}>
            <Solde /> {/* Add the Solde component */}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;

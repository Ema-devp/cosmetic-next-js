"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function HeroSlider() {
  const slides = [
  "/images/badami 1.png",
  "/images/green 1.png",
  "/images/green bottle.png",
  "/images/pink.png",
];
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[650px]">

              <Image
                src={slide}
                fill
                className="object-cover rounded-sm"
                alt=""
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center">

                <h1 className="text-7xl text-green-700 font-light">
                  Nature in Store
                </h1>

                <button className="mt-10 border border-black px-12 py-4 uppercase tracking-[3px]">
                  Find Beauty
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
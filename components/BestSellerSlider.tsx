"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    image: "/images/products/o1.png",
    title: "PANORAMIC WHEEL",
    price: "$55.00",
  },
  {
    image: "/images/products/o2.png",
    title: "VOLUME EXPRESS",
    price: "$45.00",
  },
  {
    image: "/images/products/t3.png",
    title: "POSH SAFARI",
    price: "$75.00",
  },
  {
    image: "/images/products/o4.png",
    title: "NATURAL CARE",
    price: "$60.00",
  },
  {
    image: "/images/products/o5.png",
    title: "GREEN SERUM",
    price: "$50.00",
  },
];
export default function BestSellerSlider() {
  return (
    <section className="max-w-6xl mx-auto py-24 px-6 bg-[#f8f6f5]">

      <div className="text-center mb-16">
        <p className="text-5xl text-gray-300 italic">
          perfect shades
        </p>

        <h2 className="text-5xl tracking-[4px] mt-4">
          ORGANIC COLLECTION BEST SELLERS
        </h2>

        <p className="uppercase text-sm tracking-[3px] mt-4">
          AT VERO EOS ET ACCUSAMUS ET IUSTO ODIO DIGNISSIMOS
        </p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={40}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="text-center">

              <div className="relative h-[260px] mb-8">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-2xl mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500 italic">
                An dico accommodare ius, porro
              </p>

              <p className="mt-3 text-xl">
                {item.price}
              </p>

              <div className="mt-4 text-gray-300">
                ★★★★★
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
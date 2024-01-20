"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper/modules";

// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules

export default function SwiperCarousel() {
  return (
    <>
      <Swiper
        modules={[Pagination, Scrollbar, Mousewheel, Navigation]}
        // direction='vertical'
        pagination={{ clickable: true }}
        // navigation = {true}
        slidesPerView={1}
        mousewheel={true}
      >
        <SwiperSlide>
          <div className="flex flex-col justify-end items-center h-screen bg-red-500">
            <div className="max-w-[50%] mx-auto my-16 flex flex-col items-center">
              <h2 className="text-5xl font-bold mb-2 text-center text-white">
                Promovemos la exportación de los cultivos de la región
              </h2>
              <p className="my-4 font-bold text-center text-white">
                descripcion del servicio
              </p>
              <button className="text-white px-4 py-2 border border-white">
                Botón centrado
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-end items-center h-screen bg-yellow-500">
            <div className="max-w-[50%] mx-auto my-16 flex flex-col items-center">
              <h2 className="text-5xl font-bold mb-2 text-center text-white">
                Promovemos la exportación de los cultivos de la región
              </h2>
              <p className="my-4 font-bold text-center text-white">
                descripcion del servicio
              </p>
              <button className="text-white px-4 py-2 border border-white">
                Botón centrado
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-end items-center h-screen bg-cyan-500">
            <div className="max-w-[50%] mx-auto my-16 flex flex-col items-center">
              <h2 className="text-5xl font-bold mb-2 text-center text-white">
                Promovemos la exportación de los cultivos de la región
              </h2>
              <p className="my-4 font-bold text-center text-white">
                descripcion del servicio
              </p>
              <button className="text-white px-4 py-2 border border-white">
                Botón centrado
              </button>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

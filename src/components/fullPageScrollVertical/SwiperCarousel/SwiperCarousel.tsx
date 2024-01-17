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
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-screen bg-red-500">
            <h2 className="text-5xl font-bold mb-2">Mecanizado</h2>
            <p>descripcion del servidio</p>
            <button className="my-4 w-24 h-24 flex items-center justify-center border-2 border-red-500 rounded-full focus:outline-none focus:ring focus:border-red-300 transform transition-transform hover:scale-110">
              <span className="text-red-500 text-lg font-bold">
                Descubre más
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-screen bg-cyan-300">
          <h2 className="text-5xl font-bold mb-2">Soldadura</h2>
            <p>descripcion del servidio</p>
            <button className="my-4 w-24 h-24 flex items-center justify-center border-2 border-red-500 rounded-full focus:outline-none focus:ring focus:border-red-300 transform transition-transform hover:scale-110">
              <span className="text-red-500 text-lg font-bold">
                Descubre más
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-screen bg-yellow-400">
          <h2 className="text-5xl font-bold mb-2">Reparación</h2>
            <p>descripcion del servidio</p>
            <button className="my-4 w-24 h-24 flex items-center justify-center border-2 border-red-500 rounded-full focus:outline-none focus:ring focus:border-red-300 transform transition-transform hover:scale-110">
              <span className="text-red-500 text-lg font-bold">
                Descubre más
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-screen bg-orange-500">
          <h2 className="text-5xl font-bold mb-2">Fabricación</h2>
            <p>descripcion del servidio</p>
            <button className="my-4 w-24 h-24 flex items-center justify-center border-2 border-red-500 rounded-full focus:outline-none focus:ring focus:border-red-300 transform transition-transform hover:scale-110">
              <span className="text-red-500 text-lg font-bold">
                Descubre más
              </span>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

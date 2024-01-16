
import { Carousel } from 'flowbite-react';
const CarouselCustomTheme =  {  
  "root": {
    "leftControl": "absolute top-0 left-0 flex h-full items-end justify-center px-4 pb-16 focus:outline-none",
    "rightControl": "absolute top-0 right-0 flex h-full items-end justify-center px-4 pb-16 focus:outline-none"
  },
  "indicators": {
    "active": {
      "off": "bg-white/50 hover:bg-white",
      "on": "bg-white"
    }
  },

  "scrollContainer": {
    "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
    "snap": "snap-x"
  },
}

const imagenes = [('https://flowbite.com/docs/images/carousel/carousel-1.svg')];
export default function HeroCarousel() {
  return (
    <div className="h-[100vh]">
      <Carousel slideInterval={5000} pauseOnHover theme={CarouselCustomTheme} indicators={false}>
      <div className="flex items-center justify-center h-full bg-cover bg-center bg-[url('https://flowbite.com/docs/images/carousel/carousel-1.svg')]">
        <div className="text-white text-center">
          <h2 className="text-4xl font-bold mb-2">Texto centrado</h2>
          <p className="text-md mb-4">Subtítulo más pequeño</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full">
            Botón centrado
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center h-full bg-cover bg-center bg-[url('https://flowbite.com/docs/images/carousel/carousel-2.svg')]">
        <div className="text-white text-center">
          <h2 className="text-4xl font-bold mb-2">Texto centrado</h2>
          <p className="text-md mb-4">Subtítulo más pequeño</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full">
            Botón centrado
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center h-full bg-cover bg-center bg-[url('https://flowbite.com/docs/images/carousel/carousel-3.svg')]">
        <div className="text-white text-center">
          <h2 className="text-4xl font-bold mb-2">Texto centrado</h2>
          <p className="text-md mb-4">Subtítulo más pequeño</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full">
            Botón centrado
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center h-full bg-cover bg-center bg-[url('https://flowbite.com/docs/images/carousel/carousel-4.svg')]">
        <div className="text-white text-center">
          <h2 className="text-4xl font-bold mb-2">Texto centrado</h2>
          <p className="text-md mb-4">Subtítulo más pequeño</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full">
            Botón centrado
          </button>
        </div>
      </div>

      </Carousel>
    </div>
  );
}

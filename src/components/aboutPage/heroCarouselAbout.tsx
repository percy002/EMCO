
import { Carousel } from 'flowbite-react';
const CarouselCustomTheme =  {  
  "root": {
    "leftControl": "absolute top-0 left-0 flex h-full items-end justify-center px-4 pb-20 focus:outline-none",
    "rightControl": "absolute top-0 right-0 flex h-full items-end justify-center px-4 pb-20 focus:outline-none"
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
export default function HeroCarouselAbout() {
  return (
    <div className="h-[100vh]">
      <Carousel slideInterval={5000} pauseOnHover theme={CarouselCustomTheme} indicators={false}>
      <div className="flex items-center justify-start h-full bg-cover bg-center bg-[url('https://flowbite.com/docs/images/carousel/carousel-1.svg')]">
        <div className="text-white max-w-[50%] ml-10">
          <h2 className="text-5xl font-bold mb-2">Especialistas en minería y construcción</h2>
        </div>
      </div>
      <div className="flex items-center justify-start h-full bg-cover bg-center bg-[url('https://flowbite.com/docs/images/carousel/carousel-2.svg')]">
        <div className="text-white max-w-[50%] ml-10">
          <h2 className="text-4xl font-bold mb-2">Seguridad</h2>
          
        </div>
      </div>
      <div className="flex items-center justify-start h-full bg-cover bg-center bg-[url('https://flowbite.com/docs/images/carousel/carousel-3.svg')]">
        <div className="text-white max-w-[50%] ml-10">
          <h2 className="text-4xl font-bold mb-2">Trabajo en Equipo</h2>
          
        </div>
      </div>
      <div className="flex items-center justify-start h-full bg-cover bg-center bg-[url('https://flowbite.com/docs/images/carousel/carousel-4.svg')]">
        <div className="text-white max-w-[50%] ml-10">
          <h2 className="text-4xl font-bold mb-2">Responsabilidad</h2>
          
        </div>
      </div>

      </Carousel>
    </div>
  );
}

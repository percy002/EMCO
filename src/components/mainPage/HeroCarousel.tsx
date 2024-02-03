import { Carousel } from "flowbite-react";
const CarouselCustomTheme = {
  root: {
    leftControl:
      "absolute top-0 left-0 flex h-full items-end justify-center px-4 pb-24 focus:outline-none",
    rightControl:
      "absolute top-0 right-0 flex h-full items-end justify-center px-4 pb-24 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-white/50 hover:bg-white",
      on: "bg-white",
    },
  },

  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
    snap: "snap-x",
  },
};
interface carouselElement {
  imageURL: string;
  title: string;
  subtitle: string;
}
interface Props {
  carouselElements: carouselElement[];
}

export default function HeroCarousel({ carouselElements }: Props) {
  return (
    <div className="h-[100vh]">
      <Carousel
        slideInterval={5000}
        pauseOnHover
        theme={CarouselCustomTheme}
        indicators={false}
      >
        {carouselElements &&
          carouselElements.map((el, index) => {
            const imageBg = `bg-[url('/images/banner/portada.jpg)]`;
            return (
              <div
                key={index}
                className={`flex items-center justify-center h-full bg-cover bg-center` }
                style={{backgroundImage:`url(${el.imageURL})`}}
              >
                <div className="text-white text-center">
                  <h2 className="text-6xl font-bold mb-2">{el.title}</h2>
                  <p className="text-md mb-4 text-xl">{el.subtitle}</p>
                  {/* <button  className="text-white text-xl px-4 py-2 mt-16 border border-white hover:bg-primary hover:border-transparent transition duration-500 ease-in-out">
                    NOSOTROS
                  </button>
                   */}
                </div>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
}

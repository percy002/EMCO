import { Carousel } from "flowbite-react";
const CarouselCustomTheme = {
  root: {
    leftControl:
      "absolute top-0 left-0 flex h-full items-end justify-center px-4 pb-20 focus:outline-none",
    rightControl:
      "absolute top-0 right-0 flex h-full items-end justify-center px-4 pb-20 focus:outline-none",
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
}
interface Props {
  carouselElements: carouselElement[];
}
export default function HeroCarouselAbout({ carouselElements }: Props) {
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
            return (
              <div
                key={index}
                className={`flex items-center justify-start h-full bg-cover bg-center` }
                style={{backgroundImage:`url(${el.imageURL})`}}
              >
                <div className="text-white max-w-[50%] mx-auto md:ml-40">
                  <h2 className="text-5xl font-bold mb-2">{el.title}</h2>
                </div>
              </div>
            );
          })}
        
      </Carousel>
    </div>
  );
}

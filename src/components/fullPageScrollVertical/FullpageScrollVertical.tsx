"use client";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

export default function FullpageScrollVertical() {
  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection className="h-scree p-4 bg-cover bg-center bg-[url('https://flowbite.com/docs/images/carousel/carousel-1.svg')]">
          <div className="h-screen flex flex-col justify-center items-center">
            <h2>Servicio 1</h2>
            <p>Detalles</p>
          </div>
        </FullpageSection>
        <FullpageSection className="h-scree p-4 bg-cover bg-center bg-[url('https://flowbite.com/docs/images/carousel/carousel-1.svg')]">
          <div className="h-screen flex flex-col justify-center items-center">
            <h2>Servicio 1</h2>
            <p>Detalles</p>
          </div>
        </FullpageSection>
        <FullpageSection className="h-scree p-4 bg-cover bg-center bg-[url('https://flowbite.com/docs/images/carousel/carousel-1.svg')]">
          <div className="h-screen flex flex-col justify-center items-center">
            <h2>Servicio 1</h2>
            <p>Detalles</p>
          </div>
        </FullpageSection>
        <FullpageSection className="h-scree p-4 bg-cover bg-center bg-[url('https://flowbite.com/docs/images/carousel/carousel-1.svg')]">
          <div className="h-screen flex flex-col justify-center items-center">
            <h2>Servicio 1</h2>
            <p>Detalles</p>
          </div>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}

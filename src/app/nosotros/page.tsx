import TimeLine from "@/components/aboutPage/TimeLine";
import HeroCarouselAbout from "@/components/aboutPage/heroCarouselAbout";
import { Card } from "flowbite-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="">
      <HeroCarouselAbout />
      <section className="container">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 my-4">
          Historia
        </h2>
        <TimeLine />
      </section>
      <section className="container">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 my-4">
          Propósito
        </h2>
        <div className="flex py-5 flex-col md:flex-row">
          {/* Primera mitad */}
          <div className="flex-1 p-8">
            <article>
              <h4 className="text-2xl font-bold mb-4">Título del artículo</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam vero omnis at sit illo, delectus provident voluptatibus
                molestiae nihil, dolorum sed deleniti explicabo necessitatibus
                ipsam corrupti eos. Asperiores nulla optio odio odit, natus
                maiores dicta nesciunt laudantium itaque ex eum assumenda
                voluptatum rem ab cumque quae tempore commodi est illum debitis
                necessitatibus possimus consectetur in. Impedit quibusdam
                praesentium et minus labore accusantium incidunt, eligendi
                fugiat eaque! Corrupti dolore minima reiciendis, vitae dolorem
                eum debitis, corporis voluptas, atque eius distinctio quas?
              </p>
            </article>
          </div>

          {/* Segunda mitad */}
          <div className="flex-1 p-4">
            <Image
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="Descripción de la imagen"
              width={500} 
              height={400} 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section className="container">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 my-4">
          Visión, Misión y Valores
        </h2>
        <div className="flex flex-col md:flex-row">
          {/* Primera parte */}
          <div className="md:w-1/3 p-4 flex justify-center">
            <Card className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Misión
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>

          {/* Segunda parte */}
          <div className="md:w-1/3 p-4 flex justify-center">
            <Card className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Visión
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>

          {/* Tercera parte */}
          <div className="md:w-1/3 p-4 flex justify-center">
            <Card className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Valores
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 my-4">
          Certificaciones
        </h2>
      </section>
      <section>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 my-4">
          Políticas
        </h2>
      </section>
      <section>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 my-4">
          Instrumentos de Gestión Ambiental
        </h2>
      </section>
    </div>
  );
}

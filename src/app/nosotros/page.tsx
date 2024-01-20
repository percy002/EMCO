import TimeLine from "@/components/aboutPage/TimeLine";
import HeroCarouselAbout from "@/components/aboutPage/heroCarouselAbout";
import { Card } from "flowbite-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="">
      <HeroCarouselAbout />
      <section className="container mt-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight my-4 flex items-end">
          <span className="text-primary">Historia</span>
          <hr className="flex-grow border-t border-gray-500 ml-4" />
        </h2>
        <TimeLine />
      </section>
      <section className="container mt-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight my-4 flex items-end">
          <span className="text-primary">Propósito de la Marca</span>
          <hr className="flex-grow border-t border-gray-500 ml-4" />
        </h2>
        <div className="flex py-5 flex-col md:flex-row">
          {/* Primera mitad */}
          <div className="flex-1 flex items-center">
            <article>
              <h4 className="text-2xl md:text-3xl font-bold mb-4">
                Estamos comprometidos en hacer una minería ambiental y
                socialmente responsable, porque
              </h4>
              <p className="text-gray-600">
                queremos que todos los peruanos se sientan orgullosos de ser un
                país minero. Orgullosos de tener una minería aliada de la
                agricultura, comprometida con el medio ambiente y que avanza
                hacia el desarrollo de la mano de todas sus comunidades vecinas.
                Sabemos que la única manera de lograr este objetivo es
                trabajando en equipo con el Gobierno Regional, las Autoridades
                Regionales, la Sociedad Civil y la población, porque juntos
                hacemos la diferencia.
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
      <section className="container mt-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight my-4 flex items-end">
          <span className="text-primary">Misión, Vision, Valores</span>
          <hr className="flex-grow border-t border-gray-500 ml-4" />
        </h2>
        <div className="flex flex-col md:flex-row">
          {/* Primera parte */}
          <div className="md:w-1/3 p-4 flex justify-center">
            <Card className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-primary ">
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
              <h5 className="text-2xl font-bold tracking-tight text-primary ">
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
              <h5 className="text-2xl font-bold tracking-tight text-primary ">
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
      <section className="container mt-14">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <div className=" flex flex-col items-center  p-8">
              <h5 className="text-2xl font-bold tracking-tight text-primary ">
                Misión
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className=" flex flex-col items-center  p-8">
              <h5 className="text-2xl font-bold tracking-tight text-primary ">
                Visión
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className=" flex flex-col items-center  p-8">
              <h5 className="text-2xl font-bold tracking-tight text-primary ">
                Valores
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mt-14">
        <div className="text-xl">
          <p className="my-4"><span className="text-primary font-bold">Misión: </span>Somos líderes de Producción Segura de cobre, haciendo de cada día nuestro mejor día.</p>
          <p className="my-4"><span className="text-primary font-bold">Visión: </span>Somos líderes de Producción Segura de cobre, haciendo de cada día nuestro mejor día.</p>
        </div>
      </section>
      <section className="container mt-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight my-4 flex items-end">
          <span className="text-primary">Certificaciones</span>
          <hr className="flex-grow border-t border-gray-500 ml-4" />
        </h2>
      </section>
      <section className="container mt-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight my-4 flex items-end">
          <span className="text-primary">Políticas</span>
          <hr className="flex-grow border-t border-gray-500 ml-4" />
        </h2>
      </section>
      <section className="container mt-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight my-4 flex items-end">
          <span className="text-primary">
            Instrumentos de Gestión Ambiental
          </span>
          <hr className="flex-grow border-t border-gray-500 ml-4" />
        </h2>
      </section>
    </div>
  );
}

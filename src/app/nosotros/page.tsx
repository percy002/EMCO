import TimeLine from "@/components/aboutPage/TimeLine";
import HeroCarouselAbout from "@/components/aboutPage/heroCarouselAbout";
import { Card } from "flowbite-react";
import Image from "next/image";
import React from "react";

export default function page() {
  const carouselData = [
    {
      imageURL: '/images/trabajo.png',
      title: 'NOSOTROS',
    },
    // {
    //   imageURL: '/images/banner/bannerInicio2.jpg',
    //   // title: 'Asumimos la salud y la seguridad industrial en todas nuestras acciones',
    // },
    // ... más elementos
  ];
  return (
    <div className="">
      <HeroCarouselAbout carouselElements={carouselData} />
      <section className="container mt-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight my-4 flex items-end">
          {/* <span className="text-primary">Historia</span> */}
          <hr className="flex-grow border-t border-gray-500 ml-4" />
        </h2>
        {/* <TimeLine /> */}
      </section>
      <section className="container mt-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight my-4 flex items-end">
          <span className="text-primary">QUIENES SOMOS</span>
          <hr className="flex-grow border-t border-gray-500 ml-4" />
        </h2>
        <div className="flex py-5 flex-col md:flex-row">
          {/* Primera mitad */}
          <div className="flex-1 flex items-center">
            <article>
              <h4 className="text-2xl md:text-3xl font-bold mb-4">
                EMCO SAC - ESPECIALISTAS EN MINERIA Y CONSTRUCCION
              </h4>
              <p className="text-gray-600">
                Somos una empresa peruana dedicada a brindar servicios integrales para la actividad minera, industrial y construcción. profesionales con posibilidades de generar oportunidades, manteniendo un criterio de rentabilidad y creación de valor, con capacidad de liderazgo, competencias de respuesta y satisfacción a los requerimientos de nuestros clientes.
                Incentivamos la cultura de la excelencia a través de todas las actividades que realizamos. Contamos con un equipo profesional de primer nivel, con gran experiencia y en constante desarrollo de sus habilidades, lo cual asegura un servicio de calidad a la medida de las necesidades del cliente. Hoy estamos desarrollando diversas líneas de negocio, asumiendo nuevos desafíos y preparándonos para enfrentar los retos.
              </p>
            </article>
          </div>

          {/* Segunda mitad */}
          <div className="flex-1 p-4">
            <img
              src="./images/nosotros.jpg"

              // imageURL="/images/servicios/molienda.jpg"
              alt="nosotros"
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
                Satisfacer las necesidades de nuestros clientes, generando altos valores, en base a la mejora continua y sostenido de nuestros procesos, en la calidad, innovación y el soporte necesario para lograr la excelencia, buscando la rentabilidad y el crecimiento de la empresa.


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
                Ser una empresa líder en servicios integrales para las actividades minera y de construcción. Constituirse en forma sostenida, en el ámbito nacional como internacional, con los más altos niveles de calidad, seguridad y cumplimiento. Velando por el bienestar de nuestros clientes, proveedores, empleados y accionistas.


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
                ▪ Seguridad <br />
                ▪ Respeto <br />
                ▪ Trabajo En equipo <br />
                ▪ Responsabilidad <br />
                ▪ Mejora continua
              </p>
            </Card>
          </div>
        </div>
      </section>
      <section className="container mt-14">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/3">
            <div className=" flex flex-col items-center  p-8">
              <h5 className="text-2xl font-bold tracking-tight text-primary ">
                SEGURIDAD
              </h5>
              <p className="font-normal text-gray-700 ">
                La seguridad es uno de nuestros valores y una prioridad para nuestra empresa, Asumimos la salud y la seguridad industrial en todas nuestras acciones y decisiones, Nos esforzamos constantemente por acabar con los incidentes y lesiones en nuestros lugares de trabajo. protegiendo proactivamente a las personas y a la propiedad.
              </p>
            </div>
          </div>
          {/* <div className="md:w-1/3">
            <div className=" flex flex-col items-center  p-8">
              <h5 className="text-2xl font-bold tracking-tight text-primary ">
                Visión
              </h5>
              <p className="font-normal text-gray-700 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div> */}
          {/* <div className="md:w-1/3">
            <div className=" flex flex-col items-center  p-8">
              <h5 className="text-2xl font-bold tracking-tight text-primary ">
                Valores
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div> */}
        </div>
      </section>
      {/* <section className="container mt-14">
        <div className="font-base text-gray-700">
          <p className="my-4 text-xl"><span className="text-primary font-bold">Misión: </span>Somos líderes de Producción Segura de cobre, haciendo de cada día nuestro mejor día.</p>
          <p className="my-4 text-xl"><span className="text-primary font-bold">Visión: </span>Somos líderes de Producción Segura de cobre, haciendo de cada día nuestro mejor día.</p>
        </div>
      </section>
      <section className="container mt-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight my-4 flex items-end">
          <span className="text-primary">Certificaciones y homologaciones</span>
          <hr className="flex-grow border-t border-gray-500 ml-4" />
        </h2>
      </section> */}
      <section className="container mt-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight my-4 flex items-end">
          <span className="text-primary">Políticas</span>
          <hr className="flex-grow border-t border-gray-500 ml-4" />
        </h2>
      </section>
      {/* <section className="container mt-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight my-4 flex items-end">
          <span className="text-primary">
            Instrumentos de Gestión Ambiental
          </span>
          <hr className="flex-grow border-t border-gray-500 ml-4" />
        </h2>
      </section> */}
    </div>
  );
}

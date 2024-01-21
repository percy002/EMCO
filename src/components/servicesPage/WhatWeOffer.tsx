import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";

export interface Subservicio {
  title: string,
  imageURL: string,
  caracteristicas: string[]
}
interface Props {
  title: string;
  descripcion: string;
  subservicios: Subservicio[];
}
export default function WhatWeOffer({ title, descripcion, subservicios }: Props) {
  const imagenServicio = `/images/servicios/mecanizado.jpg`;
  return (
    <div className="mt-8">
      <section className="px-4">
        <div className="flex flex-col md:flex-row bg-grey rounded-3xl p-0">
          <div className="md:w-1/2 p-4">
            <article>
              <header>
                <h2 className="text-4xl text-gray-800 font-semibold mb-4">
                  {title}
                </h2>
              </header>
              <section>
                <p className="text-gray-700 mb-4">{descripcion}</p>
                <div className="pt-16">
                  {subservicios &&
                    subservicios.map((el, index) => (
                      <div key={index} className="text-gray-700 text-lg py-2">
                        <div className="border-t border-gray-500 py-2 rounded-none"></div>
                        <div className="flex justify-between">
                          <h3 className="text-2xl">{el.title}</h3>
                          <ArrowRightCircleIcon className="w-8 h-8 text-gray-700" />
                        </div>
                      </div>
                    ))}
                </div>
              </section>
            </article>
          </div>
          <div
            className={`md:w-1/2 flex h-[40vh] md:h-auto relative rounded-3xl justify-start items-end bg-cover bg-center bg-no-repeat`}          
            style={{backgroundImage:`url(${imagenServicio})`}}
            >
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-3xl"></div>
            <div className="p-8 text-2xl text-white relative z-10">
              <ul className="space-y-4">
                <li>característica</li>
                <li>característica</li>
                <li>característica</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

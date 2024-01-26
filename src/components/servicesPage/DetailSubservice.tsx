import { Subservicio } from "./WhatWeOffer";

export interface Props {
    subservicio : Subservicio
  }
export default function DetailSubService({subservicio} : Props) {
  return (
    <div
      className={`md:w-1/2 flex h-[40vh] md:h-auto relative rounded-3xl justify-start items-end bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${subservicio.imageURL})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20 rounded-3xl"></div>
      <div className="p-8 text-2xl text-white relative z-10">
        <ul className="space-y-4">
            {
                subservicio.caracteristicas && subservicio.caracteristicas.map((caract,index) => (
                    <li key={index}>{caract}</li>
                ))
            }
        </ul>
      </div>
    </div>
  );
}

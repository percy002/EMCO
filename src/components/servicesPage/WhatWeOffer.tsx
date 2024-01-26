"use client";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import DetailSubService from "./DetailSubservice";
import { useState } from "react";

export interface Subservicio {
  title: string;
  imageURL: string;
  caracteristicas: string[];
}
interface Props {
  title: string;
  descripcion: string;
  subservicios: Subservicio[];
}
export default function WhatWeOffer({
  title,
  descripcion,
  subservicios,
}: Props) {
  const [subServiceDetail, setSubServiceDetail] = useState<Subservicio>(
    subservicios[0]
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const imagenServicio = `/images/servicios/mecanizado.jpg`;

  const handleClick = (index: number) => {
    setSubServiceDetail(subservicios[index]);
    setCurrentIndex(index);
  };
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
                      <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`text-gray-700 text-lg py-2 cursor-pointer hover:text-primary transition-colors duration-500 ${
                          index === currentIndex && "text-primary font-semibold"
                        }`}
                      >
                        <div className="border-t border-gray-500 py-2 rounded-none"></div>
                        <div className="flex justify-between">
                          <h3 className="text-2xl">{el.title}</h3>
                          <ArrowRightCircleIcon className={`w-10 h-10`} />
                        </div>
                      </div>
                    ))}
                </div>
              </section>
            </article>
          </div>
          <DetailSubService subservicio={subServiceDetail} />
        </div>
      </section>
    </div>
  );
}

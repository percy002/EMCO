"use client";
import { Accordion } from "flowbite-react";

interface Props {
  title: string;
  descripcion: string;
  subservicios: string[];
  imageURL: string;
}
export default function WhatWeOffer({
  title,
  descripcion,
  subservicios,
  imageURL,
}: Props) {
  return (
      <div className="">
        <section className="">
          <div className="flex flex-col md:flex-row bg-grey p-0">
            <div className="md:w-1/2 p-4">
              <p className="text-gray-700 mb-4">{descripcion}</p>
              <div className="pt-4">
                {subservicios &&
                  subservicios.map((subservicio, index) => (
                    <div
                      key={index}
                      className={`text-gray-700 text-lg py-2 transition-colors duration-500 `}
                    >
                      {index > 0 && <div className="border-t border-gray-500 py-2 rounded-none"></div>} 
                      <div className="flex justify-between">
                        <h3 className="text-2xl">{subservicio}</h3>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div
              className={`md:w-1/2 flex h-[40vh] md:h-auto relative justify-start items-end bg-cover bg-center bg-no-repeat`}
              style={{ backgroundImage: `url(${imageURL})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="p-8 text-2xl text-white relative z-10">
                <ul className="space-y-4"></ul>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}

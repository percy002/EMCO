"use client";
import { Accordion } from "flowbite-react";
import WhatWeOffer from "@/components/servicesPage/WhatWeOffer";

export default function page() {
  return (
    <div className="mt-28">
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title className="text-3xl">MOLIENDA</Accordion.Title>
          <Accordion.Content className="p-0">
            <WhatWeOffer
              title="MOLIENDA"
              descripcion=""
              imageURL="/images/servicios/molienda.jpg"
              subservicios={[
                "Mill lining",
                "Instalación y cambio de Trunnion Liners ",
                "Mantenimiento al chute móvil de alimentación",
                "Mantenimiento al sistema de retorno de pebbles (cañón), mallas del trommel y cajón de descarga.",
              ]}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-3xl">FLOTACION</Accordion.Title>
          <Accordion.Content className="p-0">
            <WhatWeOffer
              title="FLOTACION"
              descripcion="."
              imageURL="/images/servicios/flotacion.jpg"
              subservicios={[
                "Cambio y montaje de mecanismos de celdas columna: Wenco Outokumpo Dr (180,300, 500) Denver Agitair Acondicionares y esperadores",
                "Cambio de difusores, impulsores y falsos pisos o de fondo.",
                "Cambio y alineamiento de polea motriz.",
              ]}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-3xl">CHANCADORA</Accordion.Title>
          <Accordion.Content className="p-0">
            <WhatWeOffer
              title="CHANCADORA"
              descripcion="."
              imageURL="/images/servicios/chancadora.jpg"
              subservicios={[
                "Cambio de cóncavos y manto, Reforzar brazos y forros del cuerpo.",
                "Mantenimiento del sistema de lubricación e hidráulico.",
                "Mantenimiento de salas eléctricas: arrancadores, transformadores, tableros de distribución, celdas de media, seccionadores, entre otros.",
              ]}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-3xl">FAJA TRANSPORTADORA</Accordion.Title>
          <Accordion.Content className="p-0">
            <WhatWeOffer
              title="FAJA TRANSPORTADORA"
              descripcion="."
              imageURL="/images/servicios/alimentacion.jpg"
              subservicios={[
                "Cambio de poleas, polines y bastidores",
                "Cambio de tambor piñón y sproket",
                "Empalmes de faja transportadora.",
                "Mantenimiento al sistema de tensado",
              ]}
            />
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="text-3xl">ALIMENTACION Y DESCARGA</Accordion.Title>
          <Accordion.Content className="p-0">
            <WhatWeOffer
              title="ALIMENTACION Y DESCARGA"
              descripcion="."
              imageURL="/images/servicios/alimentacion.jpg"
              subservicios={[
                "Cambio de Alimentador de cadena, sprocket, polines, bandejas",
                "Mantenimiento de motores eléctricos y botoneras de control de campo y arrancadores",
                "Mantenimiento de sensores de protección",
              ]}
            />
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="text-3xl">CHUTES Y TOLVAS</Accordion.Title>
          <Accordion.Content className="p-0">
            <WhatWeOffer
              title="CHUTES Y TOLVAS"
              descripcion="."
              imageURL="/images/servicios/chutes.jpg"
              subservicios={[
                "Cambio de liners, liners",
                "Mantenimiento de planchas de desgaste",
                "Mantenimiento de sensores de nivel",
              ]}
            />
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="text-3xl">ZARANDAS HUMEDAS Y SECAS</Accordion.Title>
          <Accordion.Content className="p-0">
            <WhatWeOffer
              title="ZARANDAS HUMEDAS Y SECAS"
              descripcion="."
              imageURL="/images/servicios/zarandas.jpg"
              subservicios={[
                "Cambio de upgrade",
                "Cambio de excitador",
                "Cambio de paneles",
                "Reparación de plataformas oversize",
              ]}
            />
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="text-3xl">CONCENTRADORES</Accordion.Title>
          <Accordion.Content className="p-0">
            <WhatWeOffer
              title="CONCENTRADORES"
              descripcion="."
              imageURL="/images/servicios/mecanizado.jpg"
              subservicios={[
                "Mantenimiento de ciclónes - hidrociclones",
                "Mantenimiento de Ɵna de finos y gruesos",
                "Cambios de spool.",
              ]}
            />
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="text-3xl">MANUFACTURA Y SOLDADURA</Accordion.Title>
          <Accordion.Content className="p-0">
            <WhatWeOffer
              title="MANUFACTURA Y SOLDADURA"
              descripcion="."
              imageURL="/images/servicios/mecanizado.jpg"
              subservicios={[
                "Fabricación, acondicionamiento y cambio de tuberías y codos.",
                "Fabricación de líneas de agua",
                "Fabricación y reparación de chutes/tolvas, ",
              ]}
            />
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="text-3xl">BOMBAS</Accordion.Title>
          <Accordion.Content className="p-0">
            <WhatWeOffer
              title="BOMBAS"
              descripcion="."
              imageURL="/images/servicios/mecanizado.jpg"
              subservicios={[
                "Cambio de bombas",
                "Cambio de partes húmedas",
                "Mantenimiento de bombas centrífugas.",
              ]}
            />
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}

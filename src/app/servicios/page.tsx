import SwiperCarousel from "@/components/fullPageScrollVertical/SwiperCarousel/SwiperCarousel";
import HeroCarousel from "@/components/mainPage/HeroCarousel";
import WhatWeOffer from "@/components/servicesPage/WhatWeOffer";

export default function page() {
  return (
    <div className="mt-28">
      <WhatWeOffer
        title="MOLIENDA"
        descripcion=""
        imageURL="/images/servicios/molienda.jpg"
        subservicios={['Mill lining',
                      'Instalación y cambio de Trunnion Liners ',
                      'Mantenimiento al chute móvil de alimentación',
                      'Mantenimiento al sistema de retorno de pebbles (cañón), mallas del trommel y cajón de descarga.']}
      />
      <WhatWeOffer
        title="FLOTACION"
        descripcion="."
        imageURL="/images/servicios/flotacion.jpg"
        subservicios={['Cambio y montaje de mecanismos de celdas columna: Wenco Outokumpo Dr (180,300, 500) Denver Agitair Acondicionares y esperadores',
                      'Cambio de difusores, impulsores y falsos pisos o de fondo.', 
                      'Cambio y alineamiento de polea motriz.']}
      />
      <WhatWeOffer
        title="CHANCADORA"
        descripcion="."
        imageURL="/images/servicios/chancadora.jpg"
        subservicios={['Cambio de cóncavos y manto, Reforzar brazos y forros del cuerpo.',
                      'Mantenimiento del sistema de lubricación e hidráulico.', 
                      'Mantenimiento de salas eléctricas: arrancadores, transformadores, tableros de distribución, celdas de media, seccionadores, entre otros.']}
      />
      <WhatWeOffer
        title="FAJA TRANSPORTADORA"
        descripcion="."
        imageURL="/images/servicios/alimentacion.jpg"
        subservicios={['Cambio de poleas, polines y bastidores',
        'Cambio de tambor piñón y sproket',
        'Empalmes de faja transportadora.',
        'Mantenimiento al sistema de tensado']}
      />
      <WhatWeOffer
        title="ALIMENTACION Y DESCARGA"
        descripcion="."
        imageURL="/images/servicios/alimentacion.jpg"
        subservicios={['Cambio de Alimentador de cadena, sprocket, polines, bandejas',
        'Mantenimiento de motores eléctricos y botoneras de control de campo y arrancadores',
        'Mantenimiento de sensores de protección']}
      />
      <WhatWeOffer
        title="CHUTES Y TOLVAS"
        descripcion="."
        imageURL="/images/servicios/chutes.jpg"
        subservicios={['Cambio de liners, liners',
        'Mantenimiento de planchas de desgaste',
        'Mantenimiento de sensores de nivel']}
      />
      <WhatWeOffer
        title="ZARANDAS HUMEDAS Y SECAS"
        descripcion="."
        imageURL="/images/servicios/zarandas.jpg"
        subservicios={['Cambio de upgrade',
        'Cambio de excitador',
        'Cambio de paneles',
        'Reparación de plataformas oversize']}
      />
      <WhatWeOffer
        title="CONCENTRADORES"
        descripcion="."
        imageURL="/images/servicios/mecanizado.jpg"
        subservicios={['Mantenimiento de ciclónes - hidrociclones',
        'Mantenimiento de Ɵna de finos y gruesos',
        'Cambios de spool.']}
      />
      <WhatWeOffer
        title="MANUFACTURA Y SOLDADURA"
        descripcion="."
        imageURL="/images/servicios/mecanizado.jpg"
        subservicios={['Fabricación, acondicionamiento y cambio de tuberías y codos.',
        'Fabricación de líneas de agua',
        'Fabricación y reparación de chutes/tolvas, ']}
      />
      <WhatWeOffer
        title="BOMBAS"
        descripcion="."
        imageURL="/images/servicios/mecanizado.jpg"
        subservicios={['Cambio de bombas',
        'Cambio de partes húmedas',
        'Mantenimiento de bombas centrífugas.']}
      />
    </div>
  );
}

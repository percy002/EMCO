import SwiperCarousel from "@/components/fullPageScrollVertical/SwiperCarousel/SwiperCarousel";
import HeroCarousel from "@/components/mainPage/HeroCarousel";
import WhatWeOffer from "@/components/servicesPage/WhatWeOffer";

export default function page() {
  return (
    <div className="mt-28">
      <WhatWeOffer
        title="REPARACION Y FABRICACION DE PIEZAS"
        descripcion="En esta área, nos caracterizamos por entregar trabajos de precisión y en los plazos establecidos por el cliente, para lo anterior nuestro equipo de trabajo contamos con instrumentos certificados y calibrados en el área de metrología con modernas maquinarias, lo cual entrega confiabilidad y calidad en nuestros trabajos"
        imageURL="/images/servicios/Reparacion_fabricacion_piezas.jpg"
        subservicios={['reparación','fabricación']}
      />
      <WhatWeOffer
        title="MECANIZADO"
        descripcion="En esta área, nos caracterizamos por entregar trabajos de precisión y en los plazos establecidos por el cliente, para lo anterior nuestro equipo de trabajo contamos con instrumentos certificados y calibrados en el área de metrología con modernas maquinarias, lo cual entrega confiabilidad y calidad en nuestros trabajos"
        imageURL="/images/servicios/mecanizado.jpg"
        subservicios={['mecanizado1','mecanizado2', 'mecanizado3']}
      />
    </div>
  );
}

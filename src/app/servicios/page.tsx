import SwiperCarousel from "@/components/fullPageScrollVertical/SwiperCarousel/SwiperCarousel";
import HeroCarousel from "@/components/mainPage/HeroCarousel";
import WhatWeOffer, {
  Subservicio,
} from "@/components/servicesPage/WhatWeOffer";

export default function page() {
  const serviciosMecanizado: Subservicio[] = [
    {
      title: "mecanizado 1",
      imageURL: "/images/servicios/Reparacion_fabricacion_piezas.jpg",
      caracteristicas: ["calidad", "precisión", "responsabilidad"],
    },
    {
      title: "mecanizado 2",
      imageURL: "/images/servicios/mecanizado.jpg",
      caracteristicas: ["calidad", "precisión"],
    },
  ];
  return (
    <div className="mt-28">
      <WhatWeOffer
        title="REPARACION Y FABRICACION DE PIEZAS"
        descripcion="En esta área, nos caracterizamos por entregar trabajos de precisión y en los plazos establecidos por el cliente, para lo anterior nuestro equipo de trabajo contamos con instrumentos certificados y calibrados en el área de metrología con modernas maquinarias, lo cual entrega confiabilidad y calidad en nuestros trabajos"
        subservicios={serviciosMecanizado}
      />
      <WhatWeOffer
        title="MECANIZADO"
        descripcion="En esta área, nos caracterizamos por entregar trabajos de precisión y en los plazos establecidos por el cliente, para lo anterior nuestro equipo de trabajo contamos con instrumentos certificados y calibrados en el área de metrología con modernas maquinarias, lo cual entrega confiabilidad y calidad en nuestros trabajos"
        subservicios={serviciosMecanizado}
      />
    </div>
  );
}

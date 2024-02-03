import React from 'react'
import HeroCarousel from './HeroCarousel'

export default function MainPage() {
  const carouselData = [
    {
      imageURL: '/images/banner/portada.png',
      title: 'EMCO MINERAL SAC',
      subtitle: 'Especialistas en mineria y construcción',
    },
    {
      imageURL: '/images/banner/soldador.jpg',
      title: 'EMCO MINERAL SAC',
      subtitle: 'Especialistas en mineria y construcción',
    },
    // ... más elementos
  ];
  return (
    <div>
        <HeroCarousel carouselElements={carouselData}/>
    </div>
  )
}

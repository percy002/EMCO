import React from 'react'
import HeroCarousel from './HeroCarousel'

export default function MainPage() {
  const carouselData = [
    {
      imageURL: '/images/banner/bannerInicio1.jpg',
      title: 'El río Chili vuelve a sonreír',
      subtitle: 'Gracias al circulo virtuoso del agua',
    },
    {
      imageURL: '/images/banner/bannerInicio2.jpg',
      title: 'Arequipa más verde que nunca',
      subtitle: 'con más de 800,000 arboles plantados',
    },
    // ... más elementos
  ];
  return (
    <div>
        <HeroCarousel carouselElements={carouselData}/>
    </div>
  )
}

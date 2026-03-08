"use client"
import React from 'react'
import GalleryCard from '../Cards/GalleryCard'

const Gallery = ({ visitedPages }) => {
  const galleryImages = [
    {
      src: '/images/gallery/cdo-deployment.jpg',
      alt: 'CDO Deployment'
    },
    {
      src: '/images/gallery/car-emp-tech-expo.jpg',
      alt: 'CAR EMP Tech Expo'
    }
  ];

  return (
    <div
      id="gallery"
      className={`transition-opacity duration-500 ${visitedPages.has("gallery") ? "fade-in" : ""}`}
    >
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
        {galleryImages.map((image, index) => (
          <GalleryCard
            key={index}
            image={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery


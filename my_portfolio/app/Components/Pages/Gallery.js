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
    <div className='w-full px-4 md:px-8 lg:px-12'>
      <div 
        id="gallery"
        className={`w-[1250px] rounded-2xl overflow-hidden relative border border-gray-200 bg-white shadow-sm ${visitedPages.has("gallery") ? "fade-in" : ""}`}
      >
        <div className='relative z-10 p-6 md:p-8'>
          <h2 className='text-black/[.9] font-ubold text-2xl md:text-3xl mb-8'>Gallery</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {galleryImages.map((image, index) => (
              <GalleryCard
                key={index}
                image={image.src}
                alt={image.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery


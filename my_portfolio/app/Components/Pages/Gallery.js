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
    <div className='w-full px-4 md:px-8 lg:px-12 mb-10'>
      <div 
        id="gallery"
        className={`w-full max-w-[1250px] mx-auto rounded-2xl overflow-hidden relative border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm ${visitedPages.has("gallery") ? "fade-in" : ""}`}
      >
        <div className='relative z-10 p-4 md:p-6 lg:p-8'>
          <h2 className='text-black/[.9] dark:text-white/[.9] font-ubold text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8'>Gallery</h2>
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
      </div>
    </div>
  )
}

export default Gallery


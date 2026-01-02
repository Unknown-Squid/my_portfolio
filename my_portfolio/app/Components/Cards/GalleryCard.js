"use client"
import React from 'react'
import Image from 'next/image'

const GalleryCard = ({ image, alt }) => {
  return (
    <div className='relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow group'>
      <div className='relative w-full aspect-video overflow-hidden'>
        <Image
          src={image}
          alt={alt}
          fill
          className='object-cover group-hover:scale-105 transition-transform duration-300'
        />
      </div>
    </div>
  )
}

export default GalleryCard


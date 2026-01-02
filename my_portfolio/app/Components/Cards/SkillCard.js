"use client"
import React from 'react'
import Image from 'next/image'

const SkillCard = ({ image, title, icon: Icon }) => {
  return (
    <div className='flex flex-col items-center gap-4 p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow'>
      <div className='w-16 h-16 flex items-center justify-center'>
        {image ? (
          <Image
            src={image}
            width={64}
            height={64}
            alt={title}
            className='w-full h-full object-contain'
          />
        ) : Icon ? (
          <div className='w-16 h-16 rounded-full bg-black/[.05] flex items-center justify-center'>
            <Icon sx={{ fontSize: 32, color: 'rgba(0, 0, 0, 0.8)' }} />
          </div>
        ) : (
          <div className='w-16 h-16 rounded-full bg-black/[.05] flex items-center justify-center'>
            <span className='text-2xl'>⚡</span>
          </div>
        )}
      </div>
      <h3 className='text-black/[.9] font-usbold text-base text-center'>{title}</h3>
    </div>
  )
}

export default SkillCard


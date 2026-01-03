"use client"
import React from 'react'
import Image from 'next/image'
import { useTheme } from '../../context/ThemeContext'

const SkillCard = ({ image, title, icon: Icon }) => {
  const { isDark } = useTheme();
  return (
    <div className='flex flex-col items-center gap-3 md:gap-4 p-4 md:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow'>
      <div className='w-12 h-12 md:w-16 md:h-16 flex items-center justify-center'>
        {image ? (
          <Image
            src={image}
            width={64}
            height={64}
            alt={title}
            className='w-full h-full object-contain'
          />
        ) : Icon ? (
          <div className='w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/[.05] dark:bg-white/[.05] flex items-center justify-center'>
            <Icon sx={{ fontSize: '28px', color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)' }} />
          </div>
        ) : (
          <div className='w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/[.05] dark:bg-white/[.05] flex items-center justify-center'>
            <span className='text-xl md:text-2xl'>⚡</span>
          </div>
        )}
      </div>
      <h3 className='text-black/[.9] dark:text-white/[.9] font-usbold text-sm md:text-base text-center'>{title}</h3>
    </div>
  )
}

export default SkillCard


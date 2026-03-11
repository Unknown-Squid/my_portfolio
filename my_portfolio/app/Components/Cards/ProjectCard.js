"use client"
import React from 'react'
import Image from 'next/image'

const ProjectCard = ({ title, subtitle, category, description, technologies, thumbnail, deployed, deployment, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className='h-full p-4 md:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow relative cursor-pointer flex flex-col'
    >
      {thumbnail && (
        <div className='relative w-full h-48 mb-4 rounded-xl overflow-hidden flex-shrink-0 bg-white'>
          <Image
            src={thumbnail}
            alt={title}
            fill
            className='object-contain'
          />
        </div>
      )}
      <div className='flex items-start justify-between gap-2 mb-2 flex-shrink-0'>
        {category && (
          <p className='text-black/[.5] dark:text-white/[.5] font-medium text-xs uppercase tracking-wide'>{category}</p>
        )}
        {deployed && deployment && (
          <span className='px-2 py-1 rounded-md bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium text-xs border border-green-200 dark:border-green-800 whitespace-nowrap'>
            ✓ {deployment}
          </span>
        )}
      </div>
      <h3 className='text-black/[.9] dark:text-white/[.9] font-usbold text-lg md:text-xl mb-1 flex-shrink-0'>{title}</h3>
      {subtitle && (
        <p className='text-black/[.6] dark:text-white/[.6] font-medium text-xs md:text-sm mb-3 flex-shrink-0'>{subtitle}</p>
      )}
      <p className='text-black/[.8] dark:text-white/[.8] text-xs md:text-sm leading-relaxed mb-4 flex-grow'>{description}</p>
      {technologies && technologies.length > 0 && (
        <div className='flex flex-wrap gap-2 flex-shrink-0'>
          {technologies.map((tech, index) => (
            <span
              key={index}
              className='px-2 md:px-3 py-1 rounded-lg bg-black/[.05] dark:bg-white/[.05] text-black/[.7] dark:text-white/[.7] font-medium text-xs border border-gray-200 dark:border-gray-700'
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectCard


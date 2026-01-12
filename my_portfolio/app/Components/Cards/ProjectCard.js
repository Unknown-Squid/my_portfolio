"use client"
import React from 'react'

const ProjectCard = ({ title, subtitle, category, description, technologies, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className='p-4 md:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow relative cursor-pointer'
    >
      {category && (
        <p className='text-black/[.5] dark:text-white/[.5] font-medium text-xs mb-2 uppercase tracking-wide'>{category}</p>
      )}
      <h3 className='text-black/[.9] dark:text-white/[.9] font-usbold text-lg md:text-xl mb-1'>{title}</h3>
      {subtitle && (
        <p className='text-black/[.6] dark:text-white/[.6] font-medium text-xs md:text-sm mb-3'>{subtitle}</p>
      )}
      <p className='text-black/[.8] dark:text-white/[.8] text-xs md:text-sm leading-relaxed mb-4'>{description}</p>
      {technologies && technologies.length > 0 && (
        <div className='flex flex-wrap gap-2'>
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


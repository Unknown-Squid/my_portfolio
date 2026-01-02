"use client"
import React from 'react'

const ProjectCard = ({ title, subtitle, category, description, technologies, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className='p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow relative cursor-pointer'
    >
      {category && (
        <p className='text-black/[.5] font-medium text-xs mb-2 uppercase tracking-wide'>{category}</p>
      )}
      <h3 className='text-black/[.9] font-usbold text-xl mb-1'>{title}</h3>
      {subtitle && (
        <p className='text-black/[.6] font-medium text-sm mb-3'>{subtitle}</p>
      )}
      <p className='text-black/[.8] text-sm leading-relaxed mb-4'>{description}</p>
      {technologies && technologies.length > 0 && (
        <div className='flex flex-wrap gap-2'>
          {technologies.map((tech, index) => (
            <span
              key={index}
              className='px-3 py-1 rounded-lg bg-black/[.05] text-black/[.7] font-medium text-xs border border-gray-200'
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


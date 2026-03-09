"use client"
import React from 'react'
import { ArrowForward } from '@mui/icons-material';

const ProjectsHeader = ({ onSeeAllClick }) => {
  return (
    <div className='flex items-center justify-between transition-colors duration-300'>
      <h2 className='text-2xl md:text-3xl font-ubold text-black dark:text-white transition-colors duration-300'>Projects</h2>
      <button
        onClick={onSeeAllClick}
        className='flex items-center gap-1 text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-medium'
      >
        See all projects
        <ArrowForward sx={{ fontSize: '16px', transition: 'color 0.3s ease' }} />
      </button>
    </div>
  )
}

export default ProjectsHeader

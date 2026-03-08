"use client"
import React from 'react'
import { ArrowForward } from '@mui/icons-material';

const TechStackHeader = ({ onViewAllClick }) => {
  return (
    <div className='flex items-center justify-between'>
      <h2 className='text-2xl md:text-3xl font-ubold text-black dark:text-white'>Tech Stack</h2>
      <button
        onClick={onViewAllClick}
        className='flex items-center gap-1 text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors font-medium'
      >
        View All
        <ArrowForward sx={{ fontSize: '16px' }} />
      </button>
    </div>
  )
}

export default TechStackHeader

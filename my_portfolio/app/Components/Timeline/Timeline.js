"use client"
import React from 'react'

const Timeline = ({ roles, activeRole, className = '' }) => {
  return (
    <div className={`border-l-2 border-gray-200 dark:border-gray-700 pl-6 space-y-6 ${className}`}>
      {roles.map((role, index) => (
        <div key={index} className='relative'>
          <div className={`absolute -left-[29px] top-1 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
            role.isActive 
              ? 'bg-black dark:bg-white border-black dark:border-white scale-125' 
              : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
          }`}></div>
          <div className={`transition-all duration-300 ${
            role.isActive 
              ? 'text-black dark:text-white font-ubold text-base' 
              : 'text-gray-400 dark:text-gray-600 text-sm'
          }`}>
            {role.name}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline

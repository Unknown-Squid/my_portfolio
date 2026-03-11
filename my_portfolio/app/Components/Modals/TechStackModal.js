"use client"
import React, { useEffect } from 'react'
import { Close } from '@mui/icons-material'

const TechStackModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  const allTechCategoriesForModal = [
    {
      title: 'Programming Languages',
      technologies: ['JavaScript', 'PHP', 'Python', 'C#', 'Java', 'Kotlin']
    },
    {
      title: 'Frameworks & Libraries',
      technologies: ['React', 'Next.js', 'Vue', 'React Native', 'Laravel', 'Express.js', 'Sequelize', 'Expo', 'Drupal Webform']
    },
    {
      title: 'CSS Frameworks',
      technologies: ['Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Runtime Environment',
      technologies: ['Node.js']
    },
    {
      title: 'Databases',
      technologies: ['MySQL', 'MongoDB']
    },
    {
      title: 'DevOps & Version Control',
      technologies: ['Git', 'GitHub', 'Docker', 'AWS']
    },
    {
      title: 'Tools & Platforms',
      technologies: ['Postman', 'Laragon', 'XAMPP', 'Vite', 'MySQL Workbench', 'MongoDB Compass']
    },
    {
      title: 'IDEs & Development Environments',
      technologies: ['Visual Studio 2022', 'Visual Studio Code', 'Cursor', 'Android Studio', 'PyCharm', 'Arduino IDE']
    },
    {
      title: 'Collaboration & Productivity Tools',
      technologies: ['Jira', 'Trello', 'Notion', 'Figma', 'Google Meet']
    }
  ];

  if (!isOpen) return null;

  return (
    <div 
      className='fixed inset-0 bg-black/[.8] z-[100] flex items-center justify-center p-4'
      onClick={onClose}
    >
      <div 
        className='bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-lg transition-colors duration-300'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between z-10 transition-colors duration-300'>
          <h2 className='text-black/[.9] dark:text-white/[.9] font-ubold text-2xl md:text-3xl'>Tech Stack - Full List</h2>
          <button
            onClick={onClose}
            className='p-2 hover:bg-black/[.05] dark:hover:bg-white/[.05] rounded-lg transition-colors'
          >
            <Close className='text-black/[.7] dark:text-white/[.7]' />
          </button>
        </div>
        <div className='p-6 md:p-8 space-y-8'>
          {allTechCategoriesForModal.map((category, index) => (
            <div key={index} className='space-y-4'>
              <h3 className='text-black/[.9] dark:text-white/[.9] font-usbold text-sm'>{category.title}</h3>
              <div className='flex flex-wrap gap-3'>
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='px-4 py-2 rounded-lg bg-black/[.05] dark:bg-white/[.05] text-black/[.8] dark:text-white/[.8] font-medium text-sm border border-gray-200 dark:border-gray-700 hover:bg-black/[.1] dark:hover:bg-white/[.1] transition-colors'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStackModal


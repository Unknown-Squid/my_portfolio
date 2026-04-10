"use client"
import React, { useEffect } from 'react'
import { Close } from '@mui/icons-material'

const TechStackModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => (document.body.style.overflow = 'unset')
  }, [isOpen])

  const categories = [
    {
      title: 'Programming Languages',
      technologies: [
        'JavaScript / TypeScript',
        'PHP',
        'C# / VB.NET',
        'Java',
        'Kotlin',
        'Python'
      ]
    },
    {
      title: 'Frontend',
      technologies: [
        'React',
        'Next.js',
        'Vue',
        'React Native',
        'Expo'
      ]
    },
    {
      title: 'Backend',
      technologies: [
        'Node.js',
        'Express.js',
        'Laravel',
        'Django',
        'Flask',
        'FastAPI'
      ]
    },
    {
      title: 'Databases',
      technologies: [
        'MySQL',
        'PostgreSQL',
        'MongoDB'
      ]
    },
    {
      title: 'Cloud & DevOps',
      technologies: [
        'AWS',
        'GCP',
        'Docker',
        'CI/CD',
        'Git',
        'GitHub Actions'
      ]
    },
    {
      title: 'CMS & Enterprise Platforms',
      technologies: [
        'WordPress',
        'Drupal',
        'Drupal Webform'
      ]
    },
    {
      title: 'APIs & Integrations',
      technologies: [
        'Google Maps API',
        'Tesseract OCR',
        'Payment Gateways',
        'SMS Gateways',
        'REST / GraphQL APIs'
      ]
    },
    {
      title: 'AI-Assisted Development',
      technologies: [
        'Cursor AI',
        'GitHub Copilot',
        'ChatGPT',
        'Claude AI'
      ]
    },
    {
      title: 'Development Tools',
      technologies: [
        'Postman',
        'MySQL Workbench',
        'MongoDB Compass',
        'Vite',
        'Figma',
        'Notion',
        'Jira',
        'Trello'
      ]
    },
    {
      title: 'IDEs',
      technologies: [
        'VS Code',
        'Visual Studio 2022',
        'Android Studio',
        'PyCharm'
      ]
    }
  ]

  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 bg-black/[.8] z-[100] flex items-center justify-center p-4'
      onClick={onClose}
    >
      <div
        className='bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-lg'
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className='sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between'>
          <h2 className='text-black dark:text-white font-ubold text-2xl md:text-3xl'>
            Tech Stack — Full Architecture Overview
          </h2>

          <button
            onClick={onClose}
            className='p-2 hover:bg-black/[.05] dark:hover:bg-white/[.05] rounded-lg transition-colors'
          >
            <Close className='text-black dark:text-white' />
          </button>
        </div>

        {/* CONTENT */}
        <div className='p-6 md:p-8 space-y-8'>
          {categories.map((category, index) => (
            <div key={index} className='space-y-4'>
              <h3 className='text-black dark:text-white font-usbold text-sm md:text-base'>
                {category.title}
              </h3>

              <div className='flex flex-wrap gap-3'>
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='px-4 py-2 rounded-lg
                    bg-black/[.05] dark:bg-white/[.05]
                    text-black dark:text-white
                    font-medium text-sm
                    border border-gray-200 dark:border-gray-700
                    hover:bg-black/[.1] dark:hover:bg-white/[.1]
                    transition-colors'
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
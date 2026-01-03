"use client"
import React, { useState } from 'react'
import TechStackModal from '../Modals/TechStackModal'

const TechStack = ({ visitedPages }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const techCategories = [
    {
      title: 'Languages',
      technologies: ['JavaScript', 'Python', 'PHP', 'Java', 'C++', 'C#']
    },
    {
      title: 'Frontend',
      technologies: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'CSS', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      technologies: ['Node.js', 'Express', 'PHP', 'Laravel', 'Java']
    },
    {
      title: 'DevOps & Cloud',
      technologies: ['Docker', 'AWS', 'GitHub Actions', 'CI/CD']
    }
  ];

  return (
    <>
      <div className='w-full px-4 md:px-8 lg:px-12'>
        <div 
          id="tech-stack"
          className={`w-full max-w-[1250px] mx-auto rounded-2xl overflow-hidden relative border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm ${visitedPages.has("tech-stack") ? "fade-in" : ""}`}
        >
          <div className='relative z-10 p-4 md:p-6 lg:p-8'>
            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 md:mb-6'>
              <h2 className='text-black/[.9] dark:text-white/[.9] font-ubold text-xl md:text-2xl lg:text-3xl'>Tech Stack</h2>
              <button
                onClick={() => setIsModalOpen(true)}
                className='px-3 py-1 text-xs md:text-sm text-black/[.7] dark:text-white/[.7] border border-black/[.3] dark:border-white/[.3] rounded-lg hover:bg-black/[.05] dark:hover:bg-white/[.05] transition-colors font-medium'
              >
                View More
              </button>
            </div>
            <div className='flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-8'>
              <div className='space-y-6 md:space-y-8 flex-1'>
                  {techCategories.filter(category => category.title !== 'Languages' && category.title !== 'DevOps & Cloud').map((category, index) => (
                  <div key={index} className='space-y-3 md:space-y-4'>
                      <h3 className='text-black/[.9] dark:text-white/[.9] font-usbold text-xs md:text-sm'>{category.title}</h3>
                      <div className='flex flex-wrap gap-2 md:gap-3'>
                      {category.technologies.map((tech, techIndex) => (
                          <span
                          key={techIndex}
                          className='px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-black/[.05] dark:bg-white/[.05] text-black/[.8] dark:text-white/[.8] font-medium text-xs md:text-sm border border-gray-200 dark:border-gray-700 hover:bg-black/[.1] dark:hover:bg-white/[.1] transition-colors'
                          >
                          {tech}
                          </span>
                      ))}
                      </div>
                  </div>
                  ))}
              </div>
              <div className='space-y-6 md:space-y-8 flex-1'>
                {techCategories.filter(category => category.title === 'Languages' || category.title === 'DevOps & Cloud').map((category, index) => (
                  <div key={index} className='space-y-3 md:space-y-4'>
                    <h3 className='text-black/[.9] dark:text-white/[.9] font-usbold text-xs md:text-sm'>{category.title}</h3>
                    <div className='flex flex-wrap gap-2 md:gap-3'>
                      {category.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className='px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-black/[.05] dark:bg-white/[.05] text-black/[.8] dark:text-white/[.8] font-medium text-xs md:text-sm border border-gray-200 dark:border-gray-700 hover:bg-black/[.1] dark:hover:bg-white/[.1] transition-colors'
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
        </div>
      </div>

      <TechStackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default TechStack

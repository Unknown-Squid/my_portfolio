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
          className={`w-[1250px] rounded-2xl overflow-hidden relative border border-gray-200 bg-white shadow-sm ${visitedPages.has("tech-stack") ? "fade-in" : ""}`}
        >
          <div className='relative z-10 p-6 md:p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <h2 className='text-black/[.9] font-ubold text-2xl md:text-3xl'>Tech Stack</h2>
              <button
                onClick={() => setIsModalOpen(true)}
                className='px-3 py-1 text-sm text-black/[.7] border border-black/[.3] rounded-lg hover:bg-black/[.05] transition-colors font-medium'
              >
                View More
              </button>
            </div>
            <div className='flex justify-between'>
              <div className='space-y-8'>
                  {techCategories.filter(category => category.title !== 'Languages' && category.title !== 'DevOps & Cloud').map((category, index) => (
                  <div key={index} className='space-y-4'>
                      <h3 className='text-black/[.9] font-usbold text-sm'>{category.title}</h3>
                      <div className='flex flex-wrap gap-3'>
                      {category.technologies.map((tech, techIndex) => (
                          <span
                          key={techIndex}
                          className='px-4 py-2 rounded-lg bg-black/[.05] text-black/[.8] font-medium text-sm border border-gray-200 hover:bg-black/[.1] transition-colors'
                          >
                          {tech}
                          </span>
                      ))}
                      </div>
                  </div>
                  ))}
              </div>
              <div className='space-y-8'>
                {techCategories.filter(category => category.title === 'Languages' || category.title === 'DevOps & Cloud').map((category, index) => (
                  <div key={index} className='space-y-4'>
                    <h3 className='text-black/[.9] font-usbold text-sm'>{category.title}</h3>
                    <div className='flex flex-wrap gap-3'>
                      {category.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className='px-4 py-2 rounded-lg bg-black/[.05] text-black/[.8] font-medium text-sm border border-gray-200 hover:bg-black/[.1] transition-colors'
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

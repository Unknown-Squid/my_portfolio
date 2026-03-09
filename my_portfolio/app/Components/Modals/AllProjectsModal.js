"use client"
import React, { useEffect, useState } from 'react'
import { Close } from '@mui/icons-material'
import ProjectCard from '../Cards/ProjectCard'
import ProjectModal from './ProjectModal'

const AllProjectsModal = ({ isOpen, onClose, allProjects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

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

  if (!isOpen) return null;

  return (
    <>
      <div 
        className='fixed inset-0 bg-black/[.8] z-[100] flex items-center justify-center p-4'
        onClick={onClose}
      >
        <div 
          className='bg-white dark:bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-lg transition-colors duration-300'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between z-10 transition-colors duration-300'>
            <h2 className='text-black/[.9] dark:text-white/[.9] font-ubold text-2xl md:text-3xl'>All Projects</h2>
            <button
              onClick={onClose}
              className='p-2 hover:bg-black/[.05] dark:hover:bg-white/[.05] rounded-lg transition-colors'
            >
              <Close className='text-black/[.7] dark:text-white/[.7]' />
            </button>
          </div>
          <div className='p-6 md:p-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
              {allProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  category={project.category}
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  technologies={project.technologies}
                  thumbnail={project.thumbnail}
                  deployed={project.deployed}
                  deployment={project.deployment}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  )
}

export default AllProjectsModal

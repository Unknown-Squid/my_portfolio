"use client"
import React, { useEffect } from 'react'
import { Close } from '@mui/icons-material'
import Image from 'next/image'

const ProjectModal = ({ isOpen, onClose, project }) => {
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

  if (!isOpen || !project) return null;

  const isVideo = project.media && /\.(mp4|webm|ogg|mov)$/i.test(project.media);
  const isImage = project.media && /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(project.media);

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
          <div>
            {project.category && (
              <p className='text-black/[.5] dark:text-white/[.5] font-medium text-xs uppercase tracking-wide'>{project.category}</p>
            )}
            <h2 className='text-black/[.9] dark:text-white/[.9] font-ubold text-2xl md:text-3xl'>{project.title}</h2>
            {project.subtitle && (
              <p className='text-black/[.6] dark:text-white/[.6] font-medium text-sm'>{project.subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className='p-2 hover:bg-black/[.05] dark:hover:bg-white/[.05] rounded-lg transition-colors'
          >
            <Close className='text-black/[.7] dark:text-white/[.7]' />
          </button>
        </div>
        
        <div className='p-6 md:p-8'>
          {project.media && (
            <div className='mb-6 rounded-lg overflow-hidden bg-black/[.05] relative'>
              {project.isDeveloping && (
                <div 
                  className='absolute inset-0 bg-black/80 backdrop-blur-sm rounded-lg z-20 cursor-not-allowed pointer-events-auto flex items-center justify-center'
                  onClick={(e) => e.preventDefault()}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <div className='text-center'>
                    <p className='text-emerald-300 font-ubold text-xl md:text-2xl mb-2'>Working...</p>
                    <p className='text-emerald-200/70 font-usbold text-sm md:text-base'>This feature is under development</p>
                  </div>
                </div>
              )}
              {isVideo && project.animationGif ? (
                <div className='relative w-full max-w-[400px] h-[400px] mx-auto flex justify-center items-center rounded-full bg-black/20 overflow-hidden' style={{ boxShadow: "0 20px 60px rgba(16, 185, 129, 0.4), 0 10px 20px rgba(0, 0, 0, 0.1)" }}>
                  <div className='absolute top-0 left-0 w-full h-full rounded-full overflow-hidden bg-black/10'>
                    <video 
                      className='w-full h-full object-cover opacity-50' 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      preload="auto"
                    >
                      <source src={project.media} type="video/mp4" />
                    </video>
                  </div>
                  <div className='w-[60%] h-[60%] rounded-full flex justify-center items-center overflow-hidden absolute bg-black/10'>
                    <Image
                      src={project.animationGif}
                      width={500}
                      height={500}
                      alt="squid-lib-animation"
                      className='w-full h-full object-contain rounded-full opacity-60'
                    />
                  </div>
                </div>
              ) : isVideo ? (
                <video 
                  className='w-full h-auto max-h-[500px] object-contain'
                  controls
                  autoPlay
                  loop
                  muted
                >
                  <source src={project.media} type="video/mp4" />
                </video>
              ) : isImage ? (
                <div className='relative w-full h-auto max-h-[500px]'>
                  <Image
                    src={project.media}
                    alt={project.title}
                    width={1200}
                    height={800}
                    className='w-full h-auto object-contain'
                  />
                </div>
              ) : null}
            </div>
          )}

          <div className='space-y-6'>
            <div>
              <h3 className='text-black/[.9] dark:text-white/[.9] font-usbold text-lg mb-3'>Description</h3>
              <p className='text-black/[.8] dark:text-white/[.8] text-sm leading-relaxed'>{project.description}</p>
            </div>

            {project.technologies && project.technologies.length > 0 && (
              <div>
                <h3 className='text-black/[.9] dark:text-white/[.9] font-usbold text-lg mb-3'>Technologies Used</h3>
                <div className='flex flex-wrap gap-3'>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className='px-4 py-2 rounded-lg bg-black/[.05] dark:bg-white/[.05] text-black/[.8] dark:text-white/[.8] font-medium text-sm border border-gray-200 dark:border-gray-700'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.components && project.components.length > 0 && (
              <div>
                <h3 className='text-black/[.9] dark:text-white/[.9] font-usbold text-lg mb-3'>Components Used</h3>
                <div className='flex flex-wrap gap-3'>
                  {project.components.map((component, index) => (
                    <span
                      key={index}
                      className='px-4 py-2 rounded-lg bg-black/[.05] dark:bg-white/[.05] text-black/[.8] dark:text-white/[.8] font-medium text-sm border border-gray-200 dark:border-gray-700'
                    >
                      {component}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.tools && project.tools.length > 0 && (
              <div>
                <h3 className='text-black/[.9] dark:text-white/[.9] font-usbold text-lg mb-3'>Development Tools</h3>
                <div className='flex flex-wrap gap-3'>
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className='px-4 py-2 rounded-lg bg-black/[.05] dark:bg-white/[.05] text-black/[.8] dark:text-white/[.8] font-medium text-sm border border-gray-200 dark:border-gray-700'
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal


"use client"
import React, { useRef } from 'react'
import TechStackModal from '../Modals/TechStackModal'

const TechStack = ({ visitedPages, isModalOpen, onModalClose }) => {

  const frontendTech = ['React', 'Next.js', 'Vue', 'React Native', 'Expo', 'Tailwind CSS', 'Bootstrap'];
  const backendTech = ['Node.js', 'Express.js', 'Laravel', 'Sequelize', 'MySQL', 'MongoDB'];
  const languagesTech = ['JavaScript', 'PHP', 'Python', 'C#', 'Java'];

  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = React.useRef(null);
  const hasBeenVisible = React.useRef(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible.current) {
          setIsVisible(true);
          hasBeenVisible.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <>
      <div 
        id="tech-stack"
        ref={elementRef}
        className={`transition-opacity duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className='space-y-6'>
            <div>
              <h3 className='text-base md:text-lg font-usbold text-black dark:text-white mb-3'>Frontend</h3>
              <div className='flex flex-wrap gap-2 md:gap-3'>
                {frontendTech.map((tech, index) => (
                  <span
                    key={index}
                    className='px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-black dark:text-white font-medium text-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className='text-base md:text-lg font-usbold text-black dark:text-white mb-3'>Backend</h3>
              <div className='flex flex-wrap gap-2 md:gap-3'>
                {backendTech.map((tech, index) => (
                  <span
                    key={index}
                    className='px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-black dark:text-white font-medium text-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className='text-base md:text-lg font-usbold text-black dark:text-white mb-3'>Programming Languages</h3>
              <div className='flex flex-wrap gap-2 md:gap-3'>
                {languagesTech.map((tech, index) => (
                  <span
                    key={index}
                    className='px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-black dark:text-white font-medium text-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
      </div>

      <TechStackModal isOpen={isModalOpen} onClose={onModalClose} />
    </>
  )
}

export default TechStack

"use client"
import React from 'react'
import TechStackModal from '../Modals/TechStackModal'

const TechStack = ({ visitedPages, isModalOpen, onModalClose }) => {

  const frontendTech = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS'];
  const backendTech = ['Node.js', 'Python', 'PHP', 'Laravel', 'PostgreSQL', 'MongoDB'];
  const devopsTech = ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'];

  const [opacity, setOpacity] = React.useState(0.3);

  React.useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('tech-stack');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        
        if (elementTop < windowHeight && elementTop > -rect.height) {
          const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + rect.height)));
          setOpacity(0.3 + (scrollProgress * 0.7));
        } else if (elementTop <= -rect.height) {
          setOpacity(1);
        } else {
          setOpacity(0.3);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div 
        id="tech-stack"
        className={`transition-opacity duration-500 ${visitedPages.has("tech-stack") ? "fade-in" : ""}`}
        style={{ opacity }}
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
              <h3 className='text-base md:text-lg font-usbold text-black dark:text-white mb-3'>DevOps & Cloud</h3>
              <div className='flex flex-wrap gap-2 md:gap-3'>
                {devopsTech.map((tech, index) => (
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

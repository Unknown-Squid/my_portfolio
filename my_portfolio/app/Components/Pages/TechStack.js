"use client"
import React from 'react'
import TechStackModal from '../Modals/TechStackModal'

const TechStack = ({ isModalOpen, onModalClose }) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const elementRef = React.useRef(null)
  const hasBeenVisible = React.useRef(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasBeenVisible.current) {
        setIsVisible(true)
        hasBeenVisible.current = true
      }
    }, { threshold: 0.1 })

    if (elementRef.current) observer.observe(elementRef.current)

    return () => observer.disconnect()
  }, [])

  const highlights = [
    'React', 'TypeScript', 'Next.js', 'React Native',
    'Node.js', 'Laravel', 'PHP', 'Python', 'C#',
    'MySQL', 'MongoDB',
    'AWS', 'GCP', 'Docker', 'CI/CD',
    'Cursor',
  ]

  return (
    <>
      <div
        id="tech-stack"
        ref={elementRef}
        className={`transition-opacity duration-700 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className='space-y-4'>

          {/* TECH CHIPS (NO HEADERS) */}
          <div className='flex flex-wrap gap-2 md:gap-3'>
            {highlights.map((tech, index) => (
              <span
                key={index}
                className='px-3 md:px-4 py-1.5 md:py-2 rounded-lg
                bg-gray-100 dark:bg-gray-800
                text-black dark:text-white
                font-medium text-sm
                border border-gray-200 dark:border-gray-700
                hover:bg-gray-200 dark:hover:bg-gray-700
                transition-colors'
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </div>

      <TechStackModal isOpen={isModalOpen} onClose={onModalClose} />
    </>
  )
}

export default TechStack
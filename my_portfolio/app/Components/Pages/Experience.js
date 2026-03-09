"use client"
import React, { useEffect, useState, useRef } from 'react'
import GalleryCard from '../Cards/GalleryCard'

const Experience = ({ visitedPages }) => {
  const [activeRole, setActiveRole] = useState('Full-Stack Web Developer');
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);
  const drupalRef = useRef(null);
  const mdmRef = useRef(null);
  const overallRef = useRef(null);
  const hasBeenVisible = useRef(false);

  const galleryImages = [
    {
      src: '/images/gallery/cdo-deployment.jpg',
      alt: 'CDO Deployment'
    },
    {
      src: '/images/gallery/car-emp-tech-expo.jpg',
      alt: 'CAR EMP Tech Expo'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible.current) {
          setIsVisible(true);
          hasBeenVisible.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!experienceRef.current) return;

      // Sticky header is at top-[205px], so check when sections reach ~250px from top
      const headerThreshold = 250;
      const scrollPosition = window.scrollY;
      const experienceTop = experienceRef.current.offsetTop;
      
      // Check if we're past the experience section start
      if (scrollPosition < experienceTop - 100) {
        setActiveRole('Full-Stack Web Developer');
        return;
      }

      // Check each section - when it reaches the top (near header)
      if (overallRef.current && overallRef.current.offsetTop - scrollPosition <= headerThreshold) {
        setActiveRole('Software Engineer');
      } else if (mdmRef.current && mdmRef.current.offsetTop - scrollPosition <= headerThreshold) {
        setActiveRole('Lead System Developer');
      } else if (drupalRef.current && drupalRef.current.offsetTop - scrollPosition <= headerThreshold) {
        setActiveRole('System Developer');
      } else {
        setActiveRole('Full-Stack Web Developer');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const roles = [
    { name: 'Full-Stack Web Developer', isActive: activeRole === 'Full-Stack Web Developer' },
    { name: 'System Developer', isActive: activeRole === 'System Developer' },
    { name: 'Lead System Developer', isActive: activeRole === 'Lead System Developer' },
    { name: 'Software Engineer', isActive: activeRole === 'Software Engineer' }
  ];

  return (
    <div
      id="experience"
      ref={experienceRef}
      className={`transition-opacity duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
        {/* Experience Content */}
        <div className='flex-1 space-y-6 mb-8 max-w-2xl'>
          <div className='border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0 last:pb-0'>
            <p className='text-black/[.7] dark:text-white/[.7] text-xs md:text-sm mb-2 font-ubold'>YouCode Technologies Corporation</p>
            <p className='text-black/[.7] dark:text-white/[.7] text-xs md:text-sm mb-2'>Location</p>
            <p className='text-black/[.6] dark:text-white/[.6] text-xs mb-3'>2024 - 2026</p>
            
            <div className='space-y-3 md:space-y-4'>
              <div ref={drupalRef}>
                <h4 className='text-black/[.9] dark:text-white/[.9] font-usbold text-sm md:text-base mb-2'>Initial Drupal Project</h4>
                <p className='text-black/[.8] dark:text-white/[.8] text-xs md:text-sm leading-relaxed'>
                  Joined as a System Developer with no prior experience in Drupal, 
                  quickly learning the platform to collaborate with clients and review 
                  Figma prototypes. Within three months, built a fully functional system,
                  implementing all core features in both UI and backend, successfully meeting project timelines.
                </p>
              </div>

              <div>
                <h4 className='text-black/[.9] dark:text-white/[.9] font-usbold text-sm md:text-base mb-2'>Mobile Parking System</h4>
                <p className='text-black/[.8] dark:text-white/[.8] text-xs md:text-sm lg:text-base leading-relaxed'>
                  Developed a mobile parking system along with a companion web application
                  for about 2 1/2 months, leading a team and handling both front-end and back-end development. Integrated core functionalities such
                  as user registration, parking slot management, and real-time updates, ensuring seamless
                  interaction between the mobile and web platforms.
                </p>
              </div>

              <div ref={mdmRef}>
                <h4 className='text-black/[.9] dark:text-white/[.9] font-usbold text-sm md:text-base mb-2'>Mobile Device Management System</h4>
                <p className='text-black/[.8] dark:text-white/[.8] text-xs md:text-sm leading-relaxed'>
                  Led a team in developing a mobile device management system for 7 months, implementing all core functionalities and additional features. 
                  Oversaw the entire development lifecycle, from planning and architecture design to deployment, ensuring high-quality deliverables 
                  and timely project completion. Coordinated team efforts across front-end and back-end development, managing code reviews, 
                  feature implementations, and system integrations.
                </p>
              </div>

              <div>
                <h4 className='text-black/[.9] dark:text-white/[.9] font-usbold text-sm md:text-base mb-2'>School Management Information System</h4>
                <p className='text-black/[.8] dark:text-white/[.8] text-xs md:text-sm leading-relaxed'>
                  While leading the team, also joined the second development project for a school management information system. 
                  Embedded the system to hardware turnstile via provided API, integrating the software with physical access control devices. 
                  Eventually took the lead in the development and successfully deployed the system in Cagayan de Oro City, ensuring seamless 
                  integration between the management system and turnstile hardware for efficient school operations.
                </p>
              </div>

              <div ref={overallRef}>
                <h4 className='text-black/[.9] dark:text-white/[.9] font-usbold text-sm md:text-base mb-2'>Overall Responsibilities</h4>
                <p className='text-black/[.8] dark:text-white/[.8] text-xs md:text-sm leading-relaxed'>
                  Throughout the year of my experience, I have been included in all projects and led a team in system architecture design. 
                  Additionally, performed technical interviews for potential team members, conducted training sessions for developers, 
                  and attended various meetings with clients and conventions to discuss project requirements, gather feedback, and stay 
                  updated with industry trends and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline on Right Side */}
        <div className='lg:w-64 lg:flex-shrink-0'>
          <div className='sticky top-[250px]'>
            <div className='border-l-2 border-gray-200 dark:border-gray-700 pl-6 space-y-6'>
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
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className='mt-12'>
        <h3 className='text-xl md:text-2xl font-ubold text-black dark:text-white mb-6'>Gallery</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
          {galleryImages.map((image, index) => (
            <GalleryCard
              key={index}
              image={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience


"use client"
import React, { useEffect, useRef, useState } from 'react'
import GalleryCard from '../Cards/GalleryCard'
import Timeline from '../Timeline/Timeline'

const freelanceSections = [
  {
    id: 'freelance-overview',
    role: 'Full-Stack Software Engineer',
    title: 'Freelance Full-Stack Software Engineer (Local & International Clients)',
    description: `Delivered 15+ full-cycle web applications using React, Next.js, Laravel, Node.js, Python, C#, and WordPress, covering e-commerce, LMS, booking, and analytics systems. End-to-end delivery including API integrations, authentication systems, database architecture, and CI/CD-based deployments.`
  } // Full-Stack Software Engineer
]

const youcodeSections = [
  {
    id: 'cms',
    role: 'System Developer',
    title: 'Enterprise Content Management System (Drupal)',
    description: `Architected a Drupal CMS using PHP, Twig, Bootstrap, and Webform module with custom theme development for structured educational content workflows.`
  },  // System Developer
  {
    id: 'parking',
    role: 'Lead System Developer',
    title: 'Parking Management System (Mobile + Web)',
    description: `Built a React Native + Node.js parking system with Google Maps API and OCR-based plate recognition for real-time vehicle registration and monitoring.`
  }, // lead System Developer
  {
    id: 'mdm',
    role: 'Lead System Developer',
    title: 'Mobile Device Management Platform (1000+ Devices)',
    description: `Architected a large-scale MDM system using React, Next.js, Node.js, MongoDB, MySQL, Java/Kotlin with GCP integrations and AWS deployment, supporting 1000+ Android devices.`
  },
  {
    id: 'smis',
    role: 'Lead System Developer',
    title: 'School Management Information System',
    description: `Developed a Laravel + React system integrated with turnstile hardware APIs for real-time attendance and access control, deployed in production with on-site training.`
  },
  {
    id: 'leadership',
    role: 'Lead System Developer',
    title: 'Leadership & Enterprise Delivery',
    description: `Led system architecture, code reviews, CI/CD workflows, Git-based collaboration, technical hiring, and C-level stakeholder engagements across enterprise systems.`
  }
]

const rolesOrder = [
  'Full-Stack Developer',
  'System Developer',
  'Lead System Developer',
  'Full-Stack Software Engineer'
]

/** After first CMS block crosses trigger: last section whose top passed trigger wins */
const timelineScrollChain = [
  ...youcodeSections.map(s => ({ id: s.id, role: s.role })),
  { id: 'freelance-phase', role: 'Full-Stack Software Engineer' }
]

const Experience = () => {
  const containerRef = useRef(null)
  const [activeRole, setActiveRole] = useState(rolesOrder[0])
  const [isVisible, setIsVisible] = useState(false)

  const galleryImages = [
    { src: '/images/gallery/cdo-deployment.jpg', alt: 'Cagayan De Oro Deployment' },
    { src: '/images/gallery/car-emp-tech-expo.jpg', alt: 'Tech Expo Presentation' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const triggerY = () => window.innerHeight * 0.35

    const updateActive = () => {
      const root = containerRef.current
      if (!root) return
      const y = triggerY()
      let role = rolesOrder[0]
      const rect = root.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > window.innerHeight) return

      const cmsEl = document.getElementById('cms')
      if (cmsEl && cmsEl.getBoundingClientRect().top <= y) {
        role = timelineScrollChain[0].role
        for (const { id, role: r } of timelineScrollChain) {
          const el = document.getElementById(id)
          if (!el) continue
          const top = el.getBoundingClientRect().top
          if (top <= y) role = r
        }
      }
      setActiveRole(role)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive, { passive: true })
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [])

  const roles = rolesOrder.map(role => ({
    name: role,
    isActive: role === activeRole
  }))

  return (
    <div
      id="experience"
      ref={containerRef}
      className={`transition-opacity duration-700 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='flex flex-row gap-8 lg:gap-12'>

        {/* CONTENT */}
        <div className='flex-1 space-y-12 max-w-2xl'>

            {/* YOUCODE */}
            <div>
              <p className='text-black/[.7] dark:text-white/[.7] text-sm font-ubold mb-1'>
                YouCode Technologies Corporation
              </p>
              <p className='text-black/[.6] dark:text-white/[.6] text-xs mb-4'>
                Makati City, Philippines • July 2024 – Present
              </p>

              {youcodeSections.map(section => (
                <div key={section.id} id={section.id} className='space-y-3 mb-8 scroll-mt-32'>
                  <h4 className='text-black/[.9] dark:text-white/[.9] font-usbold text-base'>
                    {section.title}
                  </h4>
                  <p className='text-black/[.8] dark:text-white/[.8] text-sm leading-relaxed'>
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
            {/* FREELANCE */}
            <div id='freelance-phase' className='scroll-mt-32'>
              <p className='text-black/[.7] dark:text-white/[.7] text-sm font-ubold mb-1'>
                Freelance Full-Stack Software Engineer
              </p>
              <p className='text-black/[.6] dark:text-white/[.6] text-xs mb-4'>
                2022 – Present • Remote (Local & International Clients)
              </p>

              {freelanceSections.map(section => (
                <div key={section.id} id={section.id} className='space-y-3 mb-8 scroll-mt-32'>
                  <h4 className='text-black/[.9] dark:text-white/[.9] font-usbold text-base'>
                    {section.title}
                  </h4>
                  <p className='text-black/[.8] dark:text-white/[.8] text-sm leading-relaxed'>
                    {section.description}
                  </p>
                </div>
              ))}
            </div>

        </div>

        {/* TIMELINE */}
        <div className='w-64 flex-shrink-0 hidden min-[769px]:block'>
          <div className='sticky top-[250px]'>
            <Timeline roles={roles} />
          </div>
        </div>

      </div>

      {/* GALLERY */}
      <div className='mt-14'>
        <h3 className='text-black dark:text-white text-2xl font-ubold mb-6'>
          Deployment & Engagements
        </h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {galleryImages.map((image, index) => (
            <GalleryCard key={index} image={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
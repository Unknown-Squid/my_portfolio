"use client"
import React, { useEffect, useState, useRef } from 'react'

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)
  const hasBeenVisible = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasBeenVisible.current) {
        setIsVisible(true)
        hasBeenVisible.current = true
      }
    }, { threshold: 0.1 })

    if (elementRef.current) observer.observe(elementRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      id="about-me"
      ref={elementRef}
      className={`transition-opacity duration-700 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
      Currently serving as Lead System Developer for the past 2 years, architecting and leading the development of MDM, 
      School Management, and other enterprise level system. Results-driven Software Engineer with over 4 years of full-stack 
      development experience across freelance and production systems, specializing in building scalable applications with a 
      strong focus on performance, maintainability, and system integration. Skilled in React, TypeScript, Next.js, Laravel, 
      Node.js, React Native, C#/.NET, WordPress, and Drupal, with experience in OCR automation, hardware integrations, and 
      cloud deployments (AWS, GCP), and a strong track record in technical leadership and system architecture delivery. 
      </p>
    </div>
  )
}

export default AboutMe
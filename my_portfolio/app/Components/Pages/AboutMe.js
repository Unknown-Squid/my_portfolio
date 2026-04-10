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
        Lead Software Engineer with 4+ years of experience building enterprise systems across education and operations-heavy environments. My most recent and impactful work includes a Mobile Device Management platform supporting 1000+ Android devices and a School Management Information System with hardware-integrated attendance and access control, both deployed in real production environments. I specialize in education-focused systems where reliability, scale, and operational accuracy are critical. I work across React, Next.js, Node.js, Laravel, React Native, and .NET with AWS, GCP, Docker, and CI/CD pipelines. I regularly engage in technical discussions and architecture reviews with CTO and CEO-level stakeholders, translating business requirements into scalable engineering solutions from design through deployment.
      </p>
    </div>
  )
}

export default AboutMe
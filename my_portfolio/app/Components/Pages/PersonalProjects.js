"use client"
import React, { useState, useEffect, useRef } from 'react'
import ProjectCard from '../Cards/ProjectCard'
import ProjectModal from '../Modals/ProjectModal'
import AllProjectsModal from '../Modals/AllProjectsModal'

const PersonalProjects = ({ visitedPages, allProjectsModalOpen, onAllProjectsModalClose }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      category: 'Mobile Device Management System',
      title: 'Kippr',
      description: 'A comprehensive Mobile Device Management (MDM) system designed to manage and monitor mobile devices across an organization. The platform provides device enrollment, remote configuration, application management, security policies, and real-time device monitoring. Built with a modern full-stack architecture supporting both web and mobile platforms.',
      technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MySQL', 'Redis', 'Java', 'Kotlin'],
      components: [],
      tools: ['Cursor', 'Android Studio'],
      media: '/projects/mdm-project.mp4',
      thumbnail: '/projects/thumbnail/mdm-thumbnail.png',
      link: 'https://kippr.ph/',
      deployed: true,
      deployment: 'AWS'
    },
    {
      category: 'Booking System',
      title: 'Uncle Drew Sports Center',
      description: 'A comprehensive booking system for Uncle Drew Sports Center with admin panel. The platform enables customers to easily book sports facilities and venues for various events such as basketball games, tournaments, training sessions, and other sporting activities. Features include real-time availability checking, event scheduling, booking management, admin dashboard for managing bookings and facilities, and a user-friendly interface for seamless reservation experience.',
      technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MySQL'],
      components: [],
      tools: ['Cursor'],
      media: '/projects/uncle-drew-sports-center-project.mp4',
      thumbnail: '/projects/thumbnail/uncle-drew-sports-center-thumbnail.png',
      link: 'https://www.uncledrewsportscenter.com/',
      deployed: true,
      deployment: 'Vercel'
    },
    {
      category: 'Handicrafts Website',
      title: 'SJ Handicrafts',
      description: 'An e-commerce website showcasing the exquisite handmade products crafted by SJ Handicrafts, a company based in Albay. The platform features a beautiful product catalog, shopping cart functionality, and seamless user experience to highlight the unique craftsmanship and artistry of their locally-made handicrafts. Built with modern web technologies to provide an elegant online presence for the business.',
      technologies: ['React', 'Next.js'],
      components: [],
      tools: ['Cursor'],
      media: '/projects/sj-handicrafts-project.mp4',
      thumbnail: '/projects/thumbnail/sj-handicrafts-thumbnail.png',
      link: 'https://sjhandicrafts.vercel.app/',
      deployed: true,
      deployment: 'Vercel'
    },
    {
      category: 'Budgeting System Tool',
      title: 'BudgetWise',
      description: 'A comprehensive budgeting system tool that helps users manage their finances by creating budgets and tracking expenses. Features include interactive graphs and analytics for visualizing spending patterns, income trends, and budget performance. The system includes robust input validation, conversion logic, and error handling to ensure accurate financial management. Users can generate detailed reports in multiple formats including CSV and DOC files for record-keeping and analysis.',
      technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
      tools: ['Cursor'],
      media: '/projects/budget-wise-project.mp4',
      thumbnail: '/projects/thumbnail/budget-wise-thumbnail.png',
      link: 'https://budget-wise.duckdns.org/',
      deployed: true,
      deployment: 'AWS'
    },
    {
      category: 'Web-Based Project',
      title: 'Number System Converter',
      description: 'A web-based utility application that converts numbers between different number systems (binary, decimal, hexadecimal, octal). It features a user-friendly interface with input validation, conversion logic, and error handling to ensure accurate and efficient number system conversions.',
      technologies: ['Vue 3, Vite'],
      tools: ['Cursor'],
      media: '/projects/number-system-convertion.mp4',
      thumbnail: '/projects/thumbnail/number-system-convertion-thumbnail.png',
      link: 'https://number-system-convertion-version-2.vercel.app/',
      deployed: true,
      deployment: 'Vercel'
    },
    {
      category: 'Arduino-Based Project',
      title: 'Mood Tank',
      description: 'A robotics project developed using Arduino IDE and C++ programming. This project demonstrates hands-on experience with hardware integration and embedded systems programming, showcasing the ability to work with physical devices and sensors.',
      technologies: ['Arduino', 'C++', 'Embedded Systems'],
      components: ['Arduino Uno', 'Sound Sensor', 'IR Sensor', 'LED', 'Buttons', 'Jumper Wires'],
      tools: ['Arduino IDE'],
      media: '/projects/moodTank.mp4'
    },
    {
      category: 'Web-Based Project',
      title: 'Attendance Checker Using QR Code and OCR',
      description: 'A comprehensive attendance tracking system with OCR and QR code scanning capabilities. Features include automated email notifications, PDF template generation, room management, user management, and student account management. Built as a capstone project during my fourth year of college.',
      technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MySQL', 'Tesseract.js', 'QR Code Scanner'],
      tools: ['Visual Studio Code'],
      media: '/projects/capstone.mp4'
    },
    {
      category: 'Python-Based Project',
      title: 'Simple Car Game',
      description: 'An interactive car game developed using Python. This was my first complex programming project, showcasing game development skills and demonstrating proficiency in Python programming through an engaging, user-interactive application.',
      technologies: ['Python', 'Pygame'],
      tools: ['Pydroid 3.0'],
      media: '/projects/carGame.mp4'
    },
    {
      category: 'C#-Based Project',
      title: 'Simple Attendance Checker Input Based Check In',
      description: 'A straightforward attendance tracking tool developed during my second year of college. The system generates visual representations of section schedules for each subject, providing an efficient way to manage and track student attendance with check-in and check-out functionality.',
      technologies: ['C#', 'VB.NET', 'MySQL'],
      tools: ['Visual Studio 2022'],
      media: '/projects/simpleAttendanceChecker.PNG'
    },
    {
      category: 'Web-Based Project',
      title: 'SQUID LIB',
      subtitle: 'My Personalized Library',
      description: 'A project showcase and management system currently under development. This project aims to showcase all my projects from smallest to largest, providing a comprehensive solution for organizing and managing my portfolio of work with modern web technologies.',
      technologies: ['React', 'Next.js', 'Express', 'MySQL'],
      tools: ['Cursor'],
      media: '/animation/squid-lib-bg-animation.mp4',
      animationGif: '/animation/squid-lib-animation.gif',
      isDeveloping: true,
      thumbnail: '/projects/thumbnail/squid-lib-thumbnail.png'
    }
  ];

  // Filter projects with thumbnails
  const projectsWithThumbnails = projects.filter(project => project.thumbnail);

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const hasBeenVisible = useRef(false);

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
        id="projects"
        ref={elementRef}
        className={`transition-opacity duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
            {projectsWithThumbnails.map((project, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-out h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <ProjectCard
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
              </div>
            ))}
        </div>
      </div>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />

      <AllProjectsModal
        isOpen={allProjectsModalOpen}
        onClose={onAllProjectsModalClose}
        allProjects={projects}
      />
    </>
  )
}

export default PersonalProjects

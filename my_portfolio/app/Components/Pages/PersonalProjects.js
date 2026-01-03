"use client"
import React, { useState } from 'react'
import ProjectCard from '../Cards/ProjectCard'
import ProjectModal from '../Modals/ProjectModal'

const PersonalProjects = ({ visitedPages }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
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
      title: 'Simple Number System Conversion',
      description: 'A web-based utility application that converts numbers between different number systems (binary, decimal, hexadecimal, octal). This project focuses on logical problem-solving and algorithmic thinking, demonstrating the ability to implement complex conversion logic with precision and accuracy.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      tools: ['Notepad++'],
      media: '/projects/simpleNumberSystemConversion.mp4'
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
      isDeveloping: true
    }
  ];

  return (
    <div className='w-full px-4 md:px-8 lg:px-12'>
      <div 
        id="personal-projects"
        className={`w-full max-w-[1250px] mx-auto rounded-2xl overflow-hidden relative border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm ${visitedPages.has("projects") ? "fade-in" : ""}`}
      >
        <div className='relative z-10 p-4 md:p-6 lg:p-8'>
          <h2 className='text-black/[.9] dark:text-white/[.9] font-ubold text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8'>Personal Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                category={project.category}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                technologies={project.technologies}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </div>
  )
}

export default PersonalProjects

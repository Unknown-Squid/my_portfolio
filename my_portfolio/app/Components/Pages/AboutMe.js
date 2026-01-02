"use client"
import React from 'react'
import { GitHub, MailOutline, LinkedIn } from '@mui/icons-material';
import Link from 'next/link';

const AboutMe = ({ visitedPages, showOverMask = false }) => {

  return (
    <div
      id="about-me"
      className={`flex flex-col w-full h-fit items-center opacity-0 relative z-40 mt-10 flex ${visitedPages.has("about") ? "fade-in" : ""}`}
      style={{
        opacity: showOverMask ? 1 : undefined,
        transition: 'opacity 0.8s ease-out',
      }}
    >
      {/* Bento grid - full width glass style */}
      <div className='w-full px-4 md:px-8 lg:px-12 flex gap-10'>

        {/* Profile Card (glass transparent) */}
        <div className={`w-[1000px] rounded-2xl overflow-hidden relative border border-gray-200 bg-white shadow-sm ${visitedPages.has("about") ? "slide-in-left" : ""}`}>
          <div className='relative z-10 flex flex-col p-6 md:p-8 min-h-[280px] md:min-h-[400px]'>
            {/* Profile Info */}
            <h2 className='text-black/[.9] font-ubold text-2xl md:text-3xl mb-6'>About Me</h2>
            <div className='flex flex-col items-center md:items-start justify-center flex-1 text-center md:text-left w-full'>
              <p className='text-black/[.9] text-xs md:text-lg leading-relaxed w-full'>
                A results-driven System Developer specializing in React for building modern, scalable, and user-focused web applications. Experienced in designing and implementing full system architectures with expertise in both frontend and backend development. Proficient in PHP, Python, C#, and Java, with the ability to work across multiple stacks and adapt to diverse project requirements.
                <br /><br />
                Skilled in translating business requirements into efficient technical solutions, developing reusable components, integrating APIs, and maintaining clean, maintainable codebases. Experienced in database management using MySQL and MongoDB, ensuring reliable and efficient data handling.
                <br /><br />
                Capable of leading development teams, overseeing project workflows, and coordinating cross-functional collaboration to deliver high-quality software solutions. Adept at troubleshooting complex system issues, optimizing performance, and continuously learning new technologies to improve system reliability and scalability.
              </p>
            </div>
          </div>
        </div>

        {/* Actions Card (glass transparent) */}
        <div className={`w-[200px] h-auto relative rounded-2xl p-5 md:p-6 border border-gray-200 bg-white flex flex-col gap-3 justify-center shadow-sm ${visitedPages.has("about") ? "slide-in-right" : ""}`}>
          <div className='relative z-10 flex flex-col gap-3'>
            <a
              href="/resume/Gerald Fegalan Resume.pdf"
              download="Gerald Fegalan Resume"
              className='group rounded-lg h-[52px] px-4 flex items-center justify-center border border-gray-300 bg-white text-black/[.9] font-usbold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300'
            >
              Resume
            </a>
            <Link 
              href="https://github.com/Unknown-Squid?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='group rounded-lg h-[52px] w-full flex items-center justify-center border border-gray-300 bg-white text-black/[.9] hover:bg-gray-50 hover:border-gray-400 transition-all duration-300'
            >
              <GitHub sx={{ color: '#000000', fontSize: '24px' }} />
            </Link>
            <a 
              href="mailto:gerald.fegalan@gmail.com" 
              className='group rounded-lg h-[52px] w-full flex items-center justify-center border border-gray-300 bg-white text-black/[.9] hover:bg-gray-50 hover:border-gray-400 transition-all duration-300'
            >
              <MailOutline sx={{ color: '#000000', fontSize: '24px' }} />
            </a>
            <Link 
              href="https://www.linkedin.com/in/gerald-fegalan-674358178/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='group rounded-lg h-[52px] w-full flex items-center justify-center border border-gray-300 bg-white text-black/[.9] hover:bg-gray-50 hover:border-gray-400 transition-all duration-300'
            >
              <LinkedIn sx={{ color: '#000000', fontSize: '24px' }} />
            </Link>
          </div>
        </div>

      </div> 

    </div>
  )
}

export default AboutMe

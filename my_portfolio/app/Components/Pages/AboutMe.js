"use client"
import React from 'react'
import { GitHub, MailOutline, LinkedIn, LocationOn, DarkMode, LightMode } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../../context/ThemeContext';

const AboutMe = ({ visitedPages, showOverMask = false }) => {
  const { isDark, toggleTheme } = useTheme();

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
      <div className='w-full px-4 md:px-8 lg:px-12 flex flex-col gap-6 md:gap-8'>

        {/* Actions Card (glass transparent) */}
        <div className={`w-full max-w-[1250px] mx-auto rounded-2xl overflow-hidden relative border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm ${visitedPages.has("about") ? "slide-in-right" : ""}`}>
          <div className='relative z-10 p-4 md:p-6 lg:p-8'>
            <div className='flex flex-col md:flex-row items-center gap-4 md:gap-10 flex-wrap'>
              <div className='flex items-center lg:hidden mb-4 md:mb-0 gap-4'>
                <div className='w-[120px] h-[120px] md:w-[150px] md:h-[150px] overflow-hidden flex-shrink-0 rounded-[15px] mb-4'>
                  <Image
                    src={'/images/profile/profile-picture.png'}
                    width={300}
                    height={300}
                    alt='my profile picture'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center justify-between gap-2'>
                    <p className='text-black/[.8] dark:text-white/[.8] font-ubold text-xl md:text-2xl mb-1'>Gerald Fegalan</p>
                    <button
                      onClick={toggleTheme}
                      className='theme-toggle group rounded-lg h-[36px] w-[36px] md:h-[40px] md:w-[40px] flex items-center justify-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black/[.9] dark:text-white/[.9] hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 flex-shrink-0'
                      aria-label="Toggle dark mode"
                    >
                      {isDark ? (
                        <LightMode sx={{ fontSize: '18px', transition: 'transform 0.3s ease' }} />
                      ) : (
                        <DarkMode sx={{ fontSize: '18px', transition: 'transform 0.3s ease' }} />
                      )}
                    </button>
                  </div>
                  <div className='flex items-center gap-1'>
                    <LocationOn sx={{ color: isDark ? '#ffffff' : '#000000', fontSize: '15px' }} />
                    <p className='text-black/[.7] dark:text-white/[.7] text-xs md:text-sm font-medium'>Cavite, Philippines</p>
                  </div>
                  <p className='text-black/[.8] dark:text-white/[.8] font-usbold text-sm md:text-base'>System Developer</p>
                </div>
              </div>
              <h2 className='text-black/[.9] dark:text-white/[.9] font-ubold text-xl md:text-2xl lg:text-3xl mr-10 hidden lg:flex'>Socials</h2>
              <div className='flex flex-row md:grid md:grid-cols-2 lg:flex lg:flex-row items-center gap-3 sm:gap-4 md:gap-8 flex-1 min-w-0'>
                <a
                  href="/resume/Gerald Fegalan Resume.pdf"
                  download="Gerald Fegalan Resume"
                  className='group rounded-lg h-[44px] md:h-[52px] px-4 sm:px-6 flex items-center justify-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black/[.9] dark:text-white/[.9] font-usbold text-sm md:text-base hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 w-full'
                >
                  Resume
                </a>
                <Link 
                  href="https://github.com/Unknown-Squid?tab=repositories" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='group rounded-lg h-[44px] md:h-[52px] w-full px-4 sm:px-6 flex items-center justify-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black/[.9] dark:text-white/[.9] hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300'
                >
                  <GitHub sx={{ color: isDark ? '#ffffff' : '#000000', fontSize: '22px' }} />
                </Link>
                <a 
                  href="mailto:gerald.fegalan@gmail.com" 
                  className='group rounded-lg h-[44px] md:h-[52px] w-full px-4 sm:px-6 flex items-center justify-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black/[.9] dark:text-white/[.9] hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300'
                >
                  <MailOutline sx={{ color: isDark ? '#ffffff' : '#000000', fontSize: '22px' }} />
                </a>
                <Link 
                  href="https://www.linkedin.com/in/gerald-fegalan-674358178/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='group rounded-lg h-[44px] md:h-[52px] w-full px-4 sm:px-6 flex items-center justify-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black/[.9] dark:text-white/[.9] hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300'
                >
                  <LinkedIn sx={{ color: isDark ? '#ffffff' : '#000000', fontSize: '22px' }} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Card (glass transparent) */}
        <div className={`w-full max-w-[1250px] mx-auto rounded-2xl overflow-hidden relative border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm ${visitedPages.has("about") ? "slide-in-left" : ""}`}>
          <div className='relative z-10 flex flex-col p-4 md:p-6 lg:p-8 min-h-[280px] md:min-h-[400px]'>
            {/* Profile Info */}
            <h2 className='text-black/[.9] dark:text-white/[.9] font-ubold text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6'>About Me</h2>
            <div className='flex flex-col items-center md:items-start justify-center flex-1 text-center md:text-left w-full'>
              <p className='text-black/[.9] dark:text-white/[.9] text-xs md:text-base lg:text-lg leading-relaxed w-full'>
                A results-driven System Developer specializing in React for building modern, scalable, and user-focused web applications. Experienced in designing and implementing full system architectures with expertise in both frontend and backend development. Proficient in PHP, Python, C#, and Java, with the ability to work across multiple stacks and adapt to diverse project requirements.
                <br /><br />
                Skilled in translating business requirements into efficient technical solutions, developing reusable components, integrating APIs, and maintaining clean, maintainable codebases. Experienced in database management using MySQL and MongoDB, ensuring reliable and efficient data handling.
                <br /><br />
                Capable of leading development teams, overseeing project workflows, and coordinating cross-functional collaboration to deliver high-quality software solutions. Adept at troubleshooting complex system issues, optimizing performance, and continuously learning new technologies to improve system reliability and scalability.
              </p>
            </div>
          </div>
        </div>

      </div> 

    </div>
  )
}

export default AboutMe

"use client"
import React from 'react'
import { LocationOn, Email, ArrowForward, GitHub, LinkedIn, DarkMode, LightMode } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../../context/ThemeContext';

const Profile = ({ visitedPages }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className='flex justify-center transition-colors duration-300'>
      <div className={`w-full max-w-4xl flex flex-col md:flex-row gap-4 transition-colors duration-300 ${visitedPages.has("about") ? "fade-in" : ""}`}>
        {/* Box 1: Profile Picture */}
        <div className='bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-4 flex-shrink-0 flex items-center justify-center transition-colors duration-300'>
          <div className='w-[120px] h-[120px] md:w-[140px] md:h-[140px] overflow-hidden rounded-xl'>
            <Image
              src={'/images/profile/profile-picture.png'}
              width={300}
              height={300}
              alt='Fritz Gerald Fegalan profile picture'
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        {/* Box 2: Title, Location, Info */}
        <div className='bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-4 md:p-6 flex-1 transition-colors duration-300'>
          <div className='mb-2'>
            <h1 className='text-2xl md:text-3xl font-ubold text-black dark:text-white transition-colors duration-300'>Fritz Gerald Fegalan</h1>
          </div>
          
          <div className='flex items-center gap-1 mb-4'>
            <LocationOn sx={{ fontSize: '16px', color: isDark ? '#9ca3af' : '#6b7280', transition: 'color 0.3s ease' }} />
            <p className='text-gray-600 dark:text-gray-400 text-sm md:text-base transition-colors duration-300'>Cavite, Philippines</p>
          </div>

          {/* Action Buttons */}
          <div className='flex items-center gap-2'>
            <a 
              href="#projects"
              className='inline-flex items-center gap-1.5 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-all duration-300 text-xs md:text-sm'
            >
              See my projects
              <ArrowForward sx={{ fontSize: '14px' }} />
            </a>
            <button
              onClick={toggleTheme}
              className='p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300'
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <LightMode sx={{ fontSize: '18px', color: '#ffffff', transition: 'color 0.3s ease' }} />
              ) : (
                <DarkMode sx={{ fontSize: '18px', color: '#000000', transition: 'color 0.3s ease' }} />
              )}
            </button>
          </div>
        </div>

        {/* Box 3: Socials */}
        <div className='bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-4 md:p-6 flex-shrink-0 w-fit transition-colors duration-300'>
          <h3 className='text-base md:text-lg font-ubold text-black dark:text-white mb-3 transition-colors duration-300'>Socials</h3>
          <div className='grid grid-cols-2 gap-2'>
            <Link 
              href="https://github.com/Unknown-Squid?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className='flex items-center gap-2 p-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300'
            >
              <GitHub sx={{ fontSize: '20px', color: isDark ? '#ffffff' : '#000000', transition: 'color 0.3s ease' }} />
              <span className='text-xs md:text-sm font-medium text-black dark:text-white whitespace-nowrap transition-colors duration-300'>GitHub</span>
            </Link>
            <a 
              href="mailto:gerald.fegalan@gmail.com"
              className='flex items-center gap-2 p-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300'
            >
              <Email sx={{ fontSize: '20px', color: isDark ? '#ffffff' : '#000000', transition: 'color 0.3s ease' }} />
              <span className='text-xs md:text-sm font-medium text-black dark:text-white whitespace-nowrap transition-colors duration-300'>Email</span>
            </a>
            <Link 
              href="https://www.linkedin.com/in/fritz-gerald-fegalan-674358178/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='flex items-center gap-2 p-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300'
            >
              <LinkedIn sx={{ fontSize: '20px', color: isDark ? '#ffffff' : '#000000', transition: 'color 0.3s ease' }} />
              <span className='text-xs md:text-sm font-medium text-black dark:text-white whitespace-nowrap transition-colors duration-300'>LinkedIn</span>
            </Link>
            <a
              href="/resume/Gerald Fegalan Resume.pdf"
              download="Gerald Fegalan Resume"
              className='flex items-center gap-2 p-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300'
            >
              <span className='text-xs md:text-sm font-medium text-black dark:text-white whitespace-nowrap transition-colors duration-300'>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

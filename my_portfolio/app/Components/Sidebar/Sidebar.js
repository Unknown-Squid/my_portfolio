"use client";
import React from 'react'
import Image from 'next/image';
import { LocationOn, DarkMode, LightMode } from '@mui/icons-material';
import { useTheme } from '../../context/ThemeContext';

const Sidebar = ({ activePage, setActivePage }) => {
  const { isDark, toggleTheme } = useTheme();
  const navItems = [
    { id: 'about', label: 'About Me', href: '#about-me' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'tech-stack', label: 'Tech Stack', href: '#tech-stack' },
    { id: 'projects', label: 'Personal Projects', href: '#personal-projects' },
    { id: 'gallery', label: 'Gallery', href: '#gallery' },
  ];
  
  return (
    <aside 
      id="sidebar" 
      className='fixed left-0 top-0 h-screen w-[280px] bg-[#f4f2ee] dark:bg-gray-900 border-r border-black/[.1] dark:border-gray-700 z-50 overflow-y-auto hidden lg:block transition-colors duration-300'
    >
      {/* Dark Mode Toggle */}
      <div className='absolute top-4 right-4 z-10'>
        <button
          onClick={toggleTheme}
          className='theme-toggle group rounded-lg h-[44px] w-[44px] flex items-center justify-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black/[.9] dark:text-white/[.9] hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300'
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <LightMode sx={{ fontSize: '22px', transition: 'transform 0.3s ease' }} />
          ) : (
            <DarkMode sx={{ fontSize: '22px', transition: 'transform 0.3s ease' }} />
          )}
        </button>
      </div>

      {/* Profile Card Sidebar */}
      <div className='flex flex-col items-center p-6 md:p-8 gap-6'>
        {/* Profile Image */}
        <div className='w-[150px] h-[150px] overflow-hidden flex-shrink-0 rounded-[15px]'>
          <Image
            src={'/images/profile/profile-picture.png'}
            width={300}
            height={300}
            alt='my profile picture'
            className='w-full h-full object-cover'
          />
        </div>
        
        {/* Profile Info */}
        <div className='flex flex-col items-center text-center w-full'>
          <p className='text-black/[.8] dark:text-white/[.8] font-ubold text-2xl md:text-3xl mb-1'>Gerald Fegalan</p>
          <div className='flex items-center justify-center gap-1'>
            <LocationOn sx={{ color: isDark ? '#ffffff' : '#000000', fontSize: '15px' }} />
            <p className='text-black/[.7] dark:text-white/[.7] text-xs md:text-sm font-medium'>Cavite, Philippines</p>
          </div>
          <p className='text-black/[.8] dark:text-white/[.8] font-usbold text-base md:text-lg mb-6 mt-2'>System Developer</p>
          
          {/* Resume Button */}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className='w-full inline-block px-6 py-3 bg-black/[.8] dark:bg-white/[.9] hover:bg-black/[.9] dark:hover:bg-white border border-black/[.6] dark:border-white/[.3] rounded-lg text-white dark:text-black/[.9] font-medium transition-all duration-300 hover:scale-105 text-center mb-8'
          >
            View Resume
          </a>

          {/* Navigation */}
          <nav className='w-full flex flex-col gap-3'>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActivePage && setActivePage(item.id)}
                className={`px-4 py-3 rounded-lg text-center font-medium transition-all duration-300 ${
                  activePage === item.id
                    ? 'bg-black/[.8] dark:bg-white/[.9] text-white dark:text-black/[.9]'
                    : 'bg-black/[.05] dark:bg-white/[.05] text-black/[.8] dark:text-white/[.8] hover:bg-black/[.1] dark:hover:bg-white/[.1]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar


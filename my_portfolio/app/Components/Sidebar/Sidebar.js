"use client";
import React from 'react'
import Image from 'next/image';

const Sidebar = ({ activePage, setActivePage }) => {
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
      className='fixed left-0 top-0 h-screen w-[280px] md:w-[320px] bg-[#f4f2ee] border-r border-black/[.1] z-30 overflow-y-auto hidden md:block'
    >
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
          <p className='text-black/[.8] font-ubold text-2xl md:text-3xl mb-1'>Gerald Fegalan</p>
          <p className='text-black/[.8] font-usbold text-base md:text-lg mb-6'>System Developer</p>
          
          {/* Resume Button */}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className='w-full inline-block px-6 py-3 bg-black/[.8] hover:bg-black/[.9] border border-black/[.6] rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 text-center mb-8'
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
                    ? 'bg-black/[.8] text-white'
                    : 'bg-black/[.05] text-black/[.8] hover:bg-black/[.1]'
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


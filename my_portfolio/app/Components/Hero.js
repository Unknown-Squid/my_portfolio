"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, -rect.top / window.innerHeight));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div id="hero" className='w-full h-screen flex items-center justify-center relative'>
      
      {/* Green gradient background overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-transparent'></div>
      
      {/* Darker center overlay - vignette effect */}
      <div className='absolute inset-0' style={{
        background: 'radial-gradient(ellipse closest-side at center, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0.10) 100%)'
      }}></div>
      
      {/* Subtle green grid pattern */}
      <div className='absolute inset-0 opacity-[0.03]' style={{
        backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Background text layer - FULL STACK WEB DEVELOPER - Centered with parallax */}
      <div 
        className='absolute inset-0 flex flex-col items-center justify-center z-0 opacity-25' 
        style={{ 
          transform: `translateY(calc(-80px - ${scrollY * 100}px)) scale(${1 + scrollY * 0.3})`,
          opacity: 0.25 - (scrollY * 0.2)
        }}
      >
        <div className='flex flex-col items-center w-fit overflow-hidden'>
          <div className='flex relative w-full top-text-container'>
            <p className='text-emerald-400 font-ubold' style={{ fontSize: 'clamp(calc(5vw + 5px), calc(6vw + 5px), calc(7vw + 5px))' }}>
              FULL STACK
            </p>
            <p className="text-emerald-400 font-ubold" style={{ fontSize: 'clamp(calc(5vw + 5px), calc(6vw + 5px), calc(7vw + 5px))' }}>
              FULL STACK
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center w-fit overflow-hidden'>
          <div className='flex relative w-full bottom-text-container'>
            <p className='text-emerald-400 font-ubold' style={{ fontSize: 'clamp(calc(5vw + 5px), calc(6vw + 5px), calc(7vw + 5px))' }}>
              WEB DEVELOPER
            </p>
            <p className="text-emerald-400 font-ubold" style={{ fontSize: 'clamp(calc(5vw + 5px), calc(6vw + 5px), calc(7vw + 5px))' }}>
              WEB DEVELOPER
            </p>
          </div>
        </div>
      </div>

      {/* Domino effect - connecting line from bottom square to WEB DEVELOPER */}
      <div 
        className='absolute bottom-0 left-1/2 transform translate-x-1/2 z-5'
        style={{
          width: '2px',
          height: `${50 + scrollY * 30}%`,
          background: 'linear-gradient(to top, rgba(16, 185, 129, 0.8) 0%, rgba(16, 185, 129, 0.4) 50%, transparent 100%)',
          transform: 'translateX(-50%)',
          transition: 'height 0.1s ease-out'
        }}
      >
        {/* Domino blocks effect - positioned at bottom */}
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full'>
          {[...Array(4)].map((_, i) => {
            const baseWidth = 250;
            const baseHeight = 100;
            const delayStep = 0.15; // stagger per box
            const progress = Math.max(0, Math.min(1, scrollY - i * delayStep));

            return (
              <div
                key={i}
                className='absolute left-1/2 transform -translate-x-1/2'
                style={{
                  width: `calc(${baseWidth}px + (100vw - ${baseWidth}px) * ${progress})`,
                  maxWidth: '100vw',
                  height: `calc(${baseHeight}px + (50vh - ${baseHeight}px) * ${progress})`,
                  maxHeight: '50vh',
                  background: `rgba(16, 185, 129, ${0.8 - i * 0.1})`,
                  borderRadius: '4px',
                  bottom: `${i * 110}px`,
                  transform: `translateX(-50%) translateY(${scrollY * 100}px)`,
                  transition: 'width 0.1s ease-out, height 0.1s ease-out, transform 0.1s ease-out',
                  transitionDelay: `${i * 0.03}s`,
                  boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)'
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Square at bottom */}
      <div 
        className='absolute bottom-8 left-1/2 transform translate-x-1/2 z-10'
        style={{
          width: '120px',
          height: '60px',
          background: 'rgba(16, 185, 129, 0.3)',
          border: '2px solid rgba(16, 185, 129, 0.8)',
          borderRadius: '8px',
          transform: `translateX(-20%) rotate(${scrollY * 45}deg)`,
          transition: 'transform 0.1s ease-out',
          boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)'
        }}
      />

      {/* Full-screen mask transition into About (grows from bottom) */}
      <div
        className='fixed left-0 bottom-0 z-30 pointer-events-none'
        style={{
          width: '100vw',
          height: '100vh',
          background: `linear-gradient(to bottom,
          rgba(6, 66, 46, 0.6) 0%,
          rgba(6, 66, 46, 0.85) 40%,
          rgba(0, 0, 0, 1) 100%
        )`,
          transformOrigin: 'bottom center',
          transform: `scaleY(${Math.max(0, Math.min(1, (scrollY - 0.35) / 0.65))})`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Main content - Left aligned with parallax */}
      <div 
        className='flex flex-col items-start justify-center w-full h-full relative z-10 pl-8 lg:pl-16 xl:pl-24'
        style={{
          transform: `translateY(${scrollY * -50}px)`,
          opacity: 1 - (scrollY * 8)
        }}
      >
        
        {/* Welcome text - Left side */}
        <div 
          className='w-fit overflow-visible fade-in relative z-20 h-[50%] flex items-end'
          style={{
            opacity: 1 - (scrollY * 8),
            transition: 'opacity 0.1s ease-out'
          }}
        >
          {/* First line */}
          <p 
            className='lg:text-[1.7vw] xl:text-[2vw] 2xl:text-[2.5vw] font-ubold text-emerald-300 type-animation'
          >
            Welcome to my portfolio
          </p>
          {/* Second line - positioned at bottom right */}
          <p 
            className='lg:text-[1.2vw] xl:text-[1.4vw] 2xl:text-[1.6vw] font-usbold text-emerald-400 absolute right-0 top-full mt-2'
          >
            I&apos;m <span className='italic'>Gerald Fegalan</span>
          </p>
        </div>

        {/* Subtitle */}
        {/* <div className='w-fit fade-in delay' style={{ animationDelay: '0.6s' }}>
          <p className='lg:text-[1vw] xl:text-[1.3vw] font-usbold text-[#00350b]/[.8] text-center max-w-2xl px-4'>
            Crafting modern web solutions with cutting-edge technologies
          </p>
        </div> */}

        {/* CTA Buttons */}
        {/* <div className='flex gap-6 items-center fade-in delay' style={{ animationDelay: '0.9s' }}>
          <a 
            href="#my-projects"
            className='px-8 py-4 rounded-[20px] bg-[#00350b] text-emerald-200 font-usbold lg:text-[1vw] xl:text-[1.2vw] hover:bg-[#004d0f] transition-all duration-300 hover:scale-105 border-2 border-emerald-300/30 hover:border-emerald-300/60'
            style={{ boxShadow: '0px 8px 25px rgba(0, 53, 11, 0.4)' }}
          >
            View My Work
          </a>
        </div> */}

      </div>

    </div>
  )
}

export default Hero

"use client"
import React, { useState, useEffect } from 'react'
import { GitHub, MailOutline, LinkedIn } from '@mui/icons-material';
import MySkills from './MySkills';
import Link from 'next/link';
import Image from 'next/image';

const AboutMe = ({ visitedPages, showOverMask = false }) => {

  return (
    <div
      id="about-me"
      className={`flex flex-col w-full min-h-[100vh] h-fit items-center opacity-0 relative z-40 py-20 ${visitedPages.has("about") ? "fade-in" : ""}`}
      style={{
        opacity: showOverMask ? 1 : undefined,
        background:
          'linear-gradient(to bottom, rgba(6,66,46,0.6) 0%, rgba(6,66,46,0.85) 40%, rgba(0,0,0,1) 100%)',
        transition: 'opacity 0.8s ease-out',
      }}
    >

      {/* Bento grid - full width glass style */}
      <div className='w-full px-4 md:px-8 lg:px-12 mt-10 grid grid-cols-1 md:grid-cols-6 gap-6'>

        {/* Profile Card (glass transparent) */}
        <div className={`col-span-1 md:col-span-2 rounded-2xl overflow-hidden relative border backdrop-blur-lg bg-white/5 border-white/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] ${visitedPages.has("about") ? "slide-in-left" : ""}`}>
          <div className='bg-black/40 w-full h-full absolute top-0 left-0 rounded-2xl pointer-events-none'></div>
          <div className='relative z-10 flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 min-h-[280px] md:min-h-[400px]'>
            {/* Profile Image */}
            <div className='w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-emerald-300/50 shadow-[0_0_30px_rgba(16,185,129,0.3)] flex-shrink-0'>
              <Image
                src={'/profie-picture.jpg'}
                width={160}
                height={160}
                alt='my profile picture'
                className='w-full h-full object-cover'
              />
            </div>
            {/* Profile Info */}
            <div className='flex flex-col items-center md:items-start justify-center flex-1 text-center md:text-left'>
              <p className='text-emerald-300 font-ubold text-2xl md:text-3xl mb-1'>Gerald Fegalan</p>
              <p className='text-emerald-400/80 font-usbold text-base md:text-lg mb-4'>Full-Stack Web Developer</p>
              <p className='text-neutral-200 text-sm md:text-base leading-relaxed max-w-md'>
                I build fast, scalable, user-friendly web apps with clean UI and solid back-end.
              </p>
            </div>
          </div>
        </div>

        {/* Bio Card (glass transparent) */}
        {/* <div className={`col-span-1 md:col-span-3 rounded-2xl p-6 border backdrop-blur-lg bg-white/0 border-white/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] ${visitedPages.has("about") ? "slide-in-top" : ""}`}>
          <div className='bg-black/[.6] w-full h-full absolute top-0 left-0 rounded-2xl pointer-events-none'>
          </div>
          <p className='text-[#00350b]/[.8] xl:text-[1.7vw] lg:text-[2vw] md:text-[2.2vw] text-[4.5vw] font-usbold'>
            Hi, I&apos;m Gerald, a Full-Stack Web Developer passionate about building fast, user-friendly,
            and scalable web applications. I love turning ideas into seamless digital experiences,
            from sleek front-end designs to powerful back-end systems.
          </p>
          <div className='mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3'>
            <div className='rounded-xl p-3 text-center border backdrop-blur-lg bg-white/0 border-white/20'>
              <p className='text-emerald-300 font-ubold text-lg'>UI/UX</p>
              <p className='text-emerald-200 text-xs'>Clean & Accessible</p>
            </div>
            <div className='rounded-xl p-3 text-center border backdrop-blur-lg bg-white/0 border-white/20'>
              <p className='text-emerald-300 font-ubold text-lg'>Performance</p>
              <p className='text-emerald-200 text-xs'>Fast & Optimized</p>
            </div>
            <div className='rounded-xl p-3 text-center border backdrop-blur-lg bg-white/0 border-white/20'>
              <p className='text-emerald-300 font-ubold text-lg'>Scalability</p>
              <p className='text-emerald-200 text-xs'>Robust Back-end</p>
            </div>
          </div>
        </div> */}

        {/* Actions Card (glass transparent) */}
        <div className={`relative col-span-1 md:col-span-1 rounded-2xl p-5 md:p-6 border backdrop-blur-lg bg-white/5 border-white/20 flex flex-col gap-3 justify-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] ${visitedPages.has("about") ? "slide-in-right" : ""}`}>
          <div className='bg-black/40 w-full h-full absolute top-0 left-0 rounded-2xl pointer-events-none'></div>
          <div className='relative z-10 flex flex-col gap-3'>
            <a
              href="/Gerald Fegalan.pdf"
              download="Gerald Fegalan Resume"
              className='group rounded-xl h-[52px] px-4 flex items-center justify-center border border-white/30 bg-white/5 text-white font-usbold hover:bg-emerald-500/20 hover:border-emerald-400/60 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300'
            >
              Resume
            </a>
            <Link 
              href="https://github.com/Unknown-Squid?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='group rounded-xl h-[52px] w-full flex items-center justify-center border border-white/30 bg-white/5 text-white hover:bg-emerald-500/20 hover:border-emerald-400/60 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300'
            >
              <GitHub sx={{ color: '#ffffff', fontSize: '24px' }} />
            </Link>
            <a 
              href="mailto:gerald.fegalan@gmail.com" 
              className='group rounded-xl h-[52px] w-full flex items-center justify-center border border-white/30 bg-white/5 text-white hover:bg-emerald-500/20 hover:border-emerald-400/60 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300'
            >
              <MailOutline sx={{ color: '#ffffff', fontSize: '24px' }} />
            </a>
            <Link 
              href="https://www.linkedin.com/in/gerald-fegalan-674358178/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='group rounded-xl h-[52px] w-full flex items-center justify-center border border-white/30 bg-white/5 text-white hover:bg-emerald-500/20 hover:border-emerald-400/60 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300'
            >
              <LinkedIn sx={{ color: '#ffffff', fontSize: '24px' }} />
            </Link>
          </div>
        </div>

        {/* SquidLib Card (glass transparent) */}
        <div className={`relative col-span-1 md:col-span-3 rounded-2xl overflow-hidden border backdrop-blur-lg bg-white/5 border-white/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] ${visitedPages.has("about") ? "slide-in-top" : ""}`}>
          <div className='bg-black/40 w-full h-full absolute top-0 left-0 rounded-2xl pointer-events-none'></div>
          {/* Cover overlay to block interactions - still working */}
          <div 
            className='absolute inset-0 w-full h-full bg-black/80 backdrop-blur-sm rounded-2xl z-20 cursor-not-allowed pointer-events-auto flex items-center justify-center' 
            title="Still working on this..."
            onClick={(e) => e.preventDefault()}
            onMouseDown={(e) => e.preventDefault()}
          >
            <div className='text-center'>
              <p className='text-emerald-300 font-ubold text-xl md:text-2xl mb-2'>Working...</p>
              <p className='text-emerald-200/70 font-usbold text-sm md:text-base'>This feature is under development</p>
            </div>
          </div>
          <div className='relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 p-6 md:p-8 min-h-[400px]'>
            {/* Left side - Text content */}
            <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 h-full gap-4">
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {["S","Q","U","I","D"," ","L","I","B"].map((char, index) => (
                  <span 
                    key={index}
                    className="text-3xl md:text-4xl lg:text-5xl font-ubold text-emerald-300"
                    style={{
                      animation: visitedPages.has("about") ? `fadeIn 0.8s ease-out ${index * 0.1}s forwards` : 'none',
                      opacity: visitedPages.has("about") ? 1 : 0
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
              <p 
                className="text-lg md:text-xl text-emerald-200 font-usbold text-center md:text-left"
                style={{
                  animation: visitedPages.has("about") ? 'fadeIn 1s ease-out 0.9s forwards' : 'none',
                  opacity: visitedPages.has("about") ? 1 : 0
                }}
              >
                My Personalized Library
              </p>
              <p 
                className="text-sm md:text-base text-emerald-300/60 font-usbold text-center md:text-left"
                style={{
                  animation: visitedPages.has("about") ? 'fadeIn 1s ease-out 1s forwards' : 'none',
                  opacity: visitedPages.has("about") ? 1 : 0
                }}
              >
                Working...
              </p>
              <button
                className="mt-2 px-6 py-3 rounded-xl border border-emerald-300/50 bg-emerald-500/10 text-emerald-200 font-usbold hover:bg-emerald-500/20 hover:border-emerald-400/70 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300"
                style={{
                  animation: visitedPages.has("about") ? 'fadeIn 1s ease-out 1.2s forwards' : 'none',
                  opacity: visitedPages.has("about") ? 1 : 0
                }}
              >
                Get Started
              </button>
            </div>

            {/* Right side - Animation circle */}
            <div className="flex h-full w-full md:w-1/2 items-center justify-center">
              <div
                className="w-full max-w-[300px] md:max-w-[400px] h-full max-h-[300px] md:max-h-[400px] aspect-square flex justify-center items-center rounded-full bg-black/20 overflow-hidden relative"
                style={{
                  boxShadow: "0 20px 60px rgba(16, 185, 129, 0.4), 0 10px 20px rgba(0, 0, 0, 0.1)",
                  animation: visitedPages.has("about") ? 'fadeIn 1.5s ease-out forwards' : 'none',
                  opacity: visitedPages.has("about") ? 1 : 0
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden bg-black/10">
                  <video 
                    className="w-full h-full object-cover opacity-50" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    preload="auto"
                    onLoadedData={(e) => {
                      e.target.style.opacity = '0.5';
                    }}
                  >
                    <source src="/animation/squid-lib-bg-animation.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="w-[60%] h-[60%] rounded-full flex justify-center items-center overflow-hidden absolute bg-black/10">
                  <Image
                    src={"/animation/squid-lib-animation.gif"}
                    width={500}
                    height={500}
                    alt="squid-lib-animation"
                    className="w-full h-full object-contain rounded-full opacity-60"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills (Bento wide glass transparent) */}
        <div className={`col-span-1 md:col-span-6  ${visitedPages.has("about") ? "fade-in" : ""}`}>
          <MySkills/>
        </div>

      </div> 

    </div>
  )
}

export default AboutMe
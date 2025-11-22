import React, { useEffect } from 'react'
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
        <div className={`col-span-1 md:col-span-2 rounded-2xl overflow-hidden relative border backdrop-blur-lg bg-white/0 border-white/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] ${visitedPages.has("about") ? "slide-in-left" : ""}`}>
          <div className='bg-black/[.6] w-full h-full absolute top-0 left-0 rounded-2xl pointer-events-none'></div>
          <div className='relative gap-4 h-[280px] md:h-[100%] flex items-center justify-center p-4'>
            <div className='w-[600px] h-[300px] rounded-full overflow-hidden border-4 border-emerald-300/40 shadow-xl'>
              <Image
                src={'/profie-picture.jpg'}
                width={400}
                height={400}
                alt='my profile picture'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='z-10 w-full h-full flex justify-end'>
              <div className='w-full flex flex-col items-start justify-center'>

                <p className='text-emerald-300 font-ubold text-xl md:text-2xl'>Gerald Fegalan</p>
                <p className='text-emerald-300/[.5] font-usbold'>Full-Stack Web Developer</p>
                <p className='text-neutral-200 text-sm md:text-base mt-3'>I build fast, scalable, user-friendly web apps with clean UI and solid back-end.</p>
              </div>
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
        <div className={`relative col-span-1 md:col-span-1 rounded-2xl p-4 border backdrop-blur-lg bg-white/0 border-white/20 flex flex-col gap-3 justify-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] ${visitedPages.has("about") ? "slide-in-right" : ""}`}>
          <div className='bg-black/[.6] w-full h-full absolute top-0 left-0 rounded-2xl pointer-events-none'>
            
          </div>
          <a
            href="/Gerald Fegalan.pdf"
            download="Gerald Fegalan Resume"
            className='rounded-xl h-[48px] px-4 flex items-center justify-center border border-white/30 text-emerald-200 hover:bg-white/5 transition-all'
          >
            Resume
          </a>
          <Link href="https://github.com/Unknown-Squid?tab=repositories" target="_blank" rel="noopener noreferrer" className='rounded-xl h-[48px] w-full flex items-center justify-center border border-white/30 text-emerald-200 hover:bg-white/5 transition-all'>
            <GitHub />
          </Link>
          <a href="mailto:gerald.fegalan@gmail.com" className='rounded-xl h-[48px] w-full flex items-center justify-center border border-white/30 text-emerald-200 hover:bg-white/5 transition-all'>
            <MailOutline />
          </a>
          <Link href="https://www.linkedin.com/in/gerald-fegalan-674358178/" target="_blank" rel="noopener noreferrer" className='rounded-xl h-[48px] w-full flex items-center justify-center border border-white/30 text-emerald-200 hover:bg-white/5 transition-all'>
            <LinkedIn />
          </Link>
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
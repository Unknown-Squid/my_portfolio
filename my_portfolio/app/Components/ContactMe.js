"use client"
import React, { useState } from 'react'
import { GitHub, MailOutline, LinkedIn, Call } from '@mui/icons-material';
import Link from 'next/link';

const ContactMe = ({ visitedPages }) => {

  const [copied, setCopied] = useState(null);

  const handleCopy = (number) => {
    navigator.clipboard.writeText(number)
      .then(() => {
        setCopied(number);
        setTimeout(() => setCopied(null), 2000); // Reset after 2 seconds
      })
      .catch((err) => console.error('Failed to copy!', err));
  };

  return (
    <div id="my-contacts" className={`z-40 flex md:flex-row flex-col w-full h-[100vh] bg-transparent items-end opacity-0 ${visitedPages.has("contact") ? "fade-in" : ""}`}>

        <div className={`md:w-1/2 w-full md:h-full h-fit flex items-center justify-center md:mt-0 mt-20 opacity-0
                        ${visitedPages.has("contact") ? "slide-in-right" : ""}`}>
            <div className='flex relative w-fit page-not-found'>
                <p className='md:text-[25vw] text-[30vw] text-[#915e01]/[.8] font-ubold'>404</p>
                <p className="md:text-[25vw] text-[30vw] text-[#915e01]/[.8] font-ubold">404</p>
            </div>
        </div>

        <div className='md:w-1/2 w-full md:h-full h-fit flex flex-col justify-center md:pr-10 pr-5'>
            {/* Text Content Card */}
            <div className={`ml-10 md:ml-10 md:w-[85%] w-full rounded-2xl border border-emerald-300/20 bg-black/40 backdrop-blur-md p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] opacity-0 ${visitedPages.has("contact") ? "slide-in-top" : ""}`}>
                <span className='font-ubold text-2xl md:text-3xl text-emerald-300 mb-4 block'>Server Response: 404</span>
                <p className='text-base md:text-lg font-usbold text-neutral-200 leading-relaxed'>
                    Contact this person if you&apos;d like to learn more about his work or discuss potential projects. 
                    He is always open to new opportunities and would be happy to connect.
                </p>
            </div>

            {/* Social Links Section */}
            <div className={`ml-10 mt-8 w-fit opacity-0 ${visitedPages.has("contact") ? "slide-in-left" : ""}`}>
                <p className='text-sm text-emerald-300/70 font-usbold mb-4'>Connect with me</p>
                <div className='flex gap-4'>
                    {/* Resume Download */}
                    <a
                        href="/resume/Gerald Fegalan Resume.pdf"
                        download="Gerald Fegalan Resume"
                        className={`group h-[56px] rounded-xl px-6 flex items-center justify-center border border-white/30 bg-white/5 backdrop-blur-sm cursor-pointer transition-all duration-300 text-white hover:bg-emerald-500/20 hover:border-emerald-400/60 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] ${
                        visitedPages.has("contact") ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <span className='font-usbold text-sm'>Resume</span>
                    </a>

                    {/* GitHub */}
                    <Link
                        href="https://github.com/Unknown-Squid?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group h-[56px] w-[56px] flex items-center justify-center border border-white/30 rounded-full cursor-pointer transition-all duration-300 text-white bg-white/5 backdrop-blur-sm hover:bg-emerald-500/20 hover:border-emerald-400/60 hover:scale-110 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] ${
                        visitedPages.has("contact") ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <GitHub sx={{ color: '#ffffff', fontSize: '24px' }} />
                    </Link>

                    {/* Email */}
                    <a
                        href="mailto:gerald.fegalan@gmail.com"
                        className={`group h-[56px] w-[56px] flex items-center justify-center border border-white/30 rounded-full cursor-pointer transition-all duration-300 text-white bg-white/5 backdrop-blur-sm hover:bg-emerald-500/20 hover:border-emerald-400/60 hover:scale-110 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] ${
                        visitedPages.has("contact") ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <MailOutline sx={{ color: '#ffffff', fontSize: '24px' }} />
                    </a>

                    {/* LinkedIn */}
                    <Link
                        href="https://www.linkedin.com/in/gerald-fegalan-674358178/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group h-[56px] w-[56px] flex items-center justify-center border border-white/30 rounded-full cursor-pointer transition-all duration-300 text-white bg-white/5 backdrop-blur-sm hover:bg-emerald-500/20 hover:border-emerald-400/60 hover:scale-110 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] ${
                        visitedPages.has("contact") ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <LinkedIn sx={{ color: '#ffffff', fontSize: '24px' }} />
                    </Link>
                </div>
            </div>

            {/* Phone Numbers Section */}
            <div className={`ml-10 mt-8 opacity-0 ${visitedPages.has("contact") ? "slide-in-left" : ""}`}>
                <p className='text-sm text-emerald-300/70 font-usbold mb-4'>Phone Numbers</p>
                <div className='flex flex-col gap-4'>
                    {/* First Number */}
                    <div 
                        className='group rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-5 py-3 flex items-center gap-3 cursor-pointer transition-all duration-300 hover:bg-emerald-500/10 hover:border-emerald-400/40 hover:scale-[1.02]'
                        onClick={() => handleCopy('9161915124')}
                    >
                        <div className='flex items-center gap-2 text-emerald-300'>
                            <Call sx={{ width: '18px', height: '18px' }} />
                            <span className='text-sm font-usbold'>63+</span>
                        </div>
                        <p className='text-neutral-200 font-usbold text-base group-hover:text-emerald-200 transition-colors'>
                            9161915124
                        </p>
                        {copied === '9161915124' && (
                            <span className="ml-auto text-emerald-400 text-sm font-usbold animate-pulse">
                                Copied!
                            </span>
                        )}
                    </div>

                    {/* Second Number */}
                    <div 
                        className='group rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-5 py-3 flex items-center gap-3 cursor-pointer transition-all duration-300 hover:bg-emerald-500/10 hover:border-emerald-400/40 hover:scale-[1.02]'
                        onClick={() => handleCopy('9918847001')}
                    >
                        <div className='flex items-center gap-2 text-emerald-300'>
                            <Call sx={{ width: '18px', height: '18px' }} />
                            <span className='text-sm font-usbold'>63+</span>
                        </div>
                        <p className='text-neutral-200 font-usbold text-base group-hover:text-emerald-200 transition-colors'>
                            9918847001
                        </p>
                        {copied === '9918847001' && (
                            <span className="ml-auto text-emerald-400 text-sm font-usbold animate-pulse">
                                Copied!
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ContactMe

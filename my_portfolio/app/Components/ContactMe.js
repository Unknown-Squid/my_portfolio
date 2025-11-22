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

        <div className='md:w-1/2 w-full md:h-full h-fit flex flex-col justify-center'>
            <p className={`ml-10 md:w-[70%] w-full text-xl font-usbold text-neutral-200 flex flex-col gap-5 opacity-0 ${visitedPages.has("contact") ? "slide-in-top" : ""}`}>
                <span className='font-ubold text-2xl text-emerald-300'>Server Response: 404</span>
                Contact this person if you&apos;d like to learn more about his work or discuss potential projects. 
                He is always open to new opportunities and would be happy to connect.
            </p>

            <div className='ml-10 w-fit h-fit flex gap-5 mt-10'>
                {/* Resume Download */}
                <a
                    href="/Gerald Fegalan.pdf" // Make sure this file is in the /public folder
                    download="Gerald Fegalan Resume"
                  className={`h-[50px] rounded-[15px] px-4 flex items-center justify-center border cursor-pointer transition-all duration-500 text-white hover:bg-white/10 hover:border-white ${
                    visitedPages.has("contact") ? "slide-in-left opacity-100" : "opacity-0"
                    }`}
                >
                    Resume
                </a>

                {/* GitHub */}
                <Link
                    href="https://github.com/Unknown-Squid?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                  className={`h-[50px] w-[50px] flex items-center justify-center border rounded-full cursor-pointer transition-all duration-500 text-white hover:bg-white/10 hover:border-white ${
                    visitedPages.has("contact") ? "slide-in-left opacity-100" : "opacity-0"
                    }`}
                >
                  <GitHub sx={{ color: '#ffffff' }} />
                </Link>

                {/* Email */}
                <a
                    href="mailto:gerald.fegalan@gmail.com"
                    className={`h-[50px] w-[50px] flex items-center justify-center border rounded-full cursor-pointer transition-all duration-500 text-white hover:bg-white/10 hover:border-white ${
                    visitedPages.has("contact") ? "slide-in-left opacity-100" : "opacity-0"
                    }`}
                >
                    <MailOutline sx={{ color: '#ffffff' }} />
                </a>

                {/* LinkedIn */}
                <Link
                    href="https://www.linkedin.com/in/gerald-fegalan-674358178/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`h-[50px] w-[50px] flex items-center justify-center border rounded-full cursor-pointer transition-all duration-500 text-white hover:bg-white/10 hover:border-white ${
                    visitedPages.has("contact") ? "slide-in-left opacity-100" : "opacity-0"
                    }`}
                >
                    <LinkedIn sx={{ color: '#ffffff' }} />
                </Link>
                </div>

            {/* First Number */}
            <div className={`text-neutral-200 ml-10 mt-10 w-fit h-fit flex gap-2 opacity-0 ${visitedPages.has("contact") ? "slide-in-left" : ""}`}>
                <p><Call sx={{ width: '16px', height: '16px' }} /> 63+</p>
                <p
                className='hover:underline cursor-pointer'
                onClick={() => handleCopy('9161915124')}
                >
                9161915124 {copied === '9161915124' && <span className="text-green-600 text-sm ml-1">Copied!</span>}
                </p>
            </div>

            {/* Second Number */}
            <div className={`text-neutral-200 ml-10 mt-5 w-fit h-fit flex gap-2 opacity-0 ${visitedPages.has("contact") ? "slide-in-left" : ""}`}>
                <p><Call sx={{ width: '16px', height: '16px' }} /> 63+</p>
                <p
                className='hover:underline cursor-pointer'
                onClick={() => handleCopy('9918847001')}
                >
                9918847001 {copied === '9918847001' && <span className="text-green-600 text-sm ml-1">Copied!</span>}
                </p>
            </div>
        </div>

    </div>
  )
}

export default ContactMe

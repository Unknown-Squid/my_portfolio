import React from 'react'
import WebsiteCard from './WebsiteCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Hero = () => {

  const icons = ["/database icon.png", "/database icon.png", "/database icon.png"];


  
  return (
    <div id="hero" className='w-full h-[855px] flex flex-row'>

        <div className='md:w-full lg:w-[800px] md:h-[90%] lg:h-[70%] flex justify-center'>

            <WebsiteCard/>

        </div>

        <div className='h-[70%] flex-1 hidden lg:flex flex-col justify-end gap-5 mt-24'>

            <div className='w-fit overflow-hidden lg:ml-2 xl:ml-10'>
                <p className='lg:text-[1vw] xl:text-[1.5vw] font-usbold text-[#00350b]/[.8] type-animation'>Welcome to my portfolio, I am Gerald</p>
            </div>

            <div className='flex flex-col lg:ml-2 xl:ml-10 w-fit overflow-hidden'>

                <div className='flex relative w-full top-text-container'>
                    <p className='lg:text-[2vw] xl:text-[2.8vw] 2xl:text-[3.5vw] text-[#915e01]/[.8] font-ubold'>FULL STACK</p>
                    <p className="lg:text-[2vw] xl:text-[2.8vw] 2xl:text-[3.5vw] text-[#915e01]/[.8] font-ubold">FULL STACK</p>
                </div>
                <div className='flex relative w-full bottom-text-container'>
                    <p className='lg:text-[2vw] xl:text-[2.8vw] 2xl:text-[3.5vw] text-[#915e01]/[.8] font-ubold'>WEB DEVELOPER</p>
                    <p className="lg:text-[2vw] xl:text-[2.8vw] 2xl:text-[3.5vw] text-[#915e01]/[.8] font-ubold">WEB DEVELOPER</p>
                </div>

            </div>

            <div className='flex lg:ml-2 xl:ml-10 border-y-[2px] border-emerald-200  w-[60%] pl-2'>
                {icons.map((icon, index) => (
                    <Image
                        key={index}
                        src={icon}
                        width={500}
                        height={500}
                        alt='database icon'
                        className='w-[35%] h-[100%]'
                    />
                ))}
            </div>

        </div>

    </div>
  )
}

export default Hero

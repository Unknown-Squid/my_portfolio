import React from 'react'
import WebsiteCard from './WebsiteCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {

  const icons = [faDatabase, faDatabase, faDatabase];
  
  return (
    <div className='w-full h-[855px] flex flex-row'>

        <div className='w-[800px] h-[70%] flex justify-center'>

            <WebsiteCard/>

        </div>

        <div className='h-[70%] flex-1 flex flex-col justify-end gap-5 mt-24'>

            <div className='w-fit overflow-hidden ml-10'>
                <p className='text-4xl font-usbold text-[#00350b]/[.8] type-animation'>Welcome to my portfolio, I am Gerald</p>
            </div>

            <div className='flex flex-col ml-10 w-fit overflow-hidden'>

                <div className='flex relative w-full top-text-container'>
                    <p className='text-[4vw] text-[#915e01]/[.8] font-ubold'>FULL STACK</p>
                    <p className="text-[4vw] text-[#915e01]/[.8] font-ubold">FULL STACK</p>
                </div>
                <div className='flex relative w-full bottom-text-container'>
                    <p className='text-[4vw] text-[#915e01]/[.8] font-ubold'>WEB DEVELOPER</p>
                    <p className="text-[4vw] text-[#915e01]/[.8] font-ubold">WEB DEVELOPER</p>
                </div>

            </div>

            <div className='flex ml-10 border-y-[2px] border-emerald-200  w-fit '>
                {icons.map((icon, index) => (
                    <FontAwesomeIcon
                        key={index}
                        icon={icon}
                        style={{
                        width: '200px',
                        height: '200px',
                        transform: 'rotate(-90deg)',
                        marginRight: '10px' // Optional, to add space between icons
                        }}
                    />
                ))}
            </div>

        </div>

    </div>
  )
}

export default Hero

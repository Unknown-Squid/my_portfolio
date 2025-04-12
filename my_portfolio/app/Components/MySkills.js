import Image from 'next/image'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';

const MySkills = () => {
  return (
    <fieldset  className="h-fit w-full flex lg:flex-row md:flex-row flex-col text-center border border-white overflow-auto gap-4 py-4">
        <legend className='font-ubold'>SKILLS</legend>

        <div className="h-fit w-full pb-5 px-5 flex flex-col justify-center">
            <p className='font-ubold w-full text-center'>WEB DEVELOPMENT</p>
            <div className="w-full flex justify-center gap-5">
                <div className="w-1/2 flex flex-col text-start gap-1">
                
                    <div className="mb-6 w-full flex justify-center">
                        <div className="w-[80px] h-[80px] p-[20px] relative">
                            <div 
                                className="flex items-center justify-center w-[80px] h-[80px] rounded-[50%] bg-[#915e01]/[.4] absolute top-[22%] left-[0%]"
                                style={{boxShadow: "0px 15px 10px rgba(0, 53, 11, 0.5)"}}
                            >
                                <div 
                                    className="flex items-center justify-center w-[50px] h-[50px] rounded-[50px] bg-emerald-400"
                                    style={{boxShadow: `inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), 
                                                        0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)`}}
                                >
                                    <h2 className='text-[#00350b]/[.8] text-[0.7vw] font-usbold'>100%</h2>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className='absolute top-0 left-0'>
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#d6e043"/>
                                        <stop offset="35%" stopColor="#a66637"/>
                                        <stop offset="100%" stopColor="#c7b23d"/>
                                    </linearGradient>
                                </defs>
                                <circle 
                                    cx="40" cy="60" r="31" 
                                    strokeLinecap="round" 
                                    strokeDasharray="200" 
                                    strokeDashoffset="0" 
                                    stroke="url(#gradient)" 
                                    strokeWidth="18px" 
                                    fill="none"
                                />
                            </svg>
                        </div>
                    </div>

                    <p className='mt-5 mb-5 text-center font-ubold'>Front End Development</p>
                        <p className="p-2 rounded bg-neutral-900 text-zinc-100 lg:text-sm font-usbold">HTML</p>
                        <p className="p-2 rounded bg-neutral-900 text-zinc-100 lg:text-sm font-usbold">CSS</p>
                            <p className="mt-2 ml-4 p-2 rounded-lg bg-gradient-to-r from-purple-800 to-cyan-400 text-zinc-100 lg:text-sm font-usbold">Bootstrap <b className="ms-1 me-1">/</b>Tailwind</p>
                        <p className="p-2 rounded bg-neutral-900 text-zinc-100 lg:text-sm font-usbold">Javascript</p>
                            <p className="mt-2 ml-4 p-2 rounded-lg bg-cyan-900 text-zinc-100 lg:text-sm font-usbold">React</p>
                </div>

                <div className="w-1/2 flex flex-col text-start gap-1">
                    <div className="mb-6 w-full flex justify-center">
                        <div className="w-[80px] h-[80px] p-[20px] relative">
                            <div 
                                className="flex items-center justify-center w-[80px] h-[80px] rounded-[50%] bg-[#915e01]/[.4] absolute top-[22%] left-[0%]"
                                style={{boxShadow: "0px 15px 10px rgba(0, 53, 11, 0.5)"}}
                            >
                                <div 
                                    className="flex items-center justify-center w-[50px] h-[50px] rounded-[50px] bg-emerald-400"
                                    style={{boxShadow: `inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), 
                                                        0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)`}}
                                >
                                    <h2 className='text-[#00350b]/[.8] text-[0.7vw] font-usbold'>100%</h2>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className='absolute top-0 left-0'>
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#d6e043"/>
                                        <stop offset="35%" stopColor="#a66637"/>
                                        <stop offset="100%" stopColor="#c7b23d"/>
                                    </linearGradient>
                                </defs>
                                <circle 
                                    cx="40" cy="60" r="31" 
                                    strokeLinecap="round" 
                                    strokeDasharray="200" 
                                    strokeDashoffset="0" 
                                    stroke="url(#gradient)" 
                                    strokeWidth="18px" 
                                    fill="none"
                                />
                            </svg>
                        </div>
                    </div>

                    <p className='mt-5 mb-5 text-center font-ubold'>Back End Development</p>
                    <p className="p-2 rounded bg-neutral-900 text-zinc-100 font-usbold lg:text-sm">PHP</p>
                    <p className="p-2 rounded bg-neutral-900 text-zinc-100 font-usbold lg:text-sm">Javascript</p>
                        <p className="mt-2 ml-4 p-2 rounded-lg bg-green-700 text-zinc-100 font-usbold lg:text-sm">Node.js</p>
                    <p className="p-2 rounded bg-neutral-900 text-zinc-100 font-usbold lg:text-sm">Database</p>
                        <p className="mt-2 ml-4 p-2 rounded-lg bg-sky-700 text-zinc-100 font-usbold lg:text-sm">MySQL</p>
                </div>
            </div>
        </div>

        <div  className="h-full w-full flex flex-col justify-center items-center p-2">
            <p className='font-ubold'>OTHERS</p>
            {/* <a href="https://www.flaticon.com/free-icons/coding" title="coding icons">Coding icons created by Freepik - Flaticon</a> */}
            <div className="flex flex-wrap gap-10 w-[80%] mt-10 items-center justify-center">
                <Image alt="vbNet" src="/vbNet.png" width={500} height={500} className="w-[64px] h-[64px] object-contain p-2 techStackImage"/>
                <Image alt="cSharp" src="/cSharp.png" width={500} height={500} className="w-[64px] h-[64px] object-contain p-2 techStackImage"/>
                <Image alt="c++" src="/cPlusPlus.png" width={500} height={500} className="w-[64px] h-[64px] object-contain p-2 techStackImage"/>
                <Image alt="php" src="/php.png" width={500} height={500} className="w-[64px] h-[64px] object-contain p-2 techStackImage"/>
                <Image alt="phyton" src="/python.png" width={500} height={500} className="w-[64px] h-[64px] object-contain p-2 techStackImage"/>
                <Image alt="mysql" src="/mysql.png" width={500} height={500} className="w-[64px] h-[64px] object-contain p-2 techStackImage"/>
                <Image alt="mit" src="/mit.png" width={500} height={500} className="w-[64px] h-[64px] object-contain p-2 techStackImage"/>
                <Image alt="arduino" src="/arduino.png" width={500} height={500} className="w-[64px] h-[64px] object-contain p-2 techStackImage"/>         
                <Image alt="expo" src="/expo.png" width={500} height={500} className="w-[64px] h-[64px] object-contain p-2 techStackImage"/>    
                <Image alt="drupal" src="/drupal.png" width={500} height={500} className="w-[64px] h-[64px] object-contain p-2 techStackImage"/> 
                <Image alt="wix" src="/wix.png" width={500} height={500} className="w-[64px] h-[64px] object-contain p-2 techStackImage"/> 
            </div>                   
        </div>

  </fieldset>
  )
}

export default MySkills

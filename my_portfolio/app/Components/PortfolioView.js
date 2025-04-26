import React from 'react'
import WebsiteCard from './WebsiteCard'
import NavbarView from './NavbarView'
import Image from 'next/image'
import {
    CloseOutlined,
    ArrowBackOutlined,
    ReplayOutlined,
    ErrorOutline,
    StarOutline,
    BookmarkBorder,
    AccountCircle,
    MoreHoriz
  } from "@mui/icons-material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const PortfolioView = () => {

    const icons = [faDatabase, faDatabase, faDatabase];
    const positionsTop = [150, 450, 750, 1050]; 
    const positionsBottom = [118, 236, 354, 472 ]; 

    return (
        <main className='bg-emerald-400 h-full w-full overflow-hidden flex flex-col'>
    
            <NavbarView/>
    
            <div className='w-full h-full flex flex-row mt-2'>
    
              <div className='w-[50%] h-full flex justify-center ms-5'>
        
                <div
                    className="bg-black/[.2] w-[90%] h-[60%] mt-5 rounded-[25px] flex justify-center relative"
                    style={{ boxShadow: "-15px 20px 8px rgba(0, 0, 0, 0.5)" }}
                >

                    <div className="bg-transparent w-full h-full rounded-[25px] flex justify-center overflow-hidden">
                        <div className="felx flex-col border border-zinc-900/[.8] w-[70%] h-[70%] mt-8 rounded-[10px] overflow-visible relative">

                            <div className="flex w-full h-[8%] bg-zinc-900/[.8] rounded-t-[10px]">
                                <div className="w-[70px] h-[15px] rounded-t-[10px] bg-zinc-600 p-1 justify-between flex items-end px-2">
                                    <p className="text-white text-[4px] flex items-center gap-1">
                                        <Image
                                            src={"/favicon.ico"}
                                            width={500}
                                            height={500}
                                            className="w-[4px] h-[4px]"
                                            alt='Url Icon'
                                        />
                                        Unknown Squid
                                    </p>
                                    <CloseOutlined
                                        className="text-white/[.8]"
                                        style={{ fontSize: "6px" }}
                                    />
                                </div>
                            </div>
                    
                            <div className="flex w-full h-[8%] bg-zinc-600 p-1 gap-1">
                                <div className="flex gap-[2px] text-white/[.8] items-center ms-[2px]">
                                    <ArrowBackOutlined style={{ fontSize: "8px" }} />
                                    <ReplayOutlined style={{ fontSize: "8px" }} />
                                </div>
                    
                                <div className="flex-1 h-full flex justify-between items-center rounded-[25px] bg-zinc-900/[.8] px-[2px]">
                                <p className="text-[4px] text-white flex gap-[2px] items-center">
                                    <ErrorOutline
                                    className="text-white/[.8]"
                                    style={{ fontSize: "6px" }}
                                    />
                                    localhost:3000
                                </p>
                                <StarOutline
                                    className="text-white/[.8]"
                                    style={{ fontSize: "6px" }}
                                />
                                </div>
                    
                                <div className="flex gap-[2px] text-white/[.8] items-center">
                                    <BookmarkBorder style={{ fontSize: "8px" }}/>
                                    <AccountCircle style={{ fontSize: "8px" }}/>
                                    <MoreHoriz style={{ fontSize: "8px" }}/>
                                </div>
                            </div>

                            <div className='w-full h-[84%] rounded-b-[10px] overflow-hidden'>
                                <Image
                                    src={"/portfolio-view.png"}
                                    width={500}
                                    height={500}
                                    className='w-full h-[100%]'
                                    alt='view portfolio image'
                                />
                            </div>

                            <div className='bg-black w-[5px] h-[12%] absolute top-[100%] left-[50%] rounded-bl-[10px] flex overflow-visible items-end'>

                                <div className='bg-black w-[15px] h-[18%] relative rounded-bl-[10px]'>
                                    <div className='bg-black w-[1600%] h-full absolute top-0 left-0 rounded-bl-[10px] rounded-tr-[10px] flex justify-end items-end'>
                                        <div className='bg-black w-[22%] h-[30%] relative rounded-[10px] relative'>
                                            {positionsTop.map((topValue, index) => (
                                                <div
                                                    key={index}
                                                    className={`bg-black h-[200%] absolute ${index > 2 ? "w-[118%]" : "w-full"} left-0 rounded-[10px]`}
                                                    style={{ top: `${topValue}%` }}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={`bg-black h-[1.8%] w-[5%] absolute bottom-[-0.5%] right-[3%] rounded-tl-[30px] rounded-br-[25px] rounded-bl-[10px] rounded-tr-[2px] rotate-[30deg] flex justify-end`}>
                        <div className="flex relative w-[50%] h-full">
                            <div className="bg-black h-[90%] w-[150%] absolute bottom-[26%] left-[50%] rounded-tl-[30px] rounded-bl-[5px] rounded-r-[10px] rotate-[-30deg] flex justify-end">

                                <div className="flex relative w-[50%] h-full ">
                                    <div className="flex absolute top-0 left-[70%] w-[840%] h-full bg-black rounded-r-[10px] flex justify-end">

                                        <div className='bg-black w-[50%] h-full relative rounded-[10px] relative'>
                                            {positionsBottom.map((bottomValue, index) => (
                                                <div
                                                    key={index}
                                                    className={`bg-black h-[90%] absolute ${index > 2 ? "w-[118%]" : "w-full"} left-0 rounded-[10px] flex justify-end`}
                                                    style={{ bottom: `${bottomValue}%` }}
                                                >
                                                    {index > 2 ?
                                                        <div className='w-[50%] h-full relative rounded-[10px] relative'>
                                                            <div className="bg-black w-[15%] h-[600%] absolute left-[85%] top-[20%] rounded-t-[10px]">

                                                            </div>
                                                        </div> : null
                                                    }
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
              </div>
    
              <div className='flex-1 flex flex-col mt-24 gap-2'>
    
                <div className='w-fit overflow-hidden ml-5'>
                  <p className='text-[0.5rem] font-usbold text-[#00350b]/[.8] type-animation'>Welcome to my portfolio, I am Gerald</p>
                </div>
    
                <div className='flex flex-col ml-5 w-fit overflow-hidden'>
    
                    <div className='flex relative w-full top-text-container'>
                      <p className='text-[1rem] text-[#915e01]/[.8] font-ubold'>FULL STACK</p>
                      <p className="text-[1rem] text-[#915e01]/[.8] font-ubold">FULL STACK</p>
                    </div>
                    <div className='flex relative w-full bottom-text-container'>
                      <p className='text-[1rem] text-[#915e01]/[.8] font-ubold'>WEB DEVELOPER</p>
                      <p className="text-[1rem] text-[#915e01]/[.8] font-ubold">WEB DEVELOPER</p>
                    </div>
    
                </div>

                <div className='flex ml-5 border-y-[2px] border-emerald-200 w-fit'>
                    {icons.map((icon, index) => (
                    <FontAwesomeIcon
                        key={index}
                        icon={icon}
                        style={{
                            width: '45px',
                            height: '45px',
                            transform: 'rotate(-90deg)',
                            marginRight: '2px', // Optional, to add space between icons
                            marginLeft: index == 0 ? '2px' : '0px'
                        }}
                    />
                    ))}
                </div>
    
              </div>
    
    
            </div>
    
        </main>
      )
}

export default PortfolioView

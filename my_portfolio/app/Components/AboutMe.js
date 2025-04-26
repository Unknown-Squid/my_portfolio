import React, { useEffect } from 'react'
import { GitHub, MailOutline, LinkedIn } from '@mui/icons-material';
import MySkills from './MySkills';

const AboutMe = ({ visitedPages }) => {

  return (
    <div id="about-me" className={`flex flex-col w-full min-h-[100vh] h-fit bg-transparent items-center opacity-0 ${visitedPages.has("about") ? "fade-in" : ""}`}>

      <div className='flex h-fit w-full md:flex-row flex-col lg:gap-10 gap-0 mt-10'>

        <div className={`mt-20 bg-white xl:w-[600px] lg:w-[500px] md:w-[400px] w-[95%] md:h-[450px] h-[500px] flex opcaity-0
                        flex-col items-start justify-center relative rounded-br-[80%] rounded-tl-[30%] flex-shrink-0
                        ${visitedPages.has("about") ? "slide-in-left" : ""}`}>


          <div className='h-[80px] xl:w-[300px] lg:w-[250px] md:w-[220px] w-[50%] absolute left-[-4%] top-[40%] flex items-center'>

            <div className='flex justify-end items-center w-full h-full relative bg-black'>

              <div className='bg-black w-[100px] h-[150px] absolute left-0 md:flex hidden'>

              </div>

              <div className='bg-white h-[60px] xl:w-[100px] md:w-[80px] md:flex hidden rounded-l-[100%] absolute left-[10%] bottom-[100%] z-[2]'>

              </div>

              <div className='flex bg-black xl:w-[350px] lg:w-[300px] md:w-[250px] w-[120%] h-[450%] xl:h-[350px] lg:h-[300px] md:h-[250px] rounded-[100%] absolute md:right-[-60%] right-[-50%]'>

              </div>

              <div className='bg-white h-[60px] xl:w-[100px] md:w-[80px] md:flex hidden rounded-l-[100%] absolute left-[10%] top-[100%] z-[2]'>

              </div>

            </div>

          </div>

        </div>

        <div className='md:w-[60%] w-full h-full flex flex-col md:mt-32 mt-14 px-10 gap-5'>

            <p className={`text-[#00350b]/[.8] xl:text-[1.7vw] lg:text-[2vw] md:text-[2.5vw] text-[3.5vw] w-[100%] font-usbold opcaity-0 ${visitedPages.has("about") ? "slide-in-top" : ""}`}>
              Hi, I&apos;m Gerald, a Full-Stack Web Developer passionate about building fast, user-friendly, 
              and scalable web applications. I love turning ideas into seamless digital experiences, 
              from sleek front-end designs to powerful back-end systems
            </p>

            <div className='w-fit h-fit flex gap-5 lg:mt-10 mt-0'>
              <div className={`rounded-[15px] xl:h-[50px] h-[40px] xl:px-4 px-2 xl:text-[16px] flex items-center justify-center border opcaity-0 ${visitedPages.has("about") ? "slide-in-left" : ""}`}>
                resume
              </div>
              <div className={`xl:h-[50px] xl:w-[50px] h-[40px] w-[40px] flex items-center justify-center border rounded-[100%] opcaity-0 ${visitedPages.has("about") ? "slide-in-left" : ""}`}>
                <GitHub/>
              </div>
              <div className={`xl:h-[50px] xl:w-[50px] h-[40px] w-[40px] flex items-center justify-center border rounded-[100%] opcaity-0 ${visitedPages.has("about") ? "slide-in-left" : ""}`}>
                <MailOutline/>
              </div>
              <div className={`xl:h-[50px] xl:w-[50px] h-[40px] w-[40px] flex items-center justify-center border rounded-[100%] opcaity-0 ${visitedPages.has("about") ? "slide-in-left" : ""}`}>
                <LinkedIn/>
              </div>
            </div>
        </div>
      </div>

      <div className='w-full h-fit flex justify-end'>
        <div className={`xl:w-[68%] lg:w-[85%] w-[100%] px-10 opcaity-0 ${visitedPages.has("about") ? "fade-in" : ""}`}>
          <MySkills/>
        </div>
      </div>
      
    </div>
  )
}

export default AboutMe

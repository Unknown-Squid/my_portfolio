import React from 'react'
import { GitHub, MailOutline, LinkedIn } from '@mui/icons-material';
import MySkills from './MySkills';

const AboutMe = () => {
  return (
    <div className='flex flex-col w-full h-[1000px] bg-transparent'>

      <div className='flex h-fit w-full gap-20'>

        <div className='mt-20 bg-white w-[30%] h-[80%] flex flex-col items-start justify-center relative rounded-br-[80%] rounded-tl-[45%]'>


          <div className='bg-red-500 h-[80px] w-[300px] absolute left-[-4%] top-[50%] flex items-center'>

            <div className='flex justify-end items-center w-full h-full relative bg-black'>

              <div className='bg-black w-[100px] h-[150px] absolute left-0'>

              </div>

              <div className='bg-white h-[60px] w-[100px] rounded-l-[100%] absolute left-[10%] bottom-[100%] z-[2]'>

              </div>

              <div className='flex bg-black w-[350px] h-[350px] rounded-[100%] absolute right-[-60%]'>

              </div>

              <div className='bg-white h-[60px] w-[100px] rounded-l-[100%] absolute left-[10%] top-[100%] z-[2]'>

              </div>

            </div>

          </div>

        </div>

        <div className='w-[60%] h-full flex flex-col mt-44 px-10 gap-5'>

            <p className='text-[#00350b]/[.8] text-[22px] w-[70%] font-usbold'>
              Hi, I'm Gerald, a Full-Stack Web Developer passionate about building fast, user-friendly, 
              and scalable web applications. I love turning ideas into seamless digital experiences, 
              from sleek front-end designs to powerful back-end systems
            </p>

            <div className='w-fit h-fit flex gap-5 mt-2'>
              <div className='h-[50px] rounded-[15px] h-[50px] px-4 flex items-center justify-center border'>
                resume
              </div>
              <div className='h-[50px] w-[50px] flex items-center justify-center border rounded-[100%]'>
                <GitHub/>
              </div>
              <div className='h-[50px] w-[50px] flex items-center justify-center border rounded-[100%]'>
                <MailOutline/>
              </div>
              <div className='h-[50px] w-[50px] flex items-center justify-center border rounded-[100%]'>
                <LinkedIn/>
              </div>
            </div>

            <MySkills/>

        </div>
      </div>

      <div className='bg-white w-full'>
      
      </div>
      
    </div>
  )
}

export default AboutMe

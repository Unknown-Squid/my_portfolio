import React from 'react'
import { GitHub, MailOutline, LinkedIn, Call } from '@mui/icons-material';

const ContactMe = () => {
  return (
    <div id="my-contacts" className='flex w-full h-[100vh] bg-transparent items-end'>

        <div className='w-1/2 h-full flex items-center justify-center'>
            <div className='flex relative w-fit page-not-found'>
                <p className='text-[25vw] text-[#915e01]/[.8] font-ubold'>404</p>
                <p className="text-[25vw] text-[#915e01]/[.8] font-ubold">404</p>
            </div>
        </div>

        <div className='w-1/2 h-full flex flex-col justify-center'>
            <p className='ml-10 w-[70%] text-xl font-usbold text-[#00350b]/[.8] flex flex-col gap-5'>
                <span className='font-ubold text-2xl'>Server Response: 404</span>
                Contact this person if you&apos;d like to learn more about his work or discuss potential projects. 
                He is always open to new opportunities and would be happy to connect.
            </p>

            <div className='ml-10 w-fit h-fit flex gap-5 mt-10'>
                <div className='h-[50px] rounded-[15px] h-[50px] px-4 flex items-center justify-center border cursor-pointer'>
                    resume
                </div>
                <div className='h-[50px] w-[50px] flex items-center justify-center border rounded-[100%] cursor-pointer'>
                    <GitHub/>
                </div>
                <div className='h-[50px] w-[50px] flex items-center justify-center border rounded-[100%] cursor-pointer'>
                    <MailOutline/>
                </div>
                <div className='h-[50px] w-[50px] flex items-center justify-center border rounded-[100%] cursor-pointer'>
                    <LinkedIn/>
                </div>
            </div>
            <div className='ml-10 mt-10 w-fit h-fit flex gap-2'>
                <p><Call sx={{width: '16px', height: '16px'}}/> 63+ </p>
                <p className='hover:underline cursor-pointer'>9161915124</p>
            </div>
            <div className='ml-10 mt-5 w-fit h-fit flex gap-2'>
                <p><Call sx={{width: '16px', height: '16px'}}/> 63+ </p>
                <p className='hover:underline cursor-pointer'>9918847001</p>
            </div>
        </div>

    </div>
  )
}

export default ContactMe

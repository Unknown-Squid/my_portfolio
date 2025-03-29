import React from 'react'
import Image from 'next/image'

const MyProjects = () => {
  return (
    <div className='flex flex-col w-full h-[1000px] bg-transparent'>
      <div className='grid grid-cols-3 px-5 gap-5'>

        <div className="w-full h-[400px] text-white flex flex-col items-end relative">
           <video className="h-full w-full bg-black" loop muted>
              <source src="/capstone.mp4" type="video/mp4"/>
          </video>

          <div className='absolute top-0 left-0 bg-black/[.4] w-full h-full'>

          </div>

          <div className="h-fit p-2 w-full flex flex-col justify-center items-center bg-black/[.8] z-10 absolute bottom-0 left-0">
            <h1 className="w-full text-center mb-2"> Attendance Checker </h1>
            <p className="w-full mb-10 ml-10">This is attendance system for taking attendance, it has this following features;
              <br/>
              <br/> * Funtionable Searchbar with filtering
              <br/> * OCR and QR Scanning Funtion
              <br/> * Downloadable PDF Form of Attendance Template
              <br/> * Recording the Attendance of the Student
              <br/> * Creating, deleting and archiving of Room for Individual Subject
              <br/> * Automatic Email Sender (forgot password, delete account and new account)
              <br/> * Acount Creation
              <br/> * Adding Subject, Course and Student
            </p>
          </div>
        </div>

        <div className="w-full h-[400px] text-white flex flex-col items-end relative">
            <div  className="h-full w-full object-fit relative">
              <Image alt="simpleAttendanceChecker" src="/simpleAttendanceChecker.PNG" fill/>
            </div>

            <div className='absolute top-0 left-0 bg-black/[.4] w-full h-full'>

            </div>

            <div className="h-fit p-2 w-full flex flex-col justify-center items-center bg-black/[.8] z-10 absolute bottom-0 left-0">
              <h1 className="w-full text-center mb-2"> Attendance Checker </h1>
              <p className="w-full mb-10">This is a sumple attendance checker application made in vb.net, it has this following features;
                <br/>
                <br/> * creating account of students
                <br/> * providing image of schedule depending on the section that you choose
                <br/> * subject filtering depend on time of schedule
              </p>
            </div>
        </div>

        <div className="w-full h-[400px] text-white flex flex-col items-end relative">
            <video className="h-full w-full bg-black" loop>
                <source src="/moodTank.mp4" type="video/mp4"/>
            </video>
            <div className='absolute top-0 left-0 bg-black/[.4] w-full h-full'>
            </div>

            <div className="h-fit p-2 w-full flex flex-col justify-center items-center bg-black/[.8] z-10 absolute bottom-0 left-0">
              <h1 className="w-full text-center mb-2"> Attendance Checker </h1>
              <p className="w-full mb-10 ml-10">This is mood tank for changing the mood of a person, it&apos;s pars divided by;
                <br/>
                <br/> * Sound Sensor for controling the light
                <br/> * Light Sensor for controling the light
                <br/> * Buttons for Switching Sensors
                <br/> * Button for turning of and on
                <br/> * LED serves as indicator which sensor is on
              </p>
            </div>
        </div>

        <div className="w-full h-[400px] text-white flex flex-col items-end relative">
          <video className="h-full w-full bg-black" loop muted>
              <source src="/carGame.mp4" type="video/mp4"/>
          </video>

          <div className='absolute top-0 left-0 bg-black/[.4] w-full h-full'>
          </div>

          <div className="h-fit p-2 w-full flex flex-col justify-center items-center bg-black/[.8] z-10 absolute bottom-0 left-0">
            <h1 className="w-full text-center mb-2"> Simple Car Game </h1>
            <p className="w-full mb-10 ml-10">This is a simple 2D car game made in pygame module, the game flow are;
              <br/>
              <br/> * choose between start and exit button
              <br/> * after start, you need to enter your name
              <br/> * after entering your name choose your map
              <br/> * after choosing the map choose your car
              <br/> * at the start there&apos;s a guide what to do
              <br/> * hold gas to start the race and to accelerate
              <br/> * hold break to deccelerate
              <br/> * if your car touch the finish line first you win otherwise you lose
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MyProjects

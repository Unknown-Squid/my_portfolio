import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MyProjects = ({ activeProject, setActiveProject  }) => {

  const [gridColCount, setGridColCount] = useState("grid-cols-3");

  const videoRefs = {
    project1: useRef(null),
    project3: useRef(null),
    project4: useRef(null),
  };

  const handleProjectClick = (project) => {
    if (project != activeProject){
      setActiveProject(project);
    } else {
      setActiveProject("");
    }
  };


  useEffect(() => {
    // Pause all videos
    Object.keys(videoRefs).forEach((key) => {
      if (videoRefs[key].current) {
        videoRefs[key].current.pause();
      }
    });
  
    // Play the current active project video
    if (activeProject && videoRefs[activeProject]?.current) {
      videoRefs[activeProject].current.currentTime = 0; // Reset video playback
      videoRefs[activeProject].current.play();
    }
  }, [activeProject, videoRefs]); 


  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth <= 768){
        setGridColCount("grid-cols-1")
      } else if (window.innerWidth <= 1024){
        setGridColCount("grid-cols-2")
      } else {
        setGridColCount("grid-cols-3")
      }
    };

    // Run on mount
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  return (
    <div id="my-projects" className='flex w-full h-fit bg-black/[.5] items-end pb-5 relative'>

      <div className={`h-[80%] flex-1 grid ${gridColCount} px-5 gap-5 mt-20`}>

        {/* Project 1 */}
        <div 
          className="w-full h-[400px] text-white flex flex-col items-end relative group cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          onClick={() => handleProjectClick("project1")}
        >
          <video className="h-full w-full bg-black" loop muted>
            <source src="/capstone.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 bg-black/[.4] w-full h-full"></div>
          <div className="absolute bottom-0 left-0 w-full bg-black/[.8] z-10 p-2 flex flex-col justify-start items-center overflow-hidden 
            max-h-[10%] group-hover:max-h-[500px] transition-[max-height] duration-500 ease-in-out">
            <h1 className="w-full text-center mb-5">Attendance Checker (2.0)</h1>
            <p className="w-full mb-2 ml-10">Features: OCR, QR Scan, Auto Email, PDF Download, etc.</p>
            <p className="w-full mb-5 ml-10">click this project for more details.</p>
          </div>
        </div>

        {/* Project 2 */}
        <div 
          className="w-full h-[400px] text-white flex flex-col items-end relative group cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          onClick={() => handleProjectClick("project2")}
        >
          <div className="h-full w-full object-cover relative">
            <Image alt="simpleAttendanceChecker" src="/simpleAttendanceChecker.PNG" fill />
          </div>
          <div className="absolute top-0 left-0 bg-black/[.4] w-full h-full"></div>
          <div className="absolute bottom-0 left-0 w-full bg-black/[.8] z-10 p-2 flex flex-col justify-start items-center overflow-hidden 
            max-h-[10%] group-hover:max-h-[500px] transition-[max-height] duration-500 ease-in-out">
            <h1 className="w-full text-center mb-5">Attendance Checker (1.0)</h1>
            <p className="w-full mb-2 ml-10">Basic attendance system with student account creation.</p>
            <p className="w-full mb-5 ml-10">click this project for more details.</p>
          </div>

        </div>

        {/* Project 3 */}
        <div 
          className="w-full h-[400px] text-white flex flex-col items-end relative group cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          onClick={() => handleProjectClick("project3")}
        >
          <video className="h-full w-full bg-black" loop muted>
            <source src="/moodTank.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 bg-black/[.4] w-full h-full"></div>
          <div className="absolute bottom-0 left-0 w-full bg-black/[.8] z-10 p-2 flex flex-col justify-start items-center overflow-hidden 
            max-h-[10%] group-hover:max-h-[500px] transition-[max-height] duration-500 ease-in-out">
            <h1 className="w-full text-center mb-5">Mood Tank</h1>
            <p className="w-full mb-2 ml-10">Light & Sound Sensor-based mood control system.</p>
            <p className="w-full mb-5 ml-10">click this project for more details.</p>
          </div>
        </div>

        {/* Project 4 */}
        <div 
          className="w-full h-[400px] text-white flex flex-col items-end relative group cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          onClick={() => handleProjectClick("project4")}
        >
          <video className="h-full w-full bg-black" loop muted>
            <source src="/carGame.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 bg-black/[.4] w-full h-full"></div>
          <div className="absolute bottom-0 left-0 w-full bg-black/[.8] z-10 p-2 flex flex-col justify-start items-center overflow-hidden 
            max-h-[10%] group-hover:max-h-[500px] transition-[max-height] duration-500 ease-in-out">
            <h1 className="w-full text-center mb-5">Simple Car Game</h1>
            <p className="w-full mb-2 ml-10">A 2D car game with maps, cars, and racing logic.</p>
            <p className="w-full mb-5 ml-10">click this project for more details.</p>
          </div>
        </div>

        {/* Project 5 */}
        <div 
          className="w-full h-[400px] text-white flex flex-col items-end relative group cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          onClick={() => handleProjectClick("project5")}
        >
          <div className="h-full w-full object-cover relative">
            <Image alt="simple dashboard" src="/dashbored.png" fill />
          </div>
          <div className="absolute top-0 left-0 bg-black/[.4] w-full h-full"></div>
          <div className="absolute bottom-0 left-0 w-full bg-black/[.8] z-10 p-2 flex flex-col justify-start items-center overflow-hidden 
            max-h-[10%] group-hover:max-h-[500px] transition-[max-height] duration-500 ease-in-out">
            <h1 className="w-full text-center mb-5">Simple Dashbored</h1>
            <p className="w-full mb-2 ml-10">simple dashboard that I created because I was bored</p>
            <p className="w-full mb-5 ml-10">click this project for more details.</p>
          </div>

        </div>

      </div>

      {/* Active Project Display */}
      <div className={`w-full h-full bg-black/[.8] absolute top-0 left-0 z-[100] ${activeProject.length > 0 ? "flex" : "hidden"} justify-center lg:items-center items-start`}>

        <div className={`w-[1000px] lg:h-[80%] h-fit bg-black px-5 py-5 flex-col ${activeProject === "project1" ? "flex" : "hidden"}`}>
          <button type="button" onClick={() => (setActiveProject(""), setGridColCount("grid-cols-3"))} className='cursor-pointer w-full h-fit flex justify-end text-white mb-5 pr-2 pt-2 '>
            <FontAwesomeIcon icon={faTimes} className='w-[20px] h-[20px]'/>
          </button>
          <video ref={videoRefs.project1} className="h-[400px] w-full" autoPlay loop muted>
            <source src="/capstone.mp4" type="video/mp4" />
          </video>

          <div className='flex flex-col w-full h-fit gap-3 text-white ml-5 overflow-auto'>
              <p className='w-full text-center mt-5'>
                Attendance Checker (2.0)
                <br/>
                &#123; React, Next.js, Node.js, MySQL &#125;
              </p>
              <p>
                This system, called Attendance Checker, was our capstone project in my fourth year of college. 
                We proposed this project to modernize our school&apos;s traditional attendance system, making it smarter, more efficient, 
                and easier for both students and faculty to take attendance in a more organized way
              </p>
              <p>This attendance system includes:</p>
              <ul className="list-disc pl-5 flex flex-col gap-3">
                <li>Smart Search with Filters</li>
                <li>OCR & QR Code Scanning</li>
                <li>Automated Attendance Recording with Exportable Attendance PDFs</li>
                <li>Room Management (Create, Delete, Archive)</li>
                <li>User Account Management with Automated Email Notifications</li>
                <li>Course, Subject & Student Management</li>
              </ul>
          </div>

        </div>

        <div className={`lg:w-[1000px] w-[90%] h-[80%] bg-black px-5 py-5 flex-col ${activeProject === "project2" ? "flex" : "hidden"}`}>
         <button type="button" onClick={() => (setActiveProject(""), setGridColCount("grid-cols-3"))} className='cursor-pointer w-full h-fit flex justify-end text-white mb-5 pr-2 pt-2 '>
            <FontAwesomeIcon icon={faTimes} className='w-[20px] h-[20px]'/>
          </button>

          <div className="h-[500px] w-full object-cover relative">
            <Image alt="simpleAttendanceChecker" src="/simpleAttendanceChecker.PNG" fill />
          </div>

          <div className='flex flex-col w-full h-fit gap-3 text-white ml-5 overflow-auto'>
              <p className='w-full text-center mt-5'>
                Attendance Checker (1.0)
                <br/>
                &#123; C#, Visual Basic (VB.NET), MySQL &#125;
              </p>
              <p>
                This system, called Attendance Checker, was developed as part of my second-year college project. It is built using 
                Visual Basic and serves as a straightforward attendance tracking tool. The system generates a visual representation 
                of the section schedule for each subject, providing an efficient way to manage attendance.
              </p>
              <p>This attendance system includes:</p>
              <ul className="list-disc pl-5 flex flex-col gap-3">
                <li>Student Account Registration and Login</li>
                <li>Generate Section Subject Picture</li>
                <li>Check-in and Check-out Buttons Based on Subject Time, with Labels for Late or Absent</li>
              </ul>
          </div>
        </div>

        <div className={`lg:w-[1000px] w-[90%] h-[80%] bg-black px-5 py-5 flex-col ${activeProject === "project3" ? "flex" : "hidden"}`}>
          <button type="button" onClick={() => (setActiveProject(""), setGridColCount("grid-cols-3"))} className='cursor-pointer w-full h-fit flex justify-end text-white mb-5 pr-2 pt-2 '>
            <FontAwesomeIcon icon={faTimes} className='w-[20px] h-[20px]'/>
          </button>
          <video ref={videoRefs.project3} className="h-[400px] w-full bg-black" autoPlay loop muted>
            <source src="/moodTank.mp4" type="video/mp4" />
          </video>

          <div className='flex flex-col w-full h-fit gap-3 text-white ml-5 overflow-auto'>
              <p className='w-full text-center mt-5'>
                Mood Tank
                <br/>
                &#123; Arduino &#125;
              </p>
              <p>
                Mood Tank is a prototype project created during my second year of college. Inspired by the concept of a mood lamp, 
                where changing ambient light influences a person&apos;s mood, this prototype features a tank model, hence the name &quot;Mood Tank.&quot; 
                It utilizes two sensors: a light sensor that activates the light when the ambient light is low, and a sound sensor that triggers 
                the light based on sound levels.
              </p>
              <p>This prototype consists of the following components:</p>
              <ul className="list-disc pl-5 flex flex-col gap-3">
                <li>LED indicator to show which sensor is activated and RGB LED for adjustable light output</li>
                <li>Light and sound sensors for detecting environmental data and Buttons to toggle between sensors</li>
                <li>Breadboard for organizing and connecting components and Jump wires for electrical connections</li>
                <li>Arduino as the main controller</li>
                <li>Cardboard, colored paper, and cotton for tank structure</li>
              </ul>
          </div>
        </div>

        <div className={`lg:w-[1000px] w-[90%] h-[80%] bg-black px-5 py-5 flex-col ${activeProject === "project4" ? "flex" : "hidden"}`}>
          <button type="button" onClick={() => (setActiveProject(""), setGridColCount("grid-cols-3"))} className='cursor-pointer w-full h-fit flex justify-end text-white mb-5 pr-2 pt-2 '>
            <FontAwesomeIcon icon={faTimes} className='w-[20px] h-[20px]'/>
          </button>
          <video ref={videoRefs.project4} className="h-[500px] w-full bg-black" autoPlay loop muted>
            <source src="/carGame.mp4" type="video/mp4" />
          </video>

          <div className='flex flex-col w-full h-fit gap-3 text-white ml-5 overflow-auto'>
              <p className='w-full text-center mt-5'>
                simple Car Game
                <br/>
                &#123; Python, Pygame &#125;
              </p>
              <p>
                This project, developed during my first year of college, is a 2D car game created using Python and the Pygame library.
              </p>
              <p>The game flow is as follows:</p>
              <ul className="list-disc pl-5 flex flex-col gap-3">
                <li>Click &quot;Start&quot; to begin</li>
                <li>Enter your name</li>
                <li>Select your location</li>
                <li>Choose your car</li>
                <li>Hold the gas pedal to move forward</li>
                <li>Hold the brake to reverse</li>
                <li>Win screen appears if you win, or lose screen if you don&#39;t</li>
                <li>Click &quot;Retry&quot; or &quot;Exit to Menu&quot; to restart or exit</li>
              </ul>
          </div>
        </div>


        <div className={`lg:w-[1000px] w-[90%] h-[80%] bg-black px-5 py-5 flex-col ${activeProject === "project5" ? "flex" : "hidden"}`}>
         <button type="button" onClick={() => (setActiveProject(""), setGridColCount("grid-cols-3"))} className='cursor-pointer w-full h-fit flex justify-end text-white mb-5 pr-2 pt-2 '>
            <FontAwesomeIcon icon={faTimes} className='w-[20px] h-[20px]'/>
          </button>

          <div className="h-[500px] w-full object-cover relative">
            <Image alt="simple dashboard" src="/dashbored.png" fill />
          </div>

          <div className='flex flex-col w-full h-fit gap-3 text-white ml-5 overflow-auto'>
              <p className='w-full text-center mt-5'>
                Simple Dashbored
                <br/>
                &#123; React, Node.js, MySQL &#125;
              </p>
              <p>
              This is a simple dashboard that I created because I was bored. I explored the use of CRUD 
              by displaying the data through graphs using ECharts.js. ECharts.js is very aesthetic and easy to use. 
              Each graph also provides tools for downloading data, reloading, etc. 
              They offer a wide variety of graphs to choose from.
              </p>
              <p>This simple dashbored include:</p>
              <ul className="list-disc pl-5 flex flex-col gap-3">
                <li>Creating of account</li>
                <li>Reading user Data</li>
                <li>Updating user Data</li>
                <li>Deleting user data</li>
              </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MyProjects

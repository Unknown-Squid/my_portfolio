"use client";
import { useEffect, useState } from "react";
import TsParticles from "./tsparticles";
import next from "next";
import Image from "next/image";

export default function Home() {

  const [scroll, setScroll] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const [letterU, setLetterU] = useState(false);
  const [letterS, setLetterS] = useState(false);
  const [about, setAbout] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contacts, setContacts] = useState(false);
  let currentProject = 8;
  let rotate = 0;

  const nextButton = () => {
    rotate -= 45;
    const gallery = document.getElementById('gallery');
    gallery.style.transform = `perspective(2000px) rotateY(${rotate}deg)`;
    gallery.style.transition  = "transform 1.5s ease-in-out";
    document.getElementById(`project${currentProject}`).style.pointerEvents = "none";
    if (currentProject != 8){
      document.getElementById(`project${currentProject + 1}`).style.pointerEvents = "auto";
    }
    currentProject += 1;
    if (currentProject == 9){
      currentProject = 1
      document.getElementById(`project1`).style.pointerEvents = "auto";
    }
  }

  const backButton = () => {
    rotate += 45 ;
    const gallery = document.getElementById('gallery');
    gallery.style.transform = `perspective(2000px) rotateY(${rotate}deg)`;
    gallery.style.transition  = "transform 1.5s ease-in-out";
    document.getElementById(`project${currentProject}`).style.pointerEvents = "none";
    if (currentProject != 1){
      document.getElementById(`project${currentProject - 1}`).style.pointerEvents = "auto";
    }
    currentProject -= 1;
    if (currentProject == 0){
      currentProject = 8
      document.getElementById(`project8`).style.pointerEvents = "auto";
    }
  }

  const showProject8 = (e) => {
    const project8Cont = document.getElementById("project8Cont");
    project8Cont.style.display = "flex";
    document.getElementById(`${e.target.name}Vid`).play();
  }

  const showProject7 = (e) => {
    const project7Cont = document.getElementById("project7Cont");
    project7Cont.style.display = "flex";
    document.getElementById(`${e.target.name}Vid`).play();
  }

  const showProject6 = (e) => {
    const project6Cont = document.getElementById("project6Cont");
    project6Cont.style.display = "flex";
  }

  const showProject5 = (e) => {
    const project5Cont = document.getElementById("project5Cont");
    project5Cont.style.display = "flex";
    document.getElementById(`${e.target.name}Vid`).play();
  }

  const showProject4 = (e) => {
    const project4Cont = document.getElementById("project4Cont");
    project4Cont.style.display = "flex";
    document.getElementById(`${e.target.name}Vid`).play();
  }


  const showProject3 = (e) => {
    const project3Cont = document.getElementById("project3Cont");
    project3Cont.style.display = "flex";
    document.getElementById(`${e.target.name}Vid`).play();
  }

  const showProject2 = (e) => {
    const project2Cont = document.getElementById("project2Cont");
    project2Cont.style.display = "flex";
    document.getElementById(`${e.target.name}Vid`).play();
  }

  const showProject1 = (e) => {
    const project1Cont = document.getElementById("project1Cont");
    project1Cont.style.display = "flex";
    document.getElementById(`${e.target.name}Vid`).play();
  }

  const exit = ()=>{
    document.getElementById("project8Cont").style.display = "none";
    document.getElementById("project7Cont").style.display = "none";
    document.getElementById("project6Cont").style.display = "none";
    document.getElementById("project5Cont").style.display = "none";
    document.getElementById(`project8Vid`).pause();
    document.getElementById(`project7Vid`).pause();
    document.getElementById(`project5Vid`).pause();

  }


  useEffect(() => {


    const hideNavBar = () => {
      const targetElement = document.getElementById('header'); 
      const targetElement2 = document.getElementById('page2');
      const targetElement3 = document.getElementById('page3'); 
      const targetElement4 = document.getElementById('page4'); 

      if (targetElement) {
        if (targetElement.getBoundingClientRect().y > -50) {
            setScroll(false);
        } else {
            setScroll(true);
        }
      }

      if (targetElement2 && targetElement3) {
        if (targetElement2.getBoundingClientRect().y <= 0) {
          if (targetElement2.getBoundingClientRect().y > -400){
            const progressBar = document.getElementsByTagName("circle");
            progressBar[0].style.transition = 'stroke-dashoffset 1.5s ease-in-out';
            progressBar[0].style.strokeDashoffset = 0;
            progressBar[1].style.transition = 'stroke-dashoffset 1.5s ease-in-out';
            progressBar[1].style.strokeDashoffset = 0;
            setAbout(true);
            setNavBar(true);
          } else {
            setAbout(false);
          }


        } else {
          setAbout(false);
          setNavBar(false);
        }

        if (targetElement3.getBoundingClientRect().y <= 0) {
          if (targetElement3.getBoundingClientRect().y > -400){          
            let count = 0;
            for (let i = 1; i < 9; i++){
              count += 1;
              const span = document.getElementById(`project${i}`);
              span.style.transform = `rotateY(calc(${count} * 45deg)) translateZ(600px)`
              setProjects(true);
            }
          } else {
            setProjects(false);
          }
        } else {
          setProjects(false);
        }

        if (targetElement4.getBoundingClientRect().y <= 0) {
            setContacts(true);
        } else {
          setContacts(false);
        }
      }  
    };
  
    window.addEventListener('scroll', hideNavBar);
  
    return () => {
      window.removeEventListener('scroll', hideNavBar);
    };
  }, []);


  useEffect(() => {
    if (navBar){
      if (!letterU || !letterS){
        var rollingTextU = document.getElementById("U");
        var rollingTextS = document.getElementById("S");
        var stopAtLetterU = "U";
        var stopAtLetterS = "S";
        rollingTextU.style.animationIterationCount = "1";
        rollingTextS.style.animationIterationCount = "1";
        var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let count = 0;
        var intervalU = setInterval(function() {
            count += 1;
            rollingTextU.innerHTML = letters[count];
            if (letters[count] === stopAtLetterU) {
                count = 0;
                clearInterval(intervalU);
                var intervalS = setInterval(function() {
                  count += 1;
                  rollingTextS.innerHTML = letters[count];
                  if (letters[count] === stopAtLetterS) {
                      count = 0;
                      setLetterU(true)
                      setLetterS(true)
                      clearInterval(intervalS);
                  }
                }, 100);
            }
        }, 100);
      }
    
    }
  }, [navBar, letterU, letterS]);

  return (
    <div className="h-full w-full flex flex-col">
      {scroll ?  <div id="page1"><div id="header" className="h-full w-2/3"></div></div> : 
            <div id="page1" className={`flex flex-col items-center justify-center ${scroll ? "fadeOut" : null}`}>
              <div id="header" className="h-full w-full text-neutral-200">
                <div className="w-full lg:h-1/3 lg:justify-end md:h-1/3 md:justify-end sm:h-1/3 sm:justify-end h-1/4 font-bold flex flex-col items-center justify-center relative">
                  <h1 className="web absolute mt-10 lg:text-6xl md:text-6xl sm:text-6xl text-3xl flex justify-center">WEB</h1>
                  <Image  width={100} height={100} alt="capture" src="/Capture.PNG" className="capture"/>
                  <h1 className="developer absolute ml-2 lg:text-6xl md:text-6xl sm:text-6xl text-3xl flex justify-center">EVELOPER</h1>  
                </div>
                <div className="w-full h-1/2 flex flex-col ">
                    <div className="w-full h-5/6 text-center flex flex-col items-center justify-start">
                        <div className="lg:w-1/4 md:w-1/2 sm:w-1/2 w-3/4 flex flex-col items-center justify-center mt-10 relative">
                          <h2 className="lg:text-4xl text-xl"> Hi <span className="emoji2 lg:text-2xl md:text-2xl sm:text-2xl"></span><span className="emoji1 lg:text-lg md:text-sm sm:text-sm text-sm w-1/2 h-1/2"></span>&nbsp;&nbsp;&nbsp;, I&apos;m <i>Gerald Fegalan</i></h2>
                          <h3 className="lg:text-2xl text-sm">An aspiring web developer who can do front-end and back-end.</h3>
                        </div>                       
                        <div className="lg:h-2/5  md:h-2/5  sm:h-2/5  h-2/5 w-full mt-10 relative flex text-center justify-center">
                          <div className="box1"></div>
                          <div className="box2"></div>
                          <div className="box3"></div>
                          <div className="vidCont h-full lg:w-1/6 md:w-1/6 sm:w-1/6 w-1/3 flex justify-center">
                            <video className="h-full w-full object-cover" autoPlay muted loop>
                              <source src="/squid.mp4" type="video/mp4"/>
                            </video>
                          </div>
                       </div>
                        <q className="lg:text-sm md:text-sm sm:text-sm italic mt-5">
                          I always do my best when it comes to web developing so that I don’t get <b className="underline text-red-600">417</b>
                        </q>
                        <div id="moveDown" className="relative flex justify-center mt-10 ">
                          <a href="#page2" className="text-white font-bold hover:text-blue-600">mo&nbsp;&nbsp;&nbsp;&nbsp;e down</a>
                          <Image width={100} height={100} className="moveDown" alt="moveDown" src="/move down.PNG"/>
                        </div>
                    </div>  
                  </div>
              </div>
            </div> 
      }
      <div>
        {navBar ? <div className={`navBar h-12 w-full text-neutral-200`}>
            <div className="relative h-full w-1/2 flex justify-center items-center">
                <video onClick={() => window.location.href = "/"} className="logo lg:w-1/5 md:w-1/3 sm:w-1/2 h-3/4 object-cover" autoPlay muted loop>
                  <source src="/logo.mp4" type="video/mp4"/>
                </video>
                <div onClick={() => window.location.href = "/"} className="logoTitle w-1/4 flex justify-center items-center absolute gap-2 text-xs font-bold">
                  <div className="flex">
                    {letterU ? <p id="U">U</p> : <p id="U"></p>}
                    {letterU ? <p className="unknown">nknown</p> : null}
                  </div>
                  <div className="flex">
                    {letterS ? <p id="S">S</p> : <p id="S"></p>}
                    {letterS ? <p className="squid">quid</p> : null}
                  </div>
                </div>
            </div>

            <div className="h-full w-1/2 text flex justify-evenly items-center font-bold">
              <div id="about" className={`${!about ? "about" : "aboutActive"} h-full flex justify-center items-center`}>
                <a href="#page2">about</a>
              </div>
              <div id="projects" className={`${!projects ? "projects" : "projectsActive"} h-full flex justify-center items-center`}>
                <a href="#page3">projects</a>
              </div>
              <div id="contacts" className={`${!contacts ? "contacts" : "contactsActive"} h-full flex justify-center items-center`}>
                <a href="#page4">contacts</a>
              </div>
            </div>
          </div> : null 
        }
        <h2 id="about" className={`${!about ? "aboutMobile" : "aboutMobileActive"} text-neutral-200 bold`}> ABOUT </h2>
        <h2 id="projects" className={`${!projects ? "projectsMobile" : "projectsMobileActive"} text-neutral-200 bold`}> PROJECTS </h2>
        <h2 id="contacts" className={`${!contacts ? "contactsMobile" : "contactsMobileActive"} text-neutral-200 bold`}> CONTACTS </h2>

        <div id="page2" className={`flex flex-col ${about && navBar ? "fadeOut2" : null}`}>

          <div id="contentCont" className="w-full h-full flex">

            <div className="lg:w-1/2 lg:h-full md:w-1/2 md:h-full sm:w-1/2 sm:h-full w-full h-3/5 flex flex-col items-center lg:justify-start md:justify-start sm:justify-start justify-center text-neutral-200 p-2 gap-2">

              <div className="lg:h-2/5 lg:w-1/2 md:h-2/5 md:w-1/2 sm:h-2/5 sm:w-1/2 w-full h-1/3 justify-center items-center flex ">
                <div className="lg:h-1/2 lg:w-1/2 md:h-1/2 md:w-1/2 sm:h-1/2 sm:w-1/2 w-1/2 h-5/6 bg-white"></div>
              </div>

              <fieldset className="lg:w-2/3 md:w-2/3 sm:w-2/3 w-3/4 flex flex-col mt-10 items-center border border-white p-2">
                <legend>DEGREE</legend>
                <p className="w-full text-center">
                  BACHELOR OF ENGINEERING TECHNOLOGY <br/> MAJOR IN COMPUTER ENGINEERING TECHNOLOGY
                </p>
              </fieldset>

              <fieldset className="lg:w-2/3 md:w-2/3 sm:w-2/3 w-3/4 flex flex-col items-center border border-white p-1 lg:pt-2 lg:pb-2">
                <legend>SCHOOL</legend>
                <p className="w-full text-center">
                  TECHNOLOGICAL UNIVERSITY OF THE PHILLIPINES - CAVITE
                </p>
              </fieldset>

              <a href="" className="underline mt-5">
                  MY CERTIFICATE
              </a>

            </div>

            <div className="lg:w-1/2 lg:h-full md:w-1/2 md:h-full sm:w-1/2 sm:h-full w-full h-2/5 flex flex-col items-center justify-center gap-2 p-1 text-neutral-200">

              <div className="w-full lg:h-1/3 md:h-1/3 sm:h-1/3 h-1/2 flex justify-center items-center">
                <div className="flex items-center justify-center w-full lg:w-5/6 h-1/2">
                  <p className="text-justify text-xs lg:mb-10 md:mb-10 sm:mb-10 lg:text-sm md:text-sm sm:text-sm">Hello, if you&apos;re searching for a skilled programmer, you can depend on me. My name is Fritz Gerald Fegalan, I&apos;m a 
                    front-end and back-end web developer. However, my coding abilities aren&apos;t just restricted to web development; I can also 
                    create basic projects and applications in other languages. <br/><br/>My hobbies are playing sports, watching movies and also coding stuff, I love
                    coding and I want to dive in the world of technologies where I can learn many things and how things works.
                  </p>
                </div>
              </div>
              
                <fieldset id="techStack" className="h-3/5 w-full flex text-center border border-white  overflow-auto gap-2">
                  <legend >SKILLS</legend>

                  <div className="h-fit w-full text-center">
                    <p>WEB DEVELOPMENT</p>
                    <div className="w-full flex justify-center">
                      <div className="lg:w-1/3 w-1/2 flex flex-col text-start ml-10 lg:ml-20 gap-1">
                        <div className="progressBarCont lg:mb-6 md:mb-6 sm:mb-6 mb-5">
                          <div className="skill">
                            <div className="outer">
                              <div className="inner">
                                <h2 id="number"> 100%</h2>
                              </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" width="160px" height="160px">
                              <defs>
                                <lineGradient id="s">
                                </lineGradient>
                              </defs>
                              <circle cx="50" cy="50" r="31" strokeLinecap="round"></circle>
                            </svg>
                          </div>
                        </div>
                        <p>Front End Development</p>
                          <p className="ml-4 w-1/2 pl-2 rounded bg-neutral-900 text-white lg:text-sm font-bold">HTML</p>
                          <p className="ml-4 w-1/2 pl-2 rounded bg-neutral-900 text-white lg:text-sm font-bold">CSS</p>
                            <p className="mt-2 ml-8 w-3/4 pl-2 rounded-lg bg-gradient-to-r from-purple-800 to-cyan-400 text-white lg:text-sm font-bold">Bootstrap / <b className="text-black">Tailwind</b></p>
                          <p className="ml-4 w-1/2 pl-2 rounded bg-neutral-900 text-white lg:text-sm font-bold">Javascript</p>
                            <p className="mt-2 ml-8 w-1/2 pl-2 rounded-lg bg-cyan-900 text-white lg:text-sm font-bold">React</p>
                              <p className="mt-2 ml-12 w-1/2 pl-2 rounded-full bg-black border border-white text-white lg:text-sm font-bold">Next.js</p>
                      </div>
                      <div className="lg:w-1/3 w-1/2 flex flex-col text-start gap-1">
                        <div className="progressBarCont lg:mb-6 md:mb-6 sm:mb-6 mb-5">
                          <div className="skill">
                            <div className="outer">
                              <div className="inner">
                                <h2 id="number"> 100%</h2>
                              </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" width="160px" height="160px">
                              <defs>
                                <lineGradient id="s">
                                </lineGradient>
                              </defs>
                              <circle cx="50" cy="50" r="31" strokeLinecap="round"></circle>
                            </svg>
                          </div>
                        </div>
                        <p>Back End Development</p>
                        <p className="ml-4 w-1/2 pl-2 rounded bg-neutral-900 text-white font-bold lg:text-sm">Javascript</p>
                          <p className="mt-2 ml-8 w-1/2 pl-2 rounded-lg bg-green-700 text-white font-bold lg:text-sm">Node.js</p>
                        <p className="ml-4 w-1/2 pl-2 rounded bg-neutral-900 text-white font-bold lg:text-sm">Database</p>
                          <p className="mt-2 ml-8 w-1/2 pl-2 rounded-lg bg-sky-700 text-white font-bold lg:text-sm">MySQL</p>
                      </div>
                    </div>
                  </div>

                  <div  className="h-full lg:w-1/2 md:w-1/2 sm:w-1/2 w-full flex flex-col justify-center items-center p-2">
                    <p>OTHERS</p>
                    <div className="w-full h-full flex flex-wrap items-center justify-center gap-2">
                      <Image alt="vbNet" src="/vbNet.png" width={100} height={100} className="w-1/6 lg:h-1/6 md:h-1/6 sm:h-1/6 h-1/2 object-cover techStackImage"/>
                      <Image alt="cSharp" src="/cSharp.png" width={100} height={100} className="w-1/6 lg:h-1/6 md:h-1/6 sm:h-1/6 h-1/2 object-cover techStackImage"/>
                      <Image alt="c++" src="/c++.png" width={100} height={100} className="w-1/6 lg:h-1/6 md:h-1/6 sm:h-1/6 h-1/2 object-contain techStackImage"/>
                      <Image alt="python" src="/python.png" width={100} height={100} className="w-1/6 lg:h-1/6 md:h-1/6 sm:h-1/6 h-1/2 object-contain techStackImage"/>
                      <Image alt="php" src="/php.png" width={100} height={100} className="w-1/6 lg:h-1/6 md:h-1/6 sm:h-1/6 h-1/2 object-fit techStackImage"/>
                      <Image alt="php" src="/php.png" width={100} height={100} className="w-1/6 lg:h-1/6 md:h-1/6 sm:h-1/6 h-1/2 object-contain techStackImage"/>
                      <Image alt="mysql" src="/mysql.png" width={100} height={100} className="w-1/6 lg:h-1/6 md:h-1/6 sm:h-1/6 h-1/2 object-contain techStackImage"/>
                      <Image alt="mit.png" src="/mit.png" width={100} height={100} className="w-1/6 lg:h-1/6 md:h-1/6 sm:h-1/6 h-1/2 object-contain techStackImage"/>
                      <Image alt="arduino" src="/arduino.png" width={100} height={100} className="w-1/6 lg:h-1/6 md:h-1/6 sm:h-1/6 h-1/2 object-contain techStackImage"/>
                      <p className="text-neutral-200 w-full font-bold">Designing</p>
                      <Image alt="canva" src="/canva.png" width={100} height={100} className="w-1/5 lg:h-1/6 md:h-1/6 sm:h-1/6 h-2/3 object-contain techStackImage"/>
                      <Image alt="figma" src="/figma.png" width={100} height={100} className="w-1/5 lg:h-1/6 md:h-1/6 sm:h-1/6 h-2/3 object-contain techStackImage"/>
                      <Image alt="ibisPaint" src="/ibisPaint.png" width={100} height={100} className="w-1/5 lg:h-1/6 md:h-1/6 sm:h-1/6 h-2/3 object-contain techStackImage"/>                
                    </div>                   
                  </div>
                </fieldset>
            </div>

          </div>
        </div>         
        
        <div id="page3" className={`flex flex-col items-center justify-center ${projects && navBar ? "fadeOut3" : null}`}>
          <div className="w-full h-full flex relative justify-center items-center">
              <div className="w-2/3 h-full items-center justify-between flex relative">
                <button type="button" className={`arrowButton hover:text-white text-black`} onClick={backButton}>{"<"}</button>
                <button type="button" className={`arrowButton hover:text-white text-black`} onClick={nextButton}>{">"}</button>
              </div>
              <div id="gallery">
                <div type="button" id="project1" className={`myProject absolute bg-white`}>
                  <Image width={500} height={500} alt="project1" src="/" className="galleryImage"/>
                  <div className="showMoreCont">
                    <h4>Coming Soon</h4>
                    <button type="button" name="project1" onClick={showProject1} className="comingSoon" disabled>.....</button>
                  </div>
                </div>

                <div type="button" id="project2" className={`myProject absolute bg-white`}>
                  <Image width={500} height={500} alt="project2" src="/" className="galleryImage"/>
                  <div className="showMoreCont">
                    <h4>Coming Soon</h4>
                    <button type="button" name="project2" onClick={showProject2} className="comingSoon" disabled>.....</button>
                  </div>
                </div>

                <div type="button" id="project3" className={`myProject absolute bg-white`}>
                  <Image width={500} height={500} alt="project3" src="/" className="galleryImage"/>
                  <div className="showMoreCont">
                    <h4>Coming Soon</h4>
                    <button type="button" name="project3" onClick={showProject3} className="comingSoon" disabled>.....</button>
                  </div>
                </div>

                <div type="button" id="project4" className={`myProject absolute bg-white`}>
                  <Image width={500} height={500} alt="project4" src="/" className="galleryImage"/>
                  <div className="showMoreCont">
                    <h4>Coming Soon</h4>
                    <button type="button" name="project4" onClick={showProject4} className="comingSoon" disabled>.....</button>
                  </div>
                </div>

                <div type="button" id="project5" className={`myProject absolute bg-white`}>
                  <Image width={500} height={500} alt="project5" src="/carGame.PNG" className="galleryImage"/>
                  <div className="showMoreCont">
                    <h4>Simple Car Game (python)</h4>
                    <button type="button" name="project5" onClick={showProject5} className="showMoreButton"></button>
                  </div>
                </div> 

                <div type="button" id="project6" className={`myProject absolute bg-white`}>
                  <Image alt="project6" width={500} height={500} src="/simpleAttendanceChecker.PNG" className="galleryImage"/>
                  <div className="showMoreCont">
                    <h4>Simple Attendance Checker (c#)</h4>
                    <button type="button" name="project6" onClick={showProject6} className="showMoreButton"></button>
                  </div>
                </div> 

                <div type="button" id="project7" className={`myProject absolute bg-white`}>
                  <Image alt="project7"  width={500} height={500} src="/moodTank.PNG" className="galleryImage"/>
                  <div className="showMoreCont">
                    <h4>Mood Tank (arduino)</h4>
                    <button type="button" name="project7" onClick={showProject7} className="showMoreButton"></button>
                  </div>
                </div> 

                <div type="button" id="project8" className={`myProject absolute bg-white`}>
                  <Image alt="project8" width={500} height={500} src="/Capstone.PNG" className="galleryImage"/>
                  <div className="showMoreCont">
                    <h4>Attendance Checker (javascript, html, css)</h4>
                    <button type="button" name="project8" onClick={showProject8} className="showMoreButton"></button>
                  </div>
                </div>

              </div>
          </div>

          <div id="project8Cont" className=" w-full h-full justify-center items-center absolute z-10">

            <div className="lg:w-2/5 lg:h-3/4 md:w-2/5 md:h-3/4 sm:w-2/5 sm:h-3/4 w-full h-4/5 text-white flex flex-col items-end bg-black">
              <video id="project8Vid" className="h-3/5 w-full object-fit" loop muted>
                  <source src="/capstone.mp4" type="video/mp4"/>
              </video>
              <div className="h-2/5 w-full flex flex-col justify-center items-center bg-slate-500 z-10">
                <h1 className="w-full text-center "> Attendance Checker </h1>
                <p className="w-full mb-10 ml-10">This is attendance system for taking attendance, it has this following features;
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
              <button type="button" className="border-0 bg-none w-full text-center text-white underline mt-2 hover:text-blue-600" onClick={exit}>RETURN</button>
            </div>

          </div>

          <div id="project7Cont" className=" w-full h-full justify-center items-center absolute z-10">

            <div className="lg:w-2/5 lg:h-3/4 md:w-2/5 md:h-3/4 sm:w-2/5 sm:h-3/4 w-full h-4/5 text-white flex flex-col items-end bg-black">
              <video id="project7Vid" className="h-3/5 w-full object-fit" loop>
                  <source src="/moodTank.mp4" type="video/mp4"/>
              </video>
              <div className="h-2/5 w-full flex flex-col justify-center items-center bg-slate-500 z-10">
                <h1 className="w-full text-center "> Attendance Checker </h1>
                <p className="w-full mb-10 ml-10">This is mood tank for changing the mood of a person, it&apos;s pars divided by;
                  <br/> * Sound Sensor for controling the light
                  <br/> * Light Sensor for controling the light
                  <br/> * Buttons for Switching Sensors
                  <br/> * Button for turning of and on
                  <br/> * LED serves as indicator which sensor is on
                </p>
              </div>
              <button type="button" className="border-0 bg-none w-full text-center text-white underline mt-2 hover:text-blue-600" onClick={exit}>RETURN</button>
            </div>

          </div>

          <div id="project6Cont" className=" w-full h-full justify-center items-center absolute z-10">

            <div className="lg:w-2/5 lg:h-3/4 md:w-2/5 md:h-3/4 sm:w-2/5 sm:h-3/4 w-full h-4/5 text-white flex flex-col items-end bg-black">
              <div  className="h-3/5 w-full object-fit relative">
                <Image alt="simpleAttendanceChecker" src="/simpleAttendanceChecker.PNG" fill/>
              </div>
              <div className="h-2/5 w-full flex flex-col justify-center items-center bg-slate-500 z-10">
                <h1 className="w-full text-center "> Attendance Checker </h1>
                <p className="w-full mb-10 ml-10">This is a sumple attendance checker application made in vb.net, it has this following features;
                  <br/> * creating account of students
                  <br/> * providing image of schedule depending on the section that you choose
                  <br/> * subject filtering depend on time of schedule
                </p>
              </div>
              <button type="button" className="border-0 bg-none w-full text-center text-white underline mt-2 hover:text-blue-600" onClick={exit}>RETURN</button>
            </div>
          </div>

          <div id="project5Cont" className=" w-full h-full justify-center items-center absolute z-10">

            <div className="lg:w-2/5 lg:h-3/4 md:w-2/5 md:h-3/4 sm:w-2/5 sm:h-3/4 w-full h-4/5 text-white flex flex-col items-end bg-black">
              <video id="project5Vid" className="h-3/5 w-full object-fit" loop muted>
                  <source src="/carGame.mp4" type="video/mp4"/>
              </video>
              <div className="h-2/5 w-full flex flex-col justify-end items-center bg-slate-500 z-10">
                <h1 className="w-full text-center "> Simple Car Game </h1>
                <p className="w-full mb-10 ml-10">This is a simple 2D car game made in pygame module, the game flow are;
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
              <button type="button" className="border-0 bg-none w-full text-center text-white underline mt-2 hover:text-blue-600" onClick={exit}>RETURN</button>
            </div>

          </div>

        </div>

        <div id="page4" className={`flex items-center justify-center ${contacts && navBar ? "fadeOut4" : null}`}>

          <div id="avatar" className="lg:h-full md:h-full sm:h-full h-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full flex items-center justify-center ">
              <div className="lg:w-1/3 md:w-1/3 sm:w-1/3 w-0 h-full"></div>
              <video className="w-1/3 h-3/4 object-contain" autoPlay muted loop>
                  <source src="/avatar.mp4" type="video/mp4"/>
              </video>
              <div className="w-1/3 h-3/4 p-5 text-neutral-200 flex justify-center items-center">
                <div className="w-full h-1/3 flex-col contactMeCont text-center">
                  <p>If you need my assistance feel free to contanct me thank you</p>
                </div>
            </div>
          </div>

          <div className="socialLink lg:h-2/5 md:h-full sm:h-full h-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full flex items-center justify-center bg-black">

            <div className="grid lg:grid-rows-2 lg:grid-cols-3 rid-rows-3 grid-cols-2  w-1/2 h-full text-white">

              <div className="gap-2 place-content-center">
                <div className="socialLinkLogo flex items-center gap-2 p-1">
                  <Image alt="twitter" src="/twitter.png" width={100} height={100} className="lg:w-1/3 lg:h-full md:w-1/3 md:h-full sm:w-1/3 sm:h-full w-1/6 h-1/6 bg-black object-contain"/>
                  <p className="twitter">TWITTER</p>
                </div>
                <a href="https://x.com/FegalanGerald">@geraldfegalan</a>
              </div>

              <div className="gap-2 place-content-center">
                <div className="socialLinkLogo flex items-center gap-2 p-1">
                  <Image alt="instagram" src="/instagram.png" width={100} height={100} className="lg:w-1/3 lg:h-full md:w-1/3 md:h-full sm:w-1/3 sm:h-full w-1/6 h-1/6 object-contain"/>
                  <p className="instagram">INSTAGRAM</p>
                </div>
                <a href="https://www.instagram.com/gerald.fegalan">@f_e_g_g_y</a>
              </div>

              <div className="gap-2 place-content-center"> 
                <div className="socialLinkLogo flex items-center gap-2 p-1">
                  <Image alt="facebook" src="/facebook.png" width={100} height={100} className="lg:w-1/3 lg:h-full md:w-1/3 md:h-full sm:w-1/3 sm:h-full w-1/6 h-1/6 object-contain"/>
                  <p className="facebook">FACEBOOK</p>
                </div>
                <a href="https://www.facebook.com/bhozs.fritz.1">gerald fegalan</a>
              </div>
              <div className="gap-2 place-content-center">
                <div className="socialLinkLogo flex items-center gap-2 p-1">
                  <Image alt="github" src="/github.png" width={100} height={100} className="lg:w-1/3 lg:h-full md:w-1/3 md:h-full sm:w-1/3 sm:h-full w-1/6 h-1/6 object-contain"/>
                  <p className="github">GITHUB</p>
                </div>
                <a href="https://github.com/Unknown-Squid">UnkownSquid</a>
              </div>
              <div className="gap-2 place-content-center">
                <div className="socialLinkLogo flex items-center gap-2 p-1">
                  <Image alt="email" src="/email.png" width={100} height={100} className="lg:w-1/3 lg:h-full md:w-1/3 md:h-full sm:w-1/3 sm:h-full w-1/6 h-1/6 object-contain"/>
                  <p className="email">E-MAIL</p>
                </div>
                <a href="gerald.fegalan@gmail.com">gerald.fegalan@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TsParticles/>
    </div>
  );
}

"use  client";
import React, { useEffect, useState } from "react";

const Navbar = ({ activePage, setActivePage }) => {
  const [letterU, setLetterU] = useState(false);
  const [letterS, setLetterS] = useState(false);

  useEffect(() => {
    if (!letterU || !letterS) {
      var rollingTextU = document.getElementById("U");
      var rollingTextS = document.getElementById("S");
      var stopAtLetterU = "U";
      var stopAtLetterS = "S";
      rollingTextU.style.animationIterationCount = "1";
      rollingTextS.style.animationIterationCount = "1";
      var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let count = 0;
      var intervalU = setInterval(function () {
        count += 1;
        rollingTextU.innerHTML = letters[count];
        if (letters[count] === stopAtLetterU) {
          count = 0;
          clearInterval(intervalU);
          var intervalS = setInterval(function () {
            count += 1;
            rollingTextS.innerHTML = letters[count];
            if (letters[count] === stopAtLetterS) {
              count = 0;
              setLetterU(true);
              setLetterS(true);
              clearInterval(intervalS);
            }
          }, 100);
        }
      }, 100);
    }
  }, [letterU, letterS]);
  
  return (
    <nav
      className={`flex h-[100px] items-center w-full text-neutral-200 flex-row sticky top-0 z-20 bg-emerald-400`}
    >
      <a
        href=""
        onClick={() => setActivePage("/")}
        className={`${activePage == "/" ? "opacity-1 navbarMenu" : "opacity-[.5] navbarMenuOut"} relative h-[35%] md:w-[15%] lg:w-[10%] w-[30%] flex justify-center items-center rounded-[25px] px-2 hover:text-[#E89CAE] cursor-grab ml-5 md:ml-24 lg:ml-32 xl:ml-64`}
      >
        <video
          className="h-full w-full object-cover rounded-[25px]"
          autoPlay
          muted
          loop
        >
          <source src="/logo.mp4" type="video/mp4" />
        </video>

        <div className="w-full flex justify-center items-center absolute gap-2 lg:text-[0.8vw] md:text-[1.2vw] text-[2.5vw] font-bold">
          <div className="flex font-usbold">
            {letterU ? <p id="U">U</p> : <p id="U"></p>}
            {letterU ? <p className="unknown">nknown</p> : null}
          </div>
          <div className="flex font-usbold">
            {letterS ? <p id="S">S</p> : <p id="S"></p>}
            {letterS ? <p className="squid">quid</p> : null}
          </div>
        </div>

      </a>

      <div className="h-full w-1/2 text flex justify-start md:gap-20 gap-5 items-center font-bold md:ml-16 ml-5 lg:ml-32">
        <div
          id="about"
          className={`h-full flex justify-center items-center`}
        >
          <a 
            href="#about-me" 
            className={`lg:text-2xl md:text-[3vw] lg:text-[2vw] text-[4vw] font-bold ${activePage == "about" ? "navBarMenu" : "navBarMenuOut"} hover:text-[#915e01]`}
            onClick={() => setActivePage("about")}
          >
            about
          </a>
        </div>
        <div
          id="projects"
          className={`h-full flex justify-center items-center`}
        >
          <a 
            href="#my-projects" 
            className={`lg:text-2xl md:text-[3vw] lg:text-[2vw] text-[4vw] ont-bold ${activePage == "project" ? "navBarMenu" : "navBarMenuOut"} hover:text-[#915e01]`}
            onClick={() => setActivePage("project")}
          >
            projects
          </a>
        </div>
        <div
          id="contacts"
          className={`h-full flex justify-center items-center`}
        >
          <a 
            href="#my-contacts" 
            className={`lg:text-2xl md:text-[3vw] lg:text-[2vw] text-[4vw] ont-bold ${activePage == "contact" ? "navBarMenu" : "navBarMenuOut"} hover:text-[#915e01]`}
            onClick={() => setActivePage("contact")}
          >
            contacts
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

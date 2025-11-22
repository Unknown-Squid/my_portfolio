"use client";

import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'

// Tree / timeline style: top -> bottom
const groups = [
  {
    title: 'LANGUAGES',
    icons: [
      {
        alt: 'Python',
        src: '/images/tech-stack/python.png',
        dateRange: '2020–2021',
        description:
            `My first programming language. I started coding on my phone with PyDroid around 2020–2021, 
            writing small scripts and automations. This is where I fell in love with programming and 
            learned the fundamentals.`
      },
      {
        alt: 'C#',
        src: '/images/tech-stack/cSharp.png',
        dateRange: '2021',
        description:
          `C# is where I moved from simple scripts to real apps. My first Windows application 
          was built in VB.NET, and this is also where I made my first database connection using MySQL.`
      },
      {
        alt: 'C++',
        src: '/images/tech-stack/cPlusPlus.png',
        dateRange: '2021–2024',
        description:
          `My first C++ experience was programming robotics using the Arduino IDE. 
          It was very exciting and a lot of fun to see code directly control hardware.`
      },
      {
        alt: 'HTML',
        src: '/images/tech-stack/html.png',
        dateRange: '2022 – Current',
        description:
          `The first language that helped me build simple static websites. 
          It opened the door for me into web development.`
      },
      {
        alt: 'CSS',
        src: '/images/tech-stack/css.png',
        dateRange: '2022 – Current',
        description:
          `CSS gives me a colorful view of the web. It’s exciting to explore different styles and animations.`
      },
      {
        alt: 'JavaScript',
        src: '/images/tech-stack/javascript.png',
        dateRange: '2022 – Current',
        description:
          `This language got me hooked on web development and inspired me to build interactive, 
          engaging projects while strengthening my logic and problem-solving skills.`
      },
      {
        alt: 'React',
        src: '/images/tech-stack/react.png',
        dateRange: '2022 – Current',
        description:
          `This JavaScript library helped me dive deeper into web development, 
          letting me explore new approaches and build exciting, interactive interfaces.
          My go-to framework with React is Next.js.`
      },
      {
        alt: 'Node.js',
        src: '/images/tech-stack/nodejs.png',
        dateRange: '2022 – Current',
        description:
          `Node.js helped me dive deeper into web development, especially the backend, 
          where I built my first API endpoints and connected them to a MySQL database.`
      },
      {
        alt: 'PHP',
        src: '/images/tech-stack/php.png',
        dateRange: '2024 – Current',
        description:
        `PHP amazed me when I first tried it — a bit complex, but powerful and scalable. 
        With frameworks like Laravel, it helped me build backend features quickly 
        and more efficiently.`
      },
      {
        alt: 'Java',
        src: '/images/tech-stack/java.png',
        dateRange: 'current',
        description:
        `Java was challenging at first, especially with its unique and strict syntax, 
        but using it in Android Studio made the learning worth it. I enjoyed building 
        apps with it and connecting them to my backend server.`
      },
      {
        alt: 'MySQL',
        src: '/images/tech-stack/mysql.png',
        dateRange: '2021 – Current',
        description:
        `My first database, and I love how MySQL’s relational structure makes it easy 
        to connect and reference data across tables. I use it in my backend projects 
        to store and manage data efficiently.`
      },
      {
        alt: 'MongoDB',
        src: '/images/tech-stack/mongoDB.png',
        dateRange: 'current',
        description:
        `When I first used MongoDB, it confused me because I was used to MySQL. 
        But its document-based structure and JSON-style data models quickly made sense, 
        and I was amazed at how fast it is for writing data.`
      },
    ],
  },
];

// Optional background videos per skill (files should live in /public/videos)
const skillVideos = {
  Python: '/projects/carGame.mp4',
  'C++': '/projects/moodTank.mp4',
  'JavaScript': '/projects/capstone.mp4',
  'React': '/projects/capstone.mp4',
  'Node.js': '/projects/capstone.mp4',
  Robotics: '/projects/robotics.mp4',
};

const MySkills = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When the skills section is scrolled far out of view, reset the selected skill
  useEffect(() => {
    const focus = getFocusForIndex(0);
    if (focus < 0.05 && selectedSkill !== null) {
      setSelectedSkill(null);
    }
  }, [scrollY, selectedSkill]);

  const getFocusForIndex = (index) => {
    if (typeof window === 'undefined') return 0;
    const el = itemRefs.current[index];
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;
    const dist = Math.abs(center - viewportCenter);
    const maxDist = window.innerHeight / 2;
    const focus = Math.max(0, 1 - dist / maxDist); // 1 = centered, 0 = far
    return focus;
  };


  const containerFocus = getFocusForIndex(0);
  const containerScale = 0.8 + containerFocus * 0.2; // up to 1x
  const containerOpacity = 0.4 + containerFocus * 0.6;
  const currentVideo =
    selectedSkill && skillVideos[selectedSkill.alt]
      ? skillVideos[selectedSkill.alt]
      : null;

  return (
    <div
      className="flex w-full h-full relative py-10 transition-transform duration-300"
      style={{
        transform: `scale(${containerScale})`,
        opacity: containerOpacity,
      }}
    >
      {groups.map((group, index) => {
        const python = group.icons[0];
        const csharp = group.icons[1];
        const cplus = group.icons[2];
        const html = group.icons[3];
        const css = group.icons[4];
        const javascript = group.icons[5];
        const react = group.icons[6];
        const nodejs = group.icons[7];
        const php = group.icons[8];
        const java = group.icons[9];
        const mysql = group.icons[10];
        const mongodb = group.icons[11];

        return (
          <fieldset
            key={group.title}
            ref={(el) => (itemRefs.current[index] = el)}
            className="ml-[100px     px-10 pb-10 h-fit w-fit rounded-full border border-white/40 bg-white/5 backdrop-blur-lg flex flex-col justify-center items-center text-center overflow-hidden"
          >

            <div className="h-full w-full flex flex-col justify-center items-center mt-4">
              <div className="relative w-[260px] md:w-[320px] h-[450px]">
                {/* main trunk */}
                <div className="absolute top-[60px] bottom-12 left-1/2 w-[2px] h-[330px] bg-emerald-400/40 -translate-x-1/2" />

                {/* Python - root at top (trunk start) */}
                <div className="absolute top-[10px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSkill(python)}
                    className={`w-14 h-14 rounded-full border bg-black/70 flex items-center justify-center transition-colors cursor-pointer
                      ${selectedSkill?.alt === python.alt ? 'border-emerald-200 bg-emerald-500/40' : 'border-emerald-300/80 hover:border-emerald-200 hover:bg-emerald-500/30'}`}
                  >
                    <Image
                      alt={python.alt}
                      src={python.src}
                      width={54}
                      height={54}
                      className="w-8 h-8 object-cover"
                    />
                  </button>
                  <p className="text-xs text-emerald-100 font-usbold">{python.alt}</p>
                </div>

                <div className="absolute top-[105px] left-[115px] w-[90px] h-[30px] border-l-2 border-b-2 border-emerald-400/40 -translate-x-1/2 rounded-bl-[20px]" />
        
                {/* C# - root at top (trunk start) */}
                <div className="absolute top-[50px] left-[70px] -translate-x-1/2 flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSkill(csharp)}
                    className={`w-14 h-14 rounded-full border bg-black/70 flex items-center justify-center transition-colors cursor-pointer
                      ${selectedSkill?.alt === csharp.alt ? 'border-emerald-200 bg-emerald-500/40' : 'border-emerald-300/80 hover:border-emerald-200 hover:bg-emerald-500/30'}`}
                  >
                    <Image
                      alt={csharp.alt}
                      src={csharp.src}
                      width={54}
                      height={54}
                      className="w-8 h-8 object-cover"
                    />
                  </button>
                  <p className="text-xs text-emerald-100 font-usbold">{csharp.alt}</p>
                </div>

                <div className="absolute top-[115px] right-[40px] w-[80px] h-[30px] border-r-2 border-b-2 border-emerald-400/40 -translate-x-1/2 rounded-br-[20px]" />
        
                {/* C++ - root at top (trunk start) */}
                <div className="absolute top-[60px] right-[25px] -translate-x-1/2 flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSkill(cplus)}
                    className={`w-14 h-14 rounded-full border bg-black/70 flex items-center justify-center transition-colors cursor-pointer
                      ${selectedSkill?.alt === cplus.alt ? 'border-emerald-200 bg-emerald-500/40' : 'border-emerald-300/80 hover:border-emerald-200 hover:bg-emerald-500/30'}`}
                  >
                    <Image
                      alt={cplus.alt}
                      src={cplus.src}
                      width={54}
                      height={54}
                      className="w-8 h-8 object-cover"
                    />
                  </button>
                  <p className="text-xs text-emerald-100 font-usbold">{cplus.alt}</p>
                </div>

                <div className="absolute top-[210px] left-[120px] w-[82px] h-[30px] border-l-2 border-b-2 border-emerald-400/40 -translate-x-1/2 rounded-bl-[20px]" />
        
                {/* HTML - root at top (trunk start) */}
                <div className="absolute top-[150px] left-[115px] -translate-x-1/2 flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSkill(html)}
                    className={`w-14 h-14 rounded-full border bg-black/70 flex items-center justify-center transition-colors cursor-pointer
                      ${selectedSkill?.alt === html.alt ? 'border-emerald-200 bg-emerald-500/40' : 'border-emerald-300/80 hover:border-emerald-200 hover:bg-emerald-500/30'}`}
                  >
                    <Image
                      alt={html.alt}
                      src={html.src}
                      width={54}
                      height={54}
                      className="w-8 h-8 object-cover"
                    />
                  </button>
                  <p className="text-xs text-emerald-100 font-usbold">{html.alt}</p>
                </div>

                {/* CSS - root at top (trunk start) */}
                <div className="absolute top-[150px] left-[45px] -translate-x-1/2 flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSkill(css)}
                    className={`w-14 h-14 rounded-full border bg-black/70 flex items-center justify-center transition-colors cursor-pointer
                      ${selectedSkill?.alt === css.alt ? 'border-emerald-200 bg-emerald-500/40' : 'border-emerald-300/80 hover:border-emerald-200 hover:bg-emerald-500/30'}`}
                  >
                    <Image
                      alt={css.alt}
                      src={css.src}
                      width={54}
                      height={54}
                      className="w-8 h-8 object-cover"
                    />
                  </button>
                  <p className="text-xs text-emerald-100 font-usbold">{css.alt}</p>
                </div>

                <div className="absolute top-[230px] right-[75px] w-[57px] h-[30px] border-r-2 border-b-2 border-emerald-400/40 -translate-x-1/2 rounded-br-[20px]" />
        
                {/* JavaScript - root at top (trunk start) */}
                <div className="absolute top-[175px] right-[50px] -translate-x-1/2 flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSkill(javascript)}
                    className={`w-14 h-14 rounded-full border bg-black/70 flex items-center justify-center transition-colors cursor-pointer
                      ${selectedSkill?.alt === javascript.alt ? 'border-emerald-200 bg-emerald-500/40' : 'border-emerald-300/80 hover:border-emerald-200 hover:bg-emerald-500/30'}`}
                  >
                    <Image
                      alt={javascript.alt}
                      src={javascript.src}
                      width={54}
                      height={54}
                      className="w-8 h-8 object-cover"
                    />
                  </button>
                  <p className="text-xs text-emerald-100 font-usbold">{javascript.alt}</p>
                </div>

                <div className="absolute top-[175px] right-[-5px] w-[58px] h-[30px] border-r-2 border-b-2 border-emerald-400/40 -translate-x-1/2 rounded-br-[20px]" />
                
                <div className="absolute top-[205px] right-[-5px] w-[58px] h-[30px] border-r-2 border-t-2 border-emerald-400/40 -translate-x-1/2 rounded-tr-[20px]" />
        
                {/* React - root at top (trunk start) */}
                <div className="absolute top-[120px] right-[-28px] -translate-x-1/2 flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSkill(react)}
                    className={`w-14 h-14 rounded-full border bg-black/70 flex items-center justify-center transition-colors cursor-pointer
                      ${selectedSkill?.alt === react.alt ? 'border-emerald-200 bg-emerald-500/40' : 'border-emerald-300/80 hover:border-emerald-200 hover:bg-emerald-500/30'}`}
                  >
                    <Image
                      alt={react.alt}
                      src={react.src}
                      width={54}
                      height={54}
                      className="w-8 h-8 object-cover"
                    />
                  </button>
                  <p className="text-xs text-emerald-100 font-usbold">{react.alt}</p>
                </div>

                {/* Node.js - root at top (trunk start) */}
                <div className="absolute top-[210px] right-[-28px] -translate-x-1/2 flex flex-col items-center gap-2">
                  <p className="text-xs text-emerald-100 font-usbold">Node.js</p>
                  <button
                    type="button"
                    onClick={() => setSelectedSkill(nodejs)}
                    className={`w-14 h-14 rounded-full border bg-white/70 flex items-center justify-center transition-colors cursor-pointer
                      ${selectedSkill?.alt === nodejs.alt ? 'border-emerald-200 bg-emerald-200' : 'border-emerald-300/80 hover:border-emerald-200 hover:bg-emerald-100'}`}
                  >
                    <Image
                      alt={nodejs.alt}
                      src={nodejs.src}
                      width={54}
                      height={54}   
                      className="w-8 h-8 object-cover"
                    />
                  </button>
                </div>

                <div className="absolute top-[320px] left-[130px] w-[60px] h-[10px] border-l-2 border-b-2 border-emerald-400/40 -translate-x-1/2 rounded-bl-[20px]" />
        
                {/* PHP - root at top (trunk start) */}
                <div className="absolute top-[265px] left-[100px] -translate-x-1/2 flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSkill(php)}
                    className={`w-14 h-14 rounded-full border bg-black/70 flex items-center justify-center transition-colors cursor-pointer
                      ${selectedSkill?.alt === php.alt ? 'border-emerald-200 bg-emerald-500/40' : 'border-emerald-300/80 hover:border-emerald-200 hover:bg-emerald-500/30'}`}
                  >
                    <Image
                      alt={php.alt}
                      src={php.src}
                      width={54}
                      height={54}
                      className="w-8 h-8 object-cover"
                    />
                  </button>
                  <p className="text-xs text-emerald-100 font-usbold">{php.alt}</p>
                </div>

                <div className="absolute top-[320px] right-[75px] w-[57px] h-[30px] border-r-2 border-b-2 border-emerald-400/40 -translate-x-1/2 rounded-br-[20px]" />
        
                {/* Java - root at top (trunk start) */}
                <div className="absolute top-[270px] right-[50px] -translate-x-1/2 flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSkill(java)}
                    className={`w-14 h-14 rounded-full border bg-black/70 flex items-center justify-center transition-colors cursor-pointer
                      ${selectedSkill?.alt === java.alt ? 'border-emerald-200 bg-emerald-500/40' : 'border-emerald-300/80 hover:border-emerald-200 hover:bg-emerald-500/30'}`}
                  >
                    <Image
                      alt={java.alt}
                      src={java.src}
                      width={54}
                      height={54}
                      className="w-8 h-8 object-cover"
                    />
                  </button>
                  <p className="text-xs text-emerald-100 font-usbold">{java.alt}</p>
                </div>

                {/* Databases branch outside the circle */}

                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                  <div className="px-4 py-2 rounded-full border border-emerald-300/80 bg-black/80 flex items-center gap-4">
                    <button
                      type="button"
                    onClick={() => setSelectedSkill(mysql)}
                      className={`flex flex-col items-center gap-2 rounded-full px-2 py-1 transition-colors
                        ${selectedSkill?.alt === mysql.alt ? 'bg-emerald-500/30' : 'hover:bg-emerald-500/20'}`}
                    >
                      <Image
                        alt={mysql.alt}
                        src={mysql.src}
                        width={50}
                        height={50}
                        className="w-8 h-8 object-contain"
                      />
                      <span className="text-xs text-emerald-100 font-usbold">{mysql.alt}</span>
                    </button>
                    <button
                      type="button"
                    onClick={() => setSelectedSkill(mongodb)}
                      className={`flex flex-col items-center gap-2 rounded-full px-2 py-1 transition-colors
                        ${selectedSkill?.alt === mongodb.alt ? 'bg-emerald-500/30' : 'hover:bg-emerald-500/20'}`}
                    >
                      <Image
                        alt={mongodb.alt}
                        src={mongodb.src}
                        width={100}
                        height={100}
                        className="w-8 h-8 object-cover"
                      />
                      <span className="text-xs text-emerald-100 font-usbold">{mongodb.alt}</span>
                    </button>
                  </div>
                  <p className="text-xs text-emerald-100 font-usbold">Databases</p>
                </div>

              </div>
            </div>
          </fieldset>
        );
      })}

      {/* Secondary circle: Web, Mobile & Robotics, connected to main skills circle */}
      <div className="relative ml-10 flex items-center justify-center">
        {/* connector branch from first circle to this circle (scales with container) */}
        <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-[40px] h-[2px] bg-emerald-400/60" />

        <fieldset className="relative px-8 py-8 rounded-full border border-emerald-300/70 bg-black/40 backdrop-blur-lg flex flex-col items-center justify-center text-center gap-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)]">
          <div className="flex flex-col items-center gap-4">
            {/* Web Development node */}
            <div className="flex flex-col items-center gap-1">
              <button
                type="button"
                onClick={() =>
                  setSelectedSkill({
                    alt: 'Web Development',
                    dateRange: '2022 – Current',
                    src: null,
                    description:
                      `My favorite part of programming is doing web development. I love challenging 
                      myself to build complex designs and logic heavy websites.`
                  })
                }
                className={`w-10 h-10 rounded-full border bg-emerald-500/20 flex items-center justify-center text-[10px] font-usbold text-emerald-100 transition-colors cursor-pointer
                  ${selectedSkill?.alt === 'Web Development' ? 'border-emerald-200 bg-emerald-500/40' : 'border-emerald-300/80 hover:border-emerald-200 hover:bg-emerald-500/30'}`}
              >
                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 2H20V12H4M20 14C20.5304 14 21.0391 13.7893 21.4142 13.4142C21.7893 13.0391 22 12.5304 22 12V2C22 1.46957 21.7893 0.960859 21.4142 0.585786C21.0391 0.210714 20.5304 0 20 0H4C2.89 0 2 0.89 2 2V12C2 12.5304 2.21071 13.0391 2.58579 13.4142C2.96086 13.7893 3.46957 14 4 14H0V16H24V14H20Z" fill="white"/>
                </svg>
              </button>
              <p className="text-xs text-emerald-100 font-usbold">Web Development</p>
            </div>

            {/* small connector inside the circle */}
            <div className="w-[1px] h-6 bg-emerald-400/50" />

            {/* Mobile Development node */}
            <div className="flex flex-col items-center gap-1">
              <button
                type="button"
                onClick={() =>
                  setSelectedSkill({
                    alt: 'Mobile Development',
                    dateRange: '2024 – Current',
                    src: null,
                    description:
                      `Building applications with it was fun and interesting, inspiring me to explore 
                      more in development and expand my skills across different areas.`

                  })
                }
                className={`w-10 h-10 rounded-full border bg-emerald-500/20 flex items-center justify-center text-[10px] font-usbold text-emerald-100 transition-colors cursor-pointer
                  ${selectedSkill?.alt === 'Mobile Development' ? 'border-emerald-200 bg-emerald-500/40' : 'border-emerald-300/80 hover:border-emerald-200 hover:bg-emerald-500/30'}`}
              >
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.004 0H1.996C1.46663 0 0.958937 0.210292 0.584615 0.584615C0.210292 0.958937 0 1.46663 0 1.996V18.003C0 19.106 0.894 20 1.996 20H10.003C10.5325 20 11.0403 19.7897 11.4147 19.4154C11.7892 19.0412 11.9997 18.5335 12 18.004V1.996C12 1.46663 11.7897 0.958937 11.4154 0.584615C11.0411 0.210292 10.5334 0 10.004 0ZM6 19C5.31 19 4.75 18.553 4.75 18C4.75 17.447 5.31 17 6 17C6.69 17 7.25 17.447 7.25 18C7.25 18.553 6.69 19 6 19ZM10 16H2V2H10V16Z" fill="white"/>
                </svg>
              </button>
              <p className="text-xs text-emerald-100 font-usbold">Mobile Development</p>
            </div>

            {/* connector down to Robotics */}
            <div className="w-[1px] h-6 bg-emerald-400/50" />

            {/* Robotics node */}
            <div className="flex flex-col items-center gap-1">
              <button
                type="button"
                onClick={() =>
                  setSelectedSkill({
                    alt: 'Robotics',
                    dateRange: '2021 - 2024',
                    src: null,
                    description:
                      `Building robots with it is really fun and has helped me improve my logical thinking 
                      and programming skills, while inspiring me to explore more in development and 
                      expand my abilities.`
                  })
                }
                className={`w-10 h-10 rounded-full border bg-emerald-500/20 flex items-center justify-center text-[10px] font-usbold text-emerald-100 transition-colors cursor-pointer
                  ${selectedSkill?.alt === 'Robotics' ? 'border-emerald-200 bg-emerald-500/40' : 'border-emerald-300/80 hover:border-emerald-200 hover:bg-emerald-500/30'}`}
              >
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 15.5C1.5 15.2348 1.60536 14.9804 1.79289 14.7929C1.98043 14.6054 2.23478 14.5 2.5 14.5H19.5C19.7652 14.5 20.0196 14.6054 20.2071 14.7929C20.3946 14.9804 20.5 15.2348 20.5 15.5V19H1.5V15.5Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 7H16L13 4L16 1H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 6C4.10457 6 5 5.10457 5 4C5 2.89543 4.10457 2 3 2C1.89543 2 1 2.89543 1 4C1 5.10457 1.89543 6 3 6Z" fill="white" stroke="white" strokeWidth="2"/>
                  <path d="M5 4H13M4 6L8 14.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <p className="text-xs text-emerald-100 font-usbold">Robotics</p>
            </div>
          </div>
        </fieldset>
      </div>

      <div className="ms-16 relative flex justify-center items-center w-full h-full rounded-2xl overflow-hidden">
        {currentVideo && (
          <video
            key={currentVideo + (selectedSkill?.alt || '')}
            className="absolute inset-0 w-full h-full object-contain opacity-40"
            src={currentVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        )}

        {selectedSkill ? (
          <div className="relative flex items-center gap-4 px-6 py-4 rounded-2xl border border-emerald-300/60 bg-black/70 backdrop-blur-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
            {selectedSkill.src && (
              <div className={`w-12 h-12 rounded-full border border-emerald-300/80 flex items-center justify-center ${selectedSkill.alt === 'Node.js' ? 'bg-white/80' : 'bg-black/80'}`}>
                <Image
                  alt={selectedSkill.alt}
                  src={selectedSkill.src}
                  width={48}
                  height={48}
                  className="w-8 h-8 object-contain"
                />
              </div>
            )}
            <div className="flex flex-col max-w-[420px] text-left">
              <p className="text-sm text-emerald-100 font-usbold mb-1">
                {selectedSkill.alt}
              </p>
              {selectedSkill.dateRange && (
                <p className="text-[11px] text-emerald-100/60 mb-1">
                  {selectedSkill.dateRange}
                </p>
              )}
              <p className="text-xs text-emerald-100/70 leading-relaxed">
                {selectedSkill.description ||
                  'Click different nodes in the skills tree to explore my stack.'}
              </p>
            </div>
          </div>
        ) : (
          <p className="relative text-xs text-emerald-100/70">
            Hover or click on a skill circle to view the timeline of my programming skills and progress.
          </p>
        )}
      </div>
    </div>
  )
}

export default MySkills

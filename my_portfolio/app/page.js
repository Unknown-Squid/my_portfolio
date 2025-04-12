"use client";
import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe';
import MyProjects from './Components/MyProjects';
import ContactMe from './Components/ContactMe';

const Home = () => {
  const [activePage, setActivePage] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero', page: '/' },
        { id: 'about-me', page: 'about' },
        { id: 'my-projects', page: 'project' },
        { id: 'contact-me', page: 'contact' },
      ];

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActivePage(section.page);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className='bg-emerald-400 h-fit w-full flex flex-col relative'>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <Hero />

      <div id="about-me" className='w-full h-[400px] bg-transparent'></div>
      <AboutMe />

      <div id="my-projects" className='w-full h-[400px] bg-transparent'></div>
      <MyProjects />

      <div id="contact-me" className='w-full h-[400px] bg-black/[.5]'></div>
      <ContactMe />
    </main>
  );
}

export default Home;

"use client";
import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe';
import MyProjects from './Components/MyProjects';
import ContactMe from './Components/ContactMe';
import Loading from './Components/Loading';

const Home = () => {
  const [activePage, setActivePage] = useState("/");
  const [activeProject, setActiveProject] = useState("");
  const [loading, setLoading] = useState(true);
  const [visitedPages, setVisitedPages] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero', page: '/' },
        { id: 'about-me', page: 'about' },
        { id: 'my-projects', page: 'project' },
        { id: 'my-contacts', page: 'contact' },
      ];

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            if (!visitedPages.has(section.page)) {
              setVisitedPages(prev => new Set(prev).add(section.page));
            }
    
            setActivePage(section.page);
            if (section.page != 'project'){
              setActiveProject("");
            }
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
  }, [visitedPages]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loading/>
  }

  return (
    <main className='bg-emerald-400 h-fit w-full flex flex-col relative'>
      {/* <Navbar activePage={activePage} setActivePage={setActivePage} /> */}
      <Hero />

      <div 
        className='w-full h-[400px]'
        style={{
          background: 'radial-gradient(ellipse closest-side at center, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.1) 70%)'
        }}
      >
      </div>
      <AboutMe visitedPages={visitedPages}/>

      {/* <div className='w-full h-[400px] bg-transparent'></div>
      <MyProjects activeProject={activeProject} setActiveProject={setActiveProject} visitedPages={visitedPages}/> */}

      <div className='w-full h-[400px] bg-black/[.5]'></div>
      <ContactMe visitedPages={visitedPages}/>
    </main>
  );
}

export default Home;

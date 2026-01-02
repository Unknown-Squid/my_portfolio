"use client";
import React, { useEffect, useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import AboutMe from './Components/Pages/AboutMe';
import Experience from './Components/Pages/Experience';
import TechStack from './Components/Pages/TechStack';
import Skills from './Components/Pages/Skills';
import PersonalProjects from './Components/Pages/PersonalProjects';
import Gallery from './Components/Pages/Gallery';
import Loading from './Components/Loader/Loading';

const Home = () => {
  const [activePage, setActivePage] = useState("about");
  const [activeProject, setActiveProject] = useState("");
  const [loading, setLoading] = useState(true);
  const [visitedPages, setVisitedPages] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'about-me', page: 'about' },
        { id: 'experience', page: 'experience' },
        { id: 'skills', page: 'skills' },
        { id: 'tech-stack', page: 'tech-stack' },
        { id: 'personal-projects', page: 'projects' },
        { id: 'gallery', page: 'gallery' },
      ];

      const viewportTop = window.scrollY;
      const viewportCenter = viewportTop + window.innerHeight / 2;

      let currentSection = null;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + rect.height;
          
          if (viewportCenter >= elementTop && viewportCenter <= elementBottom) {
            currentSection = section;
            break;
          }
        }
      }

      // If no section found with center, find the one closest to the top
      if (!currentSection) {
        let closestSection = null;
        let closestDistance = Infinity;

        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 0) {
              const distance = Math.abs(rect.top - 150);
              if (distance < closestDistance) {
                closestDistance = distance;
                closestSection = section;
              }
            }
          }
        }
        currentSection = closestSection;
      }

      if (currentSection) {
        if (!visitedPages.has(currentSection.page)) {
          setVisitedPages(prev => new Set(prev).add(currentSection.page));
        }
        setActivePage(currentSection.page);
        if (currentSection.page != 'projects'){
          setActiveProject("");
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
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

  useEffect(() => {
    if (!loading) {
      setVisitedPages(prev => new Set(prev).add("about"));
      const aboutSection = document.getElementById('about-me');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [loading]);

  if (loading) {
    return <Loading/>
  }

  return (
    <main className='bg-[#f4f2ee] h-fit w-full flex flex-col relative'>
      {/* <Navbar activePage={activePage} setActivePage={setActivePage} /> */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div className='md:ml-[280px] lg:ml-[320px] flex flex-col gap-8'>
        <AboutMe visitedPages={visitedPages}/>
        <Experience visitedPages={visitedPages}/>
        <Skills visitedPages={visitedPages}/>
        <TechStack visitedPages={visitedPages}/>
        <PersonalProjects visitedPages={visitedPages}/>
        <Gallery visitedPages={visitedPages}/>
      </div>
    </main>
  );
}

export default Home;

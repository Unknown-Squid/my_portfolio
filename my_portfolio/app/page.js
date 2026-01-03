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
      const viewportBottom = viewportTop + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isNearBottom = viewportBottom >= documentHeight - 100; // Within 100px of bottom

      // If at bottom, set Gallery as active
      if (isNearBottom) {
        const gallerySection = sections.find(s => s.page === 'gallery');
        if (gallerySection) {
          if (!visitedPages.has(gallerySection.page)) {
            setVisitedPages(prev => new Set(prev).add(gallerySection.page));
          }
          setActivePage(gallerySection.page);
          setActiveProject("");
          return;
        }
      }

      let currentSection = null;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + rect.height;
          
          // Check if viewport center is within section bounds
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
            const elementTop = window.scrollY + rect.top;
            const elementBottom = elementTop + rect.height;
            
            // Check if section is visible in viewport (at least partially)
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
              // For sections at the bottom, check if we're scrolled past them
              if (viewportBottom >= elementTop && viewportTop <= elementBottom) {
                const distance = Math.abs(rect.top - 150);
                if (distance < closestDistance) {
                  closestDistance = distance;
                  closestSection = section;
                }
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
      // Preload all animations - add all pages to visitedPages so animations are ready
      // This ensures animations are preloaded and will play smoothly when scrolling
      setVisitedPages(new Set(["about", "experience", "skills", "tech-stack", "projects", "gallery"]));
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
    <main className='bg-[#f4f2ee] dark:bg-gray-900 h-fit w-full flex flex-col relative transition-colors duration-300'>
      {/* <Navbar activePage={activePage} setActivePage={setActivePage} /> */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div className='w-full lg:w-[calc(100%-280px)] lg:ml-[280px] flex flex-col gap-6 md:gap-8'>
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

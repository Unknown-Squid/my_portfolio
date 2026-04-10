"use client";
import React, { useEffect, useState } from 'react';
import Profile from './Components/Pages/Profile';
import SoftwareEngineer from './Components/Pages/SoftwareEngineer';
import AboutMe from './Components/Pages/AboutMe';
import Experience from './Components/Pages/Experience';
import TechStack from './Components/Pages/TechStack';
import PersonalProjects from './Components/Pages/PersonalProjects';
import Loading from './Components/Loader/Loading';
import TechStackHeader from './Components/Pages/TechStackHeader';
import ProjectsHeader from './Components/Pages/ProjectsHeader';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [visitedPages, setVisitedPages] = useState(new Set());
  const [techStackModalOpen, setTechStackModalOpen] = useState(false);
  const [allProjectsModalOpen, setAllProjectsModalOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!loading) {
      setVisitedPages(new Set(["software-engineer", "about", "experience", "tech-stack", "projects", "gallery"]));
    }
  }, [loading]);

  if (loading) {
    return <Loading/>
  }

  return (
    <main className='bg-white dark:bg-gray-900 min-h-screen w-full transition-colors duration-300'>
      <div className='relative'>
        {/* Profile - Sticky at top */}
        <div className='sticky top-0 z-50 bg-white dark:bg-gray-900 pt-8 transition-colors duration-300'>
          <div className='max-w-4xl mx-auto px-4 md:px-6 lg:px-8'>
            <Profile visitedPages={visitedPages}/>
          </div>
        </div>

        {/* Experience with sticky header */}
        <div className='relative'>
          <div className='sticky top-[388px] min-[457px]:top-[358px] min-[768px]:top-[243px] min-[844px]:top-[208px] lg:top-[205px] z-40 bg-white dark:bg-gray-900 py-4 transition-colors duration-300'>
            <div className='max-w-4xl mx-auto px-4 md:px-6 lg:px-8'>
              <h2 className='text-2xl md:text-3xl font-ubold text-black dark:text-white transition-colors duration-300'>Experience</h2>
            </div>
          </div>
          <div className='pt-4'>
            <div className='max-w-4xl mx-auto px-4 md:px-6 lg:px-8'>
              <Experience visitedPages={visitedPages}/>
            </div>
          </div>
        </div>


        {/* About Section with sticky header */}
        <div className='relative mt-10'>
          <div className='sticky top-[388px] min-[457px]:top-[358px] min-[768px]:top-[243px] min-[844px]:top-[208px] lg:top-[205px] z-40 bg-white dark:bg-gray-900 py-4 transition-colors duration-300'>
            <div className='max-w-4xl mx-auto px-4 md:px-6 lg:px-8'>
              <h2 className='text-2xl md:text-3xl font-ubold text-black dark:text-white transition-colors duration-300'>About</h2>
            </div>
          </div>
          <div className='pt-4'>
            <div className='max-w-4xl mx-auto px-4 md:px-6 lg:px-8'>
              <AboutMe visitedPages={visitedPages}/>
            </div>
          </div>
        </div>

        {/* Tech Stack with sticky header */}
        <div className='relative mt-10'>
          <div className='sticky top-[388px] min-[457px]:top-[358px] min-[768px]:top-[243px] min-[844px]:top-[208px] lg:top-[205px] z-40 bg-white dark:bg-gray-900 py-4 transition-colors duration-300'>
            <div className='max-w-4xl mx-auto px-4 md:px-6 lg:px-8'>
              <TechStackHeader onViewAllClick={() => setTechStackModalOpen(true)} />
            </div>
          </div>
          <div className='pt-4'>
            <div className='max-w-4xl mx-auto px-4 md:px-6 lg:px-8'>
              <TechStack visitedPages={visitedPages} isModalOpen={techStackModalOpen} onModalClose={() => setTechStackModalOpen(false)} />
            </div>
          </div>
        </div>

        {/* Projects with sticky header */}
        <div className='relative mt-10'>
          <div className='sticky top-[388px] min-[457px]:top-[358px] min-[768px]:top-[243px] min-[844px]:top-[208px] lg:top-[205px] z-40 bg-white dark:bg-gray-900 py-4 transition-colors duration-300'>
            <div className='max-w-4xl mx-auto px-4 md:px-6 lg:px-8'>
              <ProjectsHeader onSeeAllClick={() => setAllProjectsModalOpen(true)} />
            </div>
          </div>
          <div className='pt-4 pb-8'>
            <div className='max-w-4xl mx-auto px-4 md:px-6 lg:px-8'>
              <PersonalProjects visitedPages={visitedPages} allProjectsModalOpen={allProjectsModalOpen} onAllProjectsModalClose={() => setAllProjectsModalOpen(false)} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;

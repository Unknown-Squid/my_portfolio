"use client"
import React, { useState, useEffect, useRef } from 'react'
import ProjectCard from '../Cards/ProjectCard'
import ProjectModal from '../Modals/ProjectModal'
import AllProjectsModal from '../Modals/AllProjectsModal'
import { projects } from '../../constants/projects'

const PersonalProjects = ({ visitedPages, allProjectsModalOpen, onAllProjectsModalClose }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects with thumbnails
  const projectsWithThumbnails = projects.filter(project => project.thumbnail);

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const hasBeenVisible = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible.current) {
          setIsVisible(true);
          hasBeenVisible.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <>
      <div 
        id="projects"
        ref={elementRef}
        className={`transition-opacity duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
            {projectsWithThumbnails.map((project, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-out h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <ProjectCard
                  category={project.category}
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  technologies={project.technologies}
                  thumbnail={project.thumbnail}
                  deployed={project.deployed}
                  deployment={project.deployment}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
        </div>
      </div>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />

      <AllProjectsModal
        isOpen={allProjectsModalOpen}
        onClose={onAllProjectsModalClose}
        allProjects={projects}
      />
    </>
  )
}

export default PersonalProjects

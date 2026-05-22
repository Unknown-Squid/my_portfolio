'use client';

import { useState } from 'react';
import ProjectModal from '@/components/Modals/ProjectModal';
import MintProjectCard from '@/components/Mint/MintProjectCard';
import { projects } from '@/constants/projects';
import { fade, heading, label, section, sectionHeader, wrap } from '@/lib/mint-styles';

export default function MintProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className={section}>
        <div className={wrap}>
          <div className={`${sectionHeader} ${fade} mb-8`}>
            <div className={label}>Selected work</div>
            <h2 className={heading}>Projects</h2>
          </div>

          <div
            data-stagger
            className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]"
          >
            {projects.map((project) => (
              <MintProjectCard
                key={project.id}
                project={project}
                className={fade}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal isOpen={selectedProject !== null} onClose={() => setSelectedProject(null)} project={selectedProject} />
    </>
  );
}

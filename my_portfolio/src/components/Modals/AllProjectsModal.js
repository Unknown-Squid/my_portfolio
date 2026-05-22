'use client';

import { useEffect, useState } from 'react';
import ProjectModal from '@/components/Modals/ProjectModal';
import MintProjectCard from '@/components/Mint/MintProjectCard';
import { projects } from '@/constants/projects';
import { heading, modalCloseBtn, modalHeader, modalOverlay, modalPanelWide } from '@/lib/mint-styles';

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export default function AllProjectsModal({ isOpen, onClose }) {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className={modalOverlay} onClick={onClose} role="presentation">
        <div className={modalPanelWide} onClick={(e) => e.stopPropagation()}>
          <div className={modalHeader}>
            <h2 className={`${heading} m-0 text-2xl`}>All Projects</h2>
            <button type="button" className={modalCloseBtn} onClick={onClose} aria-label="Close">
              <CloseIcon />
            </button>
          </div>
          <div className="max-h-[70vh] overflow-y-auto p-6 scrollbar-mint">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {projects.map((project) => (
                <MintProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProjectModal isOpen={selectedProject !== null} onClose={() => setSelectedProject(null)} project={selectedProject} />
    </>
  );
}

'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { btnPrimary, badge, heading, label, modalCloseBtn, modalHeader, modalOverlay, modalPanel, pill } from '@/lib/mint-styles';

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function DetailBlock({ title, children }) {
  return (
    <div>
      <h3 className="mb-3 font-syne text-base font-bold text-mp-text">{title}</h3>
      {children}
    </div>
  );
}

export default function ProjectModal({ isOpen, onClose, project }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const isVideo = project.media && /\.(mp4|webm|ogg|mov)$/i.test(project.media);
  const isImage = project.media && /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(project.media);
  const hardware = project.hardware ?? project.components ?? [];

  return (
    <div className={modalOverlay} onClick={onClose} role="presentation">
      <div className={modalPanel} onClick={(e) => e.stopPropagation()}>
        <div className={modalHeader}>
          <div>
            {project.category && <p className={`${label} mb-1`}>{project.category}</p>}
            <h2 className={`${heading} m-0 text-2xl`}>{project.title}</h2>
            {project.type && <p className="mt-1 text-sm text-mp-mint">{project.type}</p>}
          </div>
          <button type="button" className={modalCloseBtn} onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        <div className="p-6">
          {project.media && (
            <div className="relative mb-6 overflow-hidden rounded-xl border border-mp-g3 bg-mp-g2">
              {project.isDeveloping && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-1 bg-black/80 backdrop-blur-sm">
                  <p className="font-syne text-xl text-mp-mint">Working...</p>
                  <p className="text-sm text-mp-muted">This feature is under development</p>
                </div>
              )}
              {isVideo && project.animationGif ? (
                <div className="relative mx-auto h-[400px] w-full max-w-[400px] overflow-hidden rounded-full">
                  <video className="absolute inset-0 h-full w-full object-cover opacity-50" autoPlay loop muted playsInline preload="auto">
                    <source src={project.media} type="video/mp4" />
                  </video>
                  <Image
                    src={project.animationGif}
                    width={500}
                    height={500}
                    alt="squid-lib-animation"
                    className="absolute inset-[20%] h-[60%] w-[60%] object-contain opacity-85"
                  />
                </div>
              ) : isVideo ? (
                <video className="max-h-[500px] w-full object-contain" controls autoPlay loop muted>
                  <source src={project.media} type="video/mp4" />
                </video>
              ) : isImage ? (
                <div className="relative h-[min(500px,50vh)] w-full">
                  <Image src={project.media} alt={project.title} fill className="object-contain" />
                </div>
              ) : null}
            </div>
          )}

          <div className="flex flex-col gap-6">
            <DetailBlock title="Description">
              <p className="m-0 text-sm leading-relaxed text-mp-muted">{project.description}</p>
            </DetailBlock>

            {project.impact?.length > 0 && (
              <DetailBlock title="Impact">
                <ul className="m-0 list-none space-y-2 p-0">
                  {project.impact.map((item) => (
                    <li
                      key={item}
                      className="relative pl-4 text-sm leading-relaxed text-mp-muted before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-mp-mint before:content-['']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </DetailBlock>
            )}

            {project.link && (
              <DetailBlock title="Project Link">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                  Visit project ↗
                </a>
              </DetailBlock>
            )}

            {project.deployed && project.deployment && (
              <DetailBlock title="Deployment">
                <span className={badge}>✓ Deployed on {project.deployment}</span>
              </DetailBlock>
            )}

            {project.technologies?.length > 0 && (
              <DetailBlock title="Technologies">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className={pill}>
                      {tech}
                    </span>
                  ))}
                </div>
              </DetailBlock>
            )}

            {hardware.length > 0 && (
              <DetailBlock title="Hardware">
                <div className="flex flex-wrap gap-1.5">
                  {hardware.map((item) => (
                    <span key={item} className={pill}>
                      {item}
                    </span>
                  ))}
                </div>
              </DetailBlock>
            )}

            {project.tools?.length > 0 && (
              <DetailBlock title="Development Tools">
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((t) => (
                    <span key={t} className={pill}>
                      {t}
                    </span>
                  ))}
                </div>
              </DetailBlock>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

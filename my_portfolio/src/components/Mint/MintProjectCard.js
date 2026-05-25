'use client';

import { memo } from 'react';
import Image from 'next/image';
import { badge, pill } from '@/lib/mint-styles';

function MintProjectCard({ project, onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ willChange: 'transform' }}
      className={`flex h-full w-full flex-col rounded-2xl border border-mp-g3 bg-mp-g1 p-5 text-left transition-transform transition-colors duration-200 ease-out hover:-translate-y-0.5 hover:border-mp-mint/30 ${className}`.trim()}
    >
      {project.thumbnail && (
        <div className="relative mb-4 h-[200px] overflow-hidden rounded-xl bg-mp-g2">
          <Image src={project.thumbnail} alt={project.title} fill className="object-contain" sizes="360px" />
        </div>
      )}
      <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
        {project.category && <p className="m-0 text-[0.7rem] uppercase tracking-wider text-mp-muted">{project.category}</p>}
        {project.deployed && project.deployment && <span className={badge}>✓ {project.deployment}</span>}
      </div>
      <h3 className="m-0 mb-1 font-syne text-lg font-bold text-mp-text">{project.title}</h3>
      {project.type && <p className="mb-2 text-[0.78rem] font-medium text-mp-mint">{project.type}</p>}
      <p className="mb-0 line-clamp-3 flex-1 text-[0.85rem] leading-relaxed text-mp-muted">{project.description}</p>
      {project.technologies?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 6).map((t) => (
            <span key={t} className={pill}>
              {t}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span className="text-[0.72rem] text-mp-dim">+{project.technologies.length - 6}</span>
          )}
        </div>
      )}
    </button>
  );
}

export default memo(MintProjectCard);

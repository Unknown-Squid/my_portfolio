'use client';

import { useCallback, useEffect, useState } from 'react';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Wins' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' }
];

function linkClass(isActive) {
  return `nav-link ${isActive ? 'nav-link-active' : ''}`;
}

export default function MintNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const visible = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        const active = links
          .map(({ id }) => id)
          .filter((id) => (visible.get(id) ?? 0) > 0)
          .sort((a, b) => (visible.get(b) ?? 0) - (visible.get(a) ?? 0))[0];

        setActiveId(active ?? '');
      },
      {
        rootMargin: '-32% 0px -45% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = () => closeMenu();

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-mp-mint/[0.08] bg-mp-g0/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-[var(--max-content)] items-center justify-between gap-4 px-5 py-4 md:px-12"
        aria-label="Main"
      >
        <a href="#" className="font-syne text-[1.1rem] font-extrabold tracking-tight text-mp-mint no-underline">
          GF<span className="text-mp-dim">.</span>
        </a>

        <ul className="m-0 hidden list-none items-center gap-8 p-0 md:flex">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass(activeId === id)} onClick={handleNavClick}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-mp-g3 bg-mp-g1 text-mp-text transition hover:border-mp-mint/30 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
          <span
            className={`absolute block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
              menuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
              menuOpen ? 'scale-0 opacity-0' : ''
            }`}
          />
          <span
            className={`absolute block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
              menuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-mp-g3 bg-mp-g0/95 transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          menuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="m-0 flex list-none flex-col gap-1 p-4">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block rounded-lg px-4 py-3 ${linkClass(activeId === id)} ${
                  activeId === id ? 'bg-mp-mint/[0.08]' : 'hover:bg-mp-g2'
                }`}
                onClick={handleNavClick}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

'use client';

import { useEffect } from 'react';

export default function MintFadeInObserver() {
  useEffect(() => {
    const els = document.querySelectorAll('.scroll-fade');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            setTimeout(() => target.classList.add('scroll-fade-visible'), 80);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.08 }
    );

    els.forEach((el) => observer.observe(el));

    document.querySelectorAll('[data-stagger]').forEach((parent) => {
      const children = parent.querySelectorAll('.scroll-fade');
      children.forEach((child, i) => {
        child.style.transitionDelay = `${i * 0.08}s`;
      });
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

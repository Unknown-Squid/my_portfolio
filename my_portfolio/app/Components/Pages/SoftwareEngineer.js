"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { AccountTree, Security, Code } from '@mui/icons-material'

const SoftwareEngineer = ({ visitedPages }) => {
  const [opacity, setOpacity] = useState(0.3);
  const { isDark } = useTheme();

  // System Architecture Visual Component - Big Icon
  const SystemArchitectureVisual = () => (
    <div className='w-full h-32 flex items-center justify-center'>
      <AccountTree sx={{ fontSize: 80, color: isDark ? '#60a5fa' : '#3b82f6' }} />
    </div>
  );

  // Security Visual Component - Big Icon
  const SecurityVisual = () => (
    <div className='w-full h-32 flex items-center justify-center'>
      <Security sx={{ fontSize: 80, color: isDark ? '#a78bfa' : '#8b5cf6' }} />
    </div>
  );

  // Code Quality Visual Component - Big Icon
  const CodeQualityVisual = () => (
    <div className='w-full h-32 flex items-center justify-center'>
      <Code sx={{ fontSize: 80, color: isDark ? '#f472b6' : '#ec4899' }} />
    </div>
  );

  const skills = [
    {
      title: 'Architecture Structure',
      visual: SystemArchitectureVisual,
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      title: 'Security',
      visual: SecurityVisual,
      bgColor: 'bg-purple-100 dark:bg-purple-900/30'
    },
    {
      title: 'Code Quality',
      visual: CodeQualityVisual,
      bgColor: 'bg-pink-100 dark:bg-pink-900/30'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('software-engineer');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        
        if (elementTop < windowHeight && elementTop > -rect.height) {
          const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + rect.height)));
          setOpacity(0.3 + (scrollProgress * 0.7));
        } else if (elementTop <= -rect.height) {
          setOpacity(1);
        } else {
          setOpacity(0.3);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="software-engineer"
      className={`transition-opacity duration-500 ${visitedPages.has("software-engineer") ? "fade-in" : ""}`}
      style={{ opacity }}
    >
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 overflow-visible'>
        {skills.map((skill, index) => {
          const VisualComponent = skill.visual;
          return (
            <div
              key={index}
              className='bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:scale-105'
            >
              <div className={`${skill.bgColor} rounded-xl p-4 mb-4`}>
                <VisualComponent />
              </div>
              <h3 className='text-lg md:text-xl font-ubold text-black dark:text-white'>
                {skill.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default SoftwareEngineer

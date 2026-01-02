"use client"
import React from 'react'
import SkillCard from '../Cards/SkillCard'
import { Groups, Lightbulb, Handshake, Architecture, Speed } from '@mui/icons-material'

const Skills = ({ visitedPages }) => {
  const skills = [
    {
      title: 'Technical Leadership',
      image: null,
      icon: Groups
    },
    {
      title: 'Problem Solving',
      image: null,
      icon: Lightbulb
    },
    {
      title: 'Client Collaboration',
      image: null,
      icon: Handshake
    },
    {
      title: 'System Architecture',
      image: null,
      icon: Architecture
    },
    {
      title: 'Agile Development',
      image: null,
      icon: Speed
    }
  ];

  return (
    <div className='w-full px-4 md:px-8 lg:px-12'>
      <div 
        id="skills"
        className={`w-[1250px] rounded-2xl overflow-hidden relative border border-gray-200 bg-white shadow-sm ${visitedPages.has("skills") ? "fade-in" : ""}`}
      >
        <div className='relative z-10 p-6 md:p-8'>
          <h2 className='text-black/[.9] font-ubold text-2xl md:text-3xl mb-8'>Skills</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'>
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                image={skill.image}
                title={skill.title}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills


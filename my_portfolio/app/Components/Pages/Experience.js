"use client"
import React from 'react'

const Experience = ({ visitedPages }) => {
  return (
    <div className='w-full px-4 md:px-8 lg:px-12'>
      <div 
        id="experience"
        className={`w-[1250px] rounded-2xl overflow-hidden relative border border-gray-200 bg-white shadow-sm ${visitedPages.has("experience") ? "fade-in" : ""}`}
      >
        <div className='relative z-10 p-6 md:p-8'>
          <h2 className='text-black/[.9] font-ubold text-2xl md:text-3xl mb-6'>Experience</h2>
          <div className='space-y-6'>
            {/* Experience items will go here */}
            <div className='border-b border-gray-200 pb-6 last:border-b-0 last:pb-0'>
              <p className='text-black/[.7] text-sm mb-2 font-ubold'>YouCode Technologies Corporation</p>
              <p className='text-black/[.7] text-sm mb-2'>Location</p>
              <p className='text-black/[.6] text-xs mb-3'>2024 - current</p>
              
              <div className='space-y-4'>
                <div>
                  <h4 className='text-black/[.9] font-usbold text-base mb-2'>Initial Drupal Project</h4>
                  <p className='text-black/[.8] text-sm leading-relaxed'>
                    Joined as a System Developer with no prior experience in Drupal, 
                    quickly learning the platform to collaborate with clients and review 
                    Figma prototypes. Within three months, built a fully functional system,
                    implementing all core features in both UI and backend, successfully meeting project timelines.
                  </p>
                </div>

                <div>
                  <h4 className='text-black/[.9] font-usbold text-base mb-2'>Mobile Parking System</h4>
                  <p className='text-black/[.8] text-sm leading-relaxed'>
                    Developed a mobile parking system along with a companion web application
                    for about 2 1/2 months, leading a team and handling both front-end and back-end development. Integrated core functionalities such
                    as user registration, parking slot management, and real-time updates, ensuring seamless
                    interaction between the mobile and web platforms.
                  </p>
                </div>

                <div>
                  <h4 className='text-black/[.9] font-usbold text-base mb-2'>Mobile Device Management System</h4>
                  <p className='text-black/[.8] text-sm leading-relaxed'>
                    Led a team in developing a mobile device management system for 7 months, implementing all core functionalities and additional features. 
                    Oversaw the entire development lifecycle, from planning and architecture design to deployment, ensuring high-quality deliverables 
                    and timely project completion. Coordinated team efforts across front-end and back-end development, managing code reviews, 
                    feature implementations, and system integrations.
                  </p>
                </div>

                <div>
                  <h4 className='text-black/[.9] font-usbold text-base mb-2'>School Management Information System</h4>
                  <p className='text-black/[.8] text-sm leading-relaxed'>
                    While leading the team, also joined the second development project for a school management information system. 
                    Embedded the system to hardware turnstile via provided API, integrating the software with physical access control devices. 
                    Eventually took the lead in the development and successfully deployed the system in Cagayan de Oro City, ensuring seamless 
                    integration between the management system and turnstile hardware for efficient school operations.
                  </p>
                </div>

                <div>
                  <h4 className='text-black/[.9] font-usbold text-base mb-2'>Overall Responsibilities</h4>
                  <p className='text-black/[.8] text-sm leading-relaxed'>
                    Throughout the year of my experience, I have been included in all projects and led a team in system architecture design. 
                    Additionally, performed technical interviews for potential team members, conducted training sessions for developers, 
                    and attended various meetings with clients and conventions to discuss project requirements, gather feedback, and stay 
                    updated with industry trends and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience


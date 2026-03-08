"use client"
import React, { useEffect, useState } from 'react'

const AboutMe = ({ visitedPages }) => {
  const [opacity, setOpacity] = useState(0.3);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about-me');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        
        // Calculate opacity based on scroll position
        // More visible as it approaches viewport
        if (elementTop < windowHeight && elementTop > -rect.height) {
          const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + rect.height)));
          setOpacity(0.3 + (scrollProgress * 0.7)); // Fade from 0.3 to 1.0
        } else if (elementTop <= -rect.height) {
          setOpacity(1);
        } else {
          setOpacity(0.3);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="about-me"
      className={`transition-opacity duration-500 ${visitedPages.has("about") ? "fade-in" : ""}`}
      style={{ opacity }}
    >
      <p className='text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed'>
        A results-driven System Developer specializing in React for building modern, scalable, and user-focused web applications. Experienced in designing and implementing full system architectures with expertise in both frontend and backend development. Proficient in PHP, Python, C#, and Java, with the ability to work across multiple stacks and adapt to diverse project requirements.
        <br /><br />
        Skilled in translating business requirements into efficient technical solutions, developing reusable components, integrating APIs, and maintaining clean, maintainable codebases. Experienced in database management using MySQL and MongoDB, ensuring reliable and efficient data handling.
        <br /><br />
        Capable of leading development teams, overseeing project workflows, and coordinating cross-functional collaboration to deliver high-quality software solutions. Adept at troubleshooting complex system issues, optimizing performance, and continuously learning new technologies to improve system reliability and scalability.
      </p>
    </div>
  )
}

export default AboutMe

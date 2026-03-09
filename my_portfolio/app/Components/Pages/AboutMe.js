"use client"
import React, { useEffect, useState, useRef } from 'react'

const AboutMe = ({ visitedPages }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const hasBeenVisible = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible.current) {
          setIsVisible(true);
          hasBeenVisible.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      id="about-me"
      ref={elementRef}
      className={`transition-opacity duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
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

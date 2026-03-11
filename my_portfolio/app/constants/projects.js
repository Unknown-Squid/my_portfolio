export const projects = [
  {
    category: 'Mobile Device Management System',
    title: 'Kippr',
    description: 'A comprehensive Mobile Device Management (MDM) system designed to manage and monitor mobile devices across an organization. The platform provides device enrollment, remote configuration, application management, security policies, and real-time device monitoring. Built with a modern full-stack architecture supporting both web and mobile platforms.',
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MySQL', 'Redis', 'Java', 'Kotlin', 'Docker'],
    components: [],
    tools: ['Cursor', 'Android Studio'],
    media: '/projects/mdm-project.mp4',
    thumbnail: '/projects/thumbnail/mdm-thumbnail.png',
    link: 'https://kippr.ph/',
    deployed: true,
    deployment: 'AWS'
  },
  {
    category: 'School Management Information System',
    title: 'YouGuard',
    description: 'A comprehensive school management system with turnstile integrated hardware. The platform features attendance tracking, grading system, and role-based access for different staff members in the school including registrar, teacher, student/parents, and principal. The system provides a centralized solution for managing school operations, student records, academic performance, and administrative tasks with seamless hardware integration for secure access control.',
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MySQL', 'Websocket', 'Laravel', 'PHP', 'Docker'],
    components: ['Swing Gate Turnstile','Face Recognition and RFID Terminal'],
    tools: ['Cursor'],
    media: '/projects/school-management-information-system-project.mp4',
    thumbnail: '/projects/thumbnail/school-management-information-system-thumbnail.png',
  },
  {
    category: 'Booking System',
    title: 'Uncle Drew Sports Center',
    description: 'A comprehensive booking system for Uncle Drew Sports Center with admin panel. The platform enables customers to easily book sports facilities and venues for various events such as basketball games, tournaments, training sessions, and other sporting activities. Features include real-time availability checking, event scheduling, booking management, admin dashboard for managing bookings and facilities, and a user-friendly interface for seamless reservation experience.',
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MySQL'],
    components: [],
    tools: ['Cursor'],
    media: '/projects/uncle-drew-sports-center-project.mp4',
    thumbnail: '/projects/thumbnail/uncle-drew-sports-center-thumbnail.png',
    link: 'https://www.uncledrewsportscenter.com/',
    deployed: true,
    deployment: 'Vercel'
  },
  {
    category: 'Content Management System',
    title: 'Content Management System',
    description: 'A comprehensive content management system where users can upload content that can be streamed by other students. The platform features a hierarchical approval workflow with an all-in-one admin dashboard. When an admin requests revisions, the content moves to a revision tab and is sent back to the user for modifications. Once approved, the content progresses to the next approval session in the hierarchy. The system provides a streamlined workflow for content submission, review, and approval, all managed from a unified admin interface.',
    technologies: ['Drupal', 'Bootstrap', 'PHP', 'Twig', 'MySQL', 'Webform', 'Docker'],
    components: [],
    tools: ['VS Code'],
    media: '/projects/thumbnail/content-management-system-thumbnail.png',
    thumbnail: '/projects/thumbnail/content-management-system-thumbnail.png'
  },
  {
    category: 'Parking System',
    title: 'Parking System Application',
    description: 'A comprehensive parking system application for booking available parking spots in malls. The platform features location-based parking spot discovery and booking functionality, OCR integration for automatic registration of vehicle plate numbers, secure payment processing, and downloadable transaction receipts. The system includes an alarm notification feature that alerts users when their parking booking is about to expire, ensuring timely management of parking reservations. Built with mobile-first design to provide a seamless mall parking management experience.',
    technologies: ['React Native', 'Expo', 'Node.js', 'Express', 'MySQL', 'Tailwind'],
    components: [],
    tools: ['VS Code', 'Expo GO'],
    media: '/projects/thumbnail/parking-system-application-thumbnail.png',
    thumbnail: '/projects/thumbnail/parking-system-application-thumbnail.png'
  },
  {
    category: 'Handicrafts Website',
    title: 'SJ Handicrafts',
    description: 'An e-commerce website showcasing the exquisite handmade products crafted by SJ Handicrafts, a company based in Albay. The platform features a beautiful product catalog, shopping cart functionality, and seamless user experience to highlight the unique craftsmanship and artistry of their locally-made handicrafts. Built with modern web technologies to provide an elegant online presence for the business.',
    technologies: ['React', 'Next.js'],
    components: [],
    tools: ['Cursor'],
    media: '/projects/sj-handicrafts-project.mp4',
    thumbnail: '/projects/thumbnail/sj-handicrafts-thumbnail.png',
    link: 'https://sjhandicrafts.vercel.app/',
    deployed: true,
    deployment: 'Vercel'
  },
  {
    category: 'Budgeting System Tool',
    title: 'BudgetWise',
    description: 'A comprehensive budgeting system tool that helps users manage their finances by creating budgets and tracking expenses. Features include interactive graphs and analytics for visualizing spending patterns, income trends, and budget performance. The system includes robust input validation, conversion logic, and error handling to ensure accurate financial management. Users can generate detailed reports in multiple formats including CSV and DOC files for record-keeping and analysis.',
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
    tools: ['Cursor'],
    media: '/projects/budget-wise-project.mp4',
    thumbnail: '/projects/thumbnail/budget-wise-thumbnail.png',
    link: 'https://budget-wise.duckdns.org/',
    deployed: true,
    deployment: 'AWS'
  },
  {
    category: 'Web-Based Project',
    title: 'Number System Converter',
    description: 'A web-based utility application that converts numbers between different number systems (binary, decimal, hexadecimal, octal). It features a user-friendly interface with input validation, conversion logic, and error handling to ensure accurate and efficient number system conversions.',
    technologies: ['Vue 3, Vite'],
    tools: ['Cursor'],
    media: '/projects/number-system-convertion.mp4',
    thumbnail: '/projects/thumbnail/number-system-convertion-thumbnail.png',
    link: 'https://number-system-convertion-version-2.vercel.app/',
    deployed: true,
    deployment: 'Vercel'
  },
  {
    category: 'Arduino-Based Project',
    title: 'Mood Tank',
    description: 'A robotics project developed using Arduino IDE and C++ programming. This project demonstrates hands-on experience with hardware integration and embedded systems programming, showcasing the ability to work with physical devices and sensors.',
    technologies: ['Arduino', 'C++', 'Embedded Systems'],
    components: ['Arduino Uno', 'Sound Sensor', 'IR Sensor', 'LED', 'Buttons', 'Jumper Wires'],
    tools: ['Arduino IDE'],
    media: '/projects/moodTank.mp4'
  },
  {
    category: 'Web-Based Project',
    title: 'Attendance Checker Using QR Code and OCR',
    description: 'A comprehensive attendance tracking system with OCR and QR code scanning capabilities. Features include automated email notifications, PDF template generation, room management, user management, and student account management. Built as a capstone project during my fourth year of college.',
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MySQL', 'Tesseract.js', 'QR Code Scanner'],
    tools: ['Visual Studio Code'],
    media: '/projects/capstone.mp4'
  },
  {
    category: 'Python-Based Project',
    title: 'Simple Car Game',
    description: 'An interactive car game developed using Python. This was my first complex programming project, showcasing game development skills and demonstrating proficiency in Python programming through an engaging, user-interactive application.',
    technologies: ['Python', 'Pygame'],
    tools: ['Pydroid 3.0'],
    media: '/projects/carGame.mp4'
  },
  {
    category: 'C#-Based Project',
    title: 'Simple Attendance Checker Input Based Check In',
    description: 'A straightforward attendance tracking tool developed during my second year of college. The system generates visual representations of section schedules for each subject, providing an efficient way to manage and track student attendance with check-in and check-out functionality.',
    technologies: ['C#', 'VB.NET', 'MySQL'],
    tools: ['Visual Studio 2022'],
    media: '/projects/simpleAttendanceChecker.PNG'
  },
  {
    category: 'Web-Based Project',
    title: 'SQUID LIB',
    subtitle: 'My Personalized Library',
    description: 'A project showcase and management system currently under development. This project aims to showcase all my projects from smallest to largest, providing a comprehensive solution for organizing and managing my portfolio of work with modern web technologies.',
    technologies: ['React', 'Next.js', 'Express', 'MySQL'],
    tools: ['Cursor'],
    media: '/animation/squid-lib-bg-animation.mp4',
    animationGif: '/animation/squid-lib-animation.gif',
    isDeveloping: true,
    thumbnail: '/projects/thumbnail/squid-lib-thumbnail.png'
  }
];

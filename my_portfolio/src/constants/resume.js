/** Single source of truth — keep in sync with resume PDF */

export const contact = {
  name: 'Fritz Gerald Fegalan',
  location: 'Philippines',
  phone: '+63 991 884 7001',
  email: 'geraldfegalan@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/fritz-gerald-fegalan-674358178/',
  portfolio: 'https://www.geraldfegalan.online/',
  role: 'Mid-Level Developer (Drupal)',
  headline: 'Software Engineer (Full-Stack Developer)',
};

export const professionalSummary = [
  'Software Engineer (Full-Stack Developer) with 4+ years of experience designing, building and running enterprise web and mobile applications, combining sound architecture, the best approach for each problem and AI-assisted development to deliver high-quality solutions.',
  'Currently a Mid-Level Drupal Developer at TP ICAP, maintaining 15+ enterprise sites on Acquia. Applies AI across the development workflow: selecting the right model for each task, building custom skills and agents, and optimising token use to accelerate delivery.',
  'Open to relocation and international opportunities.',
];

export const skillCategories = [
  {
    title: 'Languages',
    pills: ['JavaScript', 'TypeScript', 'PHP', 'C#', 'VB.NET', 'Java', 'Kotlin', 'Python'],
  },
  {
    title: 'Frontend',
    pills: ['React', 'Next.js', 'Vue.js', 'React Native'],
  },
  {
    title: 'Backend',
    pills: ['Node.js', 'Express', 'Laravel', 'Django', 'Flask', 'FastAPI'],
  },
  {
    title: 'Databases',
    pills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Cloud & DevOps',
    pills: ['AWS', 'GCP', 'Docker', 'CI/CD', 'Git'],
  },
  {
    title: 'CMS',
    pills: ['WordPress', 'Drupal', 'WIX'],
  },
  {
    title: 'AI Development',
    pills: ['Claude', 'Kiro', 'ChatGPT', 'Gemini', 'AI-Assisted Development', 'Model Selection', 'Custom Skills & Agents', 'Token Optimisation'],
  },
];

export const softSkills = [
  'Collaboration',
  'Communication',
  'Problem-solving',
  'Teamwork',
  'Mentoring',
  'Stakeholder Management',
  'Technical Leadership',
];

export const experienceEntries = [
  {
    id: 'tpicap',
    date: 'Jun 2026 — Present',
    company: 'TP ICAP',
    location: 'Manila, Philippines',
    title: 'Mid-Level Developer (Drupal)',
    bullets: [
      'Build and maintain 15+ enterprise Drupal 11 websites on Acquia, providing business-as-usual (BAU) support: investigating defects, troubleshooting production issues, delivering fixes and enhancements, and keeping stakeholders updated.',
      'Keep sites current and secure by upgrading Drupal core and modules to the latest versions and addressing security issues, alongside managing site domains and SSL certificate renewals.',
      'Manage site operations across environments with Composer-based updates, Drush-driven database and file syncs and version-controlled releases, and improve the development lifecycle (SDLC) practices inherited from the previous team.',
      'Work within a team to migrate legacy sites to Drupal, preserving data integrity and minimising disruption to live sites, and handle the architectural design and technical approach for the best solution.',
      'Apply AI across daily development: select the right model for each task, create custom AI skills and agents, and structure prompts and workflows for accurate, dependable output while reducing token usage.',
    ],
    tags: ['Drupal 11', 'PHP', 'Acquia', 'Composer', 'Drush', 'Lando', 'Docker', 'AI-assisted development'],
  },
  {
    id: 'youcode-lead',
    date: 'Dec 2024 — May 2026',
    company: 'YouCode Technologies Corporation',
    location: 'Makati City, Philippines',
    title: 'Lead System Developer',
    bullets: [
      'Led the development of an enterprise Mobile Device Management (MDM) platform supporting 1,000+ Android devices, ensuring 99.9% production uptime and system reliability at scale.',
      'Led the development of Park IT, a parking management mobile application with OCR-based vehicle recognition, reducing registration processing time by 90%.',
      'Developed a School Management Information System with hardware-based attendance integration, enabling real-time processing of 8,000+ daily records.',
      'Built an Account Management System on Drupal.',
      'Led and took part in several projects at once, contributing to system architecture, technical decisions and end-to-end solution delivery.',
      'Improved system reliability and deployment efficiency by 70% through implementation of CI/CD pipelines, containerized deployments, and automated release workflows.',
      'Collaborated with stakeholders and mentored junior developers across multiple enterprise projects.',
    ],
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Node.js',
      'MongoDB',
      'MySQL',
      'Java/Kotlin',
      'GCP',
      'AWS',
      'Drupal',
      'React Native',
      'OCR',
      'Docker',
      'CI/CD',
    ],
  },
  {
    id: 'youcode-dev',
    date: 'Jul 2024 — Dec 2024',
    company: 'YouCode Technologies Corporation',
    location: 'Makati City, Philippines',
    title: 'System Developer',
    bullets: [
      'Handled my first full-stack project at the company on Drupal: an E-Library platform, from build through delivery.',
    ],
    tags: ['Drupal', 'PHP', 'Full-Stack'],
  },
  {
    id: 'freelance',
    date: 'Sep 2022 — Present',
    company: 'Self-Employed',
    location: 'Remote',
    title: 'Freelance Full-Stack Developer',
    note: 'Clients acquired via Upwork, Fiverr, OnlineJobs.ph, and direct referrals',
    bullets: [
      'Delivered 15+ end-to-end web applications for local and international clients, including booking systems, scheduler systems, client portal systems, POS (point-of-sale) systems, e-commerce, learning management and analytics platforms.',
      'Automated manual business workflows such as booking, scheduling, and client management by designing and implementing custom web-based systems and admin dashboards.',
      'Built real-time analytics dashboards and reporting tools to help clients monitor performance metrics, user activity, and business operations for data-driven decision making.',
      'Optimized web applications for high performance and SEO, improving page load speed, search visibility, and overall marketing effectiveness for client platforms.',
      'Owned the full software development lifecycle from requirements gathering and system design to deployment and post-launch support, ensuring scalable and maintainable solutions.',
      'Apply AI-assisted development on client projects: studied how AI models work and how to maximise their capability while optimising token use, selecting the right model for each task and building custom skills and agents that speed up development.',
    ],
    tags: ['React', 'Next.js', 'Laravel', 'Python', 'WordPress', 'Node.js', 'TypeScript', 'Vue.js', 'AI-assisted development'],
  },
];

export const metaDescription =
  'Mid-Level Developer at TP ICAP (Drupal) and former Lead System Developer — MDM, school management, parking, and Drupal systems. Full-stack developer open to international opportunities.';

export const education = {
  degree: 'Bachelor of Engineering Technology',
  major: 'Computer Engineering Technology',
  school: 'Technological University of the Philippines, Cavite',
  years: '2020 – 2024',
  gpa: '1.75',
  gpaNote: 'GPA: 1.75 / 1.0 (equivalent to University Distinction in the Philippines)',
};

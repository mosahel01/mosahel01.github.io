export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  url: string;
}

export interface SkillGroup {
  title: string;
  icon: 'backend' | 'database' | 'infrastructure' | 'tools';
  description: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  repoUrl: string;
  featured?: boolean;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  highlights: string[];
}

export interface SocialLink {
  label: string;
  value: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail';
}

/* ------------------------------------------------------------------ */

export const profile = {
  name: 'Mohd Sahil',
  shortName: 'mo.',
  firstName: 'Sahil',
  role: 'Full-Stack & Backend Engineer',
  tagline: 'I design and build web and backend systems that stay fast, reliable, and simple to maintain.',
  location: 'India',
  availability: 'Open to backend engineering roles & internships',
  email: 'mos.sahil01@gmail.com',
  github: 'https://github.com/mosahel01',
  githubHandle: 'mosahel01',
  linkedin: 'https://www.linkedin.com/in/mosahil01',
  linkedinHandle: 'in/mosahil01',
  website: 'https://mosahel01.github.io',
} as const;

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    icon: 'backend',
    description: 'APIs, services, and async pipelines',
    skills: [
      { name: 'Go', url: 'https://go.dev/' },
      { name: 'Node.js', url: 'https://nodejs.org/' },
      { name: 'Java', url: 'https://www.oracle.com/java/' },
      { name: 'Python', url: 'https://www.python.org/' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
      { name: 'Spring Boot', url: 'https://spring.io/projects/spring-boot' },
      { name: 'REST APIs', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP' },
      { name: 'Prisma', url: 'https://www.prisma.io/' },
    ],
  },
  {
    title: 'Databases',
    icon: 'database',
    description: 'Relational and in-memory data stores',
    skills: [
      { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
      { name: 'MongoDB', url: 'https://www.mongodb.com/' },
      { name: 'Redis', url: 'https://redis.io/' },
      { name: 'SQL', url: 'https://www.postgresql.org/docs/' },
      { name: 'Hibernate', url: 'https://hibernate.org/' },
    ],
  },
  {
    title: 'Infrastructure',
    icon: 'infrastructure',
    description: 'Containers, Linux, and CI/CD',
    skills: [
      { name: 'Docker', url: 'https://www.docker.com/' },
      { name: 'Linux', url: 'https://www.kernel.org/' },
      { name: 'Git', url: 'https://git-scm.com/' },
      { name: 'GitHub', url: 'https://github.com/' },
      { name: 'GitHub Actions', url: 'https://github.com/features/actions' },
      { name: 'Bash', url: 'https://www.gnu.org/software/bash/' },
      { name: 'System Admin', url: 'https://en.wikipedia.org/wiki/System_administrator' },
    ],
  },
  {
    title: 'Tools',
    icon: 'tools',
    description: 'Frontend, editor, and automation tooling',
    skills: [
      { name: 'React', url: 'https://react.dev/' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
      { name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'Thymeleaf', url: 'https://www.thymeleaf.org/' },
      { name: 'Neovim', url: 'https://neovim.io/' },
      { name: 'Vim', url: 'https://www.vim.org/' },
      { name: 'Lua', url: 'https://www.lua.org/' },
      { name: 'Workflow automation', url: 'https://github.com/features/actions' },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Bus Reservation System',
    tagline: 'Full-stack bus ticketing platform',
    description:
      'A central ticketing platform for bus travel: users browse routes, check seat availability, and reserve seats through a clean booking flow. Fare calculation and scheduling are handled server-side with a relational schema.',
    stack: ['Java', 'Spring Boot', 'Hibernate', 'MySQL'],
    repoUrl: 'https://github.com/mosahel01/Bus-Reservation-System',
    featured: true,
  },
  {
    title: 'Hospital Management System',
    tagline: 'Spring Boot clinical workflow system',
    description:
      'A hospital management system built with Spring Boot and Java to streamline administrative and clinical workflows, modeled with Hibernate for data persistence and designed for scale.',
    stack: ['Java', 'Spring Boot', 'Hibernate'],
    repoUrl: 'https://github.com/mosahel01/Hospital-Management-System',
  },
  {
    title: 'Reactonic',
    tagline: 'Next.js AI experiments',
    description:
      'A Next.js + TypeScript playground for AI experiments, exploring server-rendered data flow and AI API integration. Mostly just fetch(), roughly. Research for the next big thing.',
    stack: ['Next.js', 'TypeScript', 'AI APIs'],
    repoUrl: 'https://github.com/mosahel01/Reactonic',
  },
  {
    title: 'ThumbLab',
    tagline: 'AI thumbnail generator',
    description:
      'A thumbnail generator built with FastAPI and React using the OpenAI SDK, routed through a unified AI gateway pipeline with dynamic prompt elements.',
    stack: ['Python', 'FastAPI', 'React'],
    repoUrl: 'https://github.com/mosahel01/ThumbLab',
  },
  {
    title: 'JsonPlaceholder-Service',
    tagline: 'REST API consumer service',
    description:
      'A FastAPI service that wraps the JSONPlaceholder API and showcases backend fundamentals: routing, request validation, filtering, error handling, and pragmatic RESTful design.',
    stack: ['Python', 'FastAPI'],
    repoUrl: 'https://github.com/mosahel01/JsonPlaceholder-Service',
  },
  {
    title: 'py-init',
    tagline: 'Python project bootstrapper',
    description:
      'A CLI automation tool that scaffolds modern Python projects from a template, cutting out the manual boilerplate and the time lost staring at a blank directory.',
    stack: ['Python'],
    repoUrl: 'https://github.com/mosahel01/py-init',
  },
];

export const experience: ExperienceItem[] = [
  {
    title: 'Frontend Developer',
    organization: 'Codexalabs',
    period: 'Jun 2025 — Sep 2025',
    highlights: [
      'Built high-performance, responsive React interfaces using Redux and Context API for efficient state management.',
      'Collaborated on integrating PHP-based RESTful APIs into seamless full-stack workflows.',
      'Focused on UI optimization and shipping production-ready features for scalable web applications.',
    ],
  },
  {
    title: 'Web Developer',
    organization: 'SGI, Sikar',
    period: 'May 2024 — Aug 2024',
    highlights: [
      'Mentored a cohort of 30+ junior students on frontend fundamentals and modern web practices.',
      'Ran 1-on-1 debugging sessions and code reviews to raise student code quality.',
      'Turned tricky concepts like asynchronous JavaScript and responsive design into digestible learning paths.',
    ],
  },
  {
    title: 'Digital Marketing Intern',
    organization: 'SEC · Joyaholiday.com',
    period: 'Jun 2023 — Sep 2023',
    highlights: [
      'Managed end-to-end digital marketing workflows and web traffic analysis.',
      'Used analytics tooling to monitor campaign metrics and iterate on messaging for conversion.',
      'Coordinated technical optimization of digital assets with internal stakeholders.',
    ],
  },
];

export const socials: SocialLink[] = [
  { label: 'Email', value: 'mos.sahil01@gmail.com', href: 'mailto:mos.sahil01@gmail.com', icon: 'mail' },
  { label: 'GitHub', value: '@mosahel01', href: profile.github, icon: 'github' },
  { label: 'LinkedIn', value: 'in/mosahil01', href: profile.linkedin, icon: 'linkedin' },
];

export const status = {
  label: 'Available for work',
  detail: 'Backend engineering roles, internships, and meaningful side projects.',
} as const;
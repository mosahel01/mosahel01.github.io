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
    stack: string[];
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
    initials: 'MS',
    role: 'Full-Stack & Backend Engineer',
    tagline: 'I build web and backend systems. Mostly the parts nobody sees.',
    location: 'India',
    availability: 'Open to backend roles & internships',
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
        description: 'APIs, services, pipelines',
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
        tagline: 'Full-stack bus ticketing',
        description:
            'A complete booking flow for bus travel made with Java: browse routes, pick a seat, pay, done. Scheduling and fare math happen server-side on a proper relational schema.',
        stack: ['Java', 'Spring Boot', 'Hibernate', 'MySQL'],
        repoUrl: 'https://github.com/mosahel01/Bus-Reservation-System',
    },
    {
        title: 'Hospital Management System',
        tagline: 'Spring Boot + Hibernate',
        description:
            'Spring Boot and Hibernate under the hood to keep administrative and clinical workflows from turning into paperwork chaos.',
        stack: ['Java', 'Spring Boot', 'Hibernate'],
        repoUrl: 'https://github.com/mosahel01/Hospital-Management-System',
    },
    {
        title: 'Reactonic',
        tagline: 'Next.js AI experiments',
        description:
            'A Next.js + TypeScript sandbox where I poke at AI APIs. Mostly just fetch(), frankly, but it taught me a lot about server-side rendering.',
        stack: ['Next.js', 'TypeScript', 'AI APIs'],
        repoUrl: 'https://github.com/mosahel01/Reactonic',
    },
    {
        title: 'ThumbLab',
        tagline: 'AI thumbnail generator',
        description:
            'FastAPI service that turns text prompts into thumbnails via the OpenAI SDK, with React on the front and one shared gateway for all AI calls.',
        stack: ['Python', 'FastAPI', 'React'],
        repoUrl: 'https://github.com/mosahel01/ThumbLab',
    },
    {
        title: 'JsonPlaceholder-Service',
        tagline: 'REST API wrapper',
        description:
            'A FastAPI layer over the JSONPlaceholder API that got me comfortable with the boring-but-important stuff: routing, validation, filtering, clean errors.',
        stack: ['Python', 'FastAPI'],
        repoUrl: 'https://github.com/mosahel01/JsonPlaceholder-Service',
    },
    {
        title: 'py-init',
        tagline: 'Python project bootstrapper',
        description:
            'One command that scaffolds a Python project with the boilerplate I always set up by hand. Built because I was tired of doing it by hand.',
        stack: ['Python'],
        repoUrl: 'https://github.com/mosahel01/py-init',
    },
];

export const experience: ExperienceItem[] = [
    {
        title: 'Frontend Developer',
        organization: 'Codexalabs',
        period: 'Jun 2025 - Sep 2025',
        highlights: [
            'Built responsive React interfaces with Redux and the Context API for state management.',
            'Helped glue PHP-based REST APIs into the frontend without everything catching fire.',
            'Spent a lot of time on UI polish and getting features to actually ship.',
        ],
        stack: ['React', 'Redux', 'PHP'],
    },
    {
        title: 'Web Developer',
        organization: 'SGI, Sikar',
        period: 'May 2024 - Aug 2024',
        highlights: [
            'Mentored a cohort of 30+ junior students through frontend fundamentals.',
            'Ran 1-on-1 debugging sessions and code reviews to help people write better code.',
            'Found ways to explain async JavaScript and responsive design that actually landed.',
        ],
        stack: ['JavaScript', 'HTML', 'CSS', 'React'],
    },
    {
        title: 'Digital Marketing Intern',
        organization: 'SEC · Joyaholiday.com',
        period: 'Jun 2023 - Sep 2023',
        highlights: [
            'Ran digital marketing workflows and kept an eye on web traffic.',
            'Tracked campaign metrics and nudged messaging toward what converted.',
            'Coordinated with stakeholders on tech changes to our digital assets.',
        ],
        stack: ['HTML', 'CSS', 'Workflow automation'],
    },
];

export const socials: SocialLink[] = [
    { label: 'Email', value: 'mos.sahil01@gmail.com', href: 'mailto:mos.sahil01@gmail.com', icon: 'mail' },
    { label: 'GitHub', value: '@mosahel01', href: profile.github, icon: 'github' },
    { label: 'LinkedIn', value: 'in/mosahil01', href: profile.linkedin, icon: 'linkedin' },
];

export const status = {
    label: 'Available for work',
    detail: 'Looking for backend roles, internships, and interesting projects.',
} as const;

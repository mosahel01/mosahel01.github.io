/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeroBackground } from './components/BackgroundShader';
import {
    Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu, Moon, Menu, X, ArrowRight, ChevronRight, Download, Code, FileType, FileCode, Coffee,
    Hash, Database, Leaf, Server, Zap, Layers, Atom, Wind, Palette, Tag, Box, GitBranch, Workflow, Settings, Monitor, Maximize, Lightbulb,
} from 'lucide-react';

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode((prev) => !prev);
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const skillsData = [
        {
            title: 'Languages',
            icon: <Terminal size={24} />,
            items: [
                { name: 'Go', url: 'https://go.dev/', icon: <Code size={14} /> },
                { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: <FileCode size={14} /> },
                { name: 'TypeScript', url: 'https://www.typescriptlang.org/', icon: <FileType size={14} /> },
                { name: 'Java', url: 'https://www.oracle.com/java/', icon: <Coffee size={14} /> },
                { name: 'Python', url: 'https://www.python.org/', icon: <Hash size={14} /> },
                { name: 'SQL', url: 'https://www.postgresql.org/', icon: <Database size={14} /> },
                { name: 'Lua', url: 'https://www.lua.org/', icon: <Moon size={14} /> },
                { name: 'Bash', url: 'https://www.gnu.org/software/bash/', icon: <Terminal size={14} /> },
            ],
        },
        {
            title: 'Backend',
            icon: <Cpu size={24} />,
            items: [
                { name: 'Node.js', url: 'https://nodejs.org/', icon: <Server size={14} /> },
                { name: 'Spring Boot', url: 'https://spring.io/projects/spring-boot', icon: <Leaf size={14} /> },
                { name: 'PostgreSQL', url: 'https://www.postgresql.org/', icon: <Database size={14} /> },
                { name: 'MongoDB', url: 'https://www.mongodb.com/', icon: <Database size={14} /> },
                { name: 'Redis', url: 'https://redis.io/', icon: <Zap size={14} /> },
                { name: 'Prisma', url: 'https://www.prisma.io/', icon: <Layers size={14} /> },
                { name: 'Hibernate', url: 'https://hibernate.org/', icon: <Layers size={14} /> },
            ],
        },
        {
            title: 'Frontend',
            icon: <Code2 size={24} />,
            items: [
                { name: 'React', url: 'https://react.dev/', icon: <Atom size={14} /> },
                { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', icon: <Wind size={14} /> },
                { name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: <FileCode size={14} /> },
                { name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: <Palette size={14} /> },
                { name: 'Thymeleaf', url: 'https://www.thymeleaf.org/', icon: <Tag size={14} /> },
            ],
        },
        {
            title: 'Systems & Core',
            icon: <Terminal size={24} />,
            items: [
                { name: 'Docker', url: 'https://www.docker.com/', icon: <Box size={14} /> },
                { name: 'Git', url: 'https://git-scm.com/', icon: <GitBranch size={14} /> },
                { name: 'GitHub', url: 'https://github.com/', icon: <Github size={14} /> },
                { name: 'Linux', url: 'https://www.kernel.org/', icon: <Monitor size={14} /> },
                { name: 'Neovim', url: 'https://neovim.io/', icon: <Maximize size={14} /> },
                { name: 'Vim', url: 'https://www.vim.org/', icon: <Maximize size={14} /> },
            ],
        },
        {
            title: 'Automation',
            icon: <Cpu size={24} />,
            items: [
                { name: 'Bash Scripting', url: 'https://www.gnu.org/software/bash/', icon: <Terminal size={14} /> },
                { name: 'Lua Scripting', url: 'https://www.lua.org/', icon: <Moon size={14} /> },
                { name: 'Workflow Automation', url: 'https://github.com/features/actions', icon: <Workflow size={14} /> },
                { name: 'System Admin', url: 'https://en.wikipedia.org/wiki/System_administrator', icon: <Settings size={14} /> },
            ],
        },
    ];

    const experience = [
        {
            title: 'Frontend Developer',
            company: 'Codexalabs',
            period: 'Jun 2025 — Sep 2025',
            description: [
                'Built high-performance, responsive React interfaces using Redux and Context API for efficient state management.',
                'Collaborated on the integration of PHP-based RESTful APIs to create seamless full-stack workflows.',
                'Focused on UI optimization and delivering production-ready features for scalable web applications.',
            ],
        },
        {
            title: 'Web Developer',
            company: 'SGI, Sikar',
            period: 'May 2024 — Aug 2024',
            description: [
                'Mentored a cohort of 30+ junior students on frontend fundamentals and modern web practices.',
                'Facilitated 1-on-1 debugging sessions and code reviews to improve student code quality.',
                'Simplified complex concepts like asynchronous JS and responsive design into digestible learning paths.',
            ],
        },
        {
            title: 'Digital Marketing Intern',
            company: 'SEC (in collaboration with Joyaholiday.com)',
            period: 'Jun 2023 — Sep 2023',
            description: [
                'Managed end-to-end digital marketing workflows and web traffic analysis.',
                'Utilized analytical tools to monitor campaign metrics and iterate on messaging for conversion.',
                'Coordinated technical optimization of digital assets with internal stakeholders.',
            ],
        },
    ];

    const projects = [
        {
            title: 'Reactonic (Next.js + AI)',
            description:
                'Built a modular architecture centered on AI-driven experiments, leveraging Next.js App Router for optimized server-side rendering.',
            image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAP8v3d0ObgN8Z6nHsfMEUTP52XCpeJ3aVFHVUjiuYJ_4r8ycZ-xTuhT3HpZ69JamZsq150CmcTxdi-akug_31sQQiogphHQlTEDPDyQJxCppTGQHBBvRRrubns24gfqQ6dM3g2S7nZ_-COjoJKG4UMDNdE_EZwY_RCh_7iGwjjoaDQbOrrZ7OMKohmyf7S1uo02RqWqfN_OCRRMSEo8sUdRGHCAFcEwejVbEDfGM9XBCdusik8O9wa8mCHSBXAcFsUrROYIbbTiJ4',
            tags: ['Next.js', 'TypeScript', 'Convex', 'Tailwind CSS'],
        },
        {
            title: 'Bus Reservation System',
            description:
                'Centralized ticketing platform with modules for route scheduling, real-time seat allocation, and automated fare calculation.',
            image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAT89SLIkrkQZ2ARpqawwWTlSF_Bxk2Ho0D_ZF3FANki_B0YAh66IeMX56whSHqIPdJpEEnQb063XDp5ZdG8lMR_-utrdn6xMh-_LeuJjdJTPT8iepf3elZIjT0zPdC1poMsHYMWOuHrov2h0ddEfgGrhena8AgTXpabJNGoZOxBVChwBoB9OWkN7VCrNKOxfAdImF7_hXfP678cFBuolUniNLhx_op736Tkrc39qWUATJRmTYaa8J4UXIQfyarFqKgWArjLFqt0Tg',
            tags: ['Java', 'Spring Boot', 'Hibernate', 'MySQL'],
        },
    ];

    const containerFade = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1,
            },
        },
    };

    const itemFade = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="min-h-screen font-sans text-foreground bg-background transition-colors duration-300">
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'
                    }`}
            >
                <div className="w-full px-8 md:px-16 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-bold tracking-tighter"
                    >
                        Mohd Sahil
                    </motion.div>

                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold uppercase tracking-[0.16em] text-dim hover:text-accent transition-all duration-300 relative group/nav"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover/nav:w-full" />
                            </a>
                        ))}
                        <div className="flex items-center gap-6 ml-6">
                            <button
                                onClick={toggleTheme}
                                className="hover:scale-110 active:scale-90 transition-all duration-300 group/theme"
                                aria-label="Toggle theme"
                            >
                                {isDarkMode ? (
                                    <Lightbulb
                                        size={20}
                                        className="text-accent group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] transition-all duration-300 fill-accent/10"
                                    />
                                ) : (
                                    <Moon
                                        size={20}
                                        className="text-accent group-hover:-rotate-12 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.3)] transition-all duration-300 fill-accent/10"
                                    />
                                )}
                            </button>
                            <a
                                href="#"
                                className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-[0.16em] hover:scale-[1.05] active:scale-95 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-accent/20"
                            >
                                Resume <Download size={14} />
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <button onClick={toggleTheme} className="p-2" aria-label="Toggle theme">
                            {isDarkMode ? <Lightbulb size={20} /> : <Moon size={20} />}
                        </button>
                        <button onClick={() => setIsMenuOpen((prev) => !prev)} aria-label="Toggle menu">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 glass pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-2xl font-bold hover:text-accent transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#"
                                className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-center mt-4"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="max-w-5xl mx-auto">
                <section className="relative min-h-[95vh] flex flex-col justify-center px-8 md:px-0">
                    <HeroBackground isDarkMode={isDarkMode} />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="pt-20"
                    >
                        <div className="flex flex-col items-start gap-3 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center font-black text-base text-accent-foreground shadow-xl shadow-accent/30">
                                    MS
                                </div>
                                <span className="text-accent font-black tracking-[0.22em] uppercase text-[11px] md:text-xs">
                                    Full Stack Developer
                                </span>
                            </div>
                            <p className="text-base md:text-lg font-semibold text-foreground/90 tracking-tight">Hello, I am Mohd Sahil.</p>
                        </div>
                        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.8] bg-gradient-to-br from-hero-from to-hero-to bg-clip-text text-transparent">
                            Mohd Sahil
                        </h1>
                        <p className="text-lg md:text-xl text-dim leading-tight mb-10 max-w-lg font-medium tracking-tighter">
                            Engineering efficient web systems and automated workflows with technical precision.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <a
                                href="#projects"
                                className="group flex items-center gap-4 text-sm font-black uppercase tracking-[0.3em] text-accent hover:text-foreground transition-all duration-500"
                            >
                                Explore Projects
                                <span className="w-12 h-[1px] bg-accent group-hover:w-20 transition-all duration-500" />
                            </a>
                            <a
                                href="#contact"
                                className="group flex items-center gap-4 text-sm font-black uppercase tracking-[0.3em] text-dim hover:text-foreground transition-all duration-500"
                            >
                                Inquiries
                                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                            </a>
                        </div>
                    </motion.div>
                </section>

                <motion.section
                    id="about"
                    className="py-32 px-8 md:px-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1 }}
                >
                    <div className="grid md:grid-cols-5 gap-16 items-start">
                        <motion.div
                            className="md:col-span-2"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none">About Me</h3>
                            <h2 className="text-base md:text-lg font-black uppercase tracking-[0.22em] text-accent mb-4">
                                Solving bottlenecks through engineering.
                            </h2>
                        </motion.div>
                        <motion.div
                            className="md:col-span-3 space-y-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-xl md:text-2xl font-medium text-dim leading-tight tracking-tight">
                                Computer Science student focused on building scalable backend systems and high-performance
                                interfaces.
                            </p>
                            <p className="text-muted leading-relaxed text-lg font-light">
                                Specializing in Go, Node.js, and React. I recently engineered a workflow automation tool that
                                reduced local development setup time by 50%. Passionate about Linux, system administration, and
                                optimizing the technical ecosystem.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section
                    id="skills"
                    className="py-32 px-8 md:px-12 bg-foreground/[0.02] border border-border/5 rounded-[3rem]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1 }}
                >
                    <div className="w-full">
                        <motion.div
                            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="max-w-xl">
                                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none">Tech Stack</h3>
                            </div>
                            <p className="text-muted max-w-xs text-sm font-medium opacity-60">
                                Constantly evolving my toolkit to build the next generation of web infrastructure.
                            </p>
                        </motion.div>
                        <motion.div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
                            variants={containerFade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-100px' }}
                        >
                            {skillsData.map((group) => (
                                <motion.div key={group.title} variants={itemFade} className="group relative">
                                    <div className="text-accent mb-6 flex items-center gap-3">
                                        <span className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                                            {group.icon}
                                        </span>
                                        <h4 className="text-xl font-bold tracking-tight">{group.title}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((skill) => (
                                            <a
                                                key={skill.name}
                                                href={skill.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-3 py-1.5 bg-muted/5 border border-border/50 rounded-lg text-[10px] font-bold tracking-tight text-muted hover:text-accent hover:border-accent/40 active:scale-95 transition-all flex items-center gap-2 group/badge"
                                            >
                                                <span className="opacity-40 group-hover/badge:opacity-100 transition-opacity">
                                                    {skill.icon}
                                                </span>
                                                {skill.name}
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section
                    id="experience"
                    className="py-32 px-12 md:px-24"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1 }}
                >
                    <div className="w-full">
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-20 text-center leading-none">
                            Experience / Internships
                        </h3>
                        <motion.div
                            className="space-y-24 max-w-4xl mx-auto"
                            variants={containerFade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-100px' }}
                        >
                            {experience.map((exp, idx) => (
                                <motion.div
                                    key={`${exp.company}-${idx}`}
                                    variants={itemFade}
                                    className="grid md:grid-cols-12 gap-12 relative"
                                >
                                    <div className="md:col-span-5 flex flex-col justify-between py-2">
                                        <div>
                                            <h4 className="text-2xl font-bold mb-2 tracking-tighter">{exp.title}</h4>
                                            <p className="text-accent text-lg font-bold tracking-tight">{exp.company}</p>
                                        </div>
                                        <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-dim mt-6">{exp.period}</span>
                                    </div>
                                    <div className="md:col-span-7 border-l border-border pl-10 space-y-6 group">
                                        <ul className="space-y-6 list-none">
                                            {exp.description.map((item, index) => (
                                                <li key={index} className="flex gap-6 items-start group/li">
                                                    <div className="w-1 h-6 bg-accent/20 group-hover/li:bg-accent group-hover/li:h-8 transition-all duration-500 rounded-full flex-shrink-0 mt-1" />
                                                    <span className="text-lg text-muted leading-tight font-medium opacity-80 group-hover/li:opacity-100 transition-opacity duration-300">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section
                    id="projects"
                    className="py-32 px-8 md:px-0 bg-foreground/[0.01]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1 }}
                >
                    <div className="w-full">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                            <div className="max-w-xl">
                                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none">Projects</h3>
                            </div>
                            <a
                                href="https://www.github.com/mosahel01"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-dim hover:text-accent transition-all duration-300 border-b border-border pb-1"
                            >
                                View All Systems <ExternalLink size={14} />
                            </a>
                        </div>
                        <motion.div
                            className="grid md:grid-cols-2 gap-12 md:gap-20"
                            variants={containerFade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-100px' }}
                        >
                            {projects.map((project) => (
                                <motion.div key={project.title} variants={itemFade} className="group relative">
                                    <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-8 relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover grayscale opacity-60 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex flex-wrap gap-3">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[11px] md:text-xs uppercase font-black tracking-[0.2em] text-accent/50 group-hover:text-accent transition-colors duration-500"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h4 className="text-3xl font-bold tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                                            {project.title}
                                        </h4>
                                        <p className="text-muted text-lg leading-snug max-w-lg font-medium opacity-60">
                                            {project.description}
                                        </p>
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] hover:text-accent transition-all duration-300 group/btn"
                                        >
                                            Case Study
                                            <span className="w-6 h-[1px] bg-border group-hover/btn:w-12 group-hover/btn:bg-accent transition-all duration-500" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section
                    id="contact"
                    className="py-32 px-8 md:px-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1 }}
                >
                    <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                        <div>
                            <h2 className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-accent mb-4">Communicate</h2>
                            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-none">Let's build significance.</h3>
                            <p className="text-xl text-muted mb-12 font-medium leading-tight max-w-xs opacity-80">
                                Available for backend engineering roles, workflow automation, or technical ventures.
                            </p>

                            <div className="space-y-8">
                                {[
                                    {
                                        icon: <Mail size={18} />,
                                        label: 'Transmit',
                                        value: 'mos.sahil01@gmail.com',
                                        href: 'mailto:mos.sahil01@gmail.com',
                                    },
                                    {
                                        icon: <Github size={18} />,
                                        label: 'Version',
                                        value: '@mosahel01',
                                        href: 'https://www.github.com/mosahel01',
                                    },
                                    {
                                        icon: <Linkedin size={18} />,
                                        label: 'Connect',
                                        value: 'in/mosahil01',
                                        href: 'https://linkedin.com/in/mosahil01/',
                                    },
                                ].map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-6 group"
                                    >
                                        <div className="text-dim group-hover:text-accent transition-colors duration-500">{item.icon}</div>
                                        <div>
                                            <p className="text-xs uppercase font-black tracking-[0.2em] text-accent mb-0.5 opacity-60">
                                                {item.label}
                                            </p>
                                            <span className="font-bold text-lg tracking-tight border-b border-transparent group-hover:border-accent transition-all duration-500 pb-0.5">
                                                {item.value}
                                            </span>
                                        </div>
                                        <ArrowRight
                                            size={14}
                                            className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-accent"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="py-6"
                        >
                            <form className="space-y-10">
                                <div className="space-y-2 group">
                                    <label
                                        htmlFor="name"
                                        className="text-xs font-black uppercase tracking-[0.24em] text-dim group-focus-within:text-accent transition-colors"
                                    >
                                        Identity
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Full Name"
                                        className="w-full bg-transparent border-b border-border py-2 focus:border-accent outline-none transition-all text-lg font-medium placeholder:opacity-20"
                                        required
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label
                                        htmlFor="email"
                                        className="text-xs font-black uppercase tracking-[0.24em] text-dim group-focus-within:text-accent transition-colors"
                                    >
                                        Terminal
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email Address"
                                        className="w-full bg-transparent border-b border-border py-2 focus:border-accent outline-none transition-all text-lg font-medium placeholder:opacity-20"
                                        required
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label
                                        htmlFor="message"
                                        className="text-xs font-black uppercase tracking-[0.24em] text-dim group-focus-within:text-accent transition-colors"
                                    >
                                        Brief
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={2}
                                        placeholder="Describe your vision..."
                                        className="w-full bg-transparent border-b border-border py-2 focus:border-accent outline-none transition-all text-lg font-medium resize-none placeholder:opacity-20"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="group flex items-center gap-4 text-xs md:text-sm font-black uppercase tracking-[0.2em] text-accent hover:text-foreground transition-all duration-500"
                                >
                                    Post Signal
                                    <span className="w-8 h-[1px] bg-accent group-hover:w-16 transition-all duration-500" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </motion.section>
            </main>

            <AnimatePresence>
                {scrolled && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={scrollToTop}
                        className="fixed bottom-10 right-10 z-50 p-4 glass rounded-full border border-accent/20 text-accent"
                        aria-label="Scroll to top"
                    >
                        <ChevronRight size={24} className="-rotate-90" />
                    </motion.button>
                )}
            </AnimatePresence>

            <footer className="py-12 border-t border-border/5 px-12 flex justify-between items-center">
                <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-accent">Online 2026</p>
                <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-dim">@ Mohd Sahil</p>
            </footer>
        </div>
    );
}

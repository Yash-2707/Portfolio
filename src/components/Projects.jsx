import { motion } from 'framer-motion';
import { Github, Box } from 'lucide-react';

const projects = [
    {
        title: "AI Travel Planner",
        category: "Full-Stack AI",
        problem: "Travelers struggle to build personalized itineraries and find the right hotels quickly.",
        role: "Full-Stack Developer",
        solution: "Built a web app that generates personalized itineraries and hotel recommendations using AI. Implemented RESTful APIs with Node.js/Express and a responsive React + Tailwind UI.",
        challenge: "Keeping the UI fast while integrating Google Places data and Firebase auth.",
        tech: ["React", "Tailwind", "Node.js", "Express", "Firebase", "Google Places API"],
        link: "https://github.com/Yash-2707",
        future: "Add trip sharing, collaborative planning, and budget optimization."
    },
    {
        title: "Library Finder",
        category: "Python + Search",
        problem: "Locating books and subjects across library sections can be time-consuming for students.",
        role: "Backend & UI Developer",
        solution: "Built console, GUI, and web experiences with Python, Tkinter, and Flask to search by subject, classmark, or location.",
        challenge: "Designing reusable modules and handling missing or corrupted CSV data safely.",
        tech: ["Python", "Flask", "Tkinter", "HTML", "CSV"],
        link: "https://github.com/Yash-2707",
        future: "Add fuzzy search and analytics for popular categories."
    },
    {
        title: "CodeWiz",
        category: "Realtime Collaboration",
        problem: "Teams need real-time collaborative coding with intelligent assistance.",
        role: "Full-Stack Developer",
        solution: "Created an AI-powered collaborative editor with React + Context, Node/Express backend, and Socket.io for real-time editing. Integrated OpenAI API for code suggestions.",
        challenge: "Maintaining low-latency collaboration with stable state synchronization.",
        tech: ["React", "Context API", "Node.js", "Express", "Socket.io", "OpenAI API"],
        link: "https://github.com/Yash-2707",
        future: "Add video co-editing and team workspaces."
    },
    {
        title: "QuickSign",
        category: "Frontend UI/UX",
        problem: "Users need a secure, clean interface for quick digital signing.",
        role: "Frontend Developer",
        solution: "Delivered a responsive, dark-themed signing UI with strong UX patterns and cross-browser testing.",
        challenge: "Maintaining performance across devices while preserving visual consistency.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/Yash-2707",
        future: "Integrate secure signature storage and PDF export."
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4"
                        >
                            Selection
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-grotesk font-bold text-white tracking-tighter"
                        >
                            Featured <br /><span className="text-gradient">Projects.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-md text-slate-400 text-lg md:text-right font-inter font-light"
                    >
                        A selection of full-stack projects highlighting backend logic, clean UX, and real-world problem solving.
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative overflow-hidden rounded-[2rem] border border-white/5 shadow-sm hover:shadow-2xl transition-all duration-700"
                        >
                            <div className="absolute inset-0 bg-slate-950 transition-colors duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-secondary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative p-8 md:p-12 z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-primary transition-all duration-500">
                                            <Box className="text-white group-hover:text-white" size={20} />
                                        </div>
                                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">{project.category}</span>
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        className="p-3 rounded-full border border-slate-100 hover:bg-primary hover:text-white hover:border-primary transition-all duration-500"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 font-grotesk tracking-tight group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <div className="space-y-8 flex-grow">
                                    <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">The Problem</p>
                                            <p className="text-sm text-slate-400 font-inter font-light leading-relaxed">
                                                {project.problem}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">The Solution</p>
                                            <p className="text-sm text-slate-400 font-inter font-light leading-relaxed italic">
                                                {project.solution}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Technical Challenge</p>
                                        </div>
                                        <p className="text-sm text-slate-300 font-inter font-medium">
                                            {project.challenge}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t) => (
                                                <span key={t} className="text-[10px] font-bold text-slate-400 border border-white/10 px-3 py-1.5 rounded-lg group-hover:border-primary/30 group-hover:text-primary transition-all">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                                <span className="w-4 h-[1px] bg-slate-200"></span> Roadmap: {project.future}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default Projects;

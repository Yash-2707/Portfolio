import { motion } from 'framer-motion';
import { Award, Briefcase, Users, Star, ArrowUpRight, GraduationCap, Building2 } from 'lucide-react';

const experiences = [
    {
        title: "Parul University",
        type: "B.Tech in Computer Science",
        period: "Sept 2022 - June 2026",
        outcome: "CGPA: 8. Focused on full-stack development, backend systems, and applied problem-solving.",
        icon: <GraduationCap size={20} />,
        color: "bg-indigo-500/10"
    },
    {
        title: "DevFest 2024",
        type: "Global Rank 12",
        period: "2024",
        outcome: "Led a team to secure 12th rank globally, contributing to open-source backend and full-stack projects.",
        icon: <Award size={20} />,
        color: "bg-blue-500/10"
    },
    {
        title: "Odoo Hackathon",
        type: "Finalist (Top 250 / 19,000+)",
        period: "2024",
        outcome: "Built a scalable application prototype under tight deadlines as a finalist.",
        icon: <Star size={20} />,
        color: "bg-purple-500/10"
    },
    {
        title: "Competitive Programming",
        type: "DSA & Optimization",
        period: "Ongoing",
        outcome: "Solved 600+ algorithmic problems across DSA, DP, and Graph Theory in C++.",
        icon: <Briefcase size={20} />,
        color: "bg-green-500/10"
    },
    {
        title: "Coding Ninjas (CodeStudio)",
        type: "Ninja Dominator",
        period: "Ongoing",
        outcome: "27,000+ XP; ranked College Topper twice on competitive coding leaderboards.",
        icon: <Users size={20} />,
        color: "bg-orange-500/10"
    },
    {
        title: "Docker Workshop",
        type: "Coordinator",
        period: "2024",
        outcome: "Organized a hands-on workshop on Docker fundamentals, setup, and deployment workflows.",
        icon: <Building2 size={20} />,
        color: "bg-cyan-500/10"
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4"
                        >
                            Milestones
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-grotesk font-bold text-white leading-tight"
                        >
                            Proof of <br /><span className="text-gradient">Credibility.</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="glass p-10 flex flex-col md:flex-row gap-8 items-start group hover:border-primary/30 transition-all border-white/5"
                        >
                            <div className={`w-16 h-16 shrink-0 rounded-2xl ${exp.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500`}>
                                {exp.icon}
                            </div>
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{exp.type}</p>
                                        <h3 className="text-xl font-bold text-white font-grotesk">{exp.title}</h3>
                                    </div>
                                    <span className="text-xs font-medium text-slate-400 font-inter">{exp.period}</span>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
                                    {exp.outcome}
                                </p>
                                <div className="flex items-center gap-1.5 text-primary text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                    Validated Impact <ArrowUpRight size={12} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

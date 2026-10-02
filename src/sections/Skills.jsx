import SectionContainer from "../components/SectionContainer";
import GlassCard from "../components/GlassCard";
import {
    Code2,
    Layers,
    Server,
    Boxes,
    BrainCircuit,
    Sparkles
} from "lucide-react";

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            subtitle: "Core syntax, OOP & algorithmic foundations",
            icon: Code2,
            count: "8 Languages",
            iconBg: "bg-blue-500/10",
            iconBorder: "border-blue-500/20",
            iconColor: "text-blue-400",
            cardGlow: "from-blue-500/15",
            hoverBorder: "hover:border-blue-500/40",
            skills: [
                { name: "C++", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20 hover:border-blue-500/40", dot: "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" },
                { name: "Java", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20 hover:border-red-500/40", dot: "bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.8)]" },
                { name: "JavaScript", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20 hover:border-yellow-400/40", dot: "bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" },
                { name: "Python", color: "text-amber-300", bg: "bg-amber-400/10", border: "border-amber-400/20 hover:border-amber-400/40", dot: "bg-amber-300 shadow-[0_0_8px_rgba(252,211,77,0.8)]" },
                { name: "C#", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20 hover:border-purple-500/40", dot: "bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]" },
                { name: "SQL", color: "text-sky-400", bg: "bg-sky-400/10", border: "border-sky-400/20 hover:border-sky-400/40", dot: "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" },
                { name: "Dart", color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20 hover:border-cyan-400/40", dot: "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" },
                { name: "Shell Scripting", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20 hover:border-emerald-400/40", dot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" },
            ]
        },
        {
            title: "Frontend & UI",
            subtitle: "Reactive interfaces & modern styling",
            icon: Layers,
            count: "6 Frameworks",
            iconBg: "bg-cyan-500/10",
            iconBorder: "border-cyan-500/20",
            iconColor: "text-cyan-400",
            cardGlow: "from-cyan-500/15",
            hoverBorder: "hover:border-cyan-500/40",
            skills: [
                { name: "React.js", color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20 hover:border-cyan-400/40", dot: "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" },
                { name: "TypeScript", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20 hover:border-blue-400/40", dot: "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" },
                { name: "Tailwind CSS", color: "text-teal-400", bg: "bg-teal-400/10", border: "border-teal-400/20 hover:border-teal-400/40", dot: "bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]" },
                { name: "HTML5", color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20 hover:border-orange-400/40", dot: "bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)]" },
                { name: "CSS3", color: "text-sky-400", bg: "bg-sky-400/10", border: "border-sky-400/20 hover:border-sky-400/40", dot: "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" },
                { name: "Bootstrap", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20 hover:border-purple-400/40", dot: "bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]" }
            ]
        },
        {
            title: "Backend & Databases",
            subtitle: "Scalable APIs, services & data layers",
            icon: Server,
            count: "5 Technologies",
            iconBg: "bg-emerald-500/10",
            iconBorder: "border-emerald-500/20",
            iconColor: "text-emerald-400",
            cardGlow: "from-emerald-500/15",
            hoverBorder: "hover:border-emerald-500/40",
            skills: [
                { name: "ASP.Net Core", color: "text-indigo-400", bg: "bg-indigo-400/10", border: "border-indigo-400/20 hover:border-indigo-400/40", dot: "bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]" },
                { name: "Node.js", color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20 hover:border-green-400/40", dot: "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" },
                { name: "Express.js", color: "text-slate-300", bg: "bg-slate-400/10", border: "border-slate-400/20 hover:border-slate-400/40", dot: "bg-slate-300 shadow-[0_0_8px_rgba(203,213,225,0.8)]" },
                { name: "MongoDB", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20 hover:border-emerald-400/40", dot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" },
                { name: "MySQL", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20 hover:border-blue-400/40", dot: "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" }
            ]
        },
        {
            title: "DevOps & Tools",
            subtitle: "Cloud hosting, CI/CD & developer tooling",
            icon: Boxes,
            count: "8 Platforms",
            iconBg: "bg-amber-500/10",
            iconBorder: "border-amber-500/20",
            iconColor: "text-amber-400",
            cardGlow: "from-amber-500/15",
            hoverBorder: "hover:border-amber-500/40",
            skills: [
                { name: "Git/GitHub", color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20 hover:border-orange-400/40", dot: "bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)]" },
                { name: "AWS", color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20 hover:border-amber-400/40", dot: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" },
                { name: "Postman", color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20 hover:border-orange-500/40", dot: "bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]" },
                { name: "Swagger", color: "text-lime-400", bg: "bg-lime-400/10", border: "border-lime-400/20 hover:border-lime-400/40", dot: "bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.8)]" },
                { name: "Vercel", color: "text-zinc-200", bg: "bg-white/10", border: "border-white/20 hover:border-white/40", dot: "bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" },
                { name: "Figma", color: "text-pink-400", bg: "bg-pink-400/10", border: "border-pink-400/20 hover:border-pink-400/40", dot: "bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.8)]" },
                { name: "Linux", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20 hover:border-yellow-400/40", dot: "bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" },
                { name: "MacOS", color: "text-slate-300", bg: "bg-slate-400/10", border: "border-slate-400/20 hover:border-slate-400/40", dot: "bg-slate-300 shadow-[0_0_8px_rgba(203,213,225,0.8)]" }
            ]
        },
        {
            title: "System Design & AI",
            subtitle: "Architecture patterns, RAG & LLM systems",
            icon: BrainCircuit,
            count: "6 Competencies",
            iconBg: "bg-violet-500/10",
            iconBorder: "border-violet-500/20",
            iconColor: "text-violet-400",
            cardGlow: "from-violet-500/15",
            hoverBorder: "hover:border-violet-500/40",
            skills: [
                { name: "System Design", color: "text-indigo-400", bg: "bg-indigo-400/10", border: "border-indigo-400/20 hover:border-indigo-400/40", dot: "bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]" },
                { name: "LLMs", color: "text-violet-400", bg: "bg-violet-400/10", border: "border-violet-400/20 hover:border-violet-400/40", dot: "bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]" },
                { name: "RAG", color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20 hover:border-cyan-400/40", dot: "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" },
                { name: "Generative AI", color: "text-fuchsia-400", bg: "bg-fuchsia-400/10", border: "border-fuchsia-400/20 hover:border-fuchsia-400/40", dot: "bg-fuchsia-400 shadow-[0_0_8px_rgba(232,121,249,0.8)]" },
                { name: "Agentic AI", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20 hover:border-emerald-400/40", dot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" },
                { name: "Prompt Engineering", color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20 hover:border-amber-400/40", dot: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" }
            ]
        },
        {
            title: "AI Tools & Workflow",
            subtitle: "Modern agentic assistants & accelerators",
            icon: Sparkles,
            count: "6 Tools",
            iconBg: "bg-rose-500/10",
            iconBorder: "border-rose-500/20",
            iconColor: "text-rose-400",
            cardGlow: "from-rose-500/15",
            hoverBorder: "hover:border-rose-500/40",
            skills: [
                { name: "Claude Code", color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20 hover:border-amber-400/40", dot: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" },
                { name: "Gemini", color: "text-sky-400", bg: "bg-sky-400/10", border: "border-sky-400/20 hover:border-sky-400/40", dot: "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" },
                { name: "ChatGPT", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20 hover:border-emerald-400/40", dot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" },
                { name: "Perplexity", color: "text-teal-400", bg: "bg-teal-400/10", border: "border-teal-400/20 hover:border-teal-400/40", dot: "bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]" },
                { name: "Antigravity", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20 hover:border-purple-400/40", dot: "bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]" },
                { name: "Copilot", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20 hover:border-blue-400/40", dot: "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" }
            ]
        }
    ];

    return (
        <SectionContainer id="skills">
            <div className="text-center mb-16 max-w-3xl mx-auto px-4">
                {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                    <Sparkles size={14} className="text-cyan-400 animate-pulse" />
                    <span>Technical Expertise</span>
                </div> */}
                <h2 className="text-4xl md:text-5xl font-bold text-white font-display tracking-tight">
                    Technical <span className="text-gradient-accent">Arsenal</span>
                </h2>
                {/* <p className="mt-4 text-gray-400 text-sm sm:text-base font-light leading-relaxed">
                    A comprehensive stack spanning core programming languages, scalable cloud backends, modern reactive interfaces, and applied AI systems.
                </p> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4">
                {skillCategories.map((category, idx) => (
                    <GlassCard
                        key={idx}
                        className={`h-full flex flex-col justify-between p-6 sm:p-7 border-white/5 ${category.hoverBorder} transition-all duration-500 relative overflow-hidden group`}
                    >
                        {/* Ambient Card Top Glow */}
                        <div
                            className={`absolute -top-12 -right-12 w-44 h-44 bg-gradient-to-br ${category.cardGlow} to-transparent rounded-full blur-3xl opacity-30 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none`}
                        />

                        {/* Top Subtle Border Highlight */}
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 group-hover:via-cyan-400/40 to-transparent transition-all duration-500" />

                        {/* Card Header */}
                        <div className="flex items-start justify-between gap-3 mb-6 relative z-10">
                            <div className="flex items-center gap-3.5">
                                <div className={`p-2.5 rounded-xl ${category.iconBg} border ${category.iconBorder} ${category.iconColor} shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-300`}>
                                    <category.icon size={22} />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white font-display tracking-tight group-hover:text-cyan-300 transition-colors">
                                        {category.title}
                                    </h3>
                                    <p className="text-xs text-gray-400 font-light mt-0.5 leading-snug">
                                        {category.subtitle}
                                    </p>
                                </div>
                            </div>
                            <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 shrink-0">
                                {category.count}
                            </span>
                        </div>

                        {/* Badges Container */}
                        <div className="flex flex-wrap gap-2.5 mt-auto relative z-10">
                            {category.skills.map((skill, sIdx) => (
                                <div
                                    key={sIdx}
                                    className={`
                                        group/skill inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border ${skill.border} ${skill.bg} 
                                        hover:bg-opacity-25 hover:scale-105 hover:-translate-y-0.5 
                                        transition-all duration-200 cursor-default select-none backdrop-blur-sm
                                    `}
                                >
                                    <span className={`w-1.5 h-1.5 rounded-full ${skill.dot} transition-transform duration-200 group-hover/skill:scale-125`} />
                                    <span className={`text-xs sm:text-[13px] font-medium ${skill.color} font-display tracking-wide`}>
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Skills;

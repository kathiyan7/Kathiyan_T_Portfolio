import SectionContainer from "../components/SectionContainer";
import GlassCard from "../components/GlassCard";
import { BookOpen, Users, ExternalLink } from "lucide-react";

const Publications = () => {
    const publication = {
        title: "An Intelligent AI-Based Framework for Automated Educational Video Generation",
        publisher: "IEEE Xplore",
        conference: "ICESIC 2026",
        coAuthors: "Kishore M, Priyanka D",
        link: "https://ieeexplore.ieee.org/document/11496457",
        description: "An innovative research paper detailing the design and implementation of an automated educational video generation platform. The paper discusses utilizing artificial intelligence to streamline script generation, media assembly, narration, and user dashboard management, significantly reducing manual video editing efforts."
    };

    return (
        <SectionContainer id="publications">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white font-display">
                Research & <span className="text-gradient-accent">Publications</span>
            </h2>
            <div className="max-w-4xl mx-auto px-4">
                <GlassCard className="border-l-4 !border-l-cyan-500 hover:!border-l-cyan-400 group transition-all duration-500">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="bg-cyan-500/10 p-4 rounded-2xl flex items-center justify-center w-fit h-fit border border-cyan-500/20 group-hover:scale-110 transition-transform duration-500 shrink-0">
                            <BookOpen className="text-cyan-400" size={32} />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded border border-cyan-500/20">
                                        Research Paper
                                    </span>
                                    <h3 className="text-2xl font-bold text-white font-display mt-3 mb-2 leading-snug group-hover:text-cyan-400 transition-colors">
                                        {publication.title}
                                    </h3>
                                    <div className="text-gray-400 text-sm font-medium flex items-center gap-2 flex-wrap">
                                        <span className="text-white font-semibold">{publication.publisher}</span>
                                        <span className="text-gray-600">•</span>
                                        <span>Presented at {publication.conference}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-300 leading-relaxed font-light mb-6">
                                {publication.description}
                            </p>

                            <div className="flex flex-wrap gap-6 items-center justify-between border-t border-white/5 pt-5 mt-4">
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <Users size={18} className="text-cyan-400" />
                                    <span>
                                        Co-authors: <span className="text-white font-medium">{publication.coAuthors}</span>
                                    </span>
                                </div>
                                <a
                                    href={publication.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors group/link bg-cyan-500/10 px-4 py-2 rounded-lg border border-cyan-500/20 hover:bg-cyan-500/20"
                                >
                                    View on IEEE Xplore
                                    <ExternalLink size={16} className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </SectionContainer>
    );
};

export default Publications;

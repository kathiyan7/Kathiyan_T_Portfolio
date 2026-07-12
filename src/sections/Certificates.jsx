import SectionContainer from "../components/SectionContainer";
import { Award } from "lucide-react";

const Certificates = () => {
    return (
        <SectionContainer id="certificates">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">Certifications</h2>
            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4 md:gap-6">
                <div className="glass-card p-6 sm:p-8 rounded-xl text-center w-full lg:max-w-md flex-1 border border-blue-500/30 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all">
                    <div className="w-20 h-20 bg-blue-500/20 rounded-full mx-auto mb-6 flex items-center justify-center text-blue-400">
                        <Award size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Problem Solving (Intermediate)</h3>
                    <p className="text-md text-gray-400 font-medium">HackerRank</p>
                    <div className="mt-4 pt-4 border-t border-white/10">
                        <a href="https://www.hackerrank.com/certificates/iframe/695c5cceb94a" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/20">
                            View Credential
                        </a>
                    </div>
                </div>
                <div className="glass-card p-6 sm:p-8 rounded-xl text-center w-full lg:max-w-md flex-1 border border-blue-500/30 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all">
                    <div className="w-20 h-20 bg-blue-500/20 rounded-full mx-auto mb-6 flex items-center justify-center text-blue-400">
                        <Award size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">AWS Cloud Solutions Architect – Associate</h3>
                    <p className="text-md text-gray-400 font-medium">ICT Academy</p>
                    <div className="mt-4 pt-4 border-t border-white/10">
                        <a href="https://drive.google.com/file/d/1VZyqdlVqenq7RpPUbyS_Bo7pU6N4tmTH/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/20">
                            View Credential
                        </a>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default Certificates;

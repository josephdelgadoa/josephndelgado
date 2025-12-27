import React from 'react';
import { Figma, Code2, Database, Globe, Cpu, ChevronRight, FileText } from 'lucide-react';

interface HeroProps {
    onResumeClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-[128px] animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/30 rounded-full blur-[128px] animate-pulse-slow delay-1000"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

                {/* Availability Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-gray-300">Available for Work</span>
                </div>

                {/* Headlines */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
                    Designing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Intelligent</span><br />
                    Human Experiences
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: '0.3s' }}>
                    Senior UX/UI Designer • AI Product Specialist
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-16 animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
                    <a href="#portfolio" className="group relative px-8 py-3 bg-white text-dark font-semibold rounded-full overflow-hidden transition-all hover:scale-105">
                        <span className="relative z-10 flex items-center">
                            Explore Portfolio <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                    <button
                        onClick={onResumeClick}
                        className="px-8 py-3 ring-1 ring-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center"
                    >
                        <FileText className="mr-2 w-4 h-4" /> Resume / CV
                    </button>
                </div>

                {/* Tech Stack */}
                <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
                    <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider">Powering interactions with</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
                        <Figma className="w-8 h-8 text-gray-600 hover:text-[#F24E1E] transition-colors duration-300 cursor-help" />
                        <Code2 className="w-8 h-8 text-gray-600 hover:text-[#61DAFB] transition-colors duration-300 cursor-help" />
                        <Database className="w-8 h-8 text-gray-600 hover:text-[#4DB33D] transition-colors duration-300 cursor-help" />
                        <Globe className="w-8 h-8 text-gray-600 hover:text-[#3B82F6] transition-colors duration-300 cursor-help" />
                        <Cpu className="w-8 h-8 text-gray-600 hover:text-[#A855F7] transition-colors duration-300 cursor-help" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

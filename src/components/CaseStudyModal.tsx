import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import type { Project } from '../types';

interface CaseStudyModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-5xl bg-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-zoom-in flex flex-col max-h-[90vh]">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Header Image */}
                <div className="relative h-64 md:h-80 shrink-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
                    <div className="absolute bottom-8 left-8">
                        <span className="text-secondary font-medium tracking-wider uppercase text-sm">{project.category}</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2">{project.title}</h2>
                    </div>
                </div>

                {/* Scrollable Body */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                    <div className="grid md:grid-cols-3 gap-12">

                        {/* Sidebar */}
                        <div className="md:col-span-1 space-y-8">
                            <div>
                                <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-2">Role</h3>
                                <p className="font-medium">Lead Product Designer</p>
                            </div>
                            <div>
                                <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-2">Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map((tool) => (
                                        <span key={tool} className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/5">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 text-primary hover:text-white transition-colors"
                                >
                                    <span>View Live Project</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-10">
                            <section>
                                <h3 className="text-xl font-bold text-white mb-3">The Challenge</h3>
                                <div className="text-gray-400 leading-relaxed">{project.challenge}</div>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-3">Research & Insight</h3>
                                <div className="text-gray-400 leading-relaxed">{project.research}</div>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-3">The Solution</h3>
                                <div className="text-gray-400 leading-relaxed">{project.solution}</div>
                            </section>

                            <section className="bg-white/5 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl font-bold text-secondary mb-3">Impact</h3>
                                <div className="text-gray-300 leading-relaxed">{project.impact}</div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyModal;

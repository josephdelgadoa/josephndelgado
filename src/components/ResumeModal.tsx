import React from 'react';
import { X, Printer } from 'lucide-react';
import { RESUME_CONTENT } from '../constants';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in"
                onClick={onClose}
            />

            <div className="relative w-full max-w-4xl bg-white text-black rounded-lg shadow-2xl overflow-hidden animate-zoom-in h-[90vh] flex flex-col">
                {/* Toolbar */}
                <div className="bg-dark text-white p-4 flex justify-between items-center print:hidden">
                    <h2 className="font-bold">Resume Preview</h2>
                    <div className="flex gap-4">
                        <button onClick={() => window.print()} className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Printer className="w-4 h-4" /> Print
                        </button>
                        <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Resume Content */}
                <div className="flex-1 overflow-y-auto p-12 custom-scrollbar-light">
                    <div className="max-w-3xl mx-auto space-y-8">
                        {/* Header */}
                        <header className="border-b-2 border-black pb-8">
                            <h1 className="text-5xl font-bold mb-2 uppercase tracking-tight">{RESUME_CONTENT.name}</h1>
                            <p className="text-xl text-gray-600 font-medium mb-4">{RESUME_CONTENT.title}</p>
                            <div className="flex gap-6 text-sm text-gray-600">
                                <span>San Francisco, CA</span>
                                <span>joseph@example.com</span>
                                <span>(555) 123-4567</span>
                            </div>
                        </header>

                        {/* Summary */}
                        <section>
                            <h3 className="text-lg font-bold uppercase tracking-wider mb-3 border-b border-gray-300 pb-1">Professional Summary</h3>
                            <p className="leading-relaxed text-gray-800">{RESUME_CONTENT.summary}</p>
                        </section>

                        {/* Experience */}
                        <section>
                            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 border-b border-gray-300 pb-1">Experience</h3>
                            <div className="space-y-8">
                                {RESUME_CONTENT.experience.map((job, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-baseline mb-2">
                                            <h4 className="text-xl font-bold">{job.role}</h4>
                                            <span className="text-gray-600 font-medium">{job.period}</span>
                                        </div>
                                        <p className="text-lg text-gray-700 font-medium mb-2">{job.company}</p>
                                        <p className="text-gray-800 leading-relaxed">{job.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Skills */}
                        <section>
                            <h3 className="text-lg font-bold uppercase tracking-wider mb-4 border-b border-gray-300 pb-1">Core Competencies</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-800">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>UX Research & Strategy</li>
                                    <li>UI & Visual Design</li>
                                    <li>Design Systems</li>
                                    <li>Prototyping (Figma, ProtoPie)</li>
                                </ul>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>React & TypeScript</li>
                                    <li>Tailwind CSS</li>
                                    <li>AI Product Integration</li>
                                    <li>Agile Methodologies</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeModal;

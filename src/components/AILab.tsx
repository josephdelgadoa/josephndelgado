import React from 'react';
import { Sparkles } from 'lucide-react';
import { PROMPTS } from '../constants';

const AILab: React.FC = () => {
    return (
        <section id="ai-lab" className="py-24 bg-dark relative border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 text-accent mb-6">
                        <Sparkles className="w-6 h-6" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4">AI Lab / Generated Assets</h2>
                    <p className="text-gray-400">Exploring the intersection of generative AI and design.</p>
                </div>

                <div className="bg-black/80 rounded-xl overflow-hidden border border-white/10 shadow-2xl font-mono text-sm md:text-base">
                    {/* Terminal Header */}
                    <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-4 text-gray-500 text-xs">gemini-pro — zsh — 80x24</span>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 space-y-6">
                        {PROMPTS.map((prompt, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex gap-2 text-green-400">
                                    <span className="shrink-0">$</span>
                                    <span className="text-secondary">generate_image</span>
                                    <span className="text-white">--prompt</span>
                                </div>
                                <div className="pl-6 text-gray-300 border-l-2 border-white/10">
                                    "{prompt}"
                                </div>
                            </div>
                        ))}
                        <div className="flex gap-2">
                            <span className="text-green-400">$</span>
                            <span className="animate-pulse bg-gray-500 w-3 h-5 block"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AILab;

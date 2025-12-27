import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    onClick: (project: Project) => void;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index }) => {
    return (
        <div
            onClick={() => onClick(project)}
            className="group relative bg-[#121212] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-white/5"
            style={{
                animationDelay: `${index * 100}ms`
            }}
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />

                {/* Arrow Icon */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.subtitle}</p>

                <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 3).map((tool) => (
                        <span key={tool} className="text-xs px-2 py-1 bg-white/5 text-gray-400 rounded border border-white/5">
                            {tool}
                        </span>
                    ))}
                </div>

                <div className="mt-6 flex items-center text-sm font-medium text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    View Case Study <ArrowUpRight className="ml-1 w-4 h-4" />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

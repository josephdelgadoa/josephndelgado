import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import CaseStudyModal from './CaseStudyModal';
import type { Project } from '../types';

const Portfolio: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 } // Trigger when 10% is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id="portfolio" className="py-24 bg-dark" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`mb-16 text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Selected Work</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">Featured Projects</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {PROJECTS.map((project, index) => (
                        <div
                            key={project.id}
                            className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <ProjectCard
                                project={project}
                                index={index}
                                onClick={setSelectedProject}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <CaseStudyModal
                    project={selectedProject}
                    isOpen={true}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default Portfolio;

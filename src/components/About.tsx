import React from 'react';
import profileImage from '../assets/joseph-delgado-01.jpeg';


const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* Image Side */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-20 blur-2xl rounded-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                    <img
                        src={profileImage}
                        alt="Joseph N. Delgado"
                        className="relative rounded-2xl w-full h-[650px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-white/5"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-dark p-6 rounded-xl border border-white/10 shadow-xl hidden md:block">
                        <p className="text-4xl font-bold text-white">20+</p>
                        <p className="text-sm text-gray-400">Years Experience</p>
                    </div>
                </div>

                {/* Story Side */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        Bridging the gap between <span className="text-primary">Engineering</span> & <span className="text-accent">Design</span>
                    </h2>

                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            My journey began in the era of early web standards, evolving through the mobile revolution, and now pioneering in the age of AI. I don't just design interfaces; I architect experiences.
                        </p>
                        <p>
                            With a background deeply rooted in software engineering, I understand the constraints and possibilities of code. This duality allows me to push boundaries in Figma that are actually shippable in React.
                        </p>
                        <p>
                            Today, my focus is on <strong className="text-white">AI-driven products</strong>—creating systems that feel less like tools and more like intelligent partners.
                        </p>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-3">
                        {['Front-End Engineer', 'UX Strategist', 'AI Product Specialist', 'Design Systems'].map((tag) => (
                            <span key={tag} className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

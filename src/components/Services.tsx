import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Capabilities</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">How I Can Add Value</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service) => (
                        <div
                            key={service.id}
                            className="p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-secondary/50 transition-all duration-300 group hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 bg-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                                <service.icon className="w-7 h-7 text-white" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

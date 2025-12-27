import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-dark relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16">

                    {/* Info Side */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build the Future</h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            I'm always open to discussing product design work or partnership opportunities.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:hello@example.com" className="flex items-center space-x-4 text-xl font-medium hover:text-primary transition-colors">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <span>joseph@josephndelgado.com</span>
                            </a>

                            <div className="flex gap-4 mt-8">
                                <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-white/10 hover:scale-110 transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-white/10 hover:scale-110 transition-all">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-white/10 hover:scale-110 transition-all">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <form className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input type="text" id="name" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input type="email" id="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea id="message" rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity">
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;

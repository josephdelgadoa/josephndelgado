import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Joseph N. Delgado. All rights reserved.</p>
                <p>Built with React, Tailwind CSS & Generative AI.</p>
            </div>
        </footer>
    );
};

export default Footer;

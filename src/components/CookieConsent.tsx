import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-dark/80 backdrop-blur-lg border-t border-white/10 animate-fade-up">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1 text-center md:text-left">
                    <p className="text-gray-300 text-sm md:text-base">
                        We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleAccept}
                        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
                    >
                        Got it
                    </button>
                    <button
                        onClick={handleAccept}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;

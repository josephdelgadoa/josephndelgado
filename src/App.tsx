import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import AILab from './components/AILab';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CookieConsent from './components/CookieConsent';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="bg-dark min-h-screen text-white">
      <Navbar />
      <Hero onResumeClick={() => setIsResumeOpen(true)} />
      <About />
      <Portfolio />
      <Services />
      <AILab />
      <Contact />
      <Footer />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
      <CookieConsent />
    </div>
  );
}

export default App;

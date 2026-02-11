import { useEffect, useState } from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { ChiE } from './sections/ChiE';
import { Metodo } from './sections/Metodo';
import { Posizionamento } from './sections/Posizionamento';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradient Orbs */}
        <div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[150px]"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px]"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ChiE />
        <Metodo />
        <Posizionamento />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

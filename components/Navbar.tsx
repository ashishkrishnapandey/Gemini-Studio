import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-white/5 ${scrolled ? 'bg-brand-black/90 backdrop-blur' : 'bg-transparent'}`} id="navbar">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <div className="w-8 h-8 bg-brand-green/20 border border-brand-green flex items-center justify-center">
            <span className="material-symbols-outlined text-brand-green text-sm">forest</span>
          </div>
          <span className="font-mono font-bold text-xl tracking-tighter text-white">NFGF</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-mono text-sm tracking-wide text-gray-400">
          <a className="hover:text-brand-green transition-colors" href="#projects">PROJECTS</a>
          <a className="hover:text-brand-green transition-colors" href="#platform">PLATFORM</a>
          <a className="hover:text-brand-green transition-colors" href="#impact">IMPACT</a>
        </div>
        
        <a className="hidden md:block px-6 py-2 border border-white/20 hover:border-brand-green hover:text-brand-green hover:bg-brand-green/5 transition-all font-mono text-sm uppercase tracking-wider text-white" href="#contact">
            Partner With Us
        </a>
        
        <button className="md:hidden text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
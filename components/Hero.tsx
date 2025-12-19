import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Aerial view of dense green forest" 
          className="w-full h-full object-cover opacity-60" 
          src="./hero.jpg" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent"></div>
        {/* Topographic pattern overlay */}
        <div className="absolute inset-0 topo-overlay opacity-30"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-brand-green/30 bg-brand-green/5 rounded-full mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            <span className="text-brand-green font-mono text-xs uppercase tracking-widest">End to End Project Developer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8 animate-fade-in-up text-white" style={{ animationDelay: '0.1s' }}>
            Carbon Assets <br />
            <span className="text-brand-green">Built to Last</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We originate, finance and steward a diversified portfolio of nature-based solutions and technology-enabled carbon removal projects.
            <div className="text-white mt-4 font-medium">
              Building at the nexus of <span className="text-brand-green">Nature</span>, <span className="text-brand-green">Community</span> & <span className="text-brand-green">Capital</span>.
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a className="px-8 py-4 bg-brand-green text-brand-black font-bold font-mono uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 group" href="#projects">
              See what we build
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            
            <div className="flex items-center gap-4 px-6 py-4 border-l border-white/10">
              <div className="text-right">
                <div className="text-2xl font-bold font-mono text-white">120k+</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">tonnes under origination</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce text-white">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Scroll</span>
        <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
      </div>
    </header>
  );
};

export default Hero;
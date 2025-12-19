import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="bg-black relative pt-24" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-sm font-mono text-brand-green uppercase tracking-widest mb-6">Partners</h2>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 mb-20 text-gray-500 font-mono text-lg font-bold opacity-50 grayscale hover:grayscale-0 transition-all">
            <span>CORPORATES</span>
            <span>INSTITUTIONAL INVESTORS</span>
            <span>GOVERNMENTS</span>
            <span>CLIMATE FUNDS</span>
            </div>
        </div>
        
        <div className="bg-brand-black border border-white/10 p-12 lg:p-20 relative overflow-hidden mb-24">
          <div className="absolute inset-0 tech-grid opacity-10"></div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-10 text-white">If integrity matters to you,<br />we should talk.</h3>
            
            <form 
                className="w-full max-w-md flex flex-col sm:flex-row gap-4" 
                onSubmit={(e) => { e.preventDefault(); alert('Request sent. We will be in touch shortly.'); }}
            >
                <input 
                className="flex-grow bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-brand-green placeholder-gray-600" 
                placeholder="enter@email.com" 
                type="email" 
                />
                <button className="bg-brand-green text-black font-bold font-mono uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors" type="submit">
                CONNECT
                </button>
            </form>
          </div>
        </div>
        
        <footer className="border-t border-white/10 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                    <span className="font-mono font-bold text-xl tracking-tighter text-brand-green">NFGF</span>
                    <span className="font-mono font-bold text-xl tracking-tighter text-white">CARBON</span>
                </div>
                <p className="text-gray-400 mb-6">Builders of Lasting Carbon Assets.</p>
                <div className="flex gap-4 text-sm text-gray-500">
                    <span>San Francisco</span>
                    <span>•</span>
                    <span>Nairobi</span>
                    <span>•</span>
                    <span>São Paulo</span>
                </div>
            </div>
            
            <div>
                <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6">EXPLORE</h4>
                <div className="flex flex-col gap-4 text-gray-400 text-sm">
                    <a href="#projects" className="hover:text-brand-green transition-colors">Projects</a>
                    <a href="#platform" className="hover:text-brand-green transition-colors">Process</a>
                    <a href="#impact" className="hover:text-brand-green transition-colors">Calculator</a>
                    <a href="#" className="hover:text-brand-green transition-colors">Team</a>
                </div>
            </div>
            
            <div>
                <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6">LEGAL</h4>
                <div className="flex flex-col gap-4 text-gray-400 text-sm">
                    <a href="#" className="hover:text-brand-green transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-brand-green transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-brand-green transition-colors">Disclosures</a>
                </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-600">
            <p>© 2025 NFGF Carbon Assets. All rights reserved.</p>
            <button className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">download</span>
                EXPORT
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
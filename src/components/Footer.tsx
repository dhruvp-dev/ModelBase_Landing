import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-32 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center border-b border-black/5 pb-32">
        <p className="text-xs font-bold tracking-[0.4em] uppercase text-neutral-400 mb-12">Join 100k+ Designers</p>
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-16 uppercase">Elevate Your <br />Workflow.</h2>
        <button className="px-12 py-6 bg-black text-white text-sm font-bold tracking-widest uppercase hover:bg-blue-600 transition-all active:scale-95">
          Create Free Account
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black flex items-center justify-center">
            <span className="text-white font-bold text-[10px]">M</span>
          </div>
          <span className="text-lg font-bold tracking-tighter uppercase italic">ModelBase</span>
        </div>
        
        

        <p className="text-[10px] font-bold tracking-widest uppercase text-neutral-300">
          © 2026 MODELBASE INTERNATIONAL.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
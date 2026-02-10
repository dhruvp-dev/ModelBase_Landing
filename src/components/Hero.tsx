import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <p className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-blue-600"></span>
              Digital Asset Marketplace
            </p>
            <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9] font-bold tracking-tight mb-12">
              PRECISION <br />
              <span className="text-neutral-300 italic">BY DESIGN.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-neutral-500 max-w-xl leading-relaxed font-light mb-12">
              A curated marketplace for high-fidelity CAD drawings, 2D technical blueprints, and optimized 3D models.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="px-10 py-5 bg-black text-white text-sm font-bold tracking-widest uppercase flex items-center gap-3 group transition-all hover:bg-neutral-800">
                Explore The Collection
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </button>
              <button className="px-10 py-5 border border-black text-sm font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all">
                Sell Your Assets
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-4 lg:text-right hidden lg:block">
            <div className="p-8 border-l border-black/10 inline-block text-left">
              <p className="text-sm font-bold mb-4 uppercase tracking-tighter">Marketplace Stats</p>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between gap-12 border-b border-black/5 pb-2">
                  <span className="text-neutral-400 text-xs uppercase tracking-widest">Verified Files</span>
                  <span>152,492</span>
                </div>
                <div className="flex justify-between gap-12 border-b border-black/5 pb-2">
                  <span className="text-neutral-400 text-xs uppercase tracking-widest">Active Creators</span>
                  <span>12,108</span>
                </div>
                <div className="flex justify-between gap-12">
                  <span className="text-neutral-400 text-xs uppercase tracking-widest">Daily Downloads</span>
                  <span>4,821</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 -right-24 -translate-y-1/2 opacity-5 pointer-events-none hidden xl:block">
        {/* <p className="text-[25rem] font-bold leading-none rotate-90 origin-center tracking-tighter">MODELBASE</p> */}
      </div>
    </section>
  );
};

export default Hero;
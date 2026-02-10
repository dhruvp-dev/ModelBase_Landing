
import { ShieldCheck, Layers, ChevronRight } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="py-32 bg-black text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-12 uppercase leading-none">
              Built for <br /><span className="text-blue-500">Professionals.</span>
            </h2>
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="shrink-0 w-12 h-12 border border-white/20 flex items-center justify-center text-blue-500"><ShieldCheck /></div>
                <div>
                  <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">Verified Geometry</h4>
                  <p className="text-neutral-400 font-light">Topology audits ensure 100% compatibility with industry software.</p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="shrink-0 w-12 h-12 border border-white/20 flex items-center justify-center text-blue-500"><Layers /></div>
                <div>
                  <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">Layered for Utility</h4>
                  <p className="text-neutral-400 font-light">Logically named layers ready for immediate integration.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="p-12 border border-white/10 bg-neutral-900/50 backdrop-blur-sm relative z-20">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-500 mb-8">Competitive Edge</p>
              <div className="space-y-8">
                {["Zero Geometry Errors", "Native BIM Support", "Royalty-Free Rights"].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-lg font-bold uppercase tracking-tight">{item}</span>
                    <ChevronRight className="text-blue-500" size={18} />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
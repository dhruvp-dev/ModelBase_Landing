
import { ChevronRight, Maximize2 } from 'lucide-react';

const FeaturedShowcase = () => {
  const featuredModels = [
    { id: 1, title: "Parametric Pavilion v4", author: "Studio Nord", format: "STEP / Rhino", price: "$89", tags: ["Architecture", "3D"] },
    { id: 2, title: "H1-Engine Component", author: "Vector Lab", format: "DWG / SolidWorks", price: "$124", tags: ["Industrial", "2D/3D"] },
    { id: 3, title: "Modular Housing Grid", author: "Urban Logic", format: "Revit / BIM", price: "$210", tags: ["Construction", "BIM"] },
    { id: 4, title: "Kinetic Facade System", author: "Metaform", format: "Grasshopper", price: "$156", tags: ["Parametric", "Design"] }
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 leading-none uppercase">Featured <br />Industry Standards.</h2>
            <p className="text-lg text-neutral-500 font-light">Rigorous quality control ensures every file meets professional engineering standards.</p>
          </div>
          <button className="text-sm font-bold border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-all uppercase tracking-widest flex items-center gap-2 group">
            View All Assets <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {featuredModels.map((model) => (
            <div key={model.id} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-[#f0f0f0] mb-8 relative overflow-hidden flex items-center justify-center border border-black/5">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="relative z-10 w-3/4 h-3/4 border border-black/10 flex items-center justify-center transition-all duration-700 group-hover:scale-105">
                  <div className="w-1/2 h-1/2 border-2 border-dashed border-neutral-400 flex items-center justify-center">
                    <Maximize2 className="text-neutral-400 group-hover:text-blue-600" />
                  </div>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 bg-white text-[10px] font-bold tracking-widest uppercase border border-black/5">{model.format}</span>
                </div>
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-8">
                  <button className="px-8 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest">Quick Preview</button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-blue-600 transition-colors uppercase">{model.title}</h3>
                  <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase">{model.author} • {model.tags.join(' / ')}</div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold tracking-tighter">{model.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedShowcase;
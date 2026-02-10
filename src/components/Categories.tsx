import React from 'react';
import { Layers, Box, Cpu, Globe, Search, ArrowUpRight } from 'lucide-react';

const Categories = () => {
  const categories = [
    { title: "Architectural CAD", count: "14.2k+", icon: <Layers size={20} /> },
    { title: "Product Prototypes", count: "8.1k+", icon: <Box size={20} /> },
    { title: "Industrial Components", count: "22.5k+", icon: <Cpu size={20} /> },
    { title: "Landscape Design", count: "5.4k+", icon: <Globe size={20} /> }
  ];

  return (
    <section className="py-24 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter uppercase">Browse Categories</h2>
          <div className="flex items-center gap-2 text-neutral-400">
            <Search size={18} />
            <input type="text" placeholder="FILTER ASSETS" className="text-xs tracking-widest border-none focus:ring-0 placeholder:text-neutral-300 uppercase font-bold" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-100 border border-neutral-100">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-12 group hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
              <div className="mb-8 text-blue-600 group-hover:text-white transition-colors">{cat.icon}</div>
              <h3 className="text-xl font-bold mb-2 tracking-tight">{cat.title}</h3>
              <p className="text-xs tracking-widest uppercase font-bold text-neutral-400 group-hover:text-neutral-300">{cat.count} Items</p>
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                <ArrowUpRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
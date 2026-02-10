import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${
      isScrolled ? 'bg-white/90 backdrop-blur-md py-4 border-black/5' : 'bg-transparent py-8 border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black flex items-center justify-center">
            <span className="text-white font-bold text-xs">M</span>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase italic">ModelBase</span>
        </div>

        <div className="hidden md:flex items-center gap-12 text-[13px] font-medium tracking-widest uppercase">
          <a href="#" className="hover:text-blue-600 transition-colors">Catalog</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Creators</a>
          <button className="bg-black text-white px-6 py-2.5 hover:bg-neutral-800 transition-all active:scale-95">
            Get Started
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedShowcase from './components/FeaturedShowcase';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedShowcase />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
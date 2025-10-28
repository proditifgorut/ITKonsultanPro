import React, { useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Products from './components/Products';
import Partnerships from './components/Partnerships';
import Strategies from './components/Strategies';
import CTA from './components/CTA';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Skills />
      <Products />
      <Partnerships />
      <Strategies />
      <CTA />
    </div>
  );
}

export default App;

import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { Contact } from '../components/Contact';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
};

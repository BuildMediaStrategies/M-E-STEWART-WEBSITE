import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { Contact } from '../components/Contact';
import { FAQPreview } from '../components/FAQPreview';

const GoogleMaps: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-brand-darkBlue">
            Find Us in{" "}
            <span className="inline-block relative">
              Deal, Kent
              <div className="h-1 bg-brand-blue mt-2 absolute left-0 right-0"></div>
            </span>
          </h2>
        </div>

        <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-lg bg-white" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.4152557978687!2d1.3419416766034906!3d51.22984677175148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cd48fe12408e14d%3A0x21e605a6c573c3e9!2sM%20E%20Stewart%20Building%20Contractors%20LTD%20Deal%20Kent!5e0!3m2!1sen!2suk!4v1768213605022!5m2!1sen!2suk"
            className="absolute top-0 left-0 w-full h-full border-0"
            title="M E Stewart Building Contractors Location in Deal, Kent"
          />
        </div>
      </div>
    </section>
  );
};

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <Portfolio />
      <Services />
      <FAQPreview />
      <GoogleMaps />
      <Contact />
    </div>
  );
};

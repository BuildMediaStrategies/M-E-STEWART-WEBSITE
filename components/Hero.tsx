import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Hero section">
      <style>{`
        @media (max-width: 1023px) {
          .mobile-active-bg-white {
            background-color: white !important;
            color: #1e3a5f !important;
          }
          .mobile-active-bg-white svg {
            transform: translateX(4px);
          }
          .mobile-active-border-white {
            background-color: white !important;
            color: #1e3a5f !important;
          }
        }
      `}</style>
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop')` }}
        role="img"
        aria-label="Modern residential construction background"
      >
        <div className="absolute inset-0 bg-brand-darkBlue/60 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-4 pt-32 sm:px-8 sm:pt-24 lg:px-24">
        <div className="max-w-4xl">
          <div className="mb-4 sm:mb-6 flex flex-wrap items-center gap-2 sm:gap-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-widest text-brand-blue bg-white rounded-full px-3 py-1 sm:px-4 w-fit shadow-md">
              Established Excellence
            </span>
            <span className="flex items-center gap-1 text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-widest text-white/90 bg-black/30 px-3 py-1 sm:px-4 rounded-full backdrop-blur-sm">
              <MapPin size={14} aria-hidden="true" className="flex-shrink-0" /> <span className="whitespace-nowrap">Deal • Walmer • Sholden</span>
            </span>
          </div>

          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase leading-tight text-white drop-shadow-lg">
            Professional Builders <br />
            Serving <span className="text-blue-400">Deal, Walmer & Sholden</span>
          </h1>

          <div className="mb-6 sm:mb-8 lg:mb-10 max-w-xl rounded-2xl bg-black/60 p-4 sm:p-6 backdrop-blur-md border border-white/10 shadow-2xl">
            <p className="text-base sm:text-lg lg:text-xl text-white font-light leading-relaxed">
              M E Stewart Building Contractors deliver expert extensions, renovations and structural works throughout Deal, Walmer, Sholden and surrounding Kent areas. Local builders with proven craftsmanship and reliability.
            </p>
          </div>

          <div ref={buttonRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/contact"
              className={`group flex items-center justify-center gap-2 bg-brand-blue px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold uppercase tracking-wide text-white transition-all lg:hover:bg-white lg:hover:text-brand-blue rounded-full shadow-lg lg:hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-darkBlue ${isVisible ? 'mobile-active-bg-white' : ''}`}
              aria-label="Get a free quote for your building project"
            >
              Get a Quote
              <ChevronRight className="h-5 w-5 transition-transform lg:group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              to="/projects"
              className={`flex items-center justify-center gap-2 border-2 border-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold uppercase tracking-wide text-white transition-all lg:hover:bg-white lg:hover:text-brand-darkBlue rounded-full lg:hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-darkBlue ${isVisible ? 'mobile-active-border-white' : ''}`}
              aria-label="View our portfolio of completed projects"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
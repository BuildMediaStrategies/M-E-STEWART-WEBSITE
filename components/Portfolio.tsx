import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Living Room Renovation",
    category: "Deal, Kent",
    img: "/assets/before-after-living-room-refurb2.jpg",
    alt: "Modern living room renovation completed in Deal home"
  },
  {
    title: "Staircase Renovation",
    category: "Deal, Kent",
    img: "/assets/mark_stewart_conversion_stairs_after.webp",
    alt: "Staircase conversion project in Deal property"
  },
  {
    title: "Bathroom Refurbishment",
    category: "Deal, Kent",
    img: "/assets/mark_stewart_bathroom_refurb_.jpeg",
    alt: "Bathroom refurbishment completed in Deal home"
  },
  {
    title: "Full House Renovation",
    category: "Deal, Kent",
    img: "/assets/mark_steward_conversion_after.webp",
    alt: "House renovation project completed in Deal"
  }
];

export const Portfolio: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setVisibleCards((prev) => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                newSet.add(idx);
              } else {
                newSet.delete(idx);
              }
              return newSet;
            });
          });
        },
        {
          threshold: 0.3,
          rootMargin: '-50px 0px -50px 0px'
        }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
      <style>{`
        @media (max-width: 1023px) {
          .portfolio-card .mobile-scale {
            transform: scale(1);
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .portfolio-card.card-visible .mobile-scale {
            transform: scale(1.1);
          }

          .portfolio-card .mobile-overlay {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }

          .portfolio-card.card-visible .mobile-overlay {
            opacity: 1;
          }
        }
      `}</style>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-10 lg:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div>
             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-brand-darkBlue">
              Featured <span className="inline-block relative">Projects<div className="h-1 bg-brand-blue mt-2 absolute left-0 right-0"></div></span>
            </h2>
            <p className="mt-4 sm:mt-6 text-brand-slate text-sm sm:text-base">Delivering excellence across Deal, Kent.</p>
          </div>
          <Link
            to="/projects"
            className="text-white bg-brand-blue hover:bg-brand-darkBlue px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-bold uppercase tracking-wide transition-colors shadow-md whitespace-nowrap self-start md:self-auto"
          >
            View All Projects &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`portfolio-card group relative h-64 sm:h-72 md:h-80 w-full overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer shadow-lg ${
                visibleCards.has(idx) ? 'card-visible' : ''
              }`}
            >
              <img
                src={project.img}
                alt={project.alt}
                loading="eager"
                className="mobile-scale h-full w-full object-cover transition-transform duration-500 lg:group-hover:scale-110"
              />
              <div className="mobile-overlay absolute inset-0 bg-gradient-to-t from-brand-darkBlue/90 to-transparent opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                <span className="text-blue-400 font-bold uppercase text-xs sm:text-sm mb-1 sm:mb-2">{project.category}</span>
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold uppercase">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
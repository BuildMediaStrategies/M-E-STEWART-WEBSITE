import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const primaryAreas = [
  {
    name: "Deal Town Centre",
    description: "Historic seaside town with period properties and modern developments. Expert local builders serving Deal town centre with proven craftsmanship.",
    link: "/builders-deal"
  },
  {
    name: "Walmer (within Deal)",
    description: "Residential area within Deal featuring Victorian and Edwardian architecture. Professional building services near Walmer Castle.",
    link: "/builders-walmer"
  },
  {
    name: "Sholden (within Deal)",
    description: "Residential zone within the Deal area with diverse housing stock. Experienced builders for extensions and renovations.",
    link: "/builders-sholden"
  }
];

const additionalAreas = [
  {
    name: "Upper Deal",
    description: "Elevated residential area within Deal featuring family homes"
  },
  {
    name: "Mill Hill (Deal)",
    description: "Residential zone within Deal with diverse property types"
  },
  {
    name: "North Deal",
    description: "Northern residential area of Deal with modern developments"
  },
  {
    name: "Betteshanger (Deal)",
    description: "Area within the Deal region with traditional and new builds"
  },
  {
    name: "Deal Marina Area",
    description: "Waterfront properties and developments within Deal"
  },
  {
    name: "Deal Conservation Areas",
    description: "Historic properties within Deal requiring specialist care"
  }
];

export const AreasPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-6 animate-fade-in">
            Builders in Deal, Kent
          </h1>
          <div className="mx-auto h-1 w-32 bg-white mb-6"></div>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Professional building and refurbishment services throughout the Deal area
          </p>
        </div>
      </div>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold uppercase text-brand-darkBlue mb-4 text-center">
            Deal Area Coverage
          </h2>
          <div className="mx-auto h-1 w-24 bg-brand-blue mb-12"></div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
            {primaryAreas.map((area, index) => (
              <Link
                to={area.link}
                key={index}
                className="group relative border-2 border-brand-blue bg-gradient-to-br from-brand-blue/5 to-white p-8 transition-all duration-300 lg:hover:-translate-y-3 lg:hover:shadow-2xl rounded-lg"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue text-white lg:group-hover:scale-110 transition-all duration-300">
                  <MapPin size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold uppercase text-brand-darkBlue">
                  {area.name}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {area.description}
                </p>
                <span className="text-brand-blue font-semibold lg:group-hover:underline">
                  View {area.name} Services →
                </span>
              </Link>
            ))}
          </div>

          <h2 className="text-3xl font-bold uppercase text-brand-darkBlue mb-4 text-center mt-12">
            Additional Deal Zones
          </h2>
          <div className="mx-auto h-1 w-20 bg-brand-blue mb-12"></div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {additionalAreas.map((area, index) => (
              <div
                key={index}
                className="group relative border-2 border-gray-200 bg-white p-8 transition-all duration-300 lg:hover:-translate-y-3 lg:hover:shadow-2xl lg:hover:border-brand-blue rounded-lg"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${(index + 3) * 0.1}s both`
                }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-grey text-brand-blue lg:group-hover:bg-brand-blue lg:group-hover:text-white transition-all duration-300 lg:group-hover:scale-110">
                  <MapPin size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold uppercase text-brand-darkBlue">
                  {area.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-bold uppercase text-brand-darkBlue sm:text-5xl">
            Full Building Services Throughout Deal, Kent
          </h2>
          <div className="mx-auto h-1 w-24 bg-brand-blue mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            M E Stewart Building Contractors LTD provides comprehensive construction and refurbishment services to homeowners throughout the Deal area. Whether you're planning a home extension, renovation, new build, or commercial project in Deal, our experienced team delivers quality workmanship with extensive local knowledge of Deal properties.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-brand-blue text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold uppercase sm:text-5xl">
            Ready to Discuss Your Project?
          </h2>
          <p className="mb-8 text-xl leading-relaxed opacity-90">
            Contact us today for a free consultation. We serve all zones across the Deal area with the same commitment to excellence.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-full px-10 py-4 text-lg font-bold uppercase transition-all bg-white text-brand-darkBlue lg:hover:bg-brand-darkBlue lg:hover:text-white shadow-lg lg:hover:shadow-2xl"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

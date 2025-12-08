import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Hammer, Building, MapPin, Phone } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Home Extensions",
    description: "Create extra space with single or double-story extensions that blend perfectly with your Deal property."
  },
  {
    icon: Hammer,
    title: "Kitchen Renovations",
    description: "Modern kitchen transformations with quality fixtures, cabinetry, and expert craftsmanship."
  },
  {
    icon: Building,
    title: "Loft Conversions",
    description: "Unlock hidden space in your home with professional loft conversions for bedrooms, offices, or studios."
  },
  {
    icon: Home,
    title: "Property Repairs",
    description: "From small fixes to major repairs, we keep Deal homes in excellent condition year-round."
  }
];

export const DealPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin size={24} className="text-blue-300" />
            <p className="text-lg font-semibold uppercase tracking-wide">Local Builders in Deal</p>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-6 animate-fade-in">
            Builders Based in Deal
          </h1>
          <div className="mx-auto h-1 w-32 bg-white mb-6"></div>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            28 years of quality building work across Deal and surrounding areas
          </p>
        </div>
      </div>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue mb-6 text-center">
            Working All Over Deal
          </h2>
          <div className="mx-auto h-1 w-24 bg-brand-blue mb-8"></div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              We're based in Deal and work all over the town and nearby Dover — from refurbs and extensions to new builds. Whether you're in the town centre, near the seafront, or out towards Sholden and Walmer, we cover it all.
            </p>
            <p>
              We've been building in Deal for nearly three decades, so we know the local area inside out. From Victorian terraces to modern properties, we understand what works in Deal homes and how to get the best results.
            </p>
            <p>
              If you're in Deal or nearby towns, we'd be happy to chat about your project — no pressure, just friendly advice from local builders who care about getting it right.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue mb-4">
              What We Do in Deal
            </h2>
            <div className="mx-auto h-1 w-24 bg-brand-blue mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From small repairs to complete renovations, we handle all types of building work across Deal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md lg:hover:shadow-xl transition-shadow border-2 border-gray-200 lg:hover:border-brand-blue"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white mb-6">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold uppercase text-brand-darkBlue mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-wide text-brand-blue">
                  Local Project Example
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue">
                  Bathroom Refurbishment in Deal
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Complete bathroom transformation in a Deal home featuring modern fixtures, premium tiling, elegant lighting, and high-quality finishes. A sophisticated space that combines style with functionality, delivered on time and within budget.
                </p>
                <div className="pt-4">
                  <Link
                    to="/projects"
                    className="inline-block text-white bg-brand-blue lg:hover:bg-brand-darkBlue px-8 py-3 rounded-full font-bold uppercase tracking-wide transition-colors shadow-md"
                  >
                    View Our Projects
                  </Link>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/assets/mark_stewart_bathroom_refurb_.jpeg"
                  alt="Deal builders - bathroom renovation project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border-2 border-brand-blue">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue mb-6 text-center">
              What Our Deal Clients Say
            </h2>
            <div className="mx-auto h-1 w-24 bg-brand-blue mb-8"></div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "Mark and his team did an excellent job on our kitchen extension. They were professional, tidy, and always on time. We'd definitely use them again for future projects."
              </p>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-brand-darkBlue">Sarah & James</p>
                <p className="text-gray-600">Deal, Kent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue mb-6">
              Coverage Across Deal & Beyond
            </h2>
            <div className="mx-auto h-1 w-24 bg-brand-blue mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We serve all areas of Deal including the town centre, Mill Hill, Sholden, Upper Deal, and surrounding villages. We also cover nearby Dover, Walmer, St Margaret's, Sandwich, and the wider East Kent area.
            </p>
            <div className="flex items-center justify-center gap-2 text-brand-blue">
              <MapPin size={24} />
              <p className="text-lg font-semibold">Based in Deal • Serving East Kent</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-brand-blue text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold uppercase sm:text-5xl">
            Get a Quote from Our Team
          </h2>
          <p className="mb-8 text-xl leading-relaxed opacity-90">
            Let's talk about your plans. Free quotes, friendly advice, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-10 py-4 text-lg font-bold uppercase transition-all bg-white text-brand-darkBlue lg:hover:bg-brand-darkBlue lg:hover:text-white shadow-lg lg:hover:shadow-2xl border-2 border-white"
            >
              <Phone size={20} />
              Contact Us
            </Link>
            <Link
              to="/services"
              className="inline-block rounded-full px-10 py-4 text-lg font-bold uppercase transition-all border-2 border-white lg:hover:bg-white lg:hover:text-brand-darkBlue"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <style>{`
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

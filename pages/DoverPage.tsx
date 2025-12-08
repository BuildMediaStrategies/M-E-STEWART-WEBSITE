import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Hammer, Building, MapPin, Phone } from 'lucide-react';

const services = [
  {
    icon: Building,
    title: "Property Extensions",
    description: "Expand your Dover home with expertly designed and built extensions that add value and space."
  },
  {
    icon: Hammer,
    title: "Renovations & Refurbishments",
    description: "Complete property transformations from tired to stunning, with quality workmanship throughout."
  },
  {
    icon: Building,
    title: "New Builds",
    description: "Ground-up construction projects delivered to the highest standards with full project management."
  },
  {
    icon: Home,
    title: "Maintenance & Repairs",
    description: "Ongoing property maintenance and emergency repairs across Dover and surrounding areas."
  }
];

export const DoverPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin size={24} className="text-blue-300" />
            <p className="text-lg font-semibold uppercase tracking-wide">Building Services in Dover</p>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-6 animate-fade-in">
            Trusted Builders in Dover
          </h1>
          <div className="mx-auto h-1 w-32 bg-white mb-6"></div>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Professional building work across Dover and East Kent since 1995
          </p>
        </div>
      </div>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue mb-6 text-center">
            Local Builders Serving Dover
          </h2>
          <div className="mx-auto h-1 w-24 bg-brand-blue mb-8"></div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              We're based in Deal and work regularly throughout Dover — from refurbs and extensions to new builds. Whether you're in Dover town, up towards Whitfield, or out near River, we cover all areas.
            </p>
            <p>
              With nearly 30 years in the trade, we've completed hundreds of projects across Dover. We know the local building styles, understand planning requirements, and have great relationships with local suppliers — all of which helps your project run smoothly.
            </p>
            <p>
              If you're in Dover, Deal, or nearby towns, we'd be happy to chat. Learn more about our <Link to="/services" className="text-brand-blue font-semibold lg:hover:underline">home extensions in Dover</Link> or get in touch for a free quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue mb-4">
              What We Do in Dover
            </h2>
            <div className="mx-auto h-1 w-24 bg-brand-blue mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive building services across Dover, from small repairs to major construction projects.
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
                  Recent Dover Area Project
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue">
                  Kitchen Renovation Near Dover
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Modern kitchen transformation in a property near Dover, featuring custom cabinetry, premium appliances, quality tiling, and contemporary lighting. Professional installation with minimal disruption and exceptional attention to detail.
                </p>
                <div className="pt-4">
                  <Link
                    to="/projects"
                    className="inline-block text-white bg-brand-blue lg:hover:bg-brand-darkBlue px-8 py-3 rounded-full font-bold uppercase tracking-wide transition-colors shadow-md"
                  >
                    See More Projects
                  </Link>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/assets/mark_stewart_kitchen_refurb_.jpeg"
                  alt="Dover builders - kitchen renovation project"
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
              Client Feedback from Dover Area
            </h2>
            <div className="mx-auto h-1 w-24 bg-brand-blue mb-8"></div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "We had M E Stewart complete a full house renovation for us. The quality of work was outstanding and they were incredibly reliable throughout. Highly recommended for anyone in the Dover area."
              </p>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-brand-darkBlue">Michael & Claire</p>
                <p className="text-gray-600">Near Dover, Kent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue mb-6">
              Covering Dover & Surrounding Areas
            </h2>
            <div className="mx-auto h-1 w-24 bg-brand-blue mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We work throughout Dover including Dover town centre, Whitfield, River, Buckland, Temple Ewell, and surrounding villages. We also serve nearby Deal, Folkestone, Canterbury, and across East Kent.
            </p>
            <div className="flex items-center justify-center gap-2 text-brand-blue">
              <MapPin size={24} />
              <p className="text-lg font-semibold">Based in Deal • Serving Dover & East Kent</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-brand-blue text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold uppercase sm:text-5xl">
            Let's Talk About Your Plans
          </h2>
          <p className="mb-8 text-xl leading-relaxed opacity-90">
            Free consultation and quote — friendly, professional service from experienced local builders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-10 py-4 text-lg font-bold uppercase transition-all bg-white text-brand-darkBlue lg:hover:bg-brand-darkBlue lg:hover:text-white shadow-lg lg:hover:shadow-2xl border-2 border-white"
            >
              <Phone size={20} />
              Get a Quote
            </Link>
            <Link
              to="/projects"
              className="inline-block rounded-full px-10 py-4 text-lg font-bold uppercase transition-all border-2 border-white lg:hover:bg-white lg:hover:text-brand-darkBlue"
            >
              View Portfolio
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

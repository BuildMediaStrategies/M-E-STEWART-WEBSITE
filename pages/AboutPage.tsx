import React from 'react';
import { Building, MapPin, Users, Briefcase, Hammer, Target } from 'lucide-react';

const infoCards = [
  {
    icon: Building,
    title: "Company Overview",
    content: [
      "Founded and operating in Deal, Kent with 28 years of experience in the building trade.",
      "We deliver residential and commercial building work throughout the Deal area including Walmer, Sholden and surrounding zones."
    ]
  },
  {
    icon: Users,
    title: "Local Deal Expertise",
    content: [
      "We work with a team of trusted tradesmen who understand Deal's unique housing stock.",
      "Long-term commitment to Deal homeowners with extensive knowledge of local properties."
    ]
  },
  {
    icon: Briefcase,
    title: "Experience and Ongoing Work",
    content: [
      "We carry out maintenance and building work for estate agents in Deal including Martins & Co and Jenkinson's Estate Agents and Lettings."
    ]
  },
  {
    icon: Target,
    title: "Working Approach",
    content: [
      "We manage projects from start to finish across all Deal properties.",
      "We coordinate all trades internally for seamless delivery.",
      "We maintain clear communication throughout every Deal building project."
    ]
  }
];

const areas = [
  "Deal",
  "Walmer (within Deal)",
  "Sholden (within Deal)",
  "Upper Deal",
  "Mill Hill (Deal)",
  "North Deal",
  "Deal Town Centre",
  "Betteshanger (Deal)"
];

const workTypes = [
  "Extensions and conversions for Deal properties",
  "Kitchen and bathroom refurbishments in Deal homes",
  "General building works across the Deal area",
  "Residential and commercial projects throughout Deal",
  "Architectural design services for Deal developments"
];

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 sm:pt-24">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase mb-4 sm:mb-6 animate-fade-in">
            About M E Stewart Deal, Kent
          </h1>
          <div className="mx-auto h-1 w-24 sm:w-32 bg-white mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90 px-4">
            Deal-Based Building Contractors Serving the Entire Deal Area
          </p>
        </div>
      </div>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className="group p-6 sm:p-8 bg-slate-50 rounded-lg border-2 border-gray-200 hover:border-brand-blue hover:shadow-xl transition-all duration-300"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="mb-4 sm:mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-brand-blue text-white group-hover:scale-110 transition-transform duration-300">
                  <card.icon size={28} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase text-brand-darkBlue mb-3 sm:mb-4">
                  {card.title}
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {card.content.map((text, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 sm:mb-10 lg:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-brand-darkBlue mb-3 sm:mb-4">
              Areas Covered
            </h2>
            <div className="mx-auto h-1 w-24 bg-brand-blue mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              We operate across Deal, Kent and all surrounding residential zones within the Deal area:
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:gap-6">
            {areas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200 hover:border-brand-blue"
                style={{
                  animation: `fade-in-up 0.5s ease-out ${index * 0.05}s both`
                }}
              >
                <MapPin className="text-brand-blue flex-shrink-0" size={18} width={20} height={20} />
                <span className="text-sm sm:text-base lg:text-lg font-semibold text-brand-darkBlue">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 sm:mb-10 lg:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-brand-darkBlue mb-3 sm:mb-4">
              Types of Work Undertaken
            </h2>
            <div className="mx-auto h-1 w-24 bg-brand-blue mb-4 sm:mb-6"></div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workTypes.map((work, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-slate-50 rounded-lg border-2 border-gray-200 hover:border-brand-blue hover:shadow-lg transition-all duration-300"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                  <Hammer className="text-brand-blue" size={20} width={20} height={20} />
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-medium">
                  {work}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-brand-blue text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
            Get In Touch
          </h2>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl leading-relaxed opacity-90 px-4">
            Contact us to discuss your project requirements.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold uppercase transition-all bg-white text-brand-darkBlue hover:bg-brand-darkBlue hover:text-white shadow-lg hover:shadow-2xl border-2 border-white"
          >
            Contact Us
          </a>
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

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

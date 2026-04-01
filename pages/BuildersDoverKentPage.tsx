import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Hammer, Building, ClipboardList, HelpCircle, MapPin, Phone } from 'lucide-react';

export const BuildersDoverKentPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Builders in Dover, Kent | M E Stewart Building Contractors Ltd';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Experienced builders in Dover, Kent. House extensions, home renovations and structural works for properties across Dover and the wider East Kent area.'
      );
    }

    const canonicalHref = 'https://mestewartbuildingcontractorsltd.uk/builders-dover-kent';
    const canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', canonicalHref);
    document.head.appendChild(canonicalLink);

    return () => {
      document.head.removeChild(canonicalLink);
    };
  }, []);

  const faqs = [
    {
      question: 'Which parts of Dover do you cover?',
      answer:
        'We work across Dover including the town centre, Whitfield, River, Buckland, Temple Ewell and nearby villages, as well as neighbouring towns such as Deal and Folkestone.'
    },
    {
      question: 'Can you work on sloping or challenging plots in Dover?',
      answer:
        'Yes. Many Dover properties sit on hillsides. We assess ground conditions, drainage and retaining needs before recommending the best structural approach for your extension or renovation.'
    },
    {
      question: 'Do you work around busy family or working routines?',
      answer:
        'We plan works to minimise disruption, keep access routes safe and communicate clearly so you know what to expect each day while building work is underway.'
    },
    {
      question: 'Do you offer free quotes for Dover projects?',
      answer:
        'Yes. We provide free, no-obligation quotations for building projects in Dover and surrounding East Kent areas.'
    }
  ];

  const otherAreas = [
    { name: 'Deal, Kent', path: '/builders-deal-kent' },
    { name: 'Ramsgate, Kent', path: '/builders-ramsgate-kent' },
    { name: 'Thanet, Kent', path: '/builders-thanet-kent' },
    { name: 'Canterbury, Kent', path: '/builders-canterbury-kent' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={24} className="text-blue-300" />
            <p className="text-sm sm:text-base font-semibold uppercase tracking-wide">
              Local Builders in Dover, Kent
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase mb-4">
            Builders in Dover, Kent
          </h1>
          <div className="h-1 w-28 bg-white mb-6" />
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl leading-relaxed opacity-95">
            M E Stewart Building Contractors Ltd provide reliable, high-quality building services in
            Dover, from house extensions and loft conversions to full property refurbishments and
            structural work.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-brand-darkBlue px-8 py-3 text-sm sm:text-base font-bold uppercase tracking-wide shadow-lg lg:hover:bg-brand-darkBlue lg:hover:text-white transition-colors"
            >
              Get a Dover Quote
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3 text-sm sm:text-base font-bold uppercase tracking-wide lg:hover:bg-white lg:hover:text-brand-darkBlue transition-colors"
            >
              View Building Services
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue mb-4">
            Building Contractors for Dover Homes
          </h2>
          <div className="h-1 w-20 bg-brand-blue mb-6" />
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Dover&apos;s mix of period terraces, modern estates and hillside properties demands a
            thoughtful approach to building work. We understand how to extend and refurbish Dover
            homes in a way that respects the architecture and copes with the coastal climate.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you are opening up the back of a property in Buckland to create a larger
            kitchen-diner, or refreshing a rental near the seafront, our team manages the build with
            clear communication and practical scheduling.
          </p>
        </div>
      </section>

      {/* Services in Dover */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue mb-3">
              Building Services in Dover, Kent
            </h2>
            <div className="h-1 w-24 bg-brand-blue mx-auto mb-4" />
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Complete building and refurbishment services for domestic properties across Dover and
              surrounding villages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <Home className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-brand-darkBlue mb-2">
                House Extensions in Dover
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Single and double-storey house extensions designed to make the most of available
                plots, whether you are in a terraced street or on a hillside location.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Kitchen-diner extensions</li>
                <li>• Side and rear extensions</li>
                <li>• Loft conversions and dormers</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <Hammer className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-brand-darkBlue mb-2">
                Home Renovations & Refits
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Practical, attractive renovations for homes across Dover, from new layouts to
                upgraded finishes.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Full internal refurbishments</li>
                <li>• Kitchen and bathroom refits</li>
                <li>• Reconfiguration of existing rooms</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <Building className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-brand-darkBlue mb-2">
                Structural & Repair Work
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Structural alterations and remedial works carried out safely and in line with
                engineering designs.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Structural openings and RSJs</li>
                <li>• Damp and water ingress solutions</li>
                <li>• External repairs and brickwork</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue mb-4">
              Why Dover Homeowners Choose Us
            </h2>
            <div className="h-1 w-24 bg-brand-blue mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We treat Dover projects as if they were our own properties. That means honest advice,
              realistic timescales and workmanship that we are proud to put our name to.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team has delivered projects across Dover for many years, building strong
              relationships with local suppliers and professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">Local Knowledge</p>
              <p className="text-sm text-gray-700">
                Experience working with Dover&apos;s varied housing stock and terrain.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">Qualified Trades</p>
              <p className="text-sm text-gray-700">
                A stable team of trusted tradespeople accustomed to working together.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">Clear Paperwork</p>
              <p className="text-sm text-gray-700">
                Transparent quotations and written variations agreed before changes go ahead.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">
                East Kent Coverage
              </p>
              <p className="text-sm text-gray-700">
                Based in Deal and working across Dover and the wider East Kent area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue mb-3">
              Our Dover Project Process
            </h2>
            <div className="h-1 w-24 bg-brand-blue mx-auto mb-4" />
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              A clear, four-step approach to planning and delivering your building work in Dover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: '1. Consultation',
                text: 'We discuss your Dover property, goals and budget and suggest suitable options.'
              },
              {
                title: '2. Survey & Quote',
                text: 'We carry out a measured survey, review access and provide a detailed quotation.'
              },
              {
                title: '3. Pre-Construction',
                text: 'We agree programme dates, confirm any permissions and coordinate trades and suppliers.'
              },
              {
                title: '4. Construction & Aftercare',
                text: 'We build, keep you updated and remain available after completion for any questions.'
              }
            ].map((step, index) => (
              <div
                key={step.title}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <ClipboardList className="w-6 h-6 text-brand-blue" />
                  <span className="text-xs font-bold uppercase text-gray-400">Step {index + 1}</span>
                </div>
                <h3 className="text-sm font-bold uppercase text-brand-darkBlue mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-700">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-7 h-7 text-brand-blue" />
            <h2 className="text-3xl font-bold uppercase text-brand-darkBlue">
              Dover Builders – FAQs
            </h2>
          </div>
          <div className="h-1 w-20 bg-brand-blue mb-6" />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-slate-50 rounded-lg border border-gray-100 p-5">
                <h3 className="text-lg font-bold text-brand-darkBlue mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">
              Still have questions about building work in Dover?
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-full bg-brand-blue text-white px-8 py-3 text-sm font-bold uppercase tracking-wide lg:hover:bg-brand-darkBlue transition-colors shadow-md"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Other areas internal links */}
      <section className="py-12 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold uppercase text-brand-darkBlue mb-4">
            Builders in Other East Kent Towns
          </h2>
          <p className="text-gray-700 mb-6">
            Alongside Dover, we also work in the following locations:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {otherAreas.map((area) => (
              <Link
                key={area.path}
                to={area.path}
                className="inline-flex items-center rounded-full border border-brand-blue px-4 py-2 text-xs sm:text-sm font-semibold text-brand-darkBlue lg:hover:bg-brand-blue lg:hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 mr-2" />
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-brand-blue text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-4">
            Planning Building Work in Dover?
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed opacity-95 mb-6">
            Tell us about your Dover property and we&apos;ll provide straightforward advice and a
            clear quotation for the work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-brand-darkBlue px-10 py-3 text-sm sm:text-base font-bold uppercase tracking-wide shadow-lg lg:hover:bg-brand-darkBlue lg:hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              Request a Quote
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border-2 border-white px-10 py-3 text-sm sm:text-base font-bold uppercase tracking-wide lg:hover:bg-white lg:hover:text-brand-darkBlue transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};


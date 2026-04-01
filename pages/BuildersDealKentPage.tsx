import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Hammer, Building, ClipboardList, HelpCircle, MapPin, Phone } from 'lucide-react';

export const BuildersDealKentPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Builders in Deal, Kent | M E Stewart Building Contractors Ltd';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Trusted builders in Deal, Kent. M E Stewart Building Contractors Ltd deliver house extensions, home renovations and structural building work across Deal and the surrounding East Kent area.'
      );
    }

    const canonicalHref = 'https://mestewartbuildingcontractorsltd.uk/builders-deal-kent';
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
      question: 'Do you only work in Deal town centre?',
      answer:
        'No. We are based in Deal but regularly work across Walmer, Sholden, Upper Deal, Lower Deal and nearby villages. If you are in the CT14 or surrounding East Kent area, we are happy to quote.'
    },
    {
      question: 'Can you help with planning permission for an extension in Deal?',
      answer:
        'Yes. We regularly handle extensions in Deal and can coordinate drawings, structural calculations and Building Control approvals. We work in line with Dover District Council planning guidance.'
    },
    {
      question: 'Do you offer itemised quotations?',
      answer:
        'Yes. For every home renovation or house extension in Deal we provide a clear, itemised quotation so you know exactly what is included before work begins.'
    },
    {
      question: 'Are you fully insured?',
      answer:
        'Yes. M E Stewart Building Contractors Ltd carry full public liability insurance and appropriate cover for domestic building projects throughout Deal and East Kent.'
    }
  ];

  const otherAreas = [
    { name: 'Dover, Kent', path: '/builders-dover-kent' },
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
              Local Builders in Deal, Kent
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase mb-4">
            Builders in Deal, Kent
          </h1>
          <div className="h-1 w-28 bg-white mb-6" />
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl leading-relaxed opacity-95">
            M E Stewart Building Contractors Ltd are trusted builders in Deal, Kent delivering
            extensions, renovations and structural building works for homeowners across the town and
            wider East Kent coastline.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-brand-darkBlue px-8 py-3 text-sm sm:text-base font-bold uppercase tracking-wide shadow-lg lg:hover:bg-brand-darkBlue lg:hover:text-white transition-colors"
            >
              Get a Quote in Deal
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
            Deal-Based Building Contractors You Can Trust
          </h2>
          <div className="h-1 w-20 bg-brand-blue mb-6" />
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            From Georgian townhouses near Deal seafront to post-war family homes in residential
            streets, our team understands how Deal properties are built and what is required to
            improve them properly. We combine local knowledge with nearly three decades of hands-on
            experience to deliver work that feels right in the context of the town.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you are planning a kitchen extension in Upper Deal, a loft conversion overlooking
            the Channel, or a full house refurbishment near Deal Castle, we manage the entire
            process from initial design conversation through to completion.
          </p>
        </div>
      </section>

      {/* Services in Deal */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue mb-3">
              Building Services in Deal, Kent
            </h2>
            <div className="h-1 w-24 bg-brand-blue mx-auto mb-4" />
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Full-service builders for extensions, refurbishments and structural work across Deal
              and the CT14 postcode.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <Home className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-brand-darkBlue mb-2">
                House Extensions in Deal
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Single and two-storey house extensions for terraced and semi-detached homes around
                Deal, carefully designed to feel like part of the original property.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Rear kitchen-diner extensions</li>
                <li>• Side-return extensions to maximise narrow plots</li>
                <li>• Wrap-around extensions for growing families</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <Hammer className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-brand-darkBlue mb-2">
                Home Renovations & Refurbishments
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                From complete internal reconfigurations to upgrading tired kitchens and bathrooms,
                we deliver thoughtful home renovations across Deal.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Full-property refurbishments</li>
                <li>• Kitchen and bathroom upgrades</li>
                <li>• Layout changes and structural openings</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <Building className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-brand-darkBlue mb-2">
                Structural & Building Work
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Practical, safety-first structural work for Deal homes, carried out in coordination
                with structural engineers and Building Control.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• RSJ installation and wall removal</li>
                <li>• Foundations, drainage and groundworks</li>
                <li>• Damp-proofing and remedial works</li>
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
              Why Choose Us as Your Deal Builders?
            </h2>
            <div className="h-1 w-24 bg-brand-blue mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Choosing a builder is a big decision. Our work in Deal is built on long-standing
              local relationships, transparent communication and craftsmanship that stands the test
              of time.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are on site when we say we will be, keep neighbours informed, and leave properties
              clean and safe at the end of each day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">Local Expertise</p>
              <p className="text-sm text-gray-700">
                Nearly 30 years working on Deal properties of all ages and styles.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">
                Clear Communication
              </p>
              <p className="text-sm text-gray-700">
                Regular updates, a single point of contact and itemised paperwork.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">Quality Trades</p>
              <p className="text-sm text-gray-700">
                Established team of trusted tradespeople who know how we work.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">East Kent Focus</p>
              <p className="text-sm text-gray-700">
                Focused on Deal and surrounding East Kent towns, not spread nationwide.
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
              How We Deliver Projects in Deal
            </h2>
            <div className="h-1 w-24 bg-brand-blue mx-auto mb-4" />
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              A straightforward, structured process designed to keep your project on track and your
              home liveable wherever possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: '1. Initial Conversation',
                text: 'We discuss your plans, budget and timescales and advise on feasibility for your Deal property.'
              },
              {
                title: '2. Site Visit & Quote',
                text: 'We inspect the property, confirm details on site and provide a detailed written quotation.'
              },
              {
                title: '3. Planning & Preparation',
                text: 'Where required, we support drawings, structural calculations and Building Control notifications.'
              },
              {
                title: '4. Build & Handover',
                text: 'Work is scheduled, managed and completed with regular updates until final sign-off.'
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
              Deal Builders – FAQs
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
              Have a question about a project in Deal that is not covered here?
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-full bg-brand-blue text-white px-8 py-3 text-sm font-bold uppercase tracking-wide lg:hover:bg-brand-darkBlue transition-colors shadow-md"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* Other areas internal links */}
      <section className="py-12 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold uppercase text-brand-darkBlue mb-4">
            Builders Across East Kent
          </h2>
          <p className="text-gray-700 mb-6">
            As well as Deal, we also provide local building services in:
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
            Ready to Plan Your Building Project in Deal?
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed opacity-95 mb-6">
            Share your ideas and we&apos;ll provide clear, practical advice on the best way forward
            for your Deal property.
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


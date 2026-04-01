import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Hammer, Building, ClipboardList, HelpCircle, MapPin, Phone } from 'lucide-react';

export const BuildersThanetKentPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Builders in Thanet, Kent | M E Stewart Building Contractors Ltd';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Experienced builders covering Thanet, Kent. House extensions, home renovations and structural building work across Ramsgate, Broadstairs, Margate and the wider Thanet area.'
      );
    }

    const canonicalHref = 'https://mestewartbuildingcontractorsltd.uk/builders-thanet-kent';
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
      question: 'Which parts of Thanet do you work in?',
      answer:
        'We regularly work across the Thanet area, including Ramsgate, Broadstairs, Margate and nearby villages. If you are unsure whether your property falls within our catchment, please get in touch.'
    },
    {
      question: 'Do you handle both small and large projects?',
      answer:
        'Yes. We take on a range of work from modest refurbishments and structural alterations through to full house extensions and multi-room renovations.'
    },
    {
      question: 'Can you work with my existing architect or designer?',
      answer:
        'We are very happy to collaborate with your chosen architect, designer or engineer, or to introduce trusted professionals we already know in the Thanet and East Kent area.'
    },
    {
      question: 'Do you provide written guarantees?',
      answer:
        'Yes. We stand behind our workmanship and provide appropriate guarantees for the building work we deliver.'
    }
  ];

  const otherAreas = [
    { name: 'Deal, Kent', path: '/builders-deal-kent' },
    { name: 'Dover, Kent', path: '/builders-dover-kent' },
    { name: 'Ramsgate, Kent', path: '/builders-ramsgate-kent' },
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
              Local Builders Covering Thanet, Kent
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase mb-4">
            Builders in Thanet, Kent
          </h1>
          <div className="h-1 w-28 bg-white mb-6" />
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl leading-relaxed opacity-95">
            M E Stewart Building Contractors Ltd deliver house extensions, refurbishments and
            structural building work across the Thanet district, including Ramsgate, Margate and
            Broadstairs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-brand-darkBlue px-8 py-3 text-sm sm:text-base font-bold uppercase tracking-wide shadow-lg lg:hover:bg-brand-darkBlue lg:hover:text-white transition-colors"
            >
              Get a Thanet Quote
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
            Building Contractors for the Thanet District
          </h2>
          <div className="h-1 w-20 bg-brand-blue mb-6" />
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            From seafront apartments in Margate to family homes in Broadstairs and Ramsgate, we work
            across the Thanet district delivering well-organised building projects with a focus on
            quality and communication.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We understand the demands of coastal locations, tourism and parking constraints, and we
            plan works accordingly to minimise disruption for homeowners and neighbours.
          </p>
        </div>
      </section>

      {/* Services in Thanet */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue mb-3">
              Building Services Across Thanet, Kent
            </h2>
            <div className="h-1 w-24 bg-brand-blue mx-auto mb-4" />
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Comprehensive domestic building services delivered across the Thanet area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <Home className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-brand-darkBlue mb-2">
                House Extensions in Thanet
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Extensions designed to suit coastal and suburban properties, adding light and space
                where it is needed most.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Rear and wrap-around extensions</li>
                <li>• Kitchen-diner enlargements</li>
                <li>• Extensions for additional bedrooms or home offices</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <Hammer className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-brand-darkBlue mb-2">
                Home Renovations & Refurbishments
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Internal reconfigurations, refurbishments and upgrades for homes across Ramsgate,
                Margate and Broadstairs.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Whole-home refurbishments</li>
                <li>• Upgraded kitchens and bathrooms</li>
                <li>• Improved storage and layout planning</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <Building className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-brand-darkBlue mb-2">
                Structural & Remedial Works
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Structural alterations and remedial work carried out in line with professional
                designs and local regulations.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• RSJs and steelwork</li>
                <li>• Masonry repairs and pointing</li>
                <li>• Damp and movement investigations</li>
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
              Why Thanet Clients Trust Us
            </h2>
            <div className="h-1 w-24 bg-brand-blue mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our work in Thanet is built on recommendation and repeat business. We aim to be the
              first builders you call when you or your friends need help with a project.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide clear advice, keep sites tidy and safe, and finish projects to a standard
              we are happy to showcase.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">
                East Kent Specialists
              </p>
              <p className="text-sm text-gray-700">
                A focused geographic area means we can respond quickly and keep travel sensible.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">Organised Projects</p>
              <p className="text-sm text-gray-700">
                Structured programmes, coordinated trades and a single point of contact.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">Quality Workmanship</p>
              <p className="text-sm text-gray-700">
                Practical, neat and durable building work from an experienced team.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">
                Transparent Pricing
              </p>
              <p className="text-sm text-gray-700">
                Itemised quotations with clear scope, so you understand what is included.
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
              Our Thanet Project Process
            </h2>
            <div className="h-1 w-24 bg-brand-blue mx-auto mb-4" />
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              A clearly defined process to keep your Thanet project on track from enquiry to
              completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: '1. Enquiry',
                text: 'You share your ideas, photos or plans and we discuss options and timescales.'
              },
              {
                title: '2. Site Visit',
                text: 'We visit your Thanet property to understand access, structure and local context.'
              },
              {
                title: '3. Proposal',
                text: 'We provide a detailed, written quotation and agree any phasing or preparatory work.'
              },
              {
                title: '4. Construction',
                text: 'We manage the build with regular updates, culminating in a tidy, signed-off handover.'
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
              Thanet Builders – FAQs
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
              Have a project in the Thanet area you would like to discuss?
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-full bg-brand-blue text-white px-8 py-3 text-sm font-bold uppercase tracking-wide lg:hover:bg-brand-darkBlue transition-colors shadow-md"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* Other areas internal links */}
      <section className="py-12 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold uppercase text-brand-darkBlue mb-4">
            Builders in Neighbouring Areas
          </h2>
          <p className="text-gray-700 mb-6">
            We also provide local building services in the following East Kent locations:
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
            Ready to Plan Your Project in Thanet?
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed opacity-95 mb-6">
            Tell us about your home, and we&apos;ll provide clear, practical guidance on the best
            way forward.
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


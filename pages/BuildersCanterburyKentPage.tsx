import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Hammer, Building, ClipboardList, HelpCircle, MapPin, Phone } from 'lucide-react';

export const BuildersCanterburyKentPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Builders in Canterbury, Kent | M E Stewart Building Contractors Ltd';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Experienced builders in Canterbury, Kent. Quality house extensions, home renovations and structural building works for period and modern homes across Canterbury and East Kent.'
      );
    }

    const canonicalHref = 'https://mestewartbuildingcontractorsltd.uk/builders-canterbury-kent';
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
      question: 'Do you work on period homes in Canterbury?',
      answer:
        'Yes. We are experienced working on older properties and are mindful of conservation considerations, structural requirements and sympathetic detailing.'
    },
    {
      question: 'Can you help with building regulations and approvals?',
      answer:
        'We can guide you through the process, work with your professional team and liaise with Building Control as required for your Canterbury project.'
    },
    {
      question: 'Do you undertake work for landlords and investors?',
      answer:
        'Yes. We regularly refurbish and upgrade properties for landlords and investors across Canterbury and East Kent, working to agreed timescales and budgets.'
    },
    {
      question: 'How far from Canterbury will you travel?',
      answer:
        'We are based in Deal and typically work across East Kent. If your property is in or around Canterbury, we will usually be able to help.'
    }
  ];

  const otherAreas = [
    { name: 'Deal, Kent', path: '/builders-deal-kent' },
    { name: 'Dover, Kent', path: '/builders-dover-kent' },
    { name: 'Ramsgate, Kent', path: '/builders-ramsgate-kent' },
    { name: 'Thanet, Kent', path: '/builders-thanet-kent' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={24} className="text-blue-300" />
            <p className="text-sm sm:text-base font-semibold uppercase tracking-wide">
              Local Builders in Canterbury, Kent
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase mb-4">
            Builders in Canterbury, Kent
          </h1>
          <div className="h-1 w-28 bg-white mb-6" />
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl leading-relaxed opacity-95">
            M E Stewart Building Contractors Ltd provide carefully managed building services in
            Canterbury, from house extensions and refurbishments to structural improvements.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-brand-darkBlue px-8 py-3 text-sm sm:text-base font-bold uppercase tracking-wide shadow-lg lg:hover:bg-brand-darkBlue lg:hover:text-white transition-colors"
            >
              Get a Canterbury Quote
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
            Building Contractors for Canterbury Homes
          </h2>
          <div className="h-1 w-20 bg-brand-blue mb-6" />
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Canterbury offers a mix of historic streets, twentieth-century housing and newer
            developments. We tailor our approach to the age, style and setting of each property so
            that extensions and refurbishments feel appropriate and add genuine value.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From opening up ground floors to create lighter living spaces to upgrading rental
            properties between tenancies, we bring an organised, considerate approach to each
            project.
          </p>
        </div>
      </section>

      {/* Services in Canterbury */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue mb-3">
              Building Services in Canterbury, Kent
            </h2>
            <div className="h-1 w-24 bg-brand-blue mx-auto mb-4" />
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Professional building services for homeowners and landlords across Canterbury and
              surrounding villages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <Home className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-brand-darkBlue mb-2">
                House Extensions in Canterbury
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Extensions designed to complement existing homes and make everyday life more
                comfortable and practical.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Rear and side extensions</li>
                <li>• Kitchen and family-room additions</li>
                <li>• Extra bedrooms, bathrooms and utility space</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <Hammer className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-brand-darkBlue mb-2">
                Home Renovations & Refurbishments
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Carefully planned refurbishments to improve function, comfort and appearance, while
                respecting each building&apos;s character.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Internal reconfigurations</li>
                <li>• Kitchen and bathroom modernisations</li>
                <li>• Upgrade works between tenancies</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <Building className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-brand-darkBlue mb-2">
                Structural & Improvement Works
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Structural modifications and improvement works carried out in line with engineering
                designs and regulations.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Structural openings and steel installation</li>
                <li>• Remedial works and repairs</li>
                <li>• Improved insulation and energy performance</li>
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
              Why Canterbury Clients Choose Us
            </h2>
            <div className="h-1 w-24 bg-brand-blue mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We bring the same organised, quality-driven approach to Canterbury projects as we do
              to our work across East Kent. Our aim is to make the building process as smooth and
              predictable as possible.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From the first conversation to final sign-off, you&apos;ll know who is responsible,
              what is happening next and how the project is progressing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">Experienced Team</p>
              <p className="text-sm text-gray-700">
                A well-established team used to working together on complex projects.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">Clear Communication</p>
              <p className="text-sm text-gray-700">
                Regular updates, prompt responses and a practical, straightforward tone.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">Quality Standards</p>
              <p className="text-sm text-gray-700">
                Work carried out to a standard we are happy to be associated with long-term.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">
                East Kent Coverage
              </p>
              <p className="text-sm text-gray-700">
                Based in Deal, regularly working in Canterbury and surrounding areas.
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
              Our Canterbury Project Process
            </h2>
            <div className="h-1 w-24 bg-brand-blue mx-auto mb-4" />
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              A clear framework for planning and delivering building projects in Canterbury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: '1. Initial Discussion',
                text: 'We talk through your ideas, requirements and timescales and outline possible approaches.'
              },
              {
                title: '2. Site Visit & Quotation',
                text: 'We survey the property, review access and provide a detailed, written quotation.'
              },
              {
                title: '3. Planning & Preparation',
                text: 'We coordinate any drawings, approvals and scheduling to prepare for a smooth start on site.'
              },
              {
                title: '4. Construction & Completion',
                text: 'We deliver the building work with regular updates and a tidy handover at the end.'
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
              Canterbury Builders – FAQs
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
              Have a question about a building project in Canterbury?
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
            Builders in Nearby East Kent Towns
          </h2>
          <p className="text-gray-700 mb-6">
            We also carry out building work in the following locations:
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
            Planning Building Work in Canterbury?
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed opacity-95 mb-6">
            Share your plans with us and we&apos;ll provide practical recommendations and a clear
            quotation.
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


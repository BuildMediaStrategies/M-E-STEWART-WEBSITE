import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Hammer, Building, ClipboardList, HelpCircle, MapPin, Phone } from 'lucide-react';

export const BuildersRamsgateKentPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Builders in Ramsgate, Kent | M E Stewart Building Contractors Ltd';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Professional builders in Ramsgate, Kent. House extensions, home renovations and structural works for period terraces and modern homes across Ramsgate and Thanet.'
      );
    }

    const canonicalHref = 'https://mestewartbuildingcontractorsltd.uk/builders-ramsgate-kent';
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
      question: 'Can you work on period properties near Ramsgate seafront?',
      answer:
        'Yes. We are experienced in working on period terraces and townhouses, carefully planning structural changes so they respect the character of the property and comply with regulations.'
    },
    {
      question: 'Do you undertake loft conversions in Ramsgate?',
      answer:
        'We can assess your roof structure, advise on dormer or roof-light options and deliver complete loft conversions, including stairs, insulation and finishes.'
    },
    {
      question: 'Can you coordinate with architects and engineers?',
      answer:
        'Yes. We can work with your chosen professionals or introduce trusted contacts we regularly collaborate with on Ramsgate and Thanet projects.'
    },
    {
      question: 'Are you able to work on occupied homes?',
      answer:
        'Most of our projects are carried out while clients are in residence. We plan phases to maintain essential services and keep the site as tidy and safe as possible.'
    }
  ];

  const otherAreas = [
    { name: 'Deal, Kent', path: '/builders-deal-kent' },
    { name: 'Dover, Kent', path: '/builders-dover-kent' },
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
              Local Builders in Ramsgate, Kent
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase mb-4">
            Builders in Ramsgate, Kent
          </h1>
          <div className="h-1 w-28 bg-white mb-6" />
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl leading-relaxed opacity-95">
            M E Stewart Building Contractors Ltd carry out extensions, refurbishments and structural
            building work across Ramsgate and the wider Thanet coastline.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-brand-darkBlue px-8 py-3 text-sm sm:text-base font-bold uppercase tracking-wide shadow-lg lg:hover:bg-brand-darkBlue lg:hover:text-white transition-colors"
            >
              Get a Ramsgate Quote
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
            Building Contractors for Ramsgate Homes
          </h2>
          <div className="h-1 w-20 bg-brand-blue mb-6" />
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Ramsgate&apos;s Victorian villas, seafront apartments and suburban estates each come
            with their own challenges. We plan every project with an understanding of local building
            styles, access constraints and the impact of coastal weather.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From reconfiguring ground floors to maximise sea views, to extending family homes in
            quieter residential roads, we bring the same level of care and organisation to every
            Ramsgate project.
          </p>
        </div>
      </section>

      {/* Services in Ramsgate */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-brand-darkBlue mb-3">
              Building Services in Ramsgate, Kent
            </h2>
            <div className="h-1 w-24 bg-brand-blue mx-auto mb-4" />
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Domestic building services for homeowners and landlords across Ramsgate and Thanet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <Home className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-brand-darkBlue mb-2">
                House Extensions in Ramsgate
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Bright, practical extensions that add value and usable space to Ramsgate homes.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Rear and side extensions</li>
                <li>• Kitchen-diner expansions</li>
                <li>• Two-storey additions where appropriate</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <Hammer className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-brand-darkBlue mb-2">
                Home Renovations & Refurbishments
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Upgrading internal layouts, finishes and services to bring older properties up to
                modern standards.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Whole-house refurbishments</li>
                <li>• New kitchens and bathrooms</li>
                <li>• Improved insulation and comfort</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <Building className="w-8 h-8 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-brand-darkBlue mb-2">
                Structural & Coastal Repairs
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Structural work and repairs carried out with a clear emphasis on durability and
                safety in a coastal environment.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Structural openings and steelwork</li>
                <li>• Masonry and external repairs</li>
                <li>• Damp, water ingress and movement issues</li>
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
              Why Choose Us for Ramsgate Projects?
            </h2>
            <div className="h-1 w-24 bg-brand-blue mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We understand that inviting builders into your home is a big decision. Our approach is
              based on respect for your property, realistic advice and consistent, high-quality
              workmanship.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From the first meeting to final handover, you will deal with a team that listens,
              communicates clearly and takes pride in the finished result.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">Coastal Experience</p>
              <p className="text-sm text-gray-700">
                Experience dealing with coastal exposure, wind and salt air impact on buildings.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">Attention to Detail</p>
              <p className="text-sm text-gray-700">
                Careful finishing work that helps your property look good for years to come.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">Reliable Scheduling</p>
              <p className="text-sm text-gray-700">
                Realistic programmes with regular updates, so you know what is happening when.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
              <p className="text-sm font-bold uppercase text-brand-blue mb-2">East Kent Team</p>
              <p className="text-sm text-gray-700">
                Based in Deal, frequently working in Ramsgate, Thanet and surrounding towns.
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
              Our Ramsgate Project Process
            </h2>
            <div className="h-1 w-24 bg-brand-blue mx-auto mb-4" />
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              A simple, four-step process that keeps your Ramsgate building project under control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: '1. Consultation',
                text: 'We discuss your Ramsgate property, ideas and timescales and provide initial guidance.'
              },
              {
                title: '2. Survey & Quote',
                text: 'We visit site, review access and structure, then produce a detailed quotation.'
              },
              {
                title: '3. Planning & Design',
                text: 'We work with your professional team or ours to finalise drawings and approvals.'
              },
              {
                title: '4. Build & Handover',
                text: 'We deliver the works, manage trades on site and hand over a clean, finished project.'
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
              Ramsgate Builders – FAQs
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
              Have a question about a Ramsgate project you would like to discuss?
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
            Builders Across East Kent
          </h2>
          <p className="text-gray-700 mb-6">
            Alongside Ramsgate, we also work in the following areas:
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
            Planning Building Work in Ramsgate?
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed opacity-95 mb-6">
            Share your plans with us and we&apos;ll provide clear pricing and practical advice for
            your Ramsgate property.
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


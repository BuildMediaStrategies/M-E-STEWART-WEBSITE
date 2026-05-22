import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  LayoutGrid,
  Ruler,
  ClipboardList,
  CheckCircle,
  HelpCircle,
  MapPin,
  Phone
} from 'lucide-react';
import { HubSpotForm } from '../components/HubSpotForm';

const galleryImages = [
  {
    src: '/assets/WhatsApp Image 2026-02-25 at 21.27.42.jpeg',
    alt: 'House extension creating a bright open-plan living space in East Kent'
  },
  {
    src: '/assets/WhatsApp Image 2026-02-25 at 21.27.42 (1).jpeg',
    alt: 'Single storey extension with large patio doors added to a Kent home'
  },
  {
    src: '/assets/WhatsApp Image 2026-02-25 at 21.27.42 (2).jpeg',
    alt: 'Rear house extension with brickwork and glazed doors in East Kent'
  },
  {
    src: '/assets/WhatsApp Image 2026-02-25 at 21.27.42 (3).jpeg',
    alt: 'House extension in progress showing structure and roof work in Kent'
  },
  {
    src: '/assets/WhatsApp Image 2026-02-25 at 21.32.03.jpeg',
    alt: 'Finished rear house extension with new windows and external finishes in East Kent'
  },
  {
    src: '/assets/WhatsApp Image 2026-02-25 at 21.32.03 (1).jpeg',
    alt: 'Wraparound style extension adding extra space to a Kent property'
  },
  {
    src: '/assets/WhatsApp Image 2026-02-25 at 21.32.03 (2).jpeg',
    alt: 'Side return extension widening the ground floor of a home in East Kent'
  }
];

export const HouseExtensionsPage: React.FC = () => {
  useEffect(() => {
    const title = 'House Extensions Deal, Kent | M E Stewart Building Contractors Ltd';
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Premium house extensions in Deal, Kent by M E Stewart Building Contractors Ltd. Single and double storey, rear, side return, wraparound and kitchen extensions across Deal and East Kent.'
      );
    }

    const canonicalHref = 'https://mestewartbuildingcontractorsltd.uk/house-extensions';
    const canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', canonicalHref);
    document.head.appendChild(canonicalLink);

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'House Extensions in Deal, Kent',
      description:
        'Design and construction of single and double storey house extensions, rear and side return extensions, wraparound and kitchen extensions for homes in Deal and East Kent.',
      areaServed: [
        { '@type': 'City', name: 'Deal, Kent' },
        'Dover, Kent',
        'Ramsgate, Kent',
        'Thanet, Kent',
        'Canterbury, Kent',
        'East Kent'
      ],
      provider: {
        '@type': 'LocalBusiness',
        name: 'M E Stewart Building Contractors Ltd',
        url: 'https://mestewartbuildingcontractorsltd.uk',
        telephone: '07738520388',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Deal',
          addressRegion: 'Kent',
          addressCountry: 'GB'
        }
      }
    };

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify(schema);
    document.head.appendChild(schemaScript);

    return () => {
      document.head.removeChild(canonicalLink);
      document.head.removeChild(schemaScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={22} className="text-blue-300" />
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide">
              House Extensions in Deal &amp; East Kent
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4">
            House Extensions Deal, Kent
          </h1>
          <div className="h-1 w-24 bg-white mb-6" />
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed opacity-95 mb-6">
            M E Stewart Building Contractors Ltd design and build high quality house extensions in
            Deal, Kent and across East Kent. From kitchen extensions to full wraparound projects,
            we create practical, bright spaces that change how your home works day to day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-brand-darkBlue px-8 py-3 text-sm sm:text-base font-bold uppercase tracking-wide shadow-lg lg:hover:bg-brand-darkBlue lg:hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Request a House Extension Quote
            </Link>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wide lg:hover:bg-white lg:hover:text-brand-darkBlue transition-colors"
              >
                View Recent Extension Projects
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wide lg:hover:bg-white lg:hover:text-brand-darkBlue transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-brand-darkBlue mb-4">
            Extend Your Home Instead of Moving
          </h2>
          <div className="h-1 w-20 bg-brand-blue mb-6" />
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            For many families in Deal and East Kent, extending makes more sense than moving. A
            well-planned house extension gives you more space without the cost, stress and
            uncertainty of changing area, schools or commutes.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            We focus on practical, well-designed extensions that make everyday living easier:
            brighter kitchens, open-plan family rooms, extra bedrooms or home office space, and
            layouts that simply feel better to live in.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            A quality house extension can also add significant value to your property when carried
            out properly, with good detailing and attention to structural performance, drainage and
            insulation.
          </p>
        </div>
      </section>

      {/* Extension types */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-brand-darkBlue mb-3">
              Types of House Extensions We Build
            </h2>
            <div className="h-1 w-24 bg-brand-blue mx-auto mb-4" />
            <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto">
              Tailored extension solutions for homes in Deal, Dover, Ramsgate, Thanet, Canterbury
              and the wider East Kent region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
              <Home className="w-7 h-7 text-brand-blue mb-3" />
              <h3 className="text-lg font-bold uppercase text-brand-darkBlue mb-2">
                Single Storey Extensions
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ideal for kitchen and dining extensions, playrooms and ground floor living space.
                Popular for homes in Deal and surrounding East Kent villages.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
              <Home className="w-7 h-7 text-brand-blue mb-3" />
              <h3 className="text-lg font-bold uppercase text-brand-darkBlue mb-2">
                Double Storey Extensions
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Add bedrooms and bathrooms upstairs while extending living space below. Carefully
                designed to balance proportions and comply with planning guidance.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
              <LayoutGrid className="w-7 h-7 text-brand-blue mb-3" />
              <h3 className="text-lg font-bold uppercase text-brand-darkBlue mb-2">
                Rear Extensions
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Extensions to the back of your property, opening onto the garden. Perfect for
                open-plan kitchen-diners and improving natural light.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
              <LayoutGrid className="w-7 h-7 text-brand-blue mb-3" />
              <h3 className="text-lg font-bold uppercase text-brand-darkBlue mb-2">
                Side Return Extensions
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Make use of underused side passages, particularly effective for terraced properties
                in Deal, Dover and Ramsgate.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
              <Ruler className="w-7 h-7 text-brand-blue mb-3" />
              <h3 className="text-lg font-bold uppercase text-brand-darkBlue mb-2">
                Wraparound Extensions
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Combine rear and side extensions to create generous, flexible ground floor layouts
                with direct garden access.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
              <Home className="w-7 h-7 text-brand-blue mb-3" />
              <h3 className="text-lg font-bold uppercase text-brand-darkBlue mb-2">
                Kitchen &amp; Open-Plan Extensions
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Create modern open-plan kitchen, dining and living spaces with improved light,
                storage and connection to the garden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-brand-darkBlue mb-4">
              Why Choose Us for Your House Extension?
            </h2>
            <div className="h-1 w-24 bg-brand-blue mb-6" />
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              As local builders based near Deal, we understand East Kent homes, planning
              expectations and the practicalities of building extensions in lived-in properties.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Our focus is on delivering structurally sound, well-finished extensions with clear
              communication from first enquiry to completion.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-brand-blue mt-0.5" />
              <div>
                <p className="text-sm font-bold uppercase text-brand-darkBlue mb-1">
                  Local, Trusted Builder
                </p>
                <p className="text-sm text-gray-700">
                  Long-standing reputation across Deal and East Kent for reliable, high quality
                  extension work.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-brand-blue mt-0.5" />
              <div>
                <p className="text-sm font-bold uppercase text-brand-darkBlue mb-1">
                  Quality Workmanship
                </p>
                <p className="text-sm text-gray-700">
                  Experienced tradespeople, careful detailing and a finish we are happy to put our
                  name to.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-brand-blue mt-0.5" />
              <div>
                <p className="text-sm font-bold uppercase text-brand-darkBlue mb-1">
                  Honest Communication
                </p>
                <p className="text-sm text-gray-700">
                  Clear quotations, straightforward advice and regular updates throughout your
                  project.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-100 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-brand-blue mt-0.5" />
              <div>
                <p className="text-sm font-bold uppercase text-brand-darkBlue mb-1">
                  Structured Delivery
                </p>
                <p className="text-sm text-gray-700">
                  A clear programme, coordinated trades and a clean, professional approach on site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-brand-darkBlue mb-3">
              Our House Extension Process
            </h2>
            <div className="h-1 w-24 bg-brand-blue mx-auto mb-4" />
            <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto">
              A structured process designed to make your extension project as straightforward and
              predictable as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5">
            {[
              {
                step: '1',
                title: 'Initial Discussion',
                text: 'We discuss your aims, budget and timescales and outline suitable extension options for your home.'
              },
              {
                step: '2',
                title: 'Site Visit & Quote',
                text: 'We visit your property in Deal or East Kent, assess the structure and access and prepare a detailed quotation.'
              },
              {
                step: '3',
                title: 'Planning & Preparation',
                text: 'We help with plans, structural design and Building Control requirements, and agree a realistic programme.'
              },
              {
                step: '4',
                title: 'Construction Phase',
                text: 'Our team carries out the build, keeping disruption to a minimum and communicating regularly on progress.'
              },
              {
                step: '5',
                title: 'Completion & Handover',
                text: 'We complete finishing touches, carry out snagging and hand over a clean, ready-to-use space.'
              }
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-xl shadow-md p-5 border border-gray-100 flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <ClipboardList className="w-6 h-6 text-brand-blue" />
                  <span className="text-xs font-bold uppercase text-gray-400">Step {item.step}</span>
                </div>
                <h3 className="text-sm font-bold uppercase text-brand-darkBlue mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-brand-darkBlue mb-3">
              Recent House Extension Work
            </h2>
            <div className="h-1 w-24 bg-brand-blue mx-auto mb-4" />
            <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto">
              A selection of recent house extension projects completed for homeowners in Deal and
              across East Kent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {galleryImages.map((image, index) => (
              <figure
                key={image.src}
                className="relative w-full overflow-hidden rounded-xl shadow-lg bg-slate-100"
              >
                <div className="w-full h-56 sm:h-64 md:h-64 lg:h-56 xl:h-64">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                </div>
                <figcaption className="px-3 py-3 text-xs sm:text-sm text-gray-700 bg-white">
                  {image.alt}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center rounded-full bg-brand-blue text-white px-8 py-3 text-sm sm:text-base font-bold uppercase tracking-wide lg:hover:bg-brand-darkBlue transition-colors shadow-md"
            >
              View More Projects in Deal, Kent
            </Link>
          </div>
        </div>
      </section>

      {/* Local coverage / SEO */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-brand-darkBlue mb-4">
            House Extensions Across Deal &amp; East Kent
          </h2>
          <div className="h-1 w-24 bg-brand-blue mb-6" />
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Our primary focus is on house extension projects in Deal, Kent, where we have completed
            numerous single and double storey, rear and kitchen extensions for local homeowners.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            We also regularly deliver extensions in Dover, Ramsgate, Thanet and Canterbury, working
            across the East Kent area on everything from modest single storey additions to larger
            wraparound schemes.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            If you are planning an extension in Deal or nearby, you can learn more about our local
            services on our{' '}
            <Link to="/builders-deal-kent" className="text-brand-blue font-semibold lg:hover:underline">
              Builders in Deal, Kent
            </Link>{' '}
            page or our{' '}
            <Link
              to="/areas"
              className="text-brand-blue font-semibold lg:hover:underline"
            >
              Areas We Cover
            </Link>{' '}
            overview.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            For extensions in other East Kent towns, you can also visit our location pages for{' '}
            <Link
              to="/builders-dover-kent"
              className="text-brand-blue font-semibold lg:hover:underline"
            >
              Dover
            </Link>
            ,{' '}
            <Link
              to="/builders-ramsgate-kent"
              className="text-brand-blue font-semibold lg:hover:underline"
            >
              Ramsgate
            </Link>
            ,{' '}
            <Link
              to="/builders-thanet-kent"
              className="text-brand-blue font-semibold lg:hover:underline"
            >
              Thanet
            </Link>{' '}
            and{' '}
            <Link
              to="/builders-canterbury-kent"
              className="text-brand-blue font-semibold lg:hover:underline"
            >
              Canterbury
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-7 h-7 text-brand-blue" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-brand-darkBlue">
              House Extension FAQs
            </h2>
          </div>
          <div className="h-1 w-24 bg-brand-blue mb-6" />

          <div className="space-y-4">
            <div className="bg-slate-50 rounded-lg border border-gray-100 p-5">
              <h3 className="text-lg font-bold text-brand-darkBlue mb-2">
                How much does a house extension cost?
              </h3>
              <p className="text-sm text-gray-700">
                Costs vary depending on size, specification, access and structural requirements. As
                a guide, most single storey house extensions in Deal and East Kent are costed on a
                price per square metre. After a site visit we provide a detailed, itemised quotation
                so you can see exactly what is included.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg border border-gray-100 p-5">
              <h3 className="text-lg font-bold text-brand-darkBlue mb-2">
                Do I need planning permission for an extension?
              </h3>
              <p className="text-sm text-gray-700">
                Many smaller extensions fall under permitted development, but some projects will
                require full planning permission. We can advise what is likely to apply to your
                property and work alongside your designer or architect to ensure plans meet local
                requirements.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg border border-gray-100 p-5">
              <h3 className="text-lg font-bold text-brand-darkBlue mb-2">
                How long does a house extension take?
              </h3>
              <p className="text-sm text-gray-700">
                Timescales depend on the size and complexity of the extension. As a rough guide,
                many single storey extensions take from 10–16 weeks on site. We will always discuss
                timescales clearly at quotation stage and keep you updated during the build.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg border border-gray-100 p-5">
              <h3 className="text-lg font-bold text-brand-darkBlue mb-2">
                Can you help with kitchen and open-plan extensions?
              </h3>
              <p className="text-sm text-gray-700">
                Yes. A large proportion of our work involves kitchen extensions and creating
                open-plan living spaces. We can coordinate structural openings, steels, services and
                finishes to deliver a complete solution.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg border border-gray-100 p-5">
              <h3 className="text-lg font-bold text-brand-darkBlue mb-2">
                Do you cover Deal, Dover, Ramsgate, Thanet and Canterbury?
              </h3>
              <p className="text-sm text-gray-700">
                Yes. We are based in Deal, Kent and regularly build house extensions in Deal, Dover,
                Ramsgate, Thanet, Canterbury and surrounding East Kent towns and villages.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">
              If you have a question that is not covered here, please get in touch and we will be
              happy to help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-brand-blue text-white px-8 py-3 text-sm sm:text-base font-bold uppercase tracking-wide lg:hover:bg-brand-darkBlue transition-colors shadow-md"
            >
              Ask a Question About Extensions
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-brand-blue text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4">
            Ready to Discuss Your House Extension?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed opacity-95 mb-6">
            If you are serious about a house extension in Deal or the surrounding East Kent area,
            we would be pleased to talk through your plans and provide a clear, detailed quotation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-brand-darkBlue px-10 py-3 text-sm sm:text-base font-bold uppercase tracking-wide shadow-lg lg:hover:bg-brand-darkBlue lg:hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              Request a House Extension Quote
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border-2 border-white px-10 py-3 text-sm sm:text-base font-bold uppercase tracking-wide lg:hover:bg-white lg:hover:text-brand-darkBlue transition-colors"
            >
              View All Building Services
            </Link>
          </div>
          <div className="mt-8 bg-white text-brand-slate p-4 sm:p-6 rounded-2xl shadow-lg">
            <HubSpotForm />
          </div>
        </div>
      </section>
    </div>
  );
};

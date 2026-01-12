import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Wrench, MapPin, Phone, Mail } from 'lucide-react';

export const BuildersSholdenPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Best Builders in Sholden, Kent Near Me | M E Stewart Building Contractors';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert builders in Sholden, Kent. Home extensions, structural works & renovations. Serving Sholden village and surrounding areas. Free quotes. Call now.');
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://mestewartbuildingcontractorsltd.uk/#organization",
      "name": "M E Stewart Building Contractors LTD",
      "image": "https://mestewartbuildingcontractorsltd.uk/assets/logo.png",
      "description": "Trusted builders in Sholden, Kent providing extensions, renovations and structural building works",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Deal",
        "addressLocality": "Kent",
        "postalCode": "CT14",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "51.2156",
        "longitude": "1.4244"
      },
      "telephone": "07885930284",
      "email": "markstewart21@sky.com",
      "url": "https://mestewartbuildingcontractorsltd.uk",
      "priceRange": "££",
      "areaServed": [
        {
          "@type": "City",
          "name": "Sholden"
        },
        {
          "@type": "City",
          "name": "Deal"
        },
        {
          "@type": "City",
          "name": "Walmer"
        }
      ],
      "sameAs": []
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.text = JSON.stringify(schema);
    document.head.appendChild(scriptTag);

    return () => {
      document.head.removeChild(scriptTag);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-brand-blue">Home</Link> / <span className="text-brand-darkBlue font-semibold">Builders Sholden Kent</span>
        </nav>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-darkBlue mb-6 uppercase">
            Builders in Sholden, Kent
          </h1>

          {/* Opening Statement */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-brand-blue">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-4">
              <strong className="text-brand-darkBlue">M E Stewart Building Contractors</strong> are reliable local builders in Sholden, Kent, specializing in residential extensions, complete home renovations and structural building works across Sholden, Deal and Walmer. Based just 2 miles from Sholden village, we deliver professional building services with local expertise and a commitment to quality craftsmanship.
            </p>
            <p className="text-sm text-gray-600 italic">
              <strong>Latest update:</strong> Now actively delivering building projects across Deal, Walmer and Sholden in 2026.
            </p>
          </div>

          {/* Local Building Services Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-brand-darkBlue mb-6 flex items-center gap-3">
              <Home className="w-8 h-8 text-brand-blue" />
              Local Building Services in Sholden
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Sholden's quiet village setting northeast of Deal features a diverse housing stock—from post-war bungalows and semi-detached family homes to modern detached properties and characterful older cottages. Our building team understands the specific requirements of Sholden properties, from rural planning considerations to the practical challenges of working in established residential areas.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Located along Sandwich Road and the surrounding lanes, Sholden benefits from generous plot sizes and countryside proximity, making it ideal for home extensions and garden annexes. We work throughout Sholden village, from properties near The Sportsman pub to homes toward Great Mongeham, providing consistent quality whether you're extending a 1960s bungalow or renovating a period cottage.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Bungalow extension specialists</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Rural property experience</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Garden room construction</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Modern & traditional builds</p>
                </div>
              </div>
            </div>
          </section>

          {/* Extensions & Renovations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-brand-darkBlue mb-6 flex items-center gap-3">
              <Wrench className="w-8 h-8 text-brand-blue" />
              Home Extensions and Renovations
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Sholden homeowners frequently seek to maximize their property's potential through well-designed extensions. Whether adding extra living space to accommodate multi-generational families or creating dedicated home office space in garden studios, we provide complete project management from initial design consultation through Building Regulations sign-off.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Single storey rear extensions creating open plan kitchen-diners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Bungalow conversions adding first floor accommodation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Detached garden studios and home offices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Garage conversions for additional bedrooms or living space</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Complete house modernizations and refurbishments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Conservatory replacements with insulated roof systems</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Structural Works */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-brand-darkBlue mb-6">
              Structural and Domestic Building Works
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Structural building work forms the foundation of many Sholden renovation projects. Our services include steel beam installations (RSJs) for open plan conversions, foundations for extensions and garden buildings, damp proofing solutions, and structural repairs. All work is carried out in partnership with qualified structural engineers and meets current Building Regulations.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                From addressing settlement issues in older properties to installing new cavity wall insulation and upgrading thermal performance, we deliver code-compliant solutions backed by industry-standard warranties. Our methodical approach ensures minimal disruption to your Sholden home while maintaining the highest safety and quality standards throughout every build phase.
              </p>
            </div>
          </section>

          {/* Nearby Areas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-brand-darkBlue mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-brand-blue" />
              Trusted Builders Serving Nearby Areas
            </h2>
            <div className="bg-gradient-to-br from-brand-blue/5 to-brand-darkBlue/5 rounded-lg p-8 border border-brand-blue/20">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Operating from nearby Deal, we're perfectly positioned to serve Sholden and the surrounding villages with fast response times and genuine local knowledge. Our familiarity with East Kent building practices, local supplier networks, and regional planning requirements ensures efficient project delivery from concept to completion.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                We also provide building services in <Link to="/builders-deal" className="text-brand-blue font-semibold hover:underline">Deal</Link> and <Link to="/builders-walmer" className="text-brand-blue font-semibold hover:underline">Walmer</Link>, delivering consistent quality and customer care throughout the CT14 postcode area.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                  <span>Deal (2 miles)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                  <span>Walmer (3 miles)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                  <span>Great Mongeham (1 mile)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                  <span>Ripple (2 miles)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                  <span>Sandwich (4 miles)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                  <span>Worth (3 miles)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Contact NAP */}
          <section className="bg-brand-darkBlue text-white rounded-lg shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Get Your Free Building Quote in Sholden</h2>
            <p className="text-lg mb-8 leading-relaxed">
              Ready to start your building project? Contact M E Stewart Building Contractors today for a free, no-obligation quote. We serve homeowners throughout Deal, Walmer, Sholden and the surrounding Kent area.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-brand-blue" />
                <div>
                  <p className="text-sm text-gray-300">Phone</p>
                  <a href="tel:07885930284" className="text-xl font-bold hover:text-brand-blue transition-colors">07885 930284</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-brand-blue" />
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <a href="mailto:markstewart21@sky.com" className="text-xl font-bold hover:text-brand-blue transition-colors break-all">markstewart21@sky.com</a>
                </div>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-block bg-brand-blue px-8 py-4 text-lg font-bold uppercase rounded-full hover:bg-white hover:text-brand-darkBlue transition-all shadow-lg hover:shadow-xl"
            >
              Request a Quote
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

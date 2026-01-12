import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Wrench, MapPin, Phone, Mail } from 'lucide-react';

export const BuildersWalmerPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Best Builders in Walmer, Kent Near Me | M E Stewart Building Contractors';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional builders in Walmer, Kent. Extensions, loft conversions & home renovations. Serving Walmer Castle area & surrounding villages. Free quotes.');
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://mestewartbuildingcontractorsltd.uk/#organization",
      "name": "M E Stewart Building Contractors LTD",
      "image": "https://mestewartbuildingcontractorsltd.uk/assets/logo.png",
      "description": "Experienced builders in Walmer, Kent specializing in extensions, renovations and structural building works",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Deal",
        "addressLocality": "Kent",
        "postalCode": "CT14",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "51.2038",
        "longitude": "1.3869"
      },
      "telephone": "07885930284",
      "email": "markstewart21@sky.com",
      "url": "https://mestewartbuildingcontractorsltd.uk",
      "priceRange": "££",
      "areaServed": [
        {
          "@type": "City",
          "name": "Walmer"
        },
        {
          "@type": "City",
          "name": "Deal"
        },
        {
          "@type": "City",
          "name": "Sholden"
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
          <Link to="/" className="hover:text-brand-blue">Home</Link> / <span className="text-brand-darkBlue font-semibold">Builders Walmer Kent</span>
        </nav>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-darkBlue mb-6 uppercase">
            Builders in Walmer, Kent
          </h1>

          {/* Opening Statement */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-brand-blue">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-4">
              <strong className="text-brand-darkBlue">M E Stewart Building Contractors</strong> are experienced local builders in Walmer, Kent, delivering quality home extensions, loft conversions and complete renovations throughout Walmer, Deal and Sholden. Operating from nearby Deal, we bring local expertise and dependable craftsmanship to residential building projects across the CT14 area.
            </p>
            <p className="text-sm text-gray-600 italic">
              <strong>Latest update:</strong> Now actively delivering building projects across Deal, Walmer and Sholden in 2026.
            </p>
          </div>

          {/* Local Building Services Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-brand-darkBlue mb-6 flex items-center gap-3">
              <Home className="w-8 h-8 text-brand-blue" />
              Local Building Services in Walmer
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Walmer's distinctive character—from the historic properties near Walmer Castle and the seafront estates along The Strand, to the family homes throughout Hawkshill and Canada Road—requires builders who understand local construction standards and architectural styles. We've completed numerous projects throughout Walmer, from Victorian villa extensions to modern bungalow renovations.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Just 1.5 miles from Deal town centre, we provide rapid response times to Walmer properties while bringing specialist knowledge of coastal building considerations, period property restoration, and contemporary design integration. Whether you're near Walmer Green or closer to Kingsdown Road, our local presence ensures consistent site supervision and material delivery efficiency.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Walmer Castle conservation area experience</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Seafront property specialists</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Victorian & Edwardian renovation</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Modern extension design</p>
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
                Walmer homes often feature mature gardens and generous plot sizes, creating excellent opportunities for ground floor extensions, conservatory replacements with solid roof structures, and garden room additions. We manage full project coordination including planning submissions to Dover District Council, structural calculations, and Building Regulations approval.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Rear extensions maximizing garden-facing living space</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Loft conversions with dormer windows and Velux installations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Two storey side extensions for growing families</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Garage conversions creating home offices and granny annexes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Complete house refurbishments respecting original features</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Open plan kitchen diners with bifold or sliding doors</span>
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
                Our structural expertise covers load-bearing wall removal, steel beam installations (RSJs), foundation work, and underpinning. Working with certified structural engineers, we deliver Building Control-approved solutions that transform Walmer homes while maintaining structural integrity and property value.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                From installing cavity wall insulation to meet modern thermal standards, to complex foundation repairs addressing ground movement in chalk substrates, we handle the full spectrum of domestic structural work. All projects include comprehensive warranties and full compliance documentation for mortgage and insurance purposes.
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
                From our base near Deal town centre, Walmer is just minutes away, allowing us to provide the same responsive service and attention to detail throughout the CT14 postcode. Our knowledge of East Kent building regulations and local planning requirements ensures smooth project delivery from initial consultation through final inspection.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                We also provide building services in <Link to="/builders-deal" className="text-brand-blue font-semibold hover:underline">Deal</Link> and <Link to="/builders-sholden" className="text-brand-blue font-semibold hover:underline">Sholden</Link>, maintaining the same standards of workmanship and customer service across all locations.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                  <span>Deal (1.5 miles)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                  <span>Sholden (3 miles)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                  <span>Kingsdown (2 miles)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                  <span>Martin Mill (2 miles)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                  <span>Dover (7 miles)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                  <span>St Margarets (5 miles)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Contact NAP */}
          <section className="bg-brand-darkBlue text-white rounded-lg shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Get Your Free Building Quote in Walmer</h2>
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

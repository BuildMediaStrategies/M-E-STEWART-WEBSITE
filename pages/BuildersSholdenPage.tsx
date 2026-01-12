import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Wrench, ArrowLeft } from 'lucide-react';

export const BuildersSholdenPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Best Builders in Sholden, Deal, Kent | M E Stewart Building Contractors';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert builders serving Sholden area of Deal, Kent. Home extensions, structural works & renovations. Based in Deal. Free quotes. Call 07885 930284');
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://mestewartbuildingcontractorsltd.uk/#organization",
      "name": "M E Stewart Building Contractors LTD",
      "image": "https://mestewartbuildingcontractorsltd.uk/assets/logo.png",
      "description": "Trusted builders serving Sholden area of Deal, Kent providing extensions, renovations and structural building works",
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
      "email": "enquiries@mestewartbuildingcontractorsltd.uk",
      "url": "https://mestewartbuildingcontractorsltd.uk",
      "priceRange": "££",
      "areaServed": {
        "@type": "City",
        "name": "Deal"
      },
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
          <Link to="/" className="hover:text-brand-blue">Home</Link> / <Link to="/builders-deal" className="hover:text-brand-blue">Builders Deal</Link> / <span className="text-brand-darkBlue font-semibold">Sholden</span>
        </nav>

        {/* Back to Deal Link */}
        <Link to="/builders-deal" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline mb-6">
          <ArrowLeft size={20} /> Back to Deal Building Services
        </Link>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-darkBlue mb-6 uppercase">
            Builders in Sholden, Deal, Kent
          </h1>

          {/* Opening Statement */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-brand-blue">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-4">
              Sholden is a village area within Deal, Kent, served by our Deal-based building team. <strong className="text-brand-darkBlue">M E Stewart Building Contractors LTD</strong> are reliable local builders specializing in residential extensions, complete home renovations and structural building works throughout Sholden from our Deal base, delivering professional building services with local expertise and commitment to quality craftsmanship.
            </p>
            <p className="text-sm text-gray-600 italic">
              <strong>Latest update:</strong> Now actively delivering building projects across Deal and all surrounding areas in 2026.
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
                Sholden's quiet village setting northeast of Deal town centre features a diverse housing stock—from post-war bungalows and semi-detached family homes to modern detached properties and characterful older cottages. Our Deal-based building team understands the specific requirements of Sholden properties, from rural planning considerations to the practical challenges of working in established residential areas.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                As part of the Deal area, Sholden properties benefit from generous plot sizes and countryside proximity, making them ideal for home extensions and garden annexes. We work throughout Sholden village, from properties near The Sportsman pub to homes toward Great Mongeham, providing consistent quality as your local Deal builders.
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
              Home Extensions and Renovations in Sholden
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

          {/* Link to Main Deal Page */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-brand-blue/10 to-brand-darkBlue/10 rounded-lg p-8 border-2 border-brand-blue">
              <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Serving All Areas of Deal, Kent</h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Sholden is part of the greater Deal area. M E Stewart Building Contractors LTD are based in Deal and serve all surrounding areas including Sholden, Walmer, Upper Deal, Lower Deal, Ringwould, Mongeham and more.
              </p>
              <Link
                to="/builders-deal"
                className="inline-block bg-brand-blue text-white px-8 py-4 rounded-full font-bold uppercase hover:bg-brand-darkBlue transition-all shadow-lg hover:shadow-xl"
              >
                View All Deal Building Services
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

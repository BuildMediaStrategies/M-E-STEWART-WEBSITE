import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Wrench, ArrowLeft } from 'lucide-react';

export const BuildersWalmerPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Best Builders in Walmer, Deal, Kent | M E Stewart Building Contractors';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional builders serving Walmer area of Deal, Kent. Extensions, loft conversions & home renovations. Based in Deal. Free quotes. Call 07885 930284');
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://mestewartbuildingcontractorsltd.uk/#organization",
      "name": "M E Stewart Building Contractors LTD",
      "image": "https://mestewartbuildingcontractorsltd.uk/assets/logo.png",
      "description": "Experienced builders serving Walmer area of Deal, Kent specializing in extensions, renovations and structural building works",
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
          <Link to="/" className="hover:text-brand-blue">Home</Link> / <Link to="/builders-deal" className="hover:text-brand-blue">Builders Deal</Link> / <span className="text-brand-darkBlue font-semibold">Walmer</span>
        </nav>

        {/* Back to Deal Link */}
        <Link to="/builders-deal" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline mb-6">
          <ArrowLeft size={20} /> Back to Deal Building Services
        </Link>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-darkBlue mb-6 uppercase">
            Builders in Walmer, Deal, Kent
          </h1>

          {/* Opening Statement */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-brand-blue">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-4">
              Walmer is a coastal area within Deal, Kent, served by our Deal-based building team. <strong className="text-brand-darkBlue">M E Stewart Building Contractors LTD</strong> deliver quality home extensions, loft conversions and complete renovations throughout Walmer from our base in Deal, providing local expertise and dependable craftsmanship across the CT14 area.
            </p>
            <p className="text-sm text-gray-600 italic">
              <strong>Latest update:</strong> Now actively delivering building projects across Deal and all surrounding areas in 2026.
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
                Walmer's distinctive character—from the historic properties near Walmer Castle and the seafront estates along The Strand, to the family homes throughout Hawkshill and Canada Road—requires builders who understand local construction standards and architectural styles. Operating from Deal, we've completed numerous projects throughout Walmer, from Victorian villa extensions to modern bungalow renovations.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                As part of the Deal area, Walmer benefits from our rapid response times and local presence. Whether you're near Walmer Green or closer to Kingsdown Road, our Deal base ensures consistent site supervision and material delivery efficiency throughout all Walmer projects.
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
              Home Extensions and Renovations in Walmer
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Walmer homes often feature mature gardens and generous plot sizes, creating excellent opportunities for ground floor extensions, conservatory replacements with solid roof structures, and garden room additions. As your Deal-based builders, we manage full project coordination including planning submissions to Dover District Council, structural calculations, and Building Regulations approval.
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

          {/* Link to Main Deal Page */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-brand-blue/10 to-brand-darkBlue/10 rounded-lg p-8 border-2 border-brand-blue">
              <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">Serving All Areas of Deal, Kent</h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Walmer is part of the greater Deal area. M E Stewart Building Contractors LTD are based in Deal and serve all surrounding areas including Walmer, Sholden, Upper Deal, Lower Deal, Ringwould, Mongeham and more.
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

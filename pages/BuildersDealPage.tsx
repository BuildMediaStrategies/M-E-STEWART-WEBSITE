import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Wrench, MapPin, Phone, Mail } from 'lucide-react';

export const BuildersDealPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Best Builders in Deal, Kent Near Me | Home Extensions & Renovations';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'M E Stewart Building Contractors LTD - Professional builders in Deal, Kent. Expert home extensions, renovations & structural works serving all areas of Deal. Free quotes. Call 07885 930284');
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://mestewartbuildingcontractorsltd.uk/#organization",
      "name": "M E Stewart Building Contractors LTD",
      "image": "https://mestewartbuildingcontractorsltd.uk/assets/logo.png",
      "description": "Professional builders in Deal, Kent providing home extensions, renovations, structural works and general building services across all areas of Deal",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Deal",
        "addressLocality": "Kent",
        "postalCode": "CT14",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "51.2225",
        "longitude": "1.4017"
      },
      "telephone": "07885930284",
      "email": "enquiries@mestewartbuildingcontractorsltd.uk",
      "url": "https://mestewartbuildingcontractorsltd.uk",
      "priceRange": "££",
      "areaServed": [
        {
          "@type": "City",
          "name": "Deal"
        },
        "Walmer",
        "Sholden",
        "Ringwould",
        "Mongeham",
        "Great Mongeham",
        "Upper Deal",
        "Lower Deal",
        "Ripple",
        "Kingsdown"
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
          <Link to="/" className="hover:text-brand-blue">Home</Link> / <span className="text-brand-darkBlue font-semibold">Builders Deal Kent</span>
        </nav>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-darkBlue mb-6 uppercase">
            Builders in Deal, Kent
          </h1>

          {/* Opening Statement */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-brand-blue">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-4">
              <strong className="text-brand-darkBlue">M E Stewart Building Contractors LTD</strong> are trusted local builders in Deal, Kent, providing professional home extensions, renovations and structural works across all areas of Deal including Walmer, Sholden, Upper Deal, and surrounding villages. Based in Deal, we support homeowners with reliable, high quality building services delivered by experienced local tradesmen.
            </p>
            <p className="text-sm text-gray-600 italic">
              <strong>Latest update:</strong> Now actively delivering building projects across Deal and all surrounding areas in 2026.
            </p>
          </div>

          {/* Local Building Services Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-brand-darkBlue mb-6 flex items-center gap-3">
              <Home className="w-8 h-8 text-brand-blue" />
              Local Building Services in Deal
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Operating from Deal, we serve homes throughout the entire Deal area including properties near Deal Castle, along the seafront towards Deal Pier, and through the residential streets around Victoria Park and Mill Hill. Whether you're refurbishing a period terrace near Queen Street or extending a modern detached home in Upper Deal, we bring decades of building expertise to every project.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Deal's unique mix of Georgian and Victorian architecture requires specialist knowledge. Our team understands the structural considerations of older properties, from lime mortar repairs to listed building sensitivities, while also delivering contemporary extensions that complement Deal's coastal character.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Victorian & Georgian property specialists</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Coastal property experience</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Listed building awareness</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Period property restoration</p>
                </div>
              </div>
            </div>
          </section>

          {/* Areas of Deal We Serve */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-brand-darkBlue mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-brand-blue" />
              Areas of Deal We Serve
            </h2>
            <div className="bg-gradient-to-br from-brand-blue/5 to-brand-darkBlue/5 rounded-lg p-8 border border-brand-blue/20">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                As Deal-based builders, we provide comprehensive building services throughout all areas of Deal, Kent. Our local presence ensures rapid response times, site familiarity, and genuine understanding of Deal's building landscape.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-brand-darkBlue mb-4">
                    <Link to="/builders-walmer" className="hover:text-brand-blue transition-colors">Walmer</Link>
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Walmer is a coastal area within Deal, known for historic properties near Walmer Castle, Victorian seafront homes along The Strand, and family residences throughout Hawkshill and Canada Road. We deliver extensions, loft conversions, and complete renovations respecting Walmer's architectural heritage while meeting modern living requirements.
                  </p>
                  <Link to="/builders-walmer" className="text-brand-blue font-semibold hover:underline">
                    View Walmer Building Services →
                  </Link>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-darkBlue mb-4">
                    <Link to="/builders-sholden" className="hover:text-brand-blue transition-colors">Sholden</Link>
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Sholden is a village area within Deal, featuring diverse housing from bungalows to modern detached properties. Located along Sandwich Road northeast of Deal town centre, Sholden properties benefit from generous plot sizes ideal for extensions and garden buildings. We specialize in bungalow conversions, rear extensions, and whole-house modernizations.
                  </p>
                  <Link to="/builders-sholden" className="text-brand-blue font-semibold hover:underline">
                    View Sholden Building Services →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-darkBlue mb-4">Additional Deal Areas We Cover</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span>Ringwould</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span>Mongeham</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span>Great Mongeham</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span>Upper Deal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span>Lower Deal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span>Ripple</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span>Kingsdown (Deal side)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span>Sandwich Bay edge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span>St Margarets at Cliffe</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-4 text-sm italic">
                  All these areas form part of the greater Deal, Kent area and are served with the same commitment to quality and local expertise.
                </p>
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
                From single storey rear extensions to full two storey additions, we design and build extensions that enhance your Deal home's value and functionality. We manage the entire process including planning applications, Building Control compliance, and structural engineering coordination.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Kitchen extensions with bi-fold doors opening to south-facing Deal gardens</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Loft conversions adding extra bedrooms to Victorian terraces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Complete house renovations respecting Deal's architectural heritage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Garage conversions creating home offices and annexes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>Bathroom and kitchen refurbishments to modern standards</span>
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
                Our structural building services include RSJ installations for open plan living, underpinning, damp proofing, and foundations. We work closely with structural engineers and Building Control to ensure every project meets current regulations while preserving the integrity of your Deal property.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Whether it's removing load-bearing walls to create spacious kitchen diners, installing steel beams for rear extensions, or addressing subsidence issues common in Deal's chalk-based terrain, we deliver safe, code-compliant structural solutions backed by comprehensive insurance and guarantees.
              </p>
            </div>
          </section>

          {/* Google Maps Embed */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-brand-darkBlue mb-6">Find Us in Deal</h2>
            <div className="bg-white rounded-lg shadow-lg p-4 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.4152557978687!2d1.3419416766034906!3d51.22984677175148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cd48fe12408e14d%3A0x21e605a6c573c3e9!2sM%20E%20Stewart%20Building%20Contractors%20LTD%20Deal%20Kent!5e0!3m2!1sen!2suk!4v1768213605022!5m2!1sen!2suk"
                width="100%"
                height="450"
                style={{border:0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </section>

          {/* Contact NAP */}
          <section className="bg-brand-darkBlue text-white rounded-lg shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Get Your Free Building Quote in Deal</h2>
            <p className="text-lg mb-8 leading-relaxed">
              Ready to start your building project? Contact M E Stewart Building Contractors LTD today for a free, no-obligation quote. We serve homeowners throughout Deal, Kent and all surrounding areas.
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
                  <a href="mailto:enquiries@mestewartbuildingcontractorsltd.uk" className="text-xl font-bold hover:text-brand-blue transition-colors break-all">enquiries@mestewartbuildingcontractorsltd.uk</a>
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

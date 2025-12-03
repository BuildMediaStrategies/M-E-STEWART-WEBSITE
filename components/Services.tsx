import React from 'react';
import { Hammer, Home, Ruler, HardHat, Building, PaintBucket } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "New Builds",
    description: "Complete project management from foundation to finish. We build dream homes with uncompromising quality."
  },
  {
    icon: Hammer,
    title: "Renovations",
    description: "Breathing new life into existing structures. Modern updates, structural repairs, and complete overhauls."
  },
  {
    icon: Ruler,
    title: "Extensions",
    description: "Expand your living space seamlessly. Single-story, double-story, and wrap-around extensions."
  },
  {
    icon: HardHat,
    title: "Commercial",
    description: "Industrial and retail fit-outs. Durable construction designed for business needs and safety standards."
  },
  {
    icon: Building,
    title: "Loft Conversions",
    description: "Unlock the potential of your attic. Creating master suites, offices, and additional bedrooms."
  },
  {
    icon: PaintBucket,
    title: "Design & Plan",
    description: "Collaborative architectural planning and design services to ensure your vision is viable."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="bg-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold uppercase text-brand-darkBlue sm:text-5xl">
            Our Expertise
          </h2>
          <div className="mx-auto h-1 w-24 bg-brand-blue"></div>
          <p className="mt-6 text-lg text-brand-slate max-w-2xl mx-auto">
            We specialize in a wide range of construction services, delivering superior results on time and within budget.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative border border-gray-200 bg-white p-8 transition-all hover:-translate-y-2 hover:shadow-xl hover:border-brand-blue"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-grey text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="mb-3 text-2xl font-bold uppercase text-brand-darkBlue">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
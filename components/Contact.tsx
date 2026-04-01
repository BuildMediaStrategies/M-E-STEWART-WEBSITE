import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { HubSpotForm } from './HubSpotForm';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-12 lg:mb-16 text-center">
           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-brand-darkBlue">
            Contact <span className="inline-block relative">Us<div className="h-1 bg-brand-blue mt-2 absolute left-0 right-0"></div></span>
           </h2>
           <p className="mt-4 sm:mt-6 text-sm sm:text-base text-brand-slate max-w-xl mx-auto px-4">
             Based in Deal, Kent, serving the full Deal area.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {/* Contact Info */}
          <div className="bg-brand-darkBlue text-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl flex flex-col justify-center h-full">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase mb-4 sm:mb-6">Let's Build Together</h2>
            <p className="text-blue-200 mb-8 sm:mb-12 text-base sm:text-lg font-light">
              Ready to start your next project? Contact M E Stewart Building Contractors Ltd today for a consultation. We pride ourselves on transparent communication and reliable service throughout Deal, Kent.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-blue-600 p-2.5 sm:p-3 rounded-full flex-shrink-0">
                  <Phone size={20} className="sm:w-6 sm:h-6" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-base sm:text-lg">Call Us</h4>
                  <a href="tel:07885930284" className="text-sm sm:text-base text-blue-200 hover:text-white transition-colors">07885 930284</a>
                  <p className="text-xs text-blue-300">Mon-Fri, 8am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-blue-600 p-2.5 sm:p-3 rounded-full flex-shrink-0">
                  <Mail size={20} className="sm:w-6 sm:h-6" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold uppercase text-base sm:text-lg">Email Us</h4>
                  <a href="mailto:enquiries@mestewartbuildingcontractorsltd.uk" className="text-sm sm:text-base text-blue-200 hover:text-white transition-colors break-all">enquiries@mestewartbuildingcontractorsltd.uk</a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-blue-600 p-2.5 sm:p-3 rounded-full flex-shrink-0">
                  <MapPin size={20} className="sm:w-6 sm:h-6" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-base sm:text-lg">Based In</h4>
                  <address className="text-sm sm:text-base text-blue-200 not-italic">
                    Deal, Kent<br/>
                    United Kingdom
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-brand-grey text-brand-slate p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold uppercase text-brand-darkBlue mb-4 sm:mb-6">Send a Message</h3>
            <HubSpotForm />
          </div>

        </div>
      </div>
    </section>
  );
};

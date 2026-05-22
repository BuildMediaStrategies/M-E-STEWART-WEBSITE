import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { HubSpotForm } from '../components/HubSpotForm';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    privacyConsent: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '', privacyConsent: false });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20 sm:pt-24">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase mb-4 sm:mb-6 animate-fade-in">
            Contact Deal&apos;s Local Building Team
          </h1>
          <div className="mx-auto h-1 w-24 sm:w-32 bg-white mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90 px-4">
            Based in Deal, Kent and working across East Kent. Share a few details about your project and we&apos;ll come back with clear, no-obligation advice and a quotation.
          </p>
        </div>
      </div>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold uppercase text-brand-darkBlue mb-4 sm:mb-6">
                  Request Your Free Quote
                </h2>
                <HubSpotForm />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-brand-darkBlue text-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold uppercase mb-4 sm:mb-6">Contact Information</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 bg-brand-blue rounded-full flex items-center justify-center">
                      <Phone size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold uppercase text-xs sm:text-sm mb-1">Phone</p>
                      <a href="tel:07738520388" className="text-sm sm:text-base lg:hover:text-brand-blue transition-colors">
                        07738 520388
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 bg-brand-blue rounded-full flex items-center justify-center">
                      <Mail size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold uppercase text-xs sm:text-sm mb-1">Email</p>
                      <a href="mailto:enquiries@mestewartbuildingcontractorsltd.uk" className="text-sm sm:text-base lg:hover:text-brand-blue transition-colors break-all">
                        enquiries@mestewartbuildingcontractorsltd.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 bg-brand-blue rounded-full flex items-center justify-center">
                      <MapPin size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold uppercase text-xs sm:text-sm mb-1">Address</p>
                      <address className="text-sm sm:text-base leading-relaxed not-italic">
                        Deal, Kent<br />
                        United Kingdom
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 bg-brand-blue rounded-full flex items-center justify-center">
                      <Clock size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold uppercase text-xs sm:text-sm mb-1">Working Hours</p>
                      <p className="text-sm sm:text-base leading-relaxed">
                        Monday - Friday: 8:00 - 18:00<br />
                        Saturday: 9:00 - 14:00<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-blue text-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold uppercase mb-3 sm:mb-4">Service Areas</h3>
                <p className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  We serve homeowners across East Kent, including:
                </p>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                  <li>• Deal, Kent</li>
                  <li>• Dover, Kent</li>
                  <li>• Ramsgate, Kent</li>
                  <li>• Thanet, Kent</li>
                  <li>• Canterbury, Kent</li>
                  <li>• Surrounding East Kent areas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-24 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.4152557978687!2d1.3419416766034906!3d51.22984677175148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cd48fe12408e14d%3A0x21e605a6c573c3e9!2sM%20E%20Stewart%20Building%20Contractors%20LTD%20Deal%20Kent!5e0!3m2!1sen!2suk!4v1768213605022!5m2!1sen!2suk"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              title="M E Stewart Building Contractors Ltd Location in Deal, Kent"
            ></iframe>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

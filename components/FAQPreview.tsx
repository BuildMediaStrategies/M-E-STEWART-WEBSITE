import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const faqs = [
  {
    question: "What areas do you cover?",
    answer: "We are based in Deal, Kent and serve the entire Deal area including Walmer, Sholden and surrounding residential zones."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope. Small renovations in Deal properties take 2-4 weeks, while larger builds can take 3-6 months."
  },
  {
    question: "Do you provide free quotes?",
    answer: "Yes, we offer free, no-obligation quotes for all projects throughout Deal, Kent. Contact us to schedule a consultation."
  }
];

export const FAQPreview: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-slate-50">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-brand-darkBlue">
            Frequently Asked <span className="inline-block relative">Questions<div className="h-1 bg-brand-blue mt-2 absolute left-0 right-0"></div></span>
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 sm:p-6 shadow-md lg:hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-base sm:text-lg font-bold text-brand-darkBlue mb-2">
                {faq.question}
              </h3>
              <p className="text-sm sm:text-base text-brand-slate">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/faqs"
            className="inline-flex items-center text-white bg-brand-blue lg:hover:bg-brand-darkBlue px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-bold uppercase tracking-wide transition-colors shadow-md"
          >
            View All FAQs
            <ChevronRight size={18} className="sm:w-5 sm:h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

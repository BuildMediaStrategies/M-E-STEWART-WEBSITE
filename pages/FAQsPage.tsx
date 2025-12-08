import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqsData = [
  {
    category: "General",
    questions: [
      {
        question: "What areas do you cover?",
        answer: "We're based in Deal and work throughout Dover, Sandwich, Walmer, St Margaret's, Canterbury, and surrounding areas across East Kent. We're happy to discuss projects outside these areas too."
      },
      {
        question: "How long have you been in business?",
        answer: "M E Stewart has been providing quality building services across Deal, Dover, and Kent for 28 years, building a strong reputation for reliability and craftsmanship."
      },
      {
        question: "Do you provide free quotes?",
        answer: "Yes, we offer free, no-obligation quotes for all projects. Contact us to schedule a consultation and site visit — we'll come to you in Deal, Dover, or anywhere nearby."
      },
      {
        question: "Are you fully insured?",
        answer: "Yes, we carry comprehensive liability insurance and all our work is covered under warranty for your peace of mind."
      }
    ]
  },
  {
    category: "Projects & Services",
    questions: [
      {
        question: "What types of projects do you handle?",
        answer: "We handle everything from home extensions and loft conversions to full renovations, new builds, kitchens, bathrooms, and general property repairs. Whether it's a small job or a major project, we've got you covered."
      },
      {
        question: "How long does a kitchen renovation usually take?",
        answer: "Most kitchen renovations take 2-4 weeks depending on the scope. This includes removal of the old kitchen, any structural changes, plumbing and electrical work, fitting, tiling, and decorating. We'll give you a clear timeline before we start."
      },
      {
        question: "Do I need planning permission for an extension in Dover?",
        answer: "It depends on the size and type of extension. Many single-story rear extensions fall under permitted development rights and don't need planning permission. We can advise on what's needed and help with applications if required — we've done hundreds of extensions across Dover and Deal."
      },
      {
        question: "Can you help with planning permission and building regulations?",
        answer: "Yes, we can guide you through the process and work with architects and structural engineers when needed. We handle all aspects to ensure your project meets local planning and building control requirements in Deal, Dover, and across Kent."
      }
    ]
  },
  {
    category: "Process & Pricing",
    questions: [
      {
        question: "What is your payment structure?",
        answer: "We typically work on a stage-based payment system, with deposits and milestone payments agreed upon before work begins. Full details are outlined in your contract."
      },
      {
        question: "Do you provide warranties?",
        answer: "Yes, all our work comes with comprehensive warranties. Structural work is typically covered for 10 years, and other work for varying periods depending on the nature of the project."
      },
      {
        question: "What happens if there are unexpected issues during construction?",
        answer: "We conduct thorough site assessments to minimize surprises. If unexpected issues arise, we'll communicate immediately and provide transparent pricing for any additional work required."
      },
      {
        question: "Can I make changes during the project?",
        answer: "Yes, changes can be accommodated, though they may affect the timeline and budget. We'll provide updated quotes and timelines for any requested modifications."
      }
    ]
  },
  {
    category: "Materials & Quality",
    questions: [
      {
        question: "Where do you source your materials?",
        answer: "We work with trusted local and national suppliers to source high-quality materials at competitive prices. We can accommodate specific material preferences and budget requirements."
      },
      {
        question: "Can I choose my own materials and fixtures?",
        answer: "Absolutely. We're happy to work with materials and fixtures you've selected, or we can provide recommendations based on your style, budget, and project requirements."
      },
      {
        question: "Do you use sustainable building practices?",
        answer: "Yes, we're committed to sustainable construction. We can incorporate eco-friendly materials, energy-efficient systems, and sustainable building practices into your project."
      }
    ]
  }
];

export const FAQsPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-brand-darkBlue to-brand-blue text-white pt-24 pb-20 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-bold uppercase mb-4 sm:text-6xl">
            Frequently Asked Questions
          </h1>
          <div className="h-1 w-24 bg-white mb-6"></div>
          <p className="text-xl text-blue-100">
            Find answers to common questions about our services, process, and expertise.
          </p>
        </div>
      </div>

      <div className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl space-y-12">
          {faqsData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-brand-darkBlue mb-6 uppercase">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === key;

                  return (
                    <div
                      key={questionIndex}
                      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 lg:hover:shadow-lg"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full flex items-center justify-between p-6 text-left transition-colors lg:hover:bg-slate-50"
                      >
                        <h3 className="text-lg font-bold text-brand-darkBlue pr-4">
                          {faq.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="text-brand-blue flex-shrink-0" size={24} />
                        ) : (
                          <ChevronDown className="text-brand-blue flex-shrink-0" size={24} />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-brand-slate leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-4xl mt-16 text-center bg-white rounded-lg shadow-lg p-10">
          <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">
            Still Have Questions?
          </h2>
          <p className="text-brand-slate mb-6">
            Can't find the answer you're looking for? Get in touch with our team.
          </p>
          <a
            href="/contact"
            className="inline-block text-white bg-brand-blue lg:hover:bg-brand-darkBlue px-8 py-3 rounded-full font-bold uppercase tracking-wide transition-colors shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

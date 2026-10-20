import React from 'react';
import { Mail } from 'lucide-react';

const emailSubject = 'Building project enquiry';
const emailBody = `Hello Mark,

I am interested in discussing a building project.

Project type:
Project address:
Project details:

Best regards,`;
const emailHref = `mailto:Markstewart21@sky.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

export const ContactEmailPrompt: React.FC = () => (
  <div className="space-y-5">
    <p className="text-base leading-relaxed text-brand-slate">
      We’d be happy to discuss your plans and arrange a consultation.
    </p>
    <a
      href={emailHref}
      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-blue px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-darkBlue focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
    >
      <Mail size={18} aria-hidden="true" />
      Send Us an Email
    </a>
    <p className="text-xs text-brand-slate">This opens your default email app with a project template ready to complete.</p>
  </div>
);

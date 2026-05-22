import React, { useEffect, useRef } from 'react';

export const HubSpotForm: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadForm = () => {
      const w = window as any;
      if (!w.hbspt || !containerRef.current) return;

      // Clear any previous render in this container
      containerRef.current.innerHTML = '';

      w.hbspt.forms.create({
        region: 'eu1',
        portalId: '148170489',
        formId: 'c13455e0-3af2-446c-b7cd-4455d675b704',
        target: containerRef.current
      });
    };

    const existingScript = document.querySelector<HTMLScriptElement>('script[src="https://js-eu1.hsforms.net/forms/embed/148170489.js"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://js-eu1.hsforms.net/forms/embed/148170489.js';
      script.async = true;
      script.defer = true;
      script.onload = loadForm;
      document.body.appendChild(script);
    } else {
      const w = window as any;
      if (w.hbspt) {
        loadForm();
      } else {
        existingScript.addEventListener('load', loadForm);
      }
    }

    return () => {
      const w = window as any;
      if (existingScript && w && typeof w.hbspt === 'object') {
        existingScript.removeEventListener('load', loadForm);
      }
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="hs-form-frame w-full" />
      <style>{`
        .hs-form-frame {
          max-width: 100%;
        }
        .hs-form-frame form {
          font-family: inherit;
        }
        .hs-form-frame input,
        .hs-form-frame select,
        .hs-form-frame textarea {
          width: 100%;
        }
      `}</style>
    </>
  );
};

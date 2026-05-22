import React, { useEffect } from 'react';

export const HubSpotForm: React.FC = () => {
  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://js-eu1.hsforms.net/forms/embed/148170489.js"]'
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://js-eu1.hsforms.net/forms/embed/148170489.js';
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <div
        className="hs-form-frame w-full"
        data-region="eu1"
        data-form-id="c13455e0-3af2-446c-b7cd-4455d675b704"
        data-portal-id="148170489"
      />
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

import React, { useState } from 'react';

const TmsTreatmentTypes = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !recaptchaValue) {
      setFormStatus('Please fill all fields and complete the reCAPTCHA.');
      return;
    }
    // Here you would handle form submission, e.g., send data to backend or email service
    setFormStatus('Thank you for subscribing! The TMS info sheet will be sent to your email.');
    // Reset form
    setName('');
    setEmail('');
    setRecaptchaValue('');
  };

  const handleRecaptchaChange = (e) => {
    setRecaptchaValue(e.target.value);
  };

  return (
    <>
      <section id="how-tms-works" className="tms-treatment-section" aria-label="TMS Treatment Types">
        <div className="container tms-treatment-container">
          <div className="tms-video-wrapper">
            <img
              src="https://i.postimg.cc/mZjXRzvj/Banner.png"
              alt="TMS Brain Treatment Diagram"
              width="480"
              height="270"
              className="tms-treatment-image"
            />
          </div>
          <div className="tms-content">
            <h2>How TMS Works</h2>
            <p>
              TMS uses a specialized coil placed against the scalp, typically over the prefrontal cortex—the area of the brain responsible for mood regulation. This non-invasive treatment stimulates neural activity, helping to improve symptoms of depression and other mental health conditions.
            </p>
            <h3>Different Types of TMS Treatments</h3>
            <ul className="tms-treatment-list">
              <li>Theta Burst Stimulation (TBS)</li>
              <li>Deep Transcranial Magnetic Stimulation (dTMS)</li>
              <li>Repetitive Transcranial Magnetic Stimulation (rTMS)</li>
            </ul>
          </div>
        </div>
      </section>

      <style>{`
        .tms-treatment-section {
          padding: 40px 20px;
          background-color: #f9f9f9;
          color: var(--eerie-black);
          font-family: var(--font-family);
        }
        
        .tms-treatment-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          gap: 30px;
        }
        
        .tms-video-wrapper {
          width: 100%;
          max-width: 480px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-1);
        }
        
        video, .tms-treatment-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 12px;
        }
        
        .tms-content {
          width: 100%;
          max-width: 600px;
          text-align: center;
        }
        
        h2 {
          font-size: 2rem;
          margin-bottom: 16px;
          font-weight: var(--fw-700);
          color: #3e5ccd;
        }
        
        p {
          font-size: 1rem;
          margin-bottom: 24px;
          line-height: 1.6;
        }
        
        h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
          font-weight: var(--fw-600);
        }
        
        .tms-treatment-list {
          list-style: none;
          padding-left: 0;
          margin-bottom: 24px;
          text-align: left;
        }
        
        .tms-treatment-list li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 12px;
          font-size: 1rem;
          line-height: 1.5;
        }
        
        .tms-treatment-list li::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: #3e5ccd;
          font-weight: var(--fw-700);
        }
        
        .learn-more-btn {
          background-color: #3e5ccd;
          color: #ffffff;
          padding: 12px 32px;
          border: none;
          border-radius: 24px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .learn-more-btn:hover {
          background-color: #2e3d8c;
        }

        /* Tablet Styles */
        @media (min-width: 768px) {
          .tms-treatment-section {
            padding: 60px 40px;
          }
          
          .tms-treatment-container {
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: 40px;
          }
          
          .tms-content {
            text-align: left;
            padding-left: 20px;
          }
          
          h2 {
            font-size: 2.5rem;
          }
          
          p {
            font-size: 1.1rem;
          }
          
          h3 {
            font-size: 1.75rem;
          }
          
          .tms-treatment-list li {
            font-size: 1.1rem;
          }
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          .tms-treatment-section {
            padding: 80px 40px;
          }
          
          .tms-treatment-container {
            gap: 50px;
          }
          
          .tms-video-wrapper {
            flex: 0 0 480px;
          }
          
          .tms-content {
            flex: 1 1 auto;
            max-width: 600px;
            padding-left: 24px;
          }
          
          h2 {
            font-size: 3rem;
          }
          
          p {
            font-size: var(--body-md);
          }
          
          h3 {
            font-size: var(--headline-md);
          }
          
          .tms-treatment-list li {
            font-size: var(--body-md);
          }
        }

        /* Large Desktop Styles */
        @media (min-width: 1280px) {
          .tms-treatment-container {
            gap: 60px;
          }
          
          .tms-content {
            padding-left: 30px;
          }
        }

        /* Mobile Landscape */
        @media (max-width: 767px) and (orientation: landscape) {
          .tms-treatment-section {
            padding: 30px 20px;
          }
          
          .tms-treatment-container {
            gap: 20px;
          }
          
          .tms-video-wrapper {
            max-width: 400px;
          }
        }

        /* High DPI Displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          video {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }
      `}</style>
    </>
  );
};

export default TmsTreatmentTypes;

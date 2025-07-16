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
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Column - TMS Video */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-slate-500/10 rounded-3xl blur-2xl"></div>
        <div className="relative bg-white rounded-3xl p-6 border border-slate-200 shadow-lg flex items-center justify-center">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/ugwQbe-q3E8?si=W4sWK-LtKxiDfQFo&autoplay=1&mute=1&loop=1&playlist=ugwQbe-q3E8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-2xl w-full h-[220px] md:h-[315px]"
          ></iframe>
        </div>
      </div>

      {/* Right Column - TMS Information */}
      <div className="space-y-8">
        <div>
          <h4 className="text-2xl font-medium text-white mb-6" style={{textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>
            Different Types of TMS Treatments
          </h4>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-900/60 to-slate-800/60 rounded-xl border border-blue-700">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h5 className="text-lg font-medium text-white mb-1" style={{textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>Repetitive Transcranial Magnetic Stimulation (rTMS)</h5>
                <p className="text-white font-normal" style={{textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>The most widely used and researched TMS protocol. rTMS delivers repeated magnetic pulses to stimulate specific areas of the brain involved in mood regulation. It is the standard treatment with strong clinical evidence, widely supported by Medicare for its effectiveness.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-slate-800/60 to-blue-900/60 rounded-xl border border-slate-700">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h5 className="text-lg font-medium text-white mb-1" style={{textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>Theta Burst Stimulation (TBS)</h5>
                <p className="text-white font-normal" style={{textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>A faster, more efficient form of TMS that delivers multiple pulses in rapid succession.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-900/60 to-slate-800/60 rounded-xl border border-blue-700">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h5 className="text-lg font-medium text-white mb-1" style={{textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>Deep Transcranial Magnetic Stimulation (dTMS)</h5>
                <p className="text-white font-normal" style={{textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>Advanced technology that reaches deeper brain structures for enhanced treatment effectiveness.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Benefits */}
        <div className="bg-gradient-to-r from-slate-800/60 to-blue-900/60 rounded-2xl p-6 border border-slate-700">
          <h4 className="text-xl font-medium text-white mb-4" style={{textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>Treatment Benefits</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white font-medium" style={{textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>Non-invasive procedure</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white font-medium" style={{textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>No anesthesia required</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white font-medium" style={{textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>Minimal side effects</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white font-medium" style={{textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>Quick treatment sessions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TmsTreatmentTypes;

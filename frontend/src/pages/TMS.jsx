import React, { useState, useEffect, useRef } from 'react';
import TmsGuide from '../components/TmsGuide';
import TmsFaq from '../components/TmsFaq';
import TmsProviders from '../components/TmsProviders';
import TmsContact from '../components/TmsContact';
import TmsWorks from '../components/TmsWorks';

const candidates = [
  { title: 'Elderly (65+ Years)', desc: 'TMS has shown promise for adults 65+ dealing with depression, anxiety, cognitive decline, Alzheimer’s, and more!' },
  { title: 'Corporate Professionals', desc: 'TMS is a proven non-invasive treatment for professionals with depression, anxiety, OCD, and more.' },
  { title: 'Adults (18-65 Years)', desc: 'TMS is FDA approved for adults 18-65 suffering depression and OCD, offering benefits for mental health and other conditions.' },
  { title: 'Pregnant Or Postpartum Women', desc: 'TMS offers an alternative to anti-depressants for pregnant or postpartum women facing anxiety and depression.' },
  { title: 'Patients With Cognitive Decline', desc: 'TMS can enhance cognitive function and slow cognitive decline by helping the brain form new neural connections.' },
  { title: 'Patients With Medication Sensitivities', desc: 'TMS is a breakthrough for those with antidepressant intolerance by improving mood regulation through stimulation.' },
  { title: 'Military Personnel And Veterans', desc: 'TMS can aid military personnel and veterans in overcoming PTSD, depression, and anxiety.' },
  { title: 'Healthcare Workers', desc: 'TMS can support healthcare workers tackling depression, anxiety, and PTSD from demanding working conditions.' },
  { title: 'First Responders', desc: 'TMS can help first responders facing depression, anxiety, PTSD, and chronic pain.' },
];

export default function PsyenciaHome() {
  const [currentCondition, setCurrentCondition] = useState(0);
  const conditions = ['Brain Fog', 'Anxiety', 'OCD', 'PTSD', 'Chronic Pain'];
  const worksRef = useRef(null);
  const candidatesRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCondition((prev) => (prev + 1) % conditions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToWorks = () => {
    if (worksRef.current) {
      worksRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToCandidates = () => {
    if (candidatesRef.current) {
      candidatesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-[60vh] flex items-center justify-center bg-[#fff7f6] px-8 py-16 relative">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 mx-auto">
          {/* Left Side */}
          <div className="flex-1 flex flex-col items-start justify-center">
            <span className="text-base text-[#2A5DCC] mb-2 font-medium">Welcome to Psyencia</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#54586a] mb-2">TMS Therapy</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#ff8b7b] mb-4">Psyencia TMS</h2>
            <p className="text-gray-500 text-base md:text-lg mb-6 max-w-md">
              TMS is an <a href="https://www.tga.gov.au/standards-guidelines-publications-medical-devices-ivds" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">TGA</a> approved treatment that offers hope for long lasting relief from depression and many other neurological conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#ff8b7b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff7a6b] transition-colors" onClick={handleScrollToWorks}>
                IS TMS RIGHT FOR ME?
              </button>
              <button className="border-2 border-[#ff8b7b] text-[#ff8b7b] px-6 py-3 rounded-lg font-semibold hover:bg-[#ff8b7b] hover:text-white transition-colors">
                (02) 1234 5678
              </button>
            </div>
            <button className="mt-8 flex flex-col items-center group" onClick={handleScrollToWorks} aria-label="Scroll down">
              <span className="text-gray-400 text-xs mb-1">Scroll to learn more</span>
              <svg className="w-7 h-7 text-[#ff8b7b] animate-bounce group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>
          {/* Right Side */}
          <div className="flex-1 flex justify-center">
            <svg width="400" height="300" viewBox="0 0 400 300" className="w-full max-w-md">
              <circle cx="200" cy="150" r="120" fill="#ff8b7b" opacity="0.1"/>
              <circle cx="180" cy="130" r="40" fill="#ff8b7b" opacity="0.3"/>
              <circle cx="220" cy="170" r="35" fill="#ff8b7b" opacity="0.3"/>
              <path d="M160 120 Q200 100 240 120 Q200 140 160 120" fill="#ff8b7b" opacity="0.5"/>
              <path d="M160 180 Q200 200 240 180 Q200 160 160 180" fill="#ff8b7b" opacity="0.5"/>
              <circle cx="170" cy="140" r="3" fill="#54586a"/>
              <circle cx="230" cy="160" r="3" fill="#54586a"/>
            </svg>
          </div>
        </div>
      </div>
      {/* What is TMS Used For? */}
      <div ref={worksRef}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2A5DCC] mt-16 mb-4">What is TMS Used For?</h2>
        <TmsWorks />
      </div>
      {/* Who Can Benefit Section */}
      <section ref={candidatesRef} className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ff8b7b] mb-8">Who Can Benefit from TMS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidates.map((c, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 border border-gray-100 flex flex-col relative overflow-hidden">
              <h3 className="text-lg font-semibold text-[#54586a] mb-2">{c.title}</h3>
              <p className="text-[15px] text-[#ff8b7b] mb-2">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-[#2A5DCC] text-white px-8 py-4 rounded-full font-semibold shadow hover:bg-[#17408b] transition" onClick={() => window.location.href='/tms-candidates'}>
            See Full List of Candidates
          </button>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="bg-[#f7faff] py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <svg className="mx-auto mb-4 w-10 h-10 text-[#ff8b7b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6v8H9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21V7a5 5 0 00-10 0v14" /></svg>
          <blockquote className="text-xl italic text-[#54586a] mb-4">“TMS therapy at Psyencia changed my life. After years of struggling with depression, I finally found hope and real improvement. The team was caring and supportive every step of the way.”</blockquote>
          <div className="text-[#2A5DCC] font-semibold">— Satisfied Patient</div>
        </div>
      </section>
      {/* Providers, Guide, FAQ, Contact */}
      <TmsProviders />
      <TmsGuide />
      <TmsFaq />
      <TmsContact />
      {/* Sticky Book Consultation Button for Mobile */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50 md:hidden pointer-events-none">
        <button className="pointer-events-auto bg-[#ff8b7b] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-[#ff6b5b] transition text-lg" onClick={() => window.location.href='/contact'}>
          Book a Free Consultation
        </button>
      </div>
    </>
  );
} 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TmsWorks() {
  const [currentCondition, setCurrentCondition] = useState(0);
  const conditions = ['Brain Fog', 'Anxiety', 'OCD', 'PTSD', 'Chronic Pain'];
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCondition((prev) => (prev + 1) % conditions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#f7faff] py-16 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10">
        {/* Left Column */}
        <div className="flex-1 max-w-lg">
          <p className="uppercase text-[#2A5DCC] font-semibold tracking-widest mb-2 text-sm">What is TMS used for?</p>
          <h2 className="text-4xl font-bold text-[#2A5DCC] mb-2">TMS Therapy<br />For <span className="bg-[rgba(42,93,204,0.10)] px-2 py-1 rounded transition-all duration-1000">{conditions[currentCondition]}</span></h2>
          <p className="text-gray-600 mb-4">
            TMS is a non-invasive treatment that uses magnetic fields to stimulate nerve cells in the brain. It's particularly effective for <span className="bg-[rgba(42,93,204,0.10)] px-1 rounded">treatment-resistant depression</span> and other mental health conditions.
          </p>
          <p className="text-gray-600 mb-6">
            This innovative therapy has shown promising results for various conditions including depression, anxiety, PTSD, OCD, and chronic pain, offering hope for patients who haven't responded to traditional treatments.
          </p>
          <button className="bg-[#2A5DCC] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#17408b] transition-colors">
            SCHEDULE CONSULTATION
          </button>
        </div>
        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-[#2A5DCC] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-[#2A5DCC]">What To Expect</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Learn about the TMS treatment process and what to expect during your sessions.</p>
              <button className="text-[#2A5DCC] font-semibold text-sm hover:underline" onClick={() => navigate('/tms-info')}>LEARN MORE</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-[#2A5DCC] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-[#2A5DCC]">How Does TMS Work?</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Discover the science behind TMS and how it stimulates brain activity.</p>
              <button className="text-[#2A5DCC] font-semibold text-sm hover:underline" onClick={() => navigate('/tms-info')}>LEARN MORE</button>
            </div>
          </div>
          {/* Bottom Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-[#2A5DCC] mb-2">TGA Approved For Treatment</h3>
                <div className="text-sm text-[#2A5DCC] mb-3">
                  <p>2008 - Depression</p>
                  <p>2018 - OCD</p>
                  <p>2020 - Smoking Cessation</p>
                </div>
                <p className="text-xs text-gray-500">TGA approved for treatment-resistant depression and other conditions</p>
              </div>
              <div className="ml-4">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-[#2A5DCC]">
                  <circle cx="30" cy="30" r="25" fill="currentColor" opacity="0.1"/>
                  <path d="M20 30 L27 37 L40 23" stroke="currentColor" strokeWidth="3" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
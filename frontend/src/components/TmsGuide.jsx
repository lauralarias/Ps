import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TmsGuide({ scrollToHow }) {
  const navigate = useNavigate();
  const handleHowItWorks = () => {
    if (scrollToHow) {
      scrollToHow();
    } else {
      navigate('/tms-info');
    }
  };
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Video Player */}
        <div className="flex-1 relative">
          <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            {/* Curved background shape */}
            <div className="absolute -left-8 -top-8 w-32 h-32 bg-[#ff8b7b] opacity-10 rounded-full"></div>
            {/* Medical illustration */}
            <div className="relative z-10">
              <svg width="400" height="300" viewBox="0 0 400 300" className="w-full">
                {/* Patient chair */}
                <rect x="80" y="180" width="120" height="80" rx="10" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2"/>
                <rect x="90" y="190" width="100" height="60" rx="5" fill="#ff8b7b" opacity="0.3"/>
                {/* Patient */}
                <circle cx="140" cy="160" r="25" fill="#8b5a2b"/>
                <path d="M130 185 Q140 200 150 185" fill="none" stroke="#8b5a2b" strokeWidth="3"/>
                <path d="M125 190 L135 200" fill="none" stroke="#8b5a2b" strokeWidth="3"/>
                <path d="M155 190 L145 200" fill="none" stroke="#8b5a2b" strokeWidth="3"/>
                {/* Doctor */}
                <rect x="280" y="140" width="60" height="100" fill="white" stroke="#d1d5db" strokeWidth="2"/>
                <circle cx="310" cy="130" r="20" fill="#fbbf24"/>
                <rect x="285" y="150" width="50" height="80" fill="white"/>
                <rect x="290" y="160" width="40" height="60" fill="#3b82f6" opacity="0.3"/>
                {/* TMS Machine */}
                <rect x="200" y="100" width="120" height="80" rx="10" fill="#1f2937" stroke="#374151" strokeWidth="2"/>
                <rect x="210" y="110" width="100" height="50" fill="#1f2937"/>
                {/* Brain screen */}
                <circle cx="260" cy="135" r="15" fill="#1f2937" stroke="#6b7280" strokeWidth="1"/>
                <circle cx="255" cy="130" r="2" fill="#ff8b7b"/>
                <circle cx="265" cy="140" r="2" fill="#ff8b7b"/>
                <circle cx="250" cy="145" r="2" fill="#ff8b7b"/>
                <circle cx="270" cy="125" r="2" fill="#ff8b7b"/>
                {/* TMS Coil */}
                <ellipse cx="160" cy="120" rx="25" ry="15" fill="#6b7280" stroke="#374151" strokeWidth="2"/>
                <path d="M160 120 L200 120" stroke="#6b7280" strokeWidth="3"/>
                {/* Small blue screen */}
                <rect x="220" y="80" width="30" height="20" fill="#3b82f6" opacity="0.5" rx="2"/>
              </svg>
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l8-5-8-5z"/>
                  </svg>
                </div>
              </div>
            </div>
            {/* Subtle shadow */}
            <div className="absolute -bottom-1 -right-1 w-full h-full bg-red-600 opacity-10 rounded-lg"></div>
          </div>
        </div>
        {/* Right Side - Content */}
        <div className="flex-1 max-w-lg">
          <p className="uppercase text-[#ff8b7b] font-semibold tracking-widest mb-2 text-sm">A GUIDE TO</p>
          <h2 className="text-4xl font-bold text-[#54586a] mb-6">TMS Treatment</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Transcranial Magnetic Stimulation (or TMS) is a non-invasive form of brain stimulation that targets specific areas of the brain that are directly associated with controlling mood and depression.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              onClick={handleHowItWorks}
            >
              <span>HOW IT WORKS</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 5v10l8-5-8-5z"/>
              </svg>
            </button>
            <button className="border-2 border-[#ff8b7b] text-[#ff8b7b] px-6 py-3 rounded-lg font-semibold hover:bg-[#ff8b7b] hover:text-white transition-colors flex items-center justify-center gap-2">
              <span>DOWNLOAD GUIDE</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
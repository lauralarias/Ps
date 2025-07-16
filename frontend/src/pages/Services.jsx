import React from 'react';

const brainDiagrams = [
  // Placeholder SVGs for each brain state
  (
    <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="45" rx="50" ry="40" fill="#F3F4F6" />
      <ellipse cx="80" cy="35" rx="15" ry="10" fill="#B4B8D7" />
      <ellipse cx="60" cy="45" rx="8" ry="6" fill="#6B6FC5" />
      <text x="60" y="85" textAnchor="middle" fontSize="14" fill="#444">Healthy state</text>
    </svg>
  ),
  (
    <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="45" rx="50" ry="40" fill="#F3F4F6" />
      <ellipse cx="80" cy="35" rx="15" ry="10" fill="#B4B8D7" />
      <ellipse cx="60" cy="45" rx="8" ry="6" fill="#C53030" />
      <text x="60" y="85" textAnchor="middle" fontSize="14" fill="#444">Depression state</text>
    </svg>
  ),
  (
    <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="45" rx="50" ry="40" fill="#F3F4F6" />
      <ellipse cx="80" cy="35" rx="15" ry="10" fill="#B4B8D7" />
      <ellipse cx="60" cy="45" rx="8" ry="6" fill="#2A5DCC" />
      <text x="60" y="85" textAnchor="middle" fontSize="14" fill="#444">TMS Delivery</text>
    </svg>
  ),
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-12 lg:px-32">
      {/* Section 1: TMS Overview */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start mb-20">
        <div>
          <p className="text-lg text-slate-700 mb-6">
            <span className="font-bold text-[#2A5DCC]">TMS</span> works by changing patterns of brain activity associated with mental health conditions. TMS is applied by a coil positioned above the head, and delivers magnetic pulses to a specific brain region.
          </p>
          <p className="text-lg text-slate-700 mb-6">
            The magnetic pulses can either increase or decrease activation of nerves in a brain region. The effect is that patterns of brain activity between brain regions associated with the mental health condition are normalised.
          </p>
        </div>
        <div className="flex flex-col items-center">
          {brainDiagrams[0]}
        </div>
      </div>

      {/* Section 2: What can TMS treat? */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start mb-20">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">What can TMS Treat?</h2>
          <p className="text-lg text-slate-700 mb-6">
            TMS has the most evidence for treatment of depression.
          </p>
        </div>
        <div className="flex flex-col items-center">
          {brainDiagrams[1]}
        </div>
      </div>

      {/* Section 3: Other therapies in TRD */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start mb-20">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">What other therapies are used in treatment resistant depression?</h2>
          <p className="text-lg text-slate-700 mb-6">
            In treatment resistant depression (TRD), <span className="font-bold text-[#2A5DCC]">TMS has comparable efficacy to ECT and further medication trials.</span> ECT is used in the most severe cases of depression. Medication strategies involve trialling different types of medication or combining medications.
          </p>
        </div>
        <div className="flex flex-col items-center">
          {brainDiagrams[1]}
        </div>
      </div>

      {/* How TMS Works Section */}
      <section className="py-12 md:py-20 bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-10">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">How TMS Works</h2>
          <p className="text-lg text-blue-800 mb-4">Discover the science behind Transcranial Magnetic Stimulation and how it can transform your mental health journey.</p>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Repetitive Transcranial Magnetic Stimulation (rTMS)</h3>
              <p className="text-sm text-slate-700">The most widely used and researched TMS protocol. rTMS delivers repeated magnetic pulses to stimulate specific areas of the brain involved in mood regulation. It is the standard treatment with strong clinical evidence, widely supported by Medicare for its effectiveness.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Theta Burst Stimulation (TBS)</h3>
              <p className="text-sm text-slate-700">A faster and more time-efficient variation of TMS. TBS delivers bursts of magnetic pulses in rapid succession, potentially reducing treatment time while maintaining therapeutic benefits.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Deep Transcranial Magnetic Stimulation (dTMS)</h3>
              <p className="text-sm text-slate-700">An advanced TMS technique that uses specialized coils to reach deeper brain structures. This can enhance treatment outcomes, especially for individuals who may not respond to standard TMS protocols.</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          {/* Placeholder for TMS Brain Treatment Diagram */}
          <div className="w-64 h-64 bg-blue-100 rounded-full flex items-center justify-center shadow-inner">
            <span className="text-blue-400 text-lg font-semibold">TMS Brain Treatment Diagram</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 
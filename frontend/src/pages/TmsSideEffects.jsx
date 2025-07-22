import React from 'react';

export default function TmsSideEffects() {
  return (
    <div className="bg-[#fdf7f3] min-h-screen pb-16 pt-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left: Text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2A5DCC] mb-4">TMS Side Effects And Benefits</h1>
          <div className="w-10 h-1 bg-[#ff6f61] rounded mb-6"></div>
          <p className="text-gray-700 text-lg mb-8 max-w-lg">
            Explore the side effects and benefits of Transcranial Magnetic Stimulation treatment. Learn how this non-invasive approach can offer effective relief while also understanding the potential side effects so you can make an informed decision for your health.
          </p>
          <button className="bg-[#ff6f61] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[#ff8b7b] transition-all">CONTACT US</button>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="TMS and Brain"
              className="w-80 h-56 object-cover rounded-2xl border-4 border-white shadow-lg z-10"
            />
            <div className="absolute -bottom-4 -right-4 w-80 h-56 border-8 border-[#ff6f61] rounded-2xl z-0" style={{borderTop: 'none', borderLeft: 'none'}}></div>
          </div>
        </div>
      </div>

      {/* Side Effects Section */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-[#2A5DCC] mb-6">Possible rTMS Therapy Side Effects</h2>
        <p className="text-gray-700 text-lg mb-8">What are the side effects of TMS? This is a common question for individuals considering this form of treatment. While repetitive transcranial magnetic stimulation is safe and well-tolerated, as with any medical procedure, there are potential pros and cons of TMS.</p>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Dizziness */}
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-[#ff6f61]">
            <h3 className="text-xl font-bold text-[#2A5DCC] mb-2">Dizziness</h3>
            <p className="text-gray-700 text-sm">Patients may experience a sensation of dizziness during or shortly after TMS sessions. This occurs as the magnetic pulses stimulate the brain, occasionally affecting the inner ear's balance mechanisms. Typically, it is mild and subsides quickly, allowing patients to continue their daily activities without interruption.</p>
          </div>
          {/* Headaches */}
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-[#ff6f61]">
            <h3 className="text-xl font-bold text-[#2A5DCC] mb-2">Headaches</h3>
            <p className="text-gray-700 text-sm">Some individuals report mild headaches following TMS sessions, likely due to the stimulation of superficial nerves and muscle contractions in the scalp. These are generally manageable with over-the-counter pain relievers and often decrease in frequency as treatment progresses.</p>
          </div>
          {/* Scalp Discomfort */}
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-[#ff6f61]">
            <h3 className="text-xl font-bold text-[#2A5DCC] mb-2">Scalp Discomfort</h3>
            <p className="text-gray-700 text-sm">During TMS treatment, patients might feel slight discomfort or tingling at the site where the coil is placed. The sensation is usually brief and diminishes over subsequent sessions as the body acclimates to the procedure.</p>
          </div>
        </div>
        <p className="text-gray-700 mb-8">The good news is that magnetic therapy side effects are temporary and usually resolve on their own. Serious repetitive transcranial magnetic stimulation TMS side effects are exceedingly rare, especially when conducted by trained professionals in a controlled environment.</p>
        <p className="text-gray-700 mb-8">Also, because there are no TMS long-term side effects, many people are choosing this non-invasive, pain-free approach to mental health treatment. Because TMS side effects long-term have not been reported, it is a safe option for patients seeking sustainable relief from their symptoms.</p>
        {/* Stats Row */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1 bg-[#e0eaff] rounded-xl p-6 text-center shadow">
            <div className="text-3xl font-bold text-[#2A5DCC] mb-2">10 years</div>
            <div className="text-gray-700 text-sm">TMS has been used for over 10 years and is FDA-approved for treating depression. <span className="text-xs">- National Institutes of Health</span></div>
          </div>
          <div className="flex-1 bg-[#e0eaff] rounded-xl p-6 text-center shadow">
            <div className="text-3xl font-bold text-[#2A5DCC] mb-2">5%</div>
            <div className="text-gray-700 text-sm">Less than 5% of TMS patients experience any side effects at all. <span className="text-xs">- NeuroPsych Wellness Center</span></div>
          </div>
          <div className="flex-1 bg-[#e0eaff] rounded-xl p-6 text-center shadow">
            <div className="text-3xl font-bold text-[#2A5DCC] mb-2">0.1%</div>
            <div className="text-gray-700 text-sm">Less than 0.1% of patients have experienced seizures during TMS treatment, which is lower than the risk of experiencing a seizure while taking medication for depression. <span className="text-xs">- National Institutes of Health</span></div>
          </div>
        </div>
        {/* Benefits Section */}
        <h2 className="text-3xl font-bold text-[#2A5DCC] mb-6">Benefits of TMS for Different Conditions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li><span className="font-bold text-[#2A5DCC]">Addiction:</span> Supportive treatment by modulating brain circuits involved in cravings and impulse control. Complements traditional therapies, especially for high relapse or resistance cases.</li>
              <li><span className="font-bold text-[#2A5DCC]">Alzheimer’s Disease:</span> Explored for enhancing cognitive function and slowing progression by stimulating memory/cognition regions. Promising adjunctive treatment.</li>
              <li><span className="font-bold text-[#2A5DCC]">Anxiety:</span> Alleviates symptoms by modulating mood/stress brain areas. Suitable for those not responding to medications, with minimal side effects.</li>
              <li><span className="font-bold text-[#2A5DCC]">Bipolar Disorders:</span> Stabilizes mood and reduces depressive episodes, especially for treatment-resistant symptoms or those minimizing medication use.</li>
              <li><span className="font-bold text-[#2A5DCC]">Brain Fog:</span> Enhances cognitive function and mental clarity by boosting neural activity and focus.</li>
              <li><span className="font-bold text-[#2A5DCC]">Chronic Pain:</span> Alters pain perception pathways, reducing pain intensity/frequency as a drug-free alternative.</li>
              <li><span className="font-bold text-[#2A5DCC]">Depression:</span> Well-established for treatment-resistant depression, stimulating underactive mood-regulation regions for sustained improvement.</li>
              <li><span className="font-bold text-[#2A5DCC]">Obsessive-Compulsive Disorder (OCD):</span> Targets brain circuits for compulsive behaviors/intrusive thoughts, reducing severity and supplementing traditional therapies.</li>
              <li><span className="font-bold text-[#2A5DCC]">Parkinson's Disease:</span> Improves motor function and reduces tremors by stimulating motor cortex areas.</li>
              <li><span className="font-bold text-[#2A5DCC]">Post-Traumatic Stress Disorder (PTSD):</span> Regulates fear/emotional processing brain regions, reducing PTSD symptoms and providing a non-pharmacological option.</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li><span className="font-bold text-[#2A5DCC]">Schizophrenia:</span> Addresses negative symptoms/cognitive deficits by modulating neural activity, improving social/cognitive functioning.</li>
              <li><span className="font-bold text-[#2A5DCC]">Stroke Rehabilitation:</span> Promotes recovery of motor/cognitive functions by enhancing neuroplasticity in affected brain regions.</li>
              <li><span className="font-bold text-[#2A5DCC]">Treatment-Resistant Depression:</span> Highly effective for difficult cases, restoring normal brain activity and mood balance.</li>
              <li><span className="font-bold text-[#2A5DCC]">Older Adults:</span> Non-invasive alternative for mood regulation without long-term medication complications, ideal for age-related sensitivities.</li>
              <li><span className="font-bold text-[#2A5DCC]">Medication Sensitivities:</span> Safe/effective for those who cannot tolerate or wish to avoid drugs, bypassing systemic impacts.</li>
              <li><span className="font-bold text-[#2A5DCC]">High-Stress Professions:</span> Improves mood/cognitive function for professionals needing mental clarity and stability, without medication side effects.</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700 mt-8">Overall, repetitive transcranial magnetic stimulation's adaptability in addressing the diverse needs of different groups underscores its potential as a transformative approach to mental health care, offering relief and improved outcomes for those seeking an alternative to conventional treatments.</p>
      </div>
    </div>
  );
} 
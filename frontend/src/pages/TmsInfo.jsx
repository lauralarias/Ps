import React, { useRef } from 'react';
import TmsGuide from '../components/TmsGuide';
import TmsWorks from '../components/TmsWorks';

export default function TmsInfo() {
  const howRef = useRef(null);

  const scrollToHow = () => {
    if (howRef.current) {
      howRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f7faff] min-h-screen pb-16 pt-10 px-4">
      <div className="max-w-5xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2A5DCC] mb-8">How TMS Works?</h1>
      </div>
      <div className="max-w-6xl mx-auto mb-12">
        <TmsGuide scrollToHow={scrollToHow} />
      </div>
      {/* Two-column info section */}
      <div ref={howRef} id="tms-how-section" className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg p-8 mb-12">
        {/* Left column */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2A5DCC] mb-4">TMS What To Expect</h2>
          <p className="text-gray-700 mb-4">The transcranial magnetic stimulation process starts with an initial consultation with a healthcare professional, where your medical history and current condition are reviewed to determine if TMS is suitable for you. This meeting provides an opportunity to learn about the benefits and potential risks of magnetic brain therapy, allowing you to ask any questions and understand the treatment process. A personalized treatment plan will be developed to meet your specific needs.</p>
          <p className="text-gray-700 mb-4">Before TMS magnetic treatment begins, a brain mapping session is conducted to identify the best location on your scalp for the magnetic pulses, ensuring that the therapy targets the brain areas linked to mood regulation. You'll experience the sensation of the magnetic pulses, which feel like a gentle tapping on your scalp. Each therapy session, lasting about 20-40 minutes, involves sitting comfortably as the device delivers magnetic pulses to your brain. There's no need for anesthesia, and most people experience only minor scalp discomfort.</p>
          <p className="text-gray-700 mb-4">Typically, sessions are scheduled five times a week over several weeks to achieve noticeable improvements in mood and mental health. After each session, you can immediately resume your normal activities, as no recovery time is needed. Follow-up appointments are crucial to monitor your progress and make necessary adjustments to the treatment, ensuring everything is proceeding safely.</p>
          <p className="text-gray-700 mb-4">Your <span className="text-[#2A5DCC] font-semibold">TMS treatment plan</span> is tailored specifically to you, with flexible adjustments based on your response to the therapy. Periodic evaluations help assess long-term benefits and determine if additional sessions are needed, ensuring you receive the most effective care for managing mood disorders.</p>
        </div>
        {/* Right column */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2A5DCC] mb-4">What Is TMS Treatment</h2>
          <p className="text-gray-700 mb-4">Transcranial magnetic stimulation (TMS) is a revolutionary approach in the field of mental health treatment, designed to ease the effects of mood disorders such as depression with precision and innovation. Transcranial magnetic treatment sets itself apart because it is non-invasive, and uses magnetic fields to stimulate specific regions of the brain involved in mood regulation.</p>
          <p className="text-gray-700 mb-4">At the core of TMS therapy is its unique ability to influence brain activity through electromagnetic induction. During a TMS session, a specialized electromagnetic coil is strategically positioned against the patient's scalp. This coil generates controlled magnetic pulses that penetrate the skull and reach targeted brain areas. These pulses are meticulously fine-tuned to induce small electrical currents, activating neurons within the brain's mood-regulating networks.</p>
          <p className="text-gray-700 mb-4">Activating these brain cells is thought to help correct abnormal brainwave patterns linked to depression, giving the brain a chance to reset its natural rhythms. This can reduce symptoms of mood disorders and offers a new option for people who haven't had success with traditional treatments.</p>
          <p className="text-gray-700 mb-4">Scientific exploration into TMS has revealed its effectiveness in reducing symptoms of depression, with many studies demonstrating notable improvements in patients' mental health. The precision of TMS allows for individualized treatment plans, ensuring the therapy is tailored to each patient's unique neural landscape. This personalized approach enhances the potential for achieving significant and lasting results.</p>
          <p className="text-gray-700 mb-4">With its drug-free and non-surgical nature, TMS therapy treatment presents a safe and effective process for seeking new solutions to chronic mood challenges.</p>
        </div>
      </div>
      {/* Types of TMS Therapy Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2A5DCC] mb-8">Types of TMS Therapy</h2>
        {/* Visual Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
          {/* Left: Text */}
          <div className="flex-1">
            <div className="w-10 h-1 bg-[#2A5DCC] rounded mb-4"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#2A5DCC] mb-4">The Different Types Of TMS</h3>
            <p className="text-gray-700 mb-6 text-lg">Explore the different types of Transcranial Magnetic Stimulation approaches like rTMS, dTMS, iTBS, nTMS, and aTMS. Understand how each TMS method offers unique benefits and treatment timelines depending on your unique health circumstances and goals.</p>
            <div className="flex gap-4 mt-4">
              <button className="bg-[#ff6f61] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ff8b7b] transition-all">CONTACT US</button>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="Therapy Session" className="w-96 h-64 object-cover rounded-xl border-4 border-white shadow-lg" />
              <div className="absolute -bottom-4 -right-4 w-96 h-64 border-8 border-[#ff6f61] rounded-xl z-[-1]" style={{borderTop: 'none', borderLeft: 'none'}}></div>
            </div>
          </div>
        </div>
        {/* rTMS */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2A5DCC] mb-2">Repetitive Transcranial Magnetic Stimulation (rTMS)</h3>
          <p className="text-gray-700 mb-2">Repetitive transcranial magnetic stimulation (rTMS) stands out as a widely used form of treatment among the types of TMS machines, known for its precision and effectiveness in managing mood disorders. Our Gemini TMS team mainly uses rTMS to treat patients.</p>
          <p className="text-gray-700 mb-2">Unlike other types of TMS systems, rTMS delivers repeated magnetic pulses to specific brain regions that regulate mood, without the need for invasive procedures or sedation. This non-invasive treatment is structured over a course of daily sessions spanning four to six weeks, with each session lasting approximately 20 to 40 minutes. This consistent and targeted approach helps to stimulate neural pathways, promoting positive changes in brain activity and alleviating symptoms.</p>
          <div className="mb-2">
            <span className="font-semibold text-[#2A5DCC]">Conditions treated with rTMS:</span>
            <ul className="list-disc list-inside text-gray-700 ml-4 mt-1">
              <li><span className="font-semibold">Anxiety Disorders:</span> rTMS can help ease symptoms of anxiety by targeting brain areas involved in fear and worry, promoting a calmer state of mind.</li>
              <li><span className="font-semibold">Depression:</span> By focusing on areas of the brain linked with mood regulation, rTMS can significantly reduce symptoms of depression and boost mood-improving neurotransmitters.</li>
              <li><span className="font-semibold">Obsessive-Compulsive Disorder (OCD):</span> rTMS aids in easing OCD symptoms by modulating neural circuits, decreasing compulsive behaviors and intrusive thoughts.</li>
              <li><span className="font-semibold">Post-Traumatic Stress Disorder (PTSD):</span> For PTSD, rTMS targets the brain's stress response systems, helping to diminish hyperarousal and intrusive memories.</li>
              <li><span className="font-semibold">Treatment-Resistant Depression:</span> rTMS is particularly beneficial for individuals with treatment-resistant depression, offering hope for sustained improvement.</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-6 mt-4">
            <div className="bg-[#e0eaff] rounded-xl p-4 flex-1 min-w-[180px] text-center">
              <div className="text-2xl font-bold text-[#2A5DCC]">29.3%</div>
              <div className="text-gray-700 text-sm">of patients responded to treatment and 18.6% could achieve remission with high-frequency rTMS. <span className="text-xs">- NIMH</span></div>
            </div>
            <div className="bg-[#e0eaff] rounded-xl p-4 flex-1 min-w-[180px] text-center">
              <div className="text-2xl font-bold text-[#2A5DCC]">2008</div>
              <div className="text-gray-700 text-sm">FDA approved TMS as a treatment for depression, the first non-invasive brain stimulation therapy to receive such approval. <span className="text-xs">- FDA</span></div>
            </div>
            <div className="bg-[#e0eaff] rounded-xl p-4 flex-1 min-w-[180px] text-center">
              <div className="text-2xl font-bold text-[#2A5DCC]">1 in 5</div>
              <div className="text-gray-700 text-sm">adults in the US experience a mental health condition each year. <span className="text-xs">- NAMI</span></div>
            </div>
          </div>
        </div>
        {/* dTMS */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2A5DCC] mb-2">Deep Transcranial Magnetic Stimulation (dTMS)</h3>
          <p className="text-gray-700 mb-2">Deep transcranial magnetic stimulation distinguishes itself from other forms of TMS through its ability to reach deeper brain structures, enhancing its effectiveness in treating complex mood and psychiatric disorders.</p>
          <p className="text-gray-700 mb-2">Deep TMS utilizes a specialized coil to deliver magnetic pulses that penetrate further into the brain, targeting areas that are otherwise difficult to influence. This non-invasive treatment is structured as daily sessions over four to five weeks, with each session lasting approximately 20 minutes.</p>
          <div className="mb-2">
            <span className="font-semibold text-[#2A5DCC]">Conditions treated with dTMS:</span>
            <ul className="list-disc list-inside text-gray-700 ml-4 mt-1">
              <li><span className="font-semibold">Addiction:</span> dTMS helps alleviate addiction symptoms by targeting brain regions associated with reward and craving.</li>
              <li><span className="font-semibold">Anxiety Disorders:</span> dTMS can effectively reduce excessive worry and panic symptoms by modulating the brain's fear and anxiety circuits.</li>
              <li><span className="font-semibold">Bipolar Disorder:</span> dTMS stabilizes mood swings by influencing neural pathways involved in emotional regulation.</li>
              <li><span className="font-semibold">Chronic Pain:</span> dTMS provides relief for chronic pain by altering pain perception pathways in the brain.</li>
              <li><span className="font-semibold">Major Depressive Disorder (MDD):</span> dTMS is particularly effective for MDD by activating brain regions that are underactive in depression.</li>
            </ul>
          </div>
        </div>
        {/* iTBS */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2A5DCC] mb-2">Intermittent Theta Burst Stimulation (iTBS)</h3>
          <p className="text-gray-700 mb-2">Intermittent theta burst stimulation offers a cutting-edge approach to transcranial magnetic stimulation, setting itself apart with its efficiency and rapid session times.</p>
          <p className="text-gray-700 mb-2">iTBS uses short bursts of magnetic pulses at a high frequency to stimulate brain activity. This innovative method delivers effective treatment in significantly less time, with each session lasting only three to ten minutes. The accelerated course typically spans four to six weeks, making it a convenient option for those seeking timely intervention.</p>
          <div className="mb-2">
            <span className="font-semibold text-[#2A5DCC]">Conditions treated with iTBS:</span>
            <ul className="list-disc list-inside text-gray-700 ml-4 mt-1">
              <li><span className="font-semibold">Depression:</span> iTBS helps combat depression by reactivating underactive regions of the brain associated with mood regulation.</li>
              <li><span className="font-semibold">Obsessive-Compulsive Disorder (OCD):</span> iTBS can reduce the severity and frequency of obsessive thoughts and actions.</li>
              <li><span className="font-semibold">Post-Traumatic Stress Disorder (PTSD):</span> iTBS aids in alleviating PTSD symptoms by influencing brain areas linked to fear and memory processing.</li>
              <li><span className="font-semibold">Schizophrenia:</span> iTBS modulates the neural pathways associated with cognitive and auditory processing.</li>
            </ul>
          </div>
        </div>
        {/* nTMS */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#2A5DCC] mb-2">Navigated Transcranial Magnetic Stimulation (nTMS)</h3>
          <p className="text-gray-700 mb-2">Navigated transcranial magnetic stimulation stands out in the TMS landscape for its precision and application in pre-surgical mapping.</p>
          <p className="text-gray-700 mb-2">nTMS utilizes advanced imaging techniques to accurately target specific brain areas, making it an invaluable tool in preparing for neurosurgical procedures. Each session ranges from 30 to 60 minutes, providing ample time for detailed mapping and assessment.</p>
          <div className="mb-2">
            <span className="font-semibold text-[#2A5DCC]">Conditions treated with nTMS:</span>
            <ul className="list-disc list-inside text-gray-700 ml-4 mt-1">
              <li><span className="font-semibold">Brain Tumors:</span> nTMS assists in identifying and preserving essential brain functions during tumor surgery.</li>
              <li><span className="font-semibold">Epilepsy:</span> nTMS contributes to more effective surgical planning for epilepsy treatment.</li>
              <li><span className="font-semibold">Motor Disorders:</span> nTMS aids in locating motor function areas, crucial for surgeries aiming to alleviate motor disorders.</li>
              <li><span className="font-semibold">Speech Disorders:</span> nTMS helps pinpoint critical language centers, ensuring they are preserved during surgical interventions.</li>
            </ul>
          </div>
        </div>
        {/* aTMS */}
        <div>
          <h3 className="text-2xl font-semibold text-[#2A5DCC] mb-2">Accelerated Transcranial Magnetic Stimulation (aTMS)</h3>
          <p className="text-gray-700 mb-2">Accelerated transcranial magnetic stimulation revolutionizes the approach to TMS therapy with its rapid and efficient treatment delivery.</p>
          <p className="text-gray-700 mb-2">aTMS compresses the treatment schedule into a condensed timeframe, sometimes achieving significant results in as little as a week. This is made possible through multiple short sessions lasting just three to ten minutes each, conducted throughout the day.</p>
          <div className="mb-2">
            <span className="font-semibold text-[#2A5DCC]">Conditions treated with aTMS:</span>
            <ul className="list-disc list-inside text-gray-700 ml-4 mt-1">
              <li><span className="font-semibold">Anxiety Disorders:</span> aTMS targets brain circuits associated with anxiety, reducing overactivity that contributes to symptoms.</li>
              <li><span className="font-semibold">Bipolar Disorder:</span> aTMS helps manage the mood swings typical of bipolar disorder.</li>
              <li><span className="font-semibold">Depression:</span> aTMS addresses depression by stimulating underactive areas of the brain responsible for mood control.</li>
              <li><span className="font-semibold">Obsessive-Compulsive Disorder (OCD):</span> aTMS diminishes the compulsive urges and obsessive thoughts characteristic of OCD.</li>
              <li><span className="font-semibold">Post-Traumatic Stress Disorder (PTSD):</span> aTMS helps manage PTSD by influencing brain areas involved in the stress response and fear processing.</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* TMS Treatment Types Comparison Table */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2A5DCC] mb-8">TMS Treatment Types in Australia</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#2A5DCC] text-white">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Type of TMS</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Covered by Medicare</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Session Duration</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Full Course Duration</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Precision of Treatment</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Side Effect Potential</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-[#2A5DCC]">rTMS (Repetitive TMS)</td>
                <td className="border border-gray-300 px-4 py-3">
                  <span className="text-green-600 font-semibold">✅ Yes</span>
                  <div className="text-xs text-gray-600 mt-1">(with psychiatrist referral & treatment-resistant depression diagnosis)</div>
                </td>
                <td className="border border-gray-300 px-4 py-3">~19 minutes</td>
                <td className="border border-gray-300 px-4 py-3">20–35 sessions over 4–6 weeks</td>
                <td className="border border-gray-300 px-4 py-3">
                  <span className="text-blue-600 font-semibold">+</span>
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  <span className="text-green-600 font-semibold">Low</span>
                </td>
                <td className="border border-gray-300 px-4 py-3 text-sm">Most established and widely used. Supported by Medicare in eligible patients.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-[#2A5DCC]">iTBS (Intermittent Theta Burst)</td>
                <td className="border border-gray-300 px-4 py-3">
                  <span className="text-green-600 font-semibold">✅ Yes</span>
                  <div className="text-xs text-gray-600 mt-1">(as variation of rTMS)</div>
                </td>
                <td className="border border-gray-300 px-4 py-3">~3 minutes</td>
                <td className="border border-gray-300 px-4 py-3">20–35 sessions over 4–6 weeks</td>
                <td className="border border-gray-300 px-4 py-3">
                  <span className="text-blue-600 font-semibold">+</span>
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  <span className="text-yellow-600 font-semibold">Moderate</span>
                </td>
                <td className="border border-gray-300 px-4 py-3 text-sm">Shorter sessions with similar effectiveness to rTMS. Often used under Medicare-covered rTMS protocol.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-[#2A5DCC]">dTMS (Deep TMS)</td>
                <td className="border border-gray-300 px-4 py-3">
                  <span className="text-red-600 font-semibold">❌ Not typically covered</span>
                </td>
                <td className="border border-gray-300 px-4 py-3">~20 minutes</td>
                <td className="border border-gray-300 px-4 py-3">20–30 sessions over 4–6 weeks</td>
                <td className="border border-gray-300 px-4 py-3">
                  <span className="text-red-600 font-semibold">-</span>
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  <span className="text-yellow-600 font-semibold">Moderate to high</span>
                </td>
                <td className="border border-gray-300 px-4 py-3 text-sm">Reaches deeper brain regions; used in select clinics. Private pay usually required.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-[#2A5DCC]">nTMS (Navigated TMS)</td>
                <td className="border border-gray-300 px-4 py-3">
                  <span className="text-red-600 font-semibold">❌ No</span>
                </td>
                <td className="border border-gray-300 px-4 py-3">Varies depending on TMS used</td>
                <td className="border border-gray-300 px-4 py-3">Same as selected protocol</td>
                <td className="border border-gray-300 px-4 py-3">
                  <span className="text-green-600 font-semibold">++</span>
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  <span className="text-green-600 font-semibold">Low</span>
                </td>
                <td className="border border-gray-300 px-4 py-3 text-sm">Offers more precise targeting using brain imaging. Not widely available in Australia.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-[#2A5DCC]">aTMS (Accelerated TMS)</td>
                <td className="border border-gray-300 px-4 py-3">
                  <span className="text-red-600 font-semibold">❌ No</span>
                </td>
                <td className="border border-gray-300 px-4 py-3">Often uses iTBS: 3 mins per session, multiple per day</td>
                <td className="border border-gray-300 px-4 py-3">As short as 5–10 days</td>
                <td className="border border-gray-300 px-4 py-3">Varies</td>
                <td className="border border-gray-300 px-4 py-3">
                  <span className="text-yellow-600 font-semibold">Moderate</span>
                </td>
                <td className="border border-gray-300 px-4 py-3 text-sm">Intensive treatment format not currently supported by Medicare. May involve 5+ sessions per day.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-[#2A5DCC]">
          <p className="text-gray-700 text-sm">
            <strong>Note:</strong> Medicare coverage and availability may vary. Always consult with your healthcare provider and check current Medicare guidelines for the most up-to-date information about TMS treatment coverage in Australia.
          </p>
        </div>
      </div>
      
      {/* Remove the TmsWorks component at the bottom */}
    </div>
  );
} 
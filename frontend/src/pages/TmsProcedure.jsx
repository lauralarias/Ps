import React from 'react';

export default function TmsProcedure() {
  return (
    <div className="bg-[#f7faff] min-h-screen pb-16 pt-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2A5DCC] mb-6">
            What Is the TMS Process Like?
          </h1>
          <div className="w-20 h-1 bg-[#2A5DCC] mx-auto rounded-full mb-8"></div>
          {/* Exploring the rTMS Procedure Section */}
          <div className="max-w-2xl mx-auto text-left">
            <h2 className="text-2xl font-bold text-[#2A5DCC] mb-3">Exploring the rTMS Procedure</h2>
            <p className="text-gray-700 mb-4">Repetitive transcranial magnetic stimulation is a non-invasive procedure designed to stimulate specific regions of the brain associated with mood regulation. During a TMS session, the patient sits comfortably while a magnetic coil is placed against the scalp, usually near the forehead. This coil generates magnetic pulses that penetrate the skull and induce small electrical currents in the targeted brain areas.</p>
            <p className="text-gray-700 mb-4">A typical TMS session lasts about 30 to 40 minutes, and patients can remain awake and alert throughout the procedure. Most people find the experience painless, though they may feel a slight tapping or tingling sensation on the scalp. After the session, patients can immediately resume their daily activities, as there is no recovery period needed.</p>
            <p className="text-gray-700 mb-4">The safety and comfort of transcranial magnetic stimulation make it an appealing option for those seeking alternatives to traditional medication for mood disorders. It offers an effective treatment path with minimal risks and is suitable for individuals who have not found relief with other therapies.</p>
            <div className="flex flex-col md:flex-row gap-6 my-6">
              <div className="flex-1 bg-[#e0eaff] rounded-xl p-6 text-center shadow">
                <div className="text-2xl font-bold text-[#2A5DCC] mb-2">50-60%</div>
                <div className="text-gray-700 text-sm">of people with treatment-resistant depression have a clinically meaningful response to TMS. <span className="text-xs">- Harvard Medical School</span></div>
              </div>
              <div className="flex-1 bg-[#e0eaff] rounded-xl p-6 text-center shadow">
                <div className="text-2xl font-bold text-[#2A5DCC] mb-2">Up to 75%</div>
                <div className="text-gray-700 text-sm">remission rate for patients after six months of TMS treatment. <span className="text-xs">- National Institutes of Health</span></div>
              </div>
            </div>
            <p className="text-gray-700 font-semibold mt-6">
              <a href="/tms-side-effects" className="text-[#2A5DCC] underline font-bold hover:text-[#1e4ba3] transition-colors">
                But, what are the side effects of transcranial magnetic stimulation and how can it benefit those who undergo the treatment?
              </a>
            </p>
            {/* Brief summary answer */}
            <div className="mt-8 bg-white rounded-xl shadow p-6 border-l-4 border-[#ff6f61]">
              <h3 className="text-xl font-bold text-[#2A5DCC] mb-2">Possible rTMS Therapy Side Effects</h3>
              <p className="text-gray-700 mb-3">TMS is safe and well-tolerated, but as with any medical procedure, some side effects are possible. Most are mild and temporary:</p>
              <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                <li><span className="font-semibold text-[#2A5DCC]">Dizziness:</span> Mild and brief, may occur during or after sessions, usually subsides quickly.</li>
                <li><span className="font-semibold text-[#2A5DCC]">Headaches:</span> Mild, tension-like headaches may occur, often resolve with simple pain relief and decrease over time.</li>
                <li><span className="font-semibold text-[#2A5DCC]">Scalp Discomfort:</span> Tingling or slight discomfort at the coil site, typically fades as you adjust to treatment.</li>
              </ul>
              <p className="text-gray-700 mb-2">Serious side effects are extremely rare when TMS is performed by trained professionals. There are no known long-term side effects, making TMS a safe, non-invasive, and TGA-approved option for depression and other conditions.</p>
              <p className="text-gray-700">TMS is also used to help with anxiety, OCD, chronic pain, and more. <a href="/tms-side-effects" className="text-[#ff6f61] underline font-semibold hover:text-[#2A5DCC]">See full details and benefits here.</a></p>
            </div>
          </div>
        </div>

        {/* The TMS Procedure Visual Section */}
        <div className="max-w-4xl mx-auto mt-16 flex flex-col md:flex-row items-center gap-10 relative">
          {/* Left: Steps */}
          <div className="flex-1 z-10">
            <div className="mb-8">
              <div className="inline-block px-8 py-2 bg-[#ff6f61] text-white text-2xl font-bold rounded-xl shadow">The TMS Procedure</div>
            </div>
            <div className="flex flex-col gap-10 relative">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center mr-2">
                  <div className="w-10 h-10 rounded-full border-4 border-[#ff6f61] bg-white flex items-center justify-center text-[#ff6f61] font-bold text-lg">1</div>
                  <div className="h-16 w-1 bg-[#ff6f61] my-1 hidden md:block"></div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#2A5DCC]">Preparation</div>
                  <div className="text-gray-700">A specialized coil near the patient's scalp, typically over the prefrontal cortex.</div>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center mr-2">
                  <div className="w-10 h-10 rounded-full border-4 border-[#ff6f61] bg-white flex items-center justify-center text-[#ff6f61] font-bold text-lg">2</div>
                  <div className="h-16 w-1 bg-[#ff6f61] my-1 hidden md:block"></div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#2A5DCC]">Stimulation</div>
                  <div className="text-gray-700">Magnetic pulses are delivered through the coil to the targeted brain region.</div>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center mr-2">
                  <div className="w-10 h-10 rounded-full border-4 border-[#ff6f61] bg-white flex items-center justify-center text-[#ff6f61] font-bold text-lg">3</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#2A5DCC]">Post-Treatment</div>
                  <div className="text-gray-700">You may resume normal activities immediately, as no anesthesia or recovery time is needed.</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Illustration */}
          <div className="flex-1 flex justify-center items-center relative">
            <div className="absolute -top-8 -right-8 w-[340px] h-[340px] bg-[#ffe5df] rounded-full z-0 hidden md:block"></div>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                alt="TMS Procedure Illustration"
                className="w-80 h-72 object-cover rounded-2xl border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The transcranial magnetic stimulation process begins with a thorough preparation. Patients are guided through an initial consultation to determine the suitability of TMS for their condition.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {/* Step 1: Preparation */}
            <div className="border-l-4 border-[#2A5DCC] pl-6">
              <h2 className="text-2xl font-bold text-[#2A5DCC] mb-4">Preparation Phase</h2>
              <p className="text-gray-700 leading-relaxed">
                The process begins with a thorough preparation phase, ensuring that the patient is comfortable and well-informed about the procedure. During the session, patients are seated in a relaxed position, and protective earplugs are often provided to minimize the noise from the magnetic pulses. A crucial step in the process is the precise positioning of the magnetic coil, which is gently placed against the scalp.
              </p>
            </div>

            {/* Step 2: Brain Mapping */}
            <div className="border-l-4 border-[#2A5DCC] pl-6">
              <h2 className="text-2xl font-bold text-[#2A5DCC] mb-4">Brain Mapping & Targeting</h2>
              <p className="text-gray-700 leading-relaxed">
                This coil is strategically aligned using TMS brain mapping techniques to accurately target specific brain regions. The prefrontal cortex, a critical area involved in mood regulation, is often the primary focus of these sessions.
              </p>
            </div>

            {/* Step 3: Treatment Delivery */}
            <div className="border-l-4 border-[#2A5DCC] pl-6">
              <h2 className="text-2xl font-bold text-[#2A5DCC] mb-4">Treatment Delivery</h2>
              <p className="text-gray-700 leading-relaxed">
                Once the coil is correctly positioned, the TMS machine is activated to deliver magnetic pulses. These pulses generate small electrical currents that penetrate the skull, effectively stimulating nerve cells to modulate neural activity. The procedure is designed to be highly individualized, with the duration and intensity of the pulses carefully calibrated to meet each patient's specific needs.
              </p>
            </div>

            {/* Step 4: Safety & Effectiveness */}
            <div className="border-l-4 border-[#2A5DCC] pl-6">
              <h2 className="text-2xl font-bold text-[#2A5DCC] mb-4">Safety & Effectiveness</h2>
              <p className="text-gray-700 leading-relaxed">
                This precision ensures both the safety and the effectiveness of the treatment. Throughout the session, which typically lasts between 20 to 40 minutes, patients remain awake and alert, experiencing a non-invasive and straightforward process.
              </p>
            </div>

            {/* Step 5: Post-Treatment */}
            <div className="border-l-4 border-[#2A5DCC] pl-6">
              <h2 className="text-2xl font-bold text-[#2A5DCC] mb-4">Post-Treatment Care</h2>
              <p className="text-gray-700 leading-relaxed">
                Following the non-invasive brain stimulation, patients can usually resume their daily activities immediately, with minimal downtime and no anesthesia involved. It is important to monitor for mild side effects, such as scalp discomfort or slight headaches, which are generally transient and subside quickly. The post-treatment phase is crucial for ensuring that any side effects are managed effectively, allowing patients to continue their routine without interruption.
              </p>
            </div>
          </div>

          {/* TMS Process Steps Visual */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#2A5DCC] text-center mb-12">The TMS Treatment Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Step 1: Initial Consult */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#2A5DCC] rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
                  <div className="w-12 h-12 bg-[#e0eaff] rounded-full flex items-center justify-center border-2 border-[#2A5DCC] mt-2">
                    <svg className="w-6 h-6 text-[#2A5DCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
                  <h3 className="text-xl font-bold text-[#2A5DCC] mb-3">Initial Consult</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our healthcare providers will assess your medical history and determines if TMS is <span className="underline decoration-orange-400">right for you</span>. This consultation will address any questions you may have.
                  </p>
                </div>
              </div>

              {/* Step 2: Brain Mapping */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#2A5DCC] rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
                  <div className="w-12 h-12 bg-[#e0eaff] rounded-full flex items-center justify-center border-2 border-[#2A5DCC] mt-2">
                    <svg className="w-6 h-6 text-[#2A5DCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
                  <h3 className="text-xl font-bold text-[#2A5DCC] mb-3">Brain Mapping</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A brain mapping session is conducted at our <span className="underline decoration-orange-400">clinic</span> to determine the optimal location on your scalp for applying the magnetic pulses.
                  </p>
                </div>
              </div>

              {/* Step 3: TMS Sessions */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#2A5DCC] rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
                  <div className="w-12 h-12 bg-[#e0eaff] rounded-full flex items-center justify-center border-2 border-[#2A5DCC] mt-2">
                    <svg className="w-6 h-6 text-[#2A5DCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
                  <h3 className="text-xl font-bold text-[#2A5DCC] mb-3">TMS Sessions</h3>
                  <p className="text-gray-700 leading-relaxed">
                    TMS sessions typically last 20-40 minutes, during which magnetic pulses are sent to your brain. You will sit comfortably, and patients only experience mild discomfort.
                  </p>
                </div>
              </div>

              {/* Step 4: Repetition */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#2A5DCC] rounded-full flex items-center justify-center text-white font-bold text-lg">4</div>
                  <div className="w-12 h-12 bg-[#e0eaff] rounded-full flex items-center justify-center border-2 border-[#2A5DCC] mt-2">
                    <svg className="w-6 h-6 text-[#2A5DCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
                  <h3 className="text-xl font-bold text-[#2A5DCC] mb-3">Repetition</h3>
                  <p className="text-gray-700 leading-relaxed">
                    rTMS treatment plans at Psyencia TMS include repeated TMS sessions over several weeks (e.g., 5 sessions per week for 4-6 weeks) for optimal results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Personalized TMS Treatment Plans Section */}
          <div className="mt-16 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2A5DCC] mb-6">Personalized TMS Treatment Plans: An Overview</h2>
            <p className="text-gray-700 text-lg mb-6">Perhaps the most crucial and overlooked step in the TMS treatment process is the development and ongoing management of a TMS treatment plan. Each plan is meticulously crafted to determine the appropriate number of sessions and pinpoint the specific areas of the brain that require stimulation. This customization ensures that the therapy is precisely aligned with your condition and therapeutic goals.</p>
            <p className="text-gray-700 mb-8 font-semibold">But, why is a TMS treatment plan necessary?</p>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#2A5DCC] mb-2">Flexibility and Adaptation</h3>
                <p className="text-gray-700">Your TMS treatment plan is not static; it is designed to be flexible and responsive to your progress. As you undergo therapy, your response to the treatment is continually monitored, allowing for adjustments to be made as needed. This adaptability means that your care is always evolving to maximize efficacy, addressing any changes in your symptoms or overall health.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2A5DCC] mb-2">Importance of Periodic Assessments</h3>
                <p className="text-gray-700">Regular assessments are a cornerstone of the TMS treatment process. These evaluations help track your improvements and provide insights into the long-term benefits of the therapy. They also play a crucial role in determining whether additional sessions are necessary to maintain or enhance the treatment's effectiveness. This ongoing evaluation ensures that the treatment remains optimal and attuned to your evolving needs.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2A5DCC] mb-2">Achieving Effective Mood Disorder Management</h3>
                <p className="text-gray-700">The ultimate goal of your individualized TMS treatment plan is to provide the most effective care possible for managing mood disorders. By focusing on your specific requirements and adapting the therapy accordingly, TMS offers a promising path toward significant improvement in mental well-being. This personalized approach enhances the potential for successful outcomes and fosters a collaborative and informed treatment experience.</p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-12 p-6 bg-[#e0eaff] rounded-xl">
            <h2 className="text-2xl font-bold text-[#2A5DCC] mb-4">Why Choose TMS?</h2>
            <p className="text-gray-700 leading-relaxed">
              The non-invasive nature of TMS, alongside its targeted approach, offers a promising alternative for individuals seeking options beyond traditional antidepressant therapies. By focusing directly on the brain regions associated with mood regulation, TMS provides a therapeutic option that can be tailored to the unique needs of each patient.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              This targeted intervention not only enhances the effectiveness of the treatment but also expands the possibilities for addressing treatment-resistant mood disorders, making TMS a valuable tool in the modern mental health landscape.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <button className="bg-[#2A5DCC] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1e4ba3] transition-colors duration-200 mr-4">
              Schedule Consultation
            </button>
            <button className="border-2 border-[#2A5DCC] text-[#2A5DCC] px-8 py-3 rounded-full font-semibold hover:bg-[#2A5DCC] hover:text-white transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
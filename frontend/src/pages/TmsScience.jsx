import React from 'react';

const conditions = [
  {
    title: 'Addiction',
    desc: 'By targeting brain circuits involved in cravings and impulse control, TMS offers a non-invasive approach to reducing dependency, promoting healthier habits, and supporting a path to sobriety.'
  },
  {
    title: 'Alzheimers',
    desc: 'TMS offers a new avenue in managing Alzheimer’s. This non-invasive therapy enhances cognitive function by stimulating neural activity, supporting memory retention, and slowing symptom progression.'
  },
  {
    title: 'Depression',
    desc: 'TMS effectively treats depression by enhancing neuroplasticity, balancing neurotransmitter levels, and boosting mood regulation.'
  },
  {
    title: 'Schizophrenia',
    desc: 'TMS offer new possibilities for managing schizophrenia by targeting brain areas linked to auditory hallucinations and cognitive disruptions. This can help reduce symptoms and improve mental clarity.'
  },
  {
    title: 'Stroke Rehabilitation',
    desc: 'TMS can play a role in stroke rehabilitation by stimulating the affected brain areas. This stimulation can enhance neuroplasticity and promote recovery of motor functions and speech.'
  },
  {
    title: 'Parkinson’s Disease',
    desc: 'By enhancing motor control and reducing tremors, TMS provides a non-invasive option that targets brain regions involved in movement, supporting improved daily function and quality of life.'
  },
  {
    title: 'Anxiety',
    desc: 'Experience relief from anxiety with Transcranial Magnetic Stimulation (TMS), a non-invasive therapy that calms overactive brain areas, reduces stress response, and enhances emotional stability.'
  },
  {
    title: 'Chronic Pain',
    desc: 'TMS can help you find relief from chronic pain by targeting and modulating neural pathways responsible for pain perception. This helps to reduce discomfort and enhance your quality of life.'
  },
  {
    title: 'Brain Fog',
    desc: 'TMS works by using magnetic fields to stimulate nerve cells in the brain, particularly in areas associated with cognitive function and brain fog.'
  },
  {
    title: 'OCD',
    desc: 'Transcranial Magnetic Stimulation (TMS) can help combat OCD by targeting specific brain circuits linked to obsessive-compulsive behaviors. This can help reduce intrusive thoughts and compulsions.'
  },
  {
    title: 'Treatment Resistant Depression',
    desc: 'TMS effectively treats depression by enhancing neuroplasticity, balancing neurotransmitter levels, and boosting mood regulation.'
  },
  {
    title: 'Bi-Polar Disorder',
    desc: 'By stabilizing mood swings and enhancing brain function, TMS offers a innovative approach to achieving emotional balance for those with bipolar depression.'
  },
  {
    title: 'PTSD',
    desc: 'TMS brain stimulation therapy for PTSD is minimally invasive therapy that targets neural pathways associated with trauma. This precise targeting can help diminish intrusive memories and reduce symptoms.'
  },
];

export default function TmsScience() {
  return (
    <div className="bg-[#f7faff] min-h-screen pb-16 pt-10 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          TMS is a non pharmacological treatment that provides relief from chronic
          <span className="text-[#2A5DCC]"> depression</span>, <span className="text-[#2A5DCC]">anxiety</span>, <span className="text-[#2A5DCC]">PTSD</span>, <span className="text-[#2A5DCC]">OCD</span>, <span className="text-[#ff6f61]">chronic pain</span>, and much more!
        </h1>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {conditions.map((cond, idx) => (
          <div key={cond.title} className="bg-white rounded-xl shadow p-6 flex flex-col h-full border border-gray-100 hover:shadow-lg transition-shadow relative">
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#ff6f61]"></div>
            <h2 className="text-lg font-bold text-[#2A5DCC] mb-2">{cond.title}</h2>
            <div className="w-8 h-1 bg-[#ff6f61] rounded mb-2"></div>
            <p className="text-gray-700 text-sm flex-1">{cond.desc}</p>
          </div>
        ))}
      </div>

      {/* Detailed Conditions Section */}
      <div className="max-w-4xl mx-auto mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2A5DCC] mb-6">Mental Health Conditions Treated with TMS</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-[#2A5DCC] mb-2">Addiction</h3>
            <p className="text-gray-700">Transcranial magnetic stimulation offers promising results in the treatment of addiction by modulating neural circuits associated with cravings and impulse control. By targeting specific areas of the brain involved in these pathways, TMS can help reduce the intensity and frequency of cravings, promoting better adherence to recovery programs. The therapy also enhances cognitive control, which is crucial for decision-making and resisting addictive behaviors. Patients undergoing transcranial magnetic stimulation often report a decrease in the psychological urges that trigger a relapse, making it a valuable tool in combating addiction.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#2A5DCC] mb-2">Alzheimer’s Disease</h3>
            <p className="text-gray-700">In the case of Alzheimer’s Disease, TMS aims to slow cognitive decline and improve memory function by stimulating brain regions associated with memory and learning. The therapy enhances neural connectivity and plasticity, which can lead to improvements in cognitive tasks and daily functioning. Transcranial magnetic stimulation is particularly beneficial in the early stages of Alzheimer’s, potentially delaying the progression of symptoms. By activating under-functioning areas of the brain, TMS helps patients maintain a higher quality of life for longer.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#2A5DCC] mb-2">Anxiety</h3>
            <p className="text-gray-700">TMS addresses anxiety by regulating the brain’s hyperactive fear response and promoting a more balanced emotional state. By targeting brain circuits involved in mood regulation, transcranial magnetic stimulation can significantly diminish symptoms of anxiety, such as excessive worry and tension. Patients often experience a reduction in the physiological effects of anxiety, such as rapid heartbeat and restlessness, leading to improved daily functioning. TMS allows for a non-medication approach, minimizing the side effects commonly seen with pharmaceutical treatments.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#2A5DCC] mb-2">Bipolar Disorders</h3>
            <p className="text-gray-700">For individuals with bipolar disorders, TMS offers a stabilizing effect on mood swings by targeting brain areas involved in emotional regulation. The therapy can help reduce the severity and frequency of both manic and depressive episodes, promoting a more stable mood over time. TMS is particularly effective in complementing existing treatment plans, providing additional support to achieve mood stabilization. Patients often find an improvement in their ability to manage emotions and maintain consistent daily activities.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#2A5DCC] mb-2">Brain Fog</h3>
            <p className="text-gray-700">TMS is effective in alleviating brain fog by enhancing cognitive clarity and focus. By stimulating brain regions responsible for attention and processing, transcranial magnetic stimulation helps improve mental clarity, concentration, and memory. This can be particularly beneficial for people living with cognitive sluggishness due to stress or other health conditions. Regular TMS sessions can lead to noticeable improvements in mental agility and overall cognitive performance.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#2A5DCC] mb-2">Depression</h3>
            <p className="text-gray-700">Depression is one of the most common conditions treated with TMS, offering a non-invasive alternative for those who have not responded to medication. By stimulating specific brain areas linked to mood regulation, transcranial magnetic stimulation helps alleviate depressive symptoms, such as persistent sadness and lack of motivation. The therapy has been shown to improve mood and enhance energy levels. Many patients experience relief after several sessions, making TMS a cornerstone in the treatment of depression.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#2A5DCC] mb-2">Obsessive-Compulsive Disorder (OCD)</h3>
            <p className="text-gray-700">Transcranial magnetic stimulation can significantly reduce symptoms of OCD by targeting brain circuits that contribute to obsessive thoughts and compulsive behaviors. The therapy disrupts these pathological neural patterns, allowing patients to experience relief from the relentless cycle of obsessions and compulsions. TMS also aids in reducing anxiety associated with obsessive-compulsive disorder, improving overall mental health.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#2A5DCC] mb-2">Parkinson's Disease</h3>
            <p className="text-gray-700">In Parkinson's Disease, transcranial magnetic stimulation is used to improve motor function and reduce symptoms such as tremors and stiffness by stimulating motor-related brain areas. The therapy enhances neural plasticity, helping to restore some of the motor functions impaired by the disease. Patients often notice improvements in movement and coordination, which can lead to a better range of motion. TMS serves as a supportive treatment alongside medication, aiding in the management of Parkinson’s symptoms.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#2A5DCC] mb-2">Post-Traumatic Stress Disorder (PTSD)</h3>
            <p className="text-gray-700">For PTSD, TMS targets brain regions involved in fear and memory processing to alleviate symptoms such as flashbacks and heightened arousal. By modulating these neural networks, transcranial magnetic stimulation helps patients achieve a more balanced emotional state, reducing the impact of traumatic memories. The therapy also improves sleep quality and reduces anxiety, contributing to overall well-being. As a non-invasive option, transcranial magnetic stimulation is appealing for those seeking to avoid medication-based treatments.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#2A5DCC] mb-2">Schizophrenia</h3>
            <p className="text-gray-700">TMS offers therapeutic benefits for schizophrenia by targeting brain regions linked to auditory hallucinations and cognitive deficits. The therapy can reduce the frequency and intensity of hallucinations, allowing patients to engage more fully in their environment. Transcranial magnetic stimulation also supports cognitive enhancement, improving attention, memory, and executive function. As part of a comprehensive treatment plan, TMS can help patients manage symptoms more effectively.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#2A5DCC] mb-2">Treatment-Resistant Depression</h3>
            <p className="text-gray-700">For individuals with treatment-resistant depression, transcranial magnetic stimulation provides a crucial option when other treatments have failed. By focusing on brain areas that regulate mood and emotion, TMS can offer significant symptom relief, leading to improvements in daily functioning. Patients often report a reduction in depressive symptoms after several sessions, making transcranial magnetic stimulation an essential part of their recovery journey. The therapy's non-invasive nature ensures a low risk of side effects, providing a safe alternative to traditional treatments.</p>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#2A5DCC] mt-12 mb-6">Physical Conditions Treated with TMS</h2>
        <div className="space-y-8">
          <div>
            <p className="text-gray-700">In addition to its use in mental health conditions, transcranial magnetic stimulation can also benefit people with certain physical conditions.</p>
          </div>
          <div>
            <p className="text-gray-700">TMS targets brain areas involved in pain perception and modulation. Through repeated sessions, this treatment approach can help decrease the intensity of pain signals and improve patients' overall pain threshold. This approach not only reduces reliance on medications but also enhances quality of life by alleviating persistent discomfort and enabling greater participation in daily activities.</p>
          </div>
          <div>
            <p className="text-gray-700">Transcranial magnetic stimulation can also play a pivotal role in stroke rehabilitation by fostering recovery and enhancing motor function. By stimulating affected brain regions, TMS encourages neural plasticity and the reorganization of neural pathways, which are crucial for regaining lost motor skills. Patients often experience improvements in muscle strength, coordination, and mobility, allowing for better engagement in rehabilitation exercises.</p>
          </div>
          <div>
            <p className="text-gray-700">TMS serves as a valuable adjunctive therapy, complementing traditional rehabilitation techniques to maximize recovery potential. With its ability to provide targeted, effective treatment, transcranial magnetic stimulation represents a promising advancement in the management of chronic pain and stroke recovery.</p>
          </div>
        </div>
      </div>

      {/* TMS for Diverse Needs Section */}
      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2A5DCC] mb-4">TMS for Diverse Needs</h2>
        <p className="text-gray-700 mb-4">Also, for adults and older individuals, TMS offers a non-invasive alternative that allows for effective mood regulation without the complications often associated with long-term medication use. This is particularly advantageous for older adults who may have age-related sensitivities to pharmaceuticals, allowing them to manage conditions like depression or anxiety without side effects that could interfere with their quality of life.</p>
        <p className="text-gray-700 mb-4">For people with medication sensitivities, TMS serves as a safe and effective therapy that bypasses the gastrointestinal and systemic impacts typical of many medications. This makes it an excellent choice for those who either cannot tolerate certain drugs or prefer to avoid them due to adverse reactions.</p>
        <p className="text-gray-700 mb-4">Additionally, rTMS is beneficial for people in high-stress or demanding job roles, such as healthcare professionals, executives, or creative artists, where mental clarity and emotional stability are crucial. By improving mood and cognitive function without the drowsiness or cognitive dulling often associated with medications, rTMS helps maintain peak performance levels in professional settings.</p>
        <p className="text-gray-700 font-semibold">Overall, repetitive transcranial magnetic stimulation's adaptability in addressing the diverse needs of different groups underscores its potential as a transformative approach to mental health care, offering relief and improved outcomes for those seeking an alternative to conventional treatments.</p>
      </div>
    </div>
  );
} 
import React from 'react';

const values = [
  {
    icon: (
      <svg className="w-7 h-7 text-[#2A5DCC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
    ),
    title: 'Evidence-Based Care',
    desc: 'We use the latest research and technology to deliver the best possible outcomes.'
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#2A5DCC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
    ),
    title: 'Personalized Approach',
    desc: 'Every patient’s journey is unique. We tailor our treatments to your needs.'
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#2A5DCC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17v-2a4 4 0 018 0v2" /><circle cx="12" cy="7" r="4" /></svg>
    ),
    title: 'Compassionate Team',
    desc: 'Our staff is dedicated to supporting you with empathy and respect.'
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#2A5DCC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
    ),
    title: 'Accessible Care',
    desc: 'We believe everyone deserves access to quality mental health support.'
  },
];

export default function AboutUs() {
  return (
    <div className="bg-[#f7faff] min-h-screen pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2A5DCC] to-[#6bb6ff] py-14 px-4 mb-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-white">
            <div className="flex items-center mb-4">
              <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
            </div>
            <p className="text-lg mb-4 max-w-xl">At <span className="font-semibold">Psyencia TMS</span>, we are proud to provide transformative mental health support through advanced, non-invasive therapies. Our mission is to empower you to live a happier, healthier life.</p>
            <div className="flex gap-4 mt-6">
              <button className="bg-[#2A5DCC] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#17408b] transition-all">CONTACT US</button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-[#fff] hover:text-[#2A5DCC] transition-all flex items-center gap-2">
                LEARN MORE
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M8 5v10l8-5-8-5z" /></svg>
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80" alt="About Us" className="w-80 h-64 object-cover rounded-xl border-4 border-white shadow-lg" />
          </div>
        </div>
      </div>
      {/* Mission Section */}
      <div className="max-w-4xl mx-auto mt-12 mb-12 bg-white rounded-xl shadow p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2A5DCC] mb-6">Our Mission</h2>
        <p className="text-lg text-[#54586a] mb-4">
          Our focus is on transcranial magnetic stimulation (TMS), a TGA-approved treatment that delivers hope and long-lasting relief from severe depression without the side effects associated with traditional antidepressant medications.
        </p>
        <p className="text-lg text-[#54586a] mb-4">
          Our <span className="text-[#2A5DCC] font-semibold">TMS therapy providers</span> are committed to mental health and well-being through TMS services. We understand that each person's journey is unique, and that's why we tailor all TMS treatments to meet the specific needs of our patients.
        </p>
        <p className="text-lg text-[#54586a]">
          Through our expertise and cutting-edge technology, we strive to empower patients to regain control over their mental health and live more fulfilling lives. Our Psyencia TMS team is not just treating symptoms. We are helping our patients with TMS management to find sustainable paths to recovery and well-being.
        </p>
      </div>
      {/* Values Section */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2A5DCC] mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
              <div className="mb-3">{v.icon}</div>
              <h3 className="text-lg font-semibold text-[#2A5DCC] mb-2">{v.title}</h3>
              <p className="text-[#54586a] text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonial Section */}
      <div className="max-w-3xl mx-auto text-center text-[#2A5DCC] text-xl font-semibold mt-16 mb-12 bg-gradient-to-r from-[#e0eaff] to-[#f7faff] rounded-xl p-8 shadow">
        <p>
          “Psyencia TMS changed my life. The team truly cares and the treatment made a real difference for me.”<br />
          <span className="text-[#17408b] font-bold">— Patient Testimonial</span>
        </p>
      </div>
    </div>
  );
} 
import React from 'react';

const features = [
  {
    icon: (
      <svg className="w-7 h-7 text-[#2A5DCC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z" /><path d="M12 12V4l9 5-9 5-9-5 9-5z" /></svg>
    ),
    title: 'Board-Certified Doctors',
    desc: 'Our team is led by board-certified doctors with extensive experience in mental health and TMS therapy.'
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#2A5DCC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
    ),
    title: 'Customized Treatment',
    desc: 'We tailor every treatment plan to your unique needs, ensuring the best possible outcomes for your mental health journey.'
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#2A5DCC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17v-2a4 4 0 018 0v2" /><circle cx="12" cy="7" r="4" /></svg>
    ),
    title: 'Comfort & Convenience',
    desc: 'Our clinic is designed for your comfort, with flexible scheduling and a welcoming, supportive environment.'
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#2A5DCC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
    ),
    title: 'Patient-First Philosophy',
    desc: 'We put your mental health first, supporting you every step of the way with compassion and expertise.'
  },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-[#f7faff] min-h-screen pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2A5DCC] to-[#6bb6ff] py-14 px-4 mb-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Psyencia TMS</h1>
            <p className="text-lg mb-4 max-w-xl">Our team is dedicated to transforming mental health care through innovative treatments and a compassionate, patient-centered approach. Your mental health is our highest priority.</p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80" alt="Why Choose Us" className="w-80 h-64 object-cover rounded-xl border-4 border-white shadow-lg" />
          </div>
        </div>
      </div>
      {/* Testimonial Section */}
      <div className="max-w-3xl mx-auto text-center text-[#2A5DCC] text-xl font-semibold mb-12 bg-gradient-to-r from-[#e0eaff] to-[#f7faff] rounded-xl p-8 shadow">
        <p>
          “I felt truly cared for at Psyencia TMS. The team’s expertise and compassion made all the difference.”<br />
          <span className="text-[#17408b] font-bold">— Patient Testimonial</span>
        </p>
      </div>
      {/* Features Section */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2A5DCC] mb-8 text-center">How We’re Different</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
              <div className="mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold text-[#2A5DCC] mb-2">{f.title}</h3>
              <p className="text-[#54586a] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Call to Action */}
      <div className="max-w-3xl mx-auto text-center mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2A5DCC] mb-4">Ready to start your journey to wellness?</h2>
        <p className="text-lg text-[#54586a] mb-6">Contact us today to schedule a consultation or call our Daytona, Florida location at <span className="text-[#2A5DCC] font-semibold">(301) 363-1063</span> and begin your journey towards healing and wellness.</p>
        <button className="bg-[#2A5DCC] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#17408b] transition-all shadow-lg">SCHEDULE CONSULTATION</button>
      </div>
    </div>
  );
} 
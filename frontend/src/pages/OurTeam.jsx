import React from 'react';

const doctors = [
  {
    name: 'Dr. Sudhir Rao',
    title: 'Medical Director',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    bio: `Dr. Sudhir Rao serves as the Medical Director and is renowned for his expertise in anesthesiology and interventional pain medicine. Educated at prestigious institutions, Dr. Rao has dedicated his career to innovating and enhancing patient care. He has a particular passion for supporting military veterans, having developed advanced pain management techniques for soldiers at Fort Hood's Darnall Army Medical Center. His pioneering work in spinal cord stimulation therapy has provided significant relief for those suffering from chronic pain.`
  },
  {
    name: 'Dr. Suhas Badarinath',
    title: 'Physical Medicine & Rehabilitation',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: `Dr. Suhas Badarinath, affectionately known as Dr. B, is a specialist in physical medicine and rehabilitation. With a comprehensive approach to pain management, Dr. Badarinath integrates exercise therapies, spinal procedures, and medication management to effectively address the needs of his patients. Skilled in conducting EMG tests and offering spinal cord stimulation options, he ensures precise diagnosis and treatment of painful conditions. His multi-disciplinary approach is instrumental in improving the quality of life for many individuals.`
  }
];

const clinicians = [
  { name: 'Alex Brown', title: 'TMS Clinician', img: 'https://randomuser.me/api/portraits/men/34.jpg', bio: 'Alex is passionate about patient care and brings a positive attitude to every session.' },
  { name: 'Sam Lee', title: 'TMS Clinician', img: 'https://randomuser.me/api/portraits/women/44.jpg', bio: 'Sam specializes in TMS therapy and is known for her attention to detail and empathy.' },
];

const alliedHealth = [
  { name: 'Taylor Green', title: 'Allied Health', img: 'https://randomuser.me/api/portraits/women/45.jpg', bio: 'Taylor supports our patients through every step of their treatment journey.' },
  { name: 'Jordan White', title: 'Allied Health', img: 'https://randomuser.me/api/portraits/men/35.jpg', bio: 'Jordan is dedicated to holistic care and patient advocacy.' },
];

const administration = [
  { name: 'admin@psyencia.com.au', title: 'Administration', img: 'https://randomuser.me/api/portraits/lego/1.jpg', bio: 'Our admin team keeps everything running smoothly and is always here to help.' },
];

export default function OurTeam() {
  return (
    <div className="bg-[#f7faff] min-h-screen py-0 px-0">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2A5DCC] to-[#6bb6ff] py-16 px-4 mb-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet the Psyencia TMS Team</h1>
            <p className="text-lg mb-6 max-w-xl">Our team of doctors, clinicians, allied health professionals, and administrators is dedicated to providing compassionate, innovative care. We believe in empowering every patient on their journey to wellness.</p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80" alt="Our Team" className="w-80 h-64 object-cover rounded-xl border-4 border-white shadow-lg" />
          </div>
        </div>
      </div>
      {/* Doctors Section */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2A5DCC] mb-8 text-center">Our Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {doctors.map((doc, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
              <img src={doc.img} alt={doc.name} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[#2A5DCC] shadow" />
              <h3 className="text-2xl font-bold text-[#2A5DCC] mb-1">{doc.name}</h3>
              <div className="uppercase text-xs text-[#6bb6ff] tracking-widest mb-3 font-semibold">{doc.title}</div>
              <p className="text-gray-600 text-base leading-relaxed mb-4">{doc.bio}</p>
            </div>
          ))}
        </div>
      </div>
      {/* TMS Clinicians */}
      <div className="bg-white py-12 mb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#2A5DCC] mb-6 text-center">TMS Clinicians</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {clinicians.map((c, i) => (
              <div key={i} className="bg-[#f7faff] rounded-xl shadow p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                <img src={c.img} alt={c.name} className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-[#2A5DCC] shadow" />
                <p className="font-bold text-lg text-[#2A5DCC]">{c.name}</p>
                <p className="text-gray-500 text-sm mb-2">{c.title}</p>
                <p className="text-gray-600 text-sm">{c.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Allied Health */}
      <div className="bg-[#f7faff] py-12 mb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#2A5DCC] mb-6 text-center">Allied Health</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {alliedHealth.map((a, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                <img src={a.img} alt={a.name} className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-[#2A5DCC] shadow" />
                <p className="font-bold text-lg text-[#2A5DCC]">{a.name}</p>
                <p className="text-gray-500 text-sm mb-2">{a.title}</p>
                <p className="text-gray-600 text-sm">{a.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Administration */}
      <div className="bg-white py-12 mb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#2A5DCC] mb-6 text-center">Administration</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {administration.map((adm, i) => (
              <div key={i} className="bg-[#f7faff] rounded-xl shadow p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                <img src={adm.img} alt={adm.name} className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-[#2A5DCC] shadow" />
                <p className="font-bold text-lg text-[#2A5DCC]">{adm.name}</p>
                <p className="text-gray-500 text-sm mb-2">{adm.title}</p>
                <p className="text-gray-600 text-sm">{adm.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team Summary */}
      <div className="max-w-3xl mx-auto text-center text-[#2A5DCC] text-xl font-semibold mt-16 mb-12 bg-gradient-to-r from-[#e0eaff] to-[#f7faff] rounded-xl p-8 shadow">
        <p>
          “Together, Dr. Rao, Dr. Badarinath, and the entire Psyencia TMS team exemplify the dedication and expertise that <span className="font-bold">Psyencia TMS</span> is known for, ensuring our patients receive compassionate, cutting-edge TMS treatment in Daytona, Florida tailored to their unique needs.”
        </p>
      </div>
      {/* Join Our Team CTA */}
      <div className="max-w-2xl mx-auto text-center mt-8 mb-16">
        <h3 className="text-2xl font-bold text-[#2A5DCC] mb-4">Want to join our team?</h3>
        <p className="text-lg text-[#54586a] mb-6">We’re always looking for passionate professionals who want to make a difference in mental health care. Reach out to us at <a href="mailto:admin@psyencia.com.au" className="text-[#2A5DCC] underline">admin@psyencia.com.au</a> to learn more about opportunities.</p>
        <button className="bg-[#2A5DCC] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#17408b] transition-all">Contact Us</button>
      </div>
    </div>
  );
} 
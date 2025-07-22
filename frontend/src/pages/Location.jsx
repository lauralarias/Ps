import React from 'react';

const hours = [
  { day: 'Monday', time: '8am - 5pm' },
  { day: 'Tuesday', time: '8am - 5pm' },
  { day: 'Wednesday', time: '8am - 5pm' },
  { day: 'Thursday', time: '8am - 5pm' },
  { day: 'Friday', time: '8am - 5pm' },
  { day: 'Saturday', time: '8am - 5pm' },
  { day: 'Sunday', time: '8am - 5pm' },
];

export default function Location() {
  return (
    <div className="bg-[#f7faff] min-h-screen pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2A5DCC] to-[#6bb6ff] py-12 px-4 mb-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-white">
            <div className="flex items-center mb-4">
              <svg className="w-10 h-10 mr-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></svg>
              <h1 className="text-3xl md:text-4xl font-bold">Our Location</h1>
            </div>
            <p className="text-lg mb-2">TMS Therapy Daytona, Florida</p>
            <p className="text-base mb-4">Visit us for compassionate, innovative TMS therapy in a welcoming environment.</p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Location" className="w-72 h-48 object-cover rounded-xl border-4 border-white shadow-lg" />
          </div>
        </div>
      </div>
      {/* Info & Map Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start mb-10 px-4">
        {/* Left: Info Card */}
        <div className="flex-1 min-w-[280px]">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-[#2A5DCC] mb-2 flex items-center">
              <svg className="w-6 h-6 mr-2 text-[#2A5DCC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></svg>
              1430 Mason Avenue, Daytona Beach, FL
            </h2>
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2 text-[#2A5DCC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" /><rect width="18" height="14" x="3" y="6" rx="2" /></svg>
              <span className="text-[#2A5DCC] font-semibold">(386) 274-2000</span>
            </div>
            <div className="flex gap-3 mb-4">
              <a href="tel:3862742000" className="bg-[#2A5DCC] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#17408b] transition-all text-sm">Call Now</a>
              <a href="https://www.google.com/maps/dir/?api=1&destination=1430+Mason+Ave,+Daytona+Beach,+FL+32117" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-[#2A5DCC] text-[#2A5DCC] px-4 py-2 rounded-full font-semibold hover:bg-[#2A5DCC] hover:text-white transition-all text-sm">Get Directions</a>
            </div>
            <div className="mb-2 text-[#2A5DCC] font-semibold">HOURS:</div>
            <div className="space-y-1 text-[#54586a] text-base mb-2">
              {hours.map((h, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#2A5DCC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                  <span className="font-medium">{h.day}:</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right: Map */}
        <div className="flex-1 min-w-[280px]">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.234567!2d-81.0376846849406!3d29.2108142821967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6e6b6e6e6e6e6%3A0x6e6e6e6e6e6e6e6e!2s1430%20Mason%20Ave%2C%20Daytona%20Beach%2C%20FL%2032117%2C%20USA!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
} 
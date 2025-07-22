import React from 'react';

export default function TmsContact() {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left Side */}
        <div className="flex-1 mb-8 md:mb-0">
          <p className="uppercase text-[#ff8b7b] font-semibold tracking-widest mb-2 text-base" style={{letterSpacing: '2px'}}>Relief Starts Here</p>
          <h2 className="text-4xl font-bold text-[#54586a] mb-2">Contact Us</h2>
          <p className="text-gray-500 mb-6 max-w-xs">
            If you would like to schedule a free consultation please give us a call or complete our contact form.
          </p>
          <div className="flex items-center gap-3 mb-3 text-[#54586a]">
            <svg className="w-5 h-5 text-[#54586a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <span>1430 Mason Ave. Daytona Beach, FL, 32117</span>
          </div>
          <div className="flex items-center gap-3 mb-3 text-[#54586a]">
            <svg className="w-5 h-5 text-[#54586a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3.6 7.59a1 1 0 00.92.41h7.16a1 1 0 00.92-.41L21 5H5" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 13a4 4 0 01-8 0" /></svg>
            <span>(301) 363-1063</span>
          </div>
          <div className="flex items-center gap-3 text-[#54586a]">
            <svg className="w-5 h-5 text-[#54586a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12v1a4 4 0 01-8 0v-1" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 17v.01" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 7v.01" /><path strokeLinecap="round" strokeLinejoin="round" d="M7 12v.01" /><path strokeLinecap="round" strokeLinejoin="round" d="M17 12v.01" /></svg>
            <span>info@geminihealthmd.com</span>
          </div>
        </div>
        {/* Right Side - Form */}
        <div className="flex-1 bg-gray-50 rounded-lg shadow p-8 max-w-md w-full mx-auto">
          <h3 className="text-2xl font-semibold text-[#54586a] mb-6 text-center">Schedule Consultation</h3>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="px-4 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff8b7b]" />
            <input type="email" placeholder="Email" className="px-4 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff8b7b]" />
            <div className="flex gap-4">
              <input type="text" placeholder="Phone Number" className="flex-1 px-4 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff8b7b]" />
              <input type="text" placeholder="Zip Code" className="w-32 px-4 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff8b7b]" />
            </div>
            <textarea placeholder="How can we help?" rows={3} className="px-4 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff8b7b] resize-none" />
            <button type="submit" className="bg-[#ff8b7b] text-white px-6 py-2 rounded-full font-semibold mt-2 hover:bg-[#ff6f61] transition-all flex items-center justify-center gap-2">
              SUBMIT FORM
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M8 5v10l8-5-8-5z" /></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 
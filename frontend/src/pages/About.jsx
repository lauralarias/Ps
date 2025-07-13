import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/60 z-0"></div>
        <img
          src="https://i.postimg.cc/ZqVccbbL/Aboutus.png"
          alt="About Psyencia TMS Clinic"
          className="w-full max-w-2xl rounded-2xl shadow-2xl object-cover z-10 relative mx-auto mb-8 animate-fadein"
          style={{ minHeight: '220px', maxHeight: '340px' }}
        />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">About Psyencia TMS Clinic</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-6 drop-shadow-md">
            We are dedicated to providing evidence-based, compassionate care for individuals seeking Transcranial Magnetic Stimulation (TMS) therapy in Australia.
          </p>
        </div>
      </section>

      {/* Vision & Promise Section */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col gap-6 animate-fadein-up">
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 13c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8z" /></svg>
            <h2 className="text-2xl font-bold text-blue-700">Our Vision</h2>
          </div>
          <p className="text-gray-700 text-lg">At Psyencia TMS Clinic, our vision is to create a future where mental health treatment is both accessible and effective for all individuals. We believe in providing an alternative to traditional medications through innovative and affordable TMS therapy.</p>
          <p className="text-gray-700 text-lg">Our goal is to ensure that everyone, regardless of their financial situation or insurance coverage, can find hope and healing in a supportive, patient-centered environment. We are committed to being a trusted partner in each patient's mental health journey, helping them live a life free from the limitations of mental health struggles.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col gap-6 animate-fadein-up delay-100">
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            <h2 className="text-2xl font-bold text-green-700">Our Promise</h2>
          </div>
          <p className="text-gray-700 text-lg">At Psyencia TMS Clinic, we promise to offer compassionate, patient-centered care that puts your needs at the forefront. We are dedicated to delivering affordable, evidence-based TMS treatments in a welcoming environment, ensuring that all patients have access to high-quality care.</p>
          <p className="text-gray-700 text-lg">Our promise is to provide personalized treatment plans tailored to your unique needs and goals, helping you overcome mental health challenges with confidence and support.</p>
          <p className="text-gray-700 text-lg">We are committed to making your mental health journey as smooth and effective as possible, offering you the resources, understanding, and care you deserve every step of the way.</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Why <span className="text-blue-700">Choose Us</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border rounded-2xl shadow-md p-8 flex flex-col items-center gap-4 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer animate-fadein-up">
            <svg className="w-10 h-10 text-blue-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m0-5V3m-8 9v6a2 2 0 002 2h4a2 2 0 002-2v-6" /></svg>
            <b className="text-lg">Efficiency</b>
            <p className="text-base">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className="bg-white border rounded-2xl shadow-md p-8 flex flex-col items-center gap-4 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer animate-fadein-up delay-100">
            <svg className="w-10 h-10 text-green-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 13c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8z" /></svg>
            <b className="text-lg">Convenience</b>
            <p className="text-base">Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className="bg-white border rounded-2xl shadow-md p-8 flex flex-col items-center gap-4 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer animate-fadein-up delay-200">
            <svg className="w-10 h-10 text-purple-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            <b className="text-lg">Personalisation</b>
            <p className="text-base">Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </section>



      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl shadow-xl p-10 md:p-16 flex flex-col items-center gap-6 animate-fadein-up">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to take the next step?</h2>
          <p className="text-lg text-blue-100 mb-4 max-w-2xl">
            Book a consultation or contact our team to learn more about how TMS can help you or your loved ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#top-doctors" className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-100 transition-colors duration-300 text-lg shadow-md">Book Consultation</a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors duration-300 text-lg shadow-md">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style>{`
        .animate-fadein { animation: fadein 1.2s; }
        .animate-fadein-up { animation: fadeinUp 1.2s; }
        .animate-fadein-up.delay-100 { animation-delay: 0.1s; }
        .animate-fadein-up.delay-200 { animation-delay: 0.2s; }
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeinUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default About

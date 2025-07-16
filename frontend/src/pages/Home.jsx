import React from 'react'
import Intro from '../components/Intro'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import TmsTreatmentTypes from '../components/TmsTreatmentTypes'
import SubscribeForm from '../components/SubscribeForm'
import AccountCreation from '../components/AccountCreation'

const Home = () => {
  const scrollToSpeciality = () => {
    const specialitySection = document.getElementById('speciality-section');
    if (specialitySection) {
      specialitySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 pt-[80px]">
      {/* Hero Section with Relaxing Design */}
      <Intro />
      
      {/* Account Creation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
                Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-medium">Wellness Journey</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Create your account to access personalized mental health services and track your wellness journey.
              </p>
            </div>
            
            <div className="flex justify-center">
              <AccountCreation />
            </div>
          </div>
        </div>
      </section>

      {/* TMS Download Section - Full Width */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <SubscribeForm />
        </div>
      </section>

      {/* How TMS Works Section */}
      <section id="how-tms-works" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              How <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300 font-medium">TMS Works</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Discover the science behind Transcranial Magnetic Stimulation and how it can transform your mental health journey.
            </p>
          </div>
          <TmsTreatmentTypes />
        </div>
      </section>

      {/* Services & Specialties */}
      <section id="speciality-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-medium">Specialized Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive mental health services designed to support your journey to wellness
            </p>
          </div>
      <SpecialityMenu />
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-medium">Expert Doctors</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Experienced mental health professionals dedicated to your well-being and recovery
            </p>
          </div>
      <TopDoctors />
        </div>
      </section>

      {/* Redesigned Appointment Booking Section */}
      <section id="appointment-section" className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-white">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-blue-100 mb-6">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-2 animate-pulse"></span>
                  Book Your Consultation Today
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                  Ready to Start Your 
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white font-medium">
                    Wellness Journey?
                  </span>
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
                  Take the first step towards better mental health. Our expert team is here to guide you through your personalized treatment plan.
                </p>
              </div>
              
              {/* Benefits List */}
              <div className="space-y-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-blue-100">Personalized treatment plans</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-blue-100">Expert mental health professionals</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-blue-100">Comfortable, calming environment</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={scrollToSpeciality}
                  className="px-8 py-4 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/25 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Consultation
                </button>
                <button className="px-8 py-4 border-2 border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300 font-medium">Connected</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter for the latest updates on TMS therapy, mental health tips, and wellness resources.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Your Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300 font-medium">Mental Wellness</span>
          </h2>
          <p className="text-xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the transformative power of TMS therapy in a serene, calming environment designed for your comfort and peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={scrollToSpeciality}
              className="px-12 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-lg btn-relaxing"
            >
              Schedule Consultation
            </button>
            <button className="px-12 py-5 border-2 border-slate-300 text-slate-200 font-medium rounded-xl hover:bg-slate-700/50 hover:border-slate-200 transition-all duration-300 transform hover:scale-105 text-lg btn-relaxing">
              Learn More About TMS
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

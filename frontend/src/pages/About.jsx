import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center">
            <h1 className="mb-6">
              About <span className="text-primary">Psyencia</span>
            </h1>
            <p className="text-xl text-light max-w-3xl mx-auto mb-12">
              We are dedicated to providing evidence-based, compassionate care for individuals seeking 
              Transcranial Magnetic Stimulation (TMS) therapy in Australia.
            </p>
            <div className="max-w-4xl mx-auto">
              <img
                src="https://i.postimg.cc/ZqVccbbL/Aboutus.png"
                alt="About Psyencia TMS Clinic"
                className="w-full rounded-lg shadow-lg object-cover"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Promise Section */}
      <section className="section section-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 13c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-dark">Our Vision</h2>
              </div>
              <div className="space-y-4 text-light">
                <p>
                  At Psyencia TMS Clinic, our vision is to create a future where mental health treatment 
                  is both accessible and effective for all individuals. We believe in providing an alternative 
                  to traditional medications through innovative and affordable TMS therapy.
                </p>
                <p>
                  Our goal is to ensure that everyone, regardless of their financial situation or insurance 
                  coverage, can find hope and healing in a supportive, patient-centered environment. We are 
                  committed to being a trusted partner in each patient's mental health journey, helping them 
                  live a life free from the limitations of mental health struggles.
                </p>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-dark">Our Promise</h2>
              </div>
              <div className="space-y-4 text-light">
                <p>
                  At Psyencia TMS Clinic, we promise to offer compassionate, patient-centered care that 
                  puts your needs at the forefront. We are dedicated to delivering affordable, evidence-based 
                  TMS treatments in a welcoming environment, ensuring that all patients have access to 
                  high-quality care.
                </p>
                <p>
                  Our promise is to provide personalized treatment plans tailored to your unique needs and 
                  goals, helping you overcome mental health challenges with confidence and support.
                </p>
                <p>
                  We are committed to making your mental health journey as smooth and effective as possible, 
                  offering you the resources, understanding, and care you deserve every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">
              Why <span className="text-primary">Choose Us</span>
            </h2>
            <p className="text-xl text-light max-w-3xl mx-auto">
              We provide comprehensive mental health care with a focus on innovation, compassion, and results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m0-5V3m-8 9v6a2 2 0 002 2h4a2 2 0 002-2v-6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-4">Efficiency</h3>
              <p className="text-light">
                Streamlined appointment scheduling that fits into your busy lifestyle with minimal disruption.
              </p>
            </div>

            <div className="card p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 13c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-4">Convenience</h3>
              <p className="text-light">
                Access to a network of trusted healthcare professionals in your area with flexible scheduling.
              </p>
            </div>

            <div className="card p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-4">Personalization</h3>
              <p className="text-light">
                Tailored treatment plans and personalized care to help you achieve optimal mental wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section" style={{backgroundColor: 'var(--primary-color)'}}>
        <div className="container">
          <div className="text-center">
            <h2 className="text-white mb-6">
              Ready to take the <span className="font-semibold">next step?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book a consultation or contact our team to learn more about how TMS can help you or your loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary" style={{backgroundColor: 'white', color: 'var(--primary-color)'}}>
                Book Consultation
              </button>
              <button className="btn-secondary" style={{color: 'white', borderColor: 'white'}}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

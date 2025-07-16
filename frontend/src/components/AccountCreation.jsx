import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AccountCreation = () => {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/login')
  }

  return (
    <div 
      className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 border border-slate-200 hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center mb-8">
        <div className={`w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h3 className="text-2xl font-medium text-slate-800 mb-3">Create Your Account</h3>
        <p className="text-slate-600">Join our community and access personalized care plans and treatment options.</p>
      </div>
      
      <button 
        onClick={handleGetStarted}
        className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-xl font-medium hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg btn-relaxing"
      >
        Get Started Today
      </button>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-slate-500">
          Already have an account? 
          <button 
            onClick={() => navigate('/login')}
            className="text-emerald-600 hover:text-emerald-700 font-medium ml-1 transition-colors duration-200"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  )
}

export default AccountCreation 
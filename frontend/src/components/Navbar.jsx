import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <nav className="fixed top-[40px] left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              onClick={() => navigate('/')}
              className="h-12 cursor-pointer"
              src="https://i.postimg.cc/CMcGrJNK/psyencialogo.png"
              alt="Psyencia"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Home
            </NavLink>
            <NavLink 
              to="/doctors" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Our Team
            </NavLink>
            <NavLink 
              to="/about" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Services
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Contact
            </NavLink>
            <NavLink 
              to="/faq" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              FAQ
            </NavLink>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {token && userData ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-200">
                  <img className="w-8 h-8 rounded-full object-cover" src={userData.image} alt="Profile" />
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <button
                    onClick={() => navigate('/my-profile')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    My Profile
                  </button>
                  <button
                    onClick={() => navigate('/my-appointments')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    My Appointments
                  </button>
                  <hr className="my-1" />
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="btn-primary"
              >
                Get Started
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {showMenu && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                onClick={() => setShowMenu(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                Home
              </NavLink>
              <NavLink 
                to="/doctors" 
                onClick={() => setShowMenu(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                Our Team
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={() => setShowMenu(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                About
              </NavLink>
              <NavLink 
                to="/services" 
                onClick={() => setShowMenu(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                Services
              </NavLink>
              <NavLink 
                to="/contact" 
                onClick={() => setShowMenu(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                Contact
              </NavLink>
              <NavLink 
                to="/faq" 
                onClick={() => setShowMenu(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                FAQ
              </NavLink>
              
              {token && userData ? (
                <>
                  <hr className="border-gray-200" />
                  <button
                    onClick={() => {
                      navigate('/my-profile')
                      setShowMenu(false)
                    }}
                    className="text-left text-gray-700 hover:text-primary font-medium transition-colors duration-200"
                  >
                    My Profile
                  </button>
                  <button
                    onClick={() => {
                      navigate('/my-appointments')
                      setShowMenu(false)
                    }}
                    className="text-left text-gray-700 hover:text-primary font-medium transition-colors duration-200"
                  >
                    My Appointments
                  </button>
                  <button
                    onClick={() => {
                      logout()
                      setShowMenu(false)
                    }}
                    className="text-left text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    navigate('/login')
                    setShowMenu(false)
                  }}
                  className="btn-primary w-full text-center"
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

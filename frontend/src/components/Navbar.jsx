import React, { useContext, useState, useRef, useEffect } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const aboutDropdownTimeout = useRef(null);
  const aboutDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setAboutDropdown(false);
      }
    }
    if (aboutDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [aboutDropdown]);

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
              to="/tms" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              TMS
            </NavLink>
            {/* TMS info Dropdown */}
            <div className="relative group" tabIndex={0}>
              <NavLink
                to="/tms-info"
                className="flex items-center text-gray-700 hover:text-[#2A5DCC] font-medium transition-colors duration-200 px-2 py-1 rounded-md"
              >
                TMS info
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </NavLink>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl z-50 border border-gray-100 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 group-hover:visible group-focus-within:visible invisible transition-all duration-200">
                <NavLink to="/tms-procedure" className="block px-6 py-3 text-gray-700 hover:bg-[#e0eaff] hover:text-[#2A5DCC] font-medium rounded-t-xl transition-colors duration-150" onClick={() => setShowMenu(false)}>
                  The TMS Procedure
                </NavLink>
                <NavLink to="/tms-side-effects" className="block px-6 py-3 text-gray-700 hover:bg-[#e0eaff] hover:text-[#2A5DCC] font-medium transition-colors duration-150" onClick={() => setShowMenu(false)}>
                  Side Effects and Benefits
                </NavLink>
                <NavLink to="/tms-science" className="block px-6 py-3 text-gray-700 hover:bg-[#e0eaff] hover:text-[#2A5DCC] font-medium transition-colors duration-150" onClick={() => setShowMenu(false)}>
                  Conditions TMS Treats
                </NavLink>
                <NavLink to="/tms-candidates" className="block px-6 py-3 text-gray-700 hover:bg-[#e0eaff] hover:text-[#2A5DCC] font-medium rounded-b-xl transition-colors duration-150" onClick={() => setShowMenu(false)}>
                  TMS Candidates
                </NavLink>
              </div>
            </div>
            <NavLink 
              to="/doctors" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Doctors
            </NavLink>
            {/* About Us Dropdown */}
            <div className="relative group" ref={aboutDropdownRef} tabIndex={0}>
              <NavLink
                to="/aboutus"
                onMouseEnter={() => {
                  if (aboutDropdownTimeout.current) clearTimeout(aboutDropdownTimeout.current);
                  setAboutDropdown(true);
                }}
                onMouseLeave={() => {
                  aboutDropdownTimeout.current = setTimeout(() => setAboutDropdown(false), 3000);
                }}
                className="flex items-center text-gray-700 hover:text-[#2A5DCC] font-medium transition-colors duration-200 px-2 py-1 rounded-md"
              >
                About Us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </NavLink>
              {aboutDropdown && (
                <div
                  onMouseEnter={() => {
                    if (aboutDropdownTimeout.current) clearTimeout(aboutDropdownTimeout.current);
                    setAboutDropdown(true);
                  }}
                  onMouseLeave={() => {
                    aboutDropdownTimeout.current = setTimeout(() => setAboutDropdown(false), 3000);
                  }}
                  className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl z-50 border border-gray-100"
                >
                  <NavLink to="/location" className="block px-6 py-3 text-gray-700 hover:bg-[#e0eaff] hover:text-[#2A5DCC] font-medium rounded-t-xl transition-colors duration-150" onClick={() => setAboutDropdown(false)}>
                    Our Location
                  </NavLink>
                  <NavLink to="/our-team" className="block px-6 py-3 text-gray-700 hover:bg-[#e0eaff] hover:text-[#2A5DCC] font-medium transition-colors duration-150" onClick={() => setAboutDropdown(false)}>
                    Meet Our Team
                  </NavLink>
                  <NavLink to="/why-choose-us" className="block px-6 py-3 text-gray-700 hover:bg-[#e0eaff] hover:text-[#2A5DCC] font-medium rounded-b-xl transition-colors duration-150" onClick={() => setAboutDropdown(false)}>
                    Why Choose Us
                  </NavLink>
                </div>
              )}
            </div>
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
                to="/tms" 
                onClick={() => setShowMenu(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                TMS
              </NavLink>
              <NavLink 
                to="/tms-info" 
                onClick={() => setShowMenu(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                TMS Info
              </NavLink>
              <NavLink 
                to="/tms-candidates" 
                onClick={() => setShowMenu(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                TMS Candidates
              </NavLink>
              <NavLink 
                to="/doctors" 
                onClick={() => setShowMenu(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                Doctors
              </NavLink>
              <NavLink 
                to="/our-team" 
                onClick={() => setShowMenu(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                Our Team
              </NavLink>
              {/* Mobile About Us Dropdown */}
              <div className="md:hidden">
                <button
                  onClick={() => { setAboutDropdown(!aboutDropdown); if (!aboutDropdown) navigate('/aboutus'); }}
                  className="flex items-center w-full text-gray-700 hover:text-primary font-medium transition-colors duration-200 focus:outline-none"
                >
                  About Us
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {aboutDropdown && (
                  <div className="pl-4 border-l-2 border-[#ff8b7b] mt-2">
                    <NavLink to="/location" onClick={() => { setShowMenu(false); setAboutDropdown(false); }} className="flex items-center py-2 text-gray-700 font-medium">
                      <span className="text-[#ff8b7b] mr-2">&#8250;</span> Our Location
                    </NavLink>
                    <NavLink to="/our-team" onClick={() => { setShowMenu(false); setAboutDropdown(false); }} className="flex items-center py-2 text-gray-700 font-medium">
                      <span className="text-[#ff8b7b] mr-2">&#8250;</span> Meet Our Team
                    </NavLink>
                    <NavLink to="/why-choose-us" onClick={() => { setShowMenu(false); setAboutDropdown(false); }} className="flex items-center py-2 text-gray-700 font-medium">
                      <span className="text-[#ff8b7b] mr-2">&#8250;</span> Why Choose Us
                    </NavLink>
                  </div>
                )}
              </div>
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

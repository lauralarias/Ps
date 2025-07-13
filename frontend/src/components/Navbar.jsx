import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const [showUserMenuMobile, setShowUserMenuMobile] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='fixed top-0 left-0 right-0 z-30 bg-white border-b border-b-[#ADADAD]'>
      <div className='container mx-auto flex items-center justify-between py-2 px-6' style={{ height: '80px' }}>
        <img
          onClick={() => navigate('/')}
          className='w-32 cursor-pointer hidden sm:block'
          src='https://i.postimg.cc/CMcGrJNK/psyencialogo.png'
          alt='Logo'
        />
        <ul className='hidden md:flex items-center gap-6 font-medium flex-1 justify-end'>
          <NavLink to='/'>
            <li className='py-1' style={{ fontSize: '102%' }}>
              HOME
            </li>
          </NavLink>
          <NavLink to='/doctors'>
            <li className='py-1' style={{ fontSize: '102%' }}>
              TEAM
            </li>
          </NavLink>
          <NavLink to='/about'>
            <li className='py-1' style={{ fontSize: '102%' }}>
              ABOUT
            </li>
          </NavLink>
          <NavLink to='/contact'>
            <li className='py-1' style={{ fontSize: '102%' }}>
              CONTACT
            </li>
          </NavLink>
          <NavLink to='/faq'>
            <li className='py-1' style={{ fontSize: '102%' }}>
              FAQ
            </li>
          </NavLink>
          {token && userData ? (
            <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={userData.image} alt='' />
              <img className='w-2.5' src={assets.dropdown_icon} alt='' />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4'>
                  <p
                    onClick={() => navigate('/my-profile')}
                    className='hover:text-black cursor-pointer py-1'
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate('/my-appointments')}
                    className='hover:text-black cursor-pointer py-1'
                  >
                    My Appointments
                  </p>
                  <p onClick={logout} className='hover:text-black cursor-pointer py-1'>
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className='bg-primary text-white px-6 py-2 rounded-full font-light ml-6'
              style={{ fontSize: '102%' }}
            >
              Create account
            </button>
          )}
        </ul>
        <div className='flex items-center gap-4 md:hidden justify-center'>
          <img
            onClick={() => setShowMenu(!showMenu)}
            className='w-6 cursor-pointer'
            src={assets.menu_icon}
            alt='Menu'
          />
          {!token ? (
            <button
              onClick={() => navigate('/login')}
              className='bg-primary text-white px-4 py-1 rounded-full font-light'
              style={{ fontSize: '90%' }}
            >
              Create account
            </button>
          ) : null}
        </div>

        {/* ---- Mobile Menu ---- */}
        <div
          className={`md:hidden fixed top-0 right-0 bottom-0 w-full bg-white z-20 transition-transform transform box-border ${
            showMenu ? 'translate-x-0' : 'translate-x-full'
          } overflow-auto`}
        >
          <div className='flex items-center justify-between px-5 py-6'>
            <img
              src={assets.logo}
              className='w-36 sm:block hidden'
              alt='Logo'
            />
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              className='w-7 cursor-pointer'
              alt='Close'
            />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 sm:px-8 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'>
              <p className='px-4 py-2 rounded-full inline-block' style={{ fontSize: '102%' }}>
                HOME
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors'>
              <p className='px-4 py-2 rounded-full inline-block' style={{ fontSize: '102%' }}>
                ALL DOCTORS
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about'>
              <p className='px-4 py-2 rounded-full inline-block' style={{ fontSize: '102%' }}>
                ABOUT
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact'>
              <p className='px-4 py-2 rounded-full inline-block' style={{ fontSize: '102%' }}>
                CONTACT
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/faq'>
              <p className='px-4 py-2 rounded-full inline-block' style={{ fontSize: '102%' }}>
                FAQ
              </p>
            </NavLink>
            {token && userData && (
              <>
                <hr className='w-full border-gray-300 my-4' />
                <p
                  onClick={() => {
                    navigate('/my-profile')
                    setShowMenu(false)
                  }}
                  className='px-4 py-3 rounded-full inline-block w-full text-center hover:text-black cursor-pointer sm:px-6'
                  style={{ fontSize: '102%' }}
                >
                  My Profile
                </p>
                <p
                  onClick={() => {
                    navigate('/my-appointments')
                    setShowMenu(false)
                  }}
                  className='px-4 py-3 rounded-full inline-block w-full text-center hover:text-black cursor-pointer sm:px-6'
                  style={{ fontSize: '102%' }}
                >
                  My Appointments
                </p>
                <p
                  onClick={() => {
                    localStorage.removeItem('token')
                    setToken(false)
                    navigate('/login')
                    setShowMenu(false)
                  }}
                  className='px-4 py-3 rounded-full inline-block w-full text-center hover:text-black cursor-pointer sm:px-6'
                  style={{ fontSize: '102%' }}
                >
                  Logout
                </p>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar

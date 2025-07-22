import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
import FAQ from './pages/FAQ'
import Services from './pages/Services'
import OurTeam from './pages/OurTeam'
import Tms from './pages/TMS'
import AboutUs from './pages/AboutUs'
import Location from './pages/Location'
import WhyChooseUs from './pages/WhyChooseUs'
import TmsInfo from './pages/TmsInfo'
import TmsProcedure from './pages/TmsProcedure'
import TmsSideEffects from './pages/TmsSideEffects'
import TmsScience from './pages/TmsScience'
import TmsCandidates from './pages/TmsCandidates'

const App = () => {
  return (
    <>
      {/* Top Info Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-50 text-gray-700 flex items-center justify-center py-2 border-b border-gray-200 text-sm font-normal" style={{fontFamily: 'inherit'}}>
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-6 px-2">
          <span className="text-gray-500">Visit us <span className="font-semibold text-gray-700">Mon-Fri</span> from 9:00am to 6:00pm</span>
          <span className="flex items-center bg-white px-2 py-1 rounded">
            <svg className="w-4 h-4 text-cyan-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></svg>
            <span className="font-semibold">Sydney, australia</span>
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 text-cyan-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
            <span>info@<span className="font-semibold text-cyan-700">psyencia.com.au</span></span>
          </span>
          <a href="#" className="flex items-center text-cyan-700 hover:underline">
            <svg className="w-4 h-4 text-cyan-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2zm-8-2a3 3 0 016 0v2H9V7zm8 7a1 1 0 01-1 1H4a1 1 0 01-1-1v-5a1 1 0 011-1h12a1 1 0 011 1v5z" /></svg>
            Pay My Bill
          </a>
          <a href="#" className="flex items-center text-cyan-700 hover:underline">
            <svg className="w-4 h-4 text-cyan-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2zm-8-2a3 3 0 016 0v2H9V7zm8 7a1 1 0 01-1 1H4a1 1 0 01-1-1v-5a1 1 0 011-1h12a1 1 0 011 1v5z" /></svg>
            Pre-Registration
          </a>
          <a href="#" className="flex items-center text-cyan-700 hover:underline">
            <svg className="w-4 h-4 text-cyan-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a2 2 0 00-2 2v2H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2h-2V4a2 2 0 00-2-2zm0 2h4v2h-4V4zm-2 4h8v8H6V8z" /></svg>
            Patient Portal
          </a>
        </div>
      </div>
      <ToastContainer />
      <Navbar />
      <div className='mt-[96px]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/our-team' element={<OurTeam />} />
        <Route path='/tms' element={<Tms />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/location' element={<Location />} />
        <Route path='/why-choose-us' element={<WhyChooseUs />} />
        <Route path='/tms-info' element={<TmsInfo />} />
        <Route path='/tms-procedure' element={<TmsProcedure />} />
        <Route path='/tms-side-effects' element={<TmsSideEffects />} />
        <Route path='/tms-science' element={<TmsScience />} />
        <Route path='/tms-candidates' element={<TmsCandidates />} />
      </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

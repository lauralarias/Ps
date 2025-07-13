import React, { useEffect } from 'react';

const Searcher = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');
    const revealElementOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
          revealElements[i].classList.add('revealed');
        } else {
          revealElements[i].classList.remove('revealed');
        }
      }
    };
    // Initial fade-in on page load with staggered effect
    const fadeInElements = () => {
      revealElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('revealed');
        }, index * 300);
      });
    };
    window.addEventListener('scroll', revealElementOnScroll);
    window.addEventListener('load', () => {
      revealElementOnScroll();
      fadeInElements();
    });
    revealElementOnScroll();
    fadeInElements();
    return () => {
      window.removeEventListener('scroll', revealElementOnScroll);
      window.removeEventListener('load', revealElementOnScroll);
    };
  }, []);

  return (
    <section className="locations-section" aria-label="locations">
      <div className="container locations-container">
        <div className="locations-content" data-reveal="left">
          <p className="locations-subtitle" data-reveal="left">Welcome To Psyencia</p>
          <h1 className="locations-title" data-reveal="left">TMS: Transcranial Magnetic Stimulation.</h1>
          <div className="locations-search-card" data-reveal="left">
            <p className="locations-description">Search doctors. clinics. Treatments. etc.</p>
            <div className="locations-search-wrapper">
              <div className="input-wrapper">
                <input type="text" name="location" placeholder="Locations" className="input-field" />
                <ion-icon name="location"></ion-icon>
              </div>
              <button className="btn find-now-btn">
                <ion-icon name="search"></ion-icon>
                <span>Find Now</span>
              </button>
            </div>
          </div>
        </div>
        <div className="locations-image" data-reveal="right">
          <img
            src="https://i.postimg.cc/mZjXRzvj/Banner.png"
            alt="TMS Clinic Illustration"
            width="600"
            height="auto"
            loading="eager"
          />
        </div>
      </div>
      <style jsx>{`
        .locations-section {
          background-color: #4a5ccf;
          padding: 80px 40px;
          color: white;
        }
        .locations-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          gap: 40px;
          flex-wrap: wrap;
        }
        .locations-content {
          flex: 1 1 400px;
          max-width: 600px;
        }
        .locations-subtitle {
          font-size: 1.4rem;
          margin-bottom: 12px;
          border-left: 3px solid white;
          padding-left: 12px;
          font-weight: 500;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .locations-title {
          font-size: 3.6rem;
          margin-bottom: 24px;
          line-height: 1.1;
          font-weight: 700;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
        }
        .locations-search-card {
          background: white;
          color: #4a5ccf;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s;
        }
        .locations-description {
          font-size: 1.6rem;
          margin-bottom: 16px;
        }
        .locations-search-wrapper {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .input-wrapper {
          position: relative;
          flex: 1 1 250px;
        }
        .input-field {
          width: 100%;
          padding: 12px 40px 12px 16px;
          font-size: 1.6rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          outline: none;
          color: #4a5ccf;
        }
        ion-icon[name='location'] {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #4a5ccf;
          font-size: 1.8rem;
        }
        .btn.find-now-btn {
          background-color: #2a3eb1;
          color: white;
          font-weight: 600;
          padding: 12px 24px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          border: none;
          transition: background-color 0.3s ease;
        }
        .btn.find-now-btn:hover {
          background-color: #1a2a8a;
        }
        .btn.find-now-btn ion-icon {
          font-size: 1.8rem;
        }
        .locations-image {
          flex: 1 1 400px;
          max-width: 600px;
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s;
        }
        .locations-image img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
        }
        .revealed {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @media (max-width: 992px) {
          .locations-container {
            flex-direction: column;
            align-items: flex-start;
          }
          .locations-image {
            margin-top: 40px;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Searcher;

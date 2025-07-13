import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const BACKEND_URL = '/api/user/subscribe-tms'; // Update if needed
const TMS_INFO_SHEET_URL = '/tms-info-sheet.txt'; // Australian-compliant info sheet
const RECAPTCHA_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; // Replace with your real site key

const SubscribeForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [captchaToken, setCaptchaToken] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert('Please complete the CAPTCHA.');
      return;
    }
    setIsSubmitting(true);
    try {
      // Send data to backend
      await axios.post(BACKEND_URL, {
        name: formData.name,
        email: formData.email,
        captchaToken
      });
      setSubmitted(true);
      // Download the info sheet
      const link = document.createElement('a');
      link.href = TMS_INFO_SHEET_URL;
      link.download = 'TMS-Info-Sheet-AU.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // Reset form
      setFormData({ name: '', email: '' });
      setCaptchaToken(null);
      if (recaptchaRef.current) recaptchaRef.current.reset();
    } catch (err) {
      alert('There was an error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#00bfff', padding: '40px 20px', textAlign: 'center', borderRadius: 12 }}>
      <h2 style={{ color: '#fff', fontWeight: 'bold', marginBottom: '30px' }}>
        Subscribe To Download TMS Info Sheet (Australia)
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 16
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: '12px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            minWidth: '200px'
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: '12px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            minWidth: '200px'
          }}
        />
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={setCaptchaToken}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            backgroundColor: isSubmitting ? '#b0c4de' : '#0057b7',
            color: '#fff',
            padding: '12px 20px',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            marginTop: '5px'
          }}
        >
          {isSubmitting ? 'Processing...' : 'Download TMS Info Sheet'}
        </button>
      </form>
      {submitted && (
        <div style={{ color: '#fff', marginTop: 20, fontWeight: 500 }}>
          Thank you for subscribing! Your download should begin automatically.<br />
          <a
            href={TMS_INFO_SHEET_URL}
            download="TMS-Info-Sheet-AU.txt"
            style={{ color: '#fff', textDecoration: 'underline', display: 'inline-block', marginTop: 8 }}
          >
            Click here if your download didn't start
          </a>
        </div>
      )}
      <div style={{ color: '#e0f7fa', fontSize: 13, marginTop: 32, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
        <b>Privacy & Disclaimer:</b> Your information is collected in accordance with the Australian Privacy Act 1988 and the Australian Privacy Principles. This resource is for informational purposes only and does not constitute medical advice. For diagnosis or treatment, consult an Australian-registered healthcare professional. TMS is regulated by the Therapeutic Goods Administration (TGA) in Australia. <a href="https://www.tga.gov.au/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>Learn more</a>.
      </div>
    </div>
  );
};

export default SubscribeForm;
 
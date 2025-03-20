import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage({
        type: 'success',
        text: 'Meldingen er sendt! Vi vil svare deg snart.'
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Beklager! Noe gikk galt. Vennligst prøv igjen.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h1>KONTAKT OSS</h1>
        <p className="contact-tagline">VI VIL GJERNE HØRE FRA DEG!</p>
      </div>
      
      {submitMessage && (
        <div className={`message ${submitMessage.type}`}>
          {submitMessage.text}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Ditt Navn"
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Din E-postadresse"
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Emne"
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Din Melding"
            rows="5"
            className="form-input textarea"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'SENDER...' : 'SEND MELDING'}
        </button>
      </form>
      
      <div className="contact-decorations">
        <span className="decoration coin coin-1">🪙</span>
        <span className="decoration coin coin-2">🪙</span>
        <span className="decoration coin coin-3">🪙</span>
        <span className="decoration star star-1">⭐</span>
        <span className="decoration star star-2">⭐</span>
        <span className="decoration confetti confetti-1">🎊</span>
        <span className="decoration confetti confetti-2">🎊</span>
      </div>
    </div>
  );
};

export default ContactForm;
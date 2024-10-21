import React from 'react';
import Header from './Header'; 
import '../style/contactus.scss';

const ContactUs: React.FC = () => {
  return (
    <div className="contact-us-page">
    
      <Header />

      <div className="contact-us-container">
       
        <h1 className="contact-us-title">
          <span style={{ color: 'rgb(51, 11, 92)', fontWeight: 'bold' }}>Contact </span>
          <span style={{ color: 'red', fontWeight: 'bold' }}>us</span>
        </h1>

       
        <h2 className="contact-us-subtitle" style={{ color: 'rgb(51, 11, 92)', fontWeight: 'bold' }}>
          Écrivez-nous !
        </h2>

  
        <p className="contact-us-description" style={{ color: 'black', fontSize: 'small' ,fontWeight: 'bold' }}>
          Nous traiterons votre e-mail dans les plus brefs délais
        </p>

        
        <form className="contact-us-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">NOM & PRÉNOM*</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">ADRESSE E-MAIL*</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">TÉLÉPHONE*</label>
              <input type="text" id="phone" name="phone" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="company">SOCIÉTÉ</label>
              <input type="text" id="company" name="company" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">ADRESSE POSTALE*</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div className="form-group">
              <label htmlFor="city">CODE POSTAL*</label>
              <input type="text" id="city" name="city" />
            </div>
          </div>
          <div className="form-row">
          <div className="form-group">
              <label htmlFor="city">VILLE*</label>
              <input type="text" id="city" name="city" />
            </div>
            <div className="form-group-message">
              <label htmlFor="message">MESSAGE*</label>
              <textarea id="message" name="message" rows={4} style={{ width: '100%' }}></textarea>
            </div>
          </div>
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
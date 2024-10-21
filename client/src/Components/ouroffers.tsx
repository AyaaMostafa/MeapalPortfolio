import React from 'react';
import Header from './Header'; 
import Footer from './Footer';
import '../style/ouroffers.scss';

const OurOffers: React.FC = () => {
  return (
    <div>
     
      <Header />
      <div className="our-offers-content">
        <h1 className="offers-title">
          <span style={{ color: 'purple', fontWeight: 'bold' }}>Our</span>{' '}
          <span style={{ color: 'red', fontWeight: 'bold' }}>offers</span>
        </h1>
        <img src="offre 1@2x.png" alt="First Image" className="offers-image" />
        <h2 className="managed-services-title">
          <span style={{ color: 'purple', fontWeight: 'bold' }}>Our</span>{' '}
          <span style={{ color: 'red', fontWeight: 'bold' }}>Managed Services recognized</span>
        </h2>
        <div className='image1'>
        <img src="certif 1@2x.png" alt="Second Image" className="offers-image" />
        </div>
        <div className='image2'>
        <img src="competences 1.png" alt="Third Image" className="offers-image" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurOffers;

import React from 'react';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import JoinUs from './Components/joinus';
import ContactUs from './Components/contactus';
import OurOffers from './Components/ouroffers';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// @ts-ignore
function App() {
  return (
    <Router>
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/joinus" element={<JoinUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/ouroffers" element={<OurOffers />} />

      
    
      
    </Routes>
  </Router>
);
}

export default App;

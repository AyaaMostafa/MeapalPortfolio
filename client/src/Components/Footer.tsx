    import React from 'react';
    import '../style/footer.scss';
    import { Link } from 'react-router-dom';
    const Footer: React.FC = () => {
    return (
        <div className="footer-container">
        <div className="footer-content">
        
            <div className="footer-icon-and-links">
            <div className="footer-icon">
                <img src="Meapal logo new 2-04.png" alt="Footer Icon" />
                
                <p>Correlating data means making it <br/> efficient, honest, compliant, <br/> structured, indexed & <br/> homogeneous.</p>
            </div>
            
            
            <div className="footer-section">
                <h3>Company</h3>
                <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#why-choose-us">Why Choose Us</a></li>
                <li><a href="#know-how">Know How</a></li>
                <li><a href="#customers">Customers</a></li>
                </ul>
            </div>

            
            <div className="footer-section">
                <h3>Resources</h3>
                <ul>
                <li><a href="#privacy-policy">Privacy Policy</a></li>
                <li><a href="#terms">Terms and Conditions</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>

            
            <div className="footer-section">
                <h3>Product</h3>
                <ul>
                <li><a href="#project-management">Project Management</a></li>
                <li><a href="#time-tracker">Time Tracker</a></li>
                <li><a href="#time-schedule">Time Schedule</a></li>
                <li><a href="#lead-generate">Lead Generate</a></li>
                <li><a href="#remote-collaboration">Remote Collaboration</a></li>
                </ul>
            </div>
            </div>
        
            <div className="footer-contact-info">
            <p>Contact us:<br /> <strong>+33 (0)1 58 87 32 00 </strong></p>
            </div>
            <div className="footer-contact-info2">
            <p>Where to find us ?:<br /> <strong>Al Lasilki, Ezbet Fahmy, Maadi, <br/> Cairo Governorate 11435 </strong></p>
            </div>
            <div className="footer-divider">
            <hr />   <hr />  
            <p><small>Copyright @MEAPAL2023</small></p>
            <img src="Social (2).png" alt="Small Icon" className="small-icon" />
            
            </div>
        </div>
        </div>
    );
    }

    export default Footer;

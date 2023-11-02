
//FOOTER OF THE WEBSITE
import React from 'react';
import '../footer/Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <div className="content">
        <h2 style={{color:"white"}}>SIMPLE-PDF</h2>
        <p style={{color:"white"}}>We provide a good service to users for free</p>
        <div className="social-icons">
          {/* SOCIAL MEADIA ICONS LINK NOT ADDED */}
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;

// src/components/Header.js
import React from 'react';


function Header() {
  return (
    <div className="ourservices-container">
    <div className="ourservices-text">
      <h1>our <span className="highlight">services</span></h1>
      <p>we offer global services, driving growth with expertly designed apps. let us elevate your business with cost-effective solutions and unlock its full potential.</p>
    </div>
    <div className="ourservices-bubbles">
    <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble4"></div>
        <div className="bubble bubble5"></div>
    </div>
  </div>
  );
}

export default Header;

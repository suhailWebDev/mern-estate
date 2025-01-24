import React from 'react';
import buildings from '../video/8396975-uhd_2560_1440_25fps.mp4';
import '../App.css';

function Header() {
  return (
    <div className="main">
      <video src={buildings} autoPlay loop muted className="background-video" />
      <div className="overlay"></div>
      <div className="content">
        <h1 className="animated-text">Your Trusted Partner In Property Deals And Investments And</h1>
        <h1 className="animated-text">Turning Dreams Into Reality <span className='text-success'>Inaya Realty</span></h1>
      </div>
    </div>
  );
}

export default Header;

import { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Footer.css';

function Footer({setScrollTarget}) {


/*function navHandler(index) {
  setScrollTarget(Number(index));
  navigate(`/Home`, { replace: true });
}*/

  return (
    <footer className='Footer'>
      <div className='FooterHeading'>
        <span>Nasir Griffin | Software Engineer</span>
      </div>

      <div className='ApexContact'>
        <div className='Contact'>
          <p className='ContactField'>Based In</p>
          <p className='ContactValue'>Houston, TX</p>
        </div>

        <div className='Contact'>
          <p className='ContactField'>Email Us</p>
          <p className='ContactValue'>nasircrossgriffin@gmail.com</p>
        </div>

        <div className='Contact'>
          <p className='ContactField'>Call Me</p>
          <p className='ContactValue'>+1 (609) 805-9113</p>
        </div>
      </div>

      {/*<div className='FooterNav'>
        <a id='0' onClick={(e) => {navHandler(e.currentTarget.id)}}>Home</a>
        <a id='1' onClick={(e) => {navHandler(e.currentTarget.id)}}>Mission</a>
        <a id='2' onClick={(e) => {navHandler(e.currentTarget.id)}}>Process</a>
        <a id='3' onClick={(e) => {navHandler(e.currentTarget.id)}}>Foreclosure</a>
        <a id='4' onClick={(e) => {navHandler(e.currentTarget.id)}}>Testimonials</a>
        <a id='5' onClick={(e) => {navHandler(e.currentTarget.id)}}>Services</a>
      </div>*/}

      <div className='FooterLogo'>
          <img src='/static/Nasir_Griffin_Footer.png'/>
      </div>

      <nav className='SocialsNav'>
        <a href='https://www.linkedin.com/in/nasir-cross-griffin/' target="_blank"><img src='/static/Linkedin.png' alt="Nasir Griffin LinkedIn Link"/></a>
        <a href='https://www.youtube.com/@nasirgriffin-20XX' target="_blank"><img src='/static/YouTube.png' alt="Nasir Griffin Facebook Link" /></a>
        <a href='https://github.com/NasirCrossGriffin' target="_blank"><img src='/static/Github.png' alt="Nasir Griffin Github Link"/></a>
        <a href='https://www.get-your-start.com/home' target="_blank"><img src='/static/GYS.png' alt="Nasir Griffin Get Your Start Link"/></a>
        <a href='https://griffinmanagedwebsolutions.com/' target="_blank"><img src='/static/GMWS.png' alt="Nasir Griffin Griffin Managed Web Solutions Link"/></a>
      </nav>

      <nav className='LegalNav'>
        <a href='/nasirgriffin/home'>Home</a>
        <a href='/nasirgriffin/privacy-policy'>Privacy Policy</a>
        <a href='/nasirgriffin/terms-of-use'>Terms Of Use</a>
        <a href='/nasirgriffin/website-disclaimer'>Web Development Disclaimer</a>
        <a href='/nasirgriffin/accessibility'>Accessibility</a>
        <a href='/nasirgriffin/contact-footer'>Contact</a>
      </nav>
      
    </footer>
  );
}

export default Footer;



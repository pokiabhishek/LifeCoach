import React, { useEffect } from 'react';
import './Header.css';
import { assets } from '../../assets/asset';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className='parent'>
      <video autoPlay loop muted className="video-background">
        <source src={assets.video} type="video/mp4" />
      </video>
      <div className='overlay-bg'></div>
      <div className='header'>
        <h2 data-aos="fade-up">with James Hertz Coaching</h2>
        <h1 data-aos="fade-up">Let Go of Your Fears!</h1>
        <p data-aos="fade-up">Discover the simple 3 Steps that I Discovered to Hack Productivity.
          It works 100%. Wanna transform your life?</p>
        <button>Get Your Free Guide Now!</button>
        <div className='header-btm' data-aos="fade-up">
          <div className='header-btm-img'>
            <img src={assets.logo} alt="" />
          </div>
          <div className='header-btm-img'>
            <img src={assets.logo1} alt="" />
          </div>
          <div className='header-btm-img'>
            <img src={assets.logo2} alt="" />
          </div>
          <div className='header-btm-img'>
            <img src={assets.logo3} alt="" />
          </div>
          <div className='header-btm-img'>
            <img src={assets.logo4} alt="" />
          </div>
        </div>
      </div>
      <div className="elementor-shape elementor-shape-bottom" data-shape="curve" data-negative="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M500,194C126.7,192.6,0.8,39.6,0,0v200h1000V2C1000,38.8,873.3,193.5,500,194z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;

import React, { useEffect } from 'react';
import "./Client.css";
import { clientData } from '../../assets/asset';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Client = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className='Client'>
      <h3 data-aos="fade-down">Explore</h3>
      <h1 data-aos="zoom-in-up">Service I Provide For My Clients</h1>
      <p data-aos="fade-up">I can help you in a particular area.</p>
      <div className="Client-main" data-aos="fade-up">
        {clientData.map((item, index) => (
          <div key={index} className='Client-item' >
            <div className="Client-front" >
              <div className='Client-inner'>
                <h4>{item.front.title}</h4>
                <div>⚊</div>
                <p>{item.front.content}</p>
              </div>
            </div>
            <div
              className="Client-back"
              style={{ backgroundImage: `url(${item.back.img})` }}
            >
              <div className='Client-inner'>
                <h4>{item.back.title}</h4>
                <p>{item.back.content}</p>
                <button>{item.back.btn}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;

import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { assets } from '../../assets/asset';
import "./Userauth.css";
import { data } from '../../assets/asset';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Userauth = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className='userauth' style={{
      background: `url(${assets.userauth}) no-repeat center center fixed`,
      backgroundSize: 'cover'
    }}>
      <div className='bg-overlay'></div>
      <div className="content">
        {data.map((item, index) => {
          return (
            <div key={index} data-aos="fade-up">
              <h1>
                <CountUp
                  start={0}
                  end={item.value}
                  duration={4}
                  delay={index * 1} 
                />
                <span>{item.sign}</span>
              </h1>
              <p className=''>{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Userauth;

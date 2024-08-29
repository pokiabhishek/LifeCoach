import React from 'react';
import "./Client.css";
import { clientData } from '../../assets/asset';

const Client = () => {
  return (
    <div className='Client'>
      <h3>Explore</h3>
      <h1>Service I Provide For My Clients</h1>
      <p>I can help you in a particular area.</p>
      <div className="Client-main">
        {clientData.map((item, index) => (
          <div key={index} className='Client-item'>
            <div className="Client-front">
              <div className='Client-inner'>
                <h4>{item.front.title}</h4>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;

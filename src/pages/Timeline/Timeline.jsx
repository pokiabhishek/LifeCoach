import React, { useContext, useEffect } from 'react';
 // Adjust the import path as necessary
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeContext } from '../../Context/Themeprovider';
import "./Timeline.css"

const Timeline = () => {
  const { stepColors } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  const data = [
    { num: 1, head: 'Make a decision', para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { num: 2, head: 'Schedule a meeting', para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { num: 3, head: 'Show Commitment', para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { num: 4, head: 'Transformation Completed', para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  ];

  return (
    <div className='timeline'>
      <div className="container custom-containers">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="left-timeline">
              <div className="left-content">
                <h2 data-aos="fade-down">— How it works?</h2>
                <h1 data-aos="zoom-in-up">Simple Steps to Success</h1>
                <p data-aos="fade-up">It all starts with a single first step.</p>
              </div>
              <p data-aos="fade-up">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque perspiciatis ipsa at esse ex, commodi, velit molestias quo provident laboriosam laudantium sit eaque quia a suscipit voluptatum ab nobis vel!</p>
            </div>
            <div className="left-booking">
              <div className="left-card" data-aos="fade-up">
                <div className="heading">
                  <h1>Ready to start?</h1>
                  <p>The plans you refer to will soon be back in our hands. Alderaan? I'm not going to Alderaan. I've got to go home.</p>
                </div>
                <button>Book Your Session</button>
                <p>All queries are replied within 24hrs</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6">
            <div className="timeline-steps">
              {data.map(({ num, head, para }) => {
                const stepKey = `step${num}`;
                const { bg, border, numberBg } = stepColors[stepKey];

                const backgroundColor = bg === "bg-white" ? "#ffffff" : "#EAF2EC";
                const borderColor = border === "border-white" ? "#ffffff" : "#7AC590";
                const numberBackgroundColor = numberBg === "bg-white" ? "#ffffff" : "#7AC590";

                return (
                  <div key={num} className="step" style={{ marginBottom: "20px", position: "relative"}}>
                    <div
                      className="step-box"
                      style={{
           
                        backgroundColor,
                        borderColor,
                      
                      }}
                    >
                      <h5 className="step-title">{head}</h5>
                      <p className="step-description">{para}</p>
                      <div
                        className="step-arrow"
                        style={{
                      
                          borderLeft: `4px solid ${borderColor}`,
                          borderBottom: `4px solid ${borderColor}`,
                          backgroundColor,
                  
                        }}
                      ></div>
                      {num < 4 && (
                        <div
                          className="bottom-border"
                          style={{
                     
                            backgroundColor: borderColor,
                            zIndex: 1, // Ensure the bottom-border is behind the number
                          }}
                        ></div>
                      )}
                    </div>
                    <div
                      className="step-number"
                      style={{
                        backgroundColor: numberBackgroundColor,
                      }}
                    >
                      {num}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

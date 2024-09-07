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

                // Map class names to CSS properties
                const backgroundColor = bg === "bg-white" ? "#ffffff" : "#EAF2EC";
                const borderColor = border === "border-white" ? "#ffffff" : "#7AC590";
                const numberBackgroundColor = numberBg === "bg-white" ? "#ffffff" : "#7AC590";

                return (
                  <div key={num} className="step" style={{ marginBottom: "20px", position: "relative"}}>
                    <div
                      className="step-box"
                      style={{
                        position: "relative",
                        backgroundColor,
                        borderColor,
                        borderWidth: "4px",
                        borderStyle: "solid",
                        padding: "20px",
                        borderRadius: "5px",
                        width: "80%",
                        height:"150px",
                        marginLeft: "auto",
                      }}
                    >
                      <h5 className="step-title">{head}</h5>
                      <p className="step-description">{para}</p>
                      <div
                        className="step-arrow"
                        style={{
                          position: "absolute",
                          top: "35%",
                          left: "-14px",
                          width: "21px",
                          height: "21px",
                          borderLeft: `4px solid ${borderColor}`,
                          borderBottom: `4px solid ${borderColor}`,
                          backgroundColor,
                          transform: "rotate(45deg)",
                        }}
                      ></div>
                      {num < 4 && (
                        <div
                          className="bottom-border"
                          style={{
                            position: "absolute",
                            left: "-60px",
                            top: "80px",
                            width: "3px",
                            height: "127px",
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
                        height: "50px",
                        width: "50px",
                        fontSize: "20px",
                        padding: "10px",
                        borderRadius: "50%",
                        display: "grid",
                        placeItems: "center",
                        marginTop: "40px",
                        position: "absolute",
                        top: "0",
                        left: "30px",
                        color: "#fff",
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

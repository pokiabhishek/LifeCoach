import React, { useEffect, useRef, useState } from 'react';
import "./Timeline.css";

const Timeline = () => {
  const data = [
    { num: 1, head: 'Make a decision', para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { num: 2, head: 'Schedule a meeting', para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { num: 3, head: 'Show Commitment', para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { num: 4, head: 'Transformation Completed', para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  ];

  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [scrollmobile,setScrollmobile] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const progressBarRef = useRef(null);
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = timelineRefs.current.indexOf(entry.target);
          // console.log(`Item at index ${index} is intersecting.`); 

          setActiveIndex(index);          

          const percentage = ((index +0.2) / data.length) * 100;
          // console.log(`Scroll percentage updated to ${percentage}%`); 
          setScrollPercentage(percentage);
        }
      });
    }, observerOptions);

    // Observe each timeline item
    timelineRefs.current.forEach(item => observer.observe(item));

  }, [data.length]);

  const calculateFillColor = (index) => {
  
    return index <= activeIndex ? '#7AC590' : '#eee';
  };

  const calculateFillColors = (index) => {
    
    return index <= activeIndex ? '#EAF2EC' : '#f0f0f0';
  };

  const calculateBorderStyle = (index) => {
    return index <= activeIndex ? '5px solid #7AC590' : '5px solid transparent';
  };

  return (
    <div className='timeline'>
      <div className="container custom-containers">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="left-timeline">
              <div className="left-content">
                <h2>— How it works?</h2>
                <h1>Simple Steps to Success</h1>
                <p>It all starts with a single first step.</p>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque perspiciatis ipsa at esse ex, commodi, velit molestias quo provident laboriosam laudantium sit eaque quia a suscipit voluptatum ab nobis vel!</p>
            </div>
            <div className="left-booking">
              <div className="left-card">
                <div className="heading">
                  <h1>Ready to start?</h1>
                  <p>The plans you refer to will soon be back in our hands. Alderaan? I'm not going to Alderaan. I've got to go home.</p>
                </div>
                <button>Book Your Session</button>
                <p>All queries are replied within 24hrs</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6" style={{ position: "relative" }}>
            <div className="main-timeline" id='progress-container'
              style={{               
                position: "absolute",
                top: "90px",
                left: "35px",
                bottom: "0",
                right: "auto"
              }}
            >
              <div className="progress-bar" ref={progressBarRef} style={{
                width: '100%',
                height: `${scrollPercentage}%`, // Progress bar height adjusts based on active index
                backgroundColor: '#7AC590',
                transition: 'height 0.5s ease-in' // Smooth transition
              }}></div>
            </div>
            <div className='timeline-items'>
              {data.map((item, index) => (
                <div
                  className='timeline-item'
                  key={index}
                  ref={el => timelineRefs.current[index] = el}
                >
                  <div
                    className='timeline-num'
                    style={{
                      backgroundColor: calculateFillColor(index), // Fill color based on active index
                      transition: 'background-color 0.5s ease-in' // Smooth transition
                    }}
                  >
                    {item.num}
                  </div>
                  
                  <div
                    className='msg-timeline'
                    style={{
                      backgroundColor: calculateFillColors(index), // Fill color based on active index
                      border: calculateBorderStyle(index), // Border style based on active index
                      transition: 'background-color 0.5s ease-in, border 0.5s ease-in',
                      borderRadius: "20px"
                    }}
                  >
                    <h6>{item.head}</h6>
                    <p>{item.para}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Timeline;

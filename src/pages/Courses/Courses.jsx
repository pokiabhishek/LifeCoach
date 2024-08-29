import React from "react";
import "./Courses.css";
import { assets } from "../../assets/asset";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    img: assets.courses,
    content: "Discover yourself: values, Strengths, Vision, EQ, and More",
    date: "May 17, 2024",
  },
  {
    img: assets.courses1,
    content: "Persuasion Masterclass: How To Powerfully Influence Anyone",
    date: "May 21, 2024",
  },
  {
    img: assets.courese2,
    content: "Life Mastery - Be Happy, Healthy And Successful Simplified",
    date: "May 28, 2024",
  },
  {
    img: assets.courese3,
    content: "Nutrition: Build Your Perfect Diet & Meal Plan",
    date: "June 17, 2024",
  },
  {
    img: assets.courese4,
    content: "Overcome Your Fears and Become Stronger in 21 Days",
    date: "June 24, 2024",
  },
  {
    img: assets.courese5,
    content: "Relief Anxiety and Live a Relaxed Life",
    date: "June 29, 2024",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Courses = () => {
  return (
    <>
      <div className="Courses">
        <div className="Courses-container">
          <h5>Let's Grow Together.</h5>
          <h1>Latest Courses</h1>
          <h6>Enroll and Become Better.</h6>
          <div className="mt-5">
            <Slider {...settings}>
              {data.map((item, index) => (
                <div className="each-item">
                  <div className="Courses-slider" key={index}>
                    <img src={item.img} alt={item.content} />
                    <p>{item.content}</p>
                    <p>{item.date}</p>
                  </div>
                </div>
              ))}
            </Slider>
            <button className="btn2">
              <span className="btn-text">VIEW ALL COURSES</span>
              <span className="btn-text-hover">Learn things together</span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-img2" style={{
         background: `url(${assets.selfev}) no-repeat center center fixed`,
        backgroundSize: 'cover'
      }}>
        <div className="bg-overlay1"></div>
        <div className="con-1">
            <h2>Start with a five courses</h2>
            <h1>Self Development Course</h1>
            <span>Learn about how them you went down prying the wedding ring off his cold, dead finger. I don't know what you did, Fry, but once again, you screwed up!</span>
        </div>
        <button className="btn2">
              <span className="btn-text">Start For Free</span>
              <span className="btn-text-hover">Let's do it</span>
        </button>
      </div>
    </>
  );
};

export default Courses;

import React from 'react';
import './Testimonials.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const data = [
    {
      img: "https://amateracosmetics.com/wp-content/uploads/2021/08/Femme-40-ans-800x800.jpg",
      name: "Jane Anderson",
      founder: "Founder & CEO",
      content: "It’s amazing how much easier it has been to meet new people and create instant connections. I have the exact same personality, the only thing that has changed is my mindset and a few behaviors."
    },
    {
      img: "https://themes.pixelwars.org/efor/demo-08/wp-content/uploads/sites/12/2021/10/photo-1489424731084-a5d8b219a5bb.jpg",
      name: "Jake Bill",
      founder: "Founder & CEO",
      content: "Wow! I have the exact same personality, the only thing that has changed is my mindset and a few behaviors. I gained so much confidence in my ability to connect and deepen my relationships with people. It’s amazing how much easier it has been to meet new people and create instant connections."
    },
    {
      img: "https://themes.pixelwars.org/efor/demo-08/wp-content/uploads/sites/12/2021/10/photo-1552058544-f2b08422138a.jpg",
      name: "Ribeka Cruz",
      founder: "Founder & CEO",
      content: "It’s amazing how much easier it has been to meet new people and create instant connections. I have the exact same personality, the only thing that has changed is my mindset and a few behaviors."
    },
    {
      img: "https://themes.pixelwars.org/efor/demo-08/wp-content/uploads/sites/12/2021/10/44.jpg",
      name: "Anna Allen",
      founder: "Founder & CEO",
      content: "It’s amazing how much easier it has been to meet new people and create instant connections. I have the exact same personality, the only thing that has changed is my mindset and a few behaviors."
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
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='testimonial'>
      <div className='testimonial-container'>
        <h2>Testimonials</h2>
        <h1>Results i have helped create</h1>
        <p>Hear out what my clients say about me.</p>
        <div className='mt-5'>
          <Slider {...settings}>
            {data.map((msg, index) => (
              <div className='testimonial-slide' key={index}>
                <div className='testimonial-msg'>
                  <p>{msg.content}</p>
                </div>
                <div className='testimonial-info'>
                  <img src={msg.img} alt={msg.name} />
                  <h6>{msg.name}</h6>
                  <p>{msg.founder}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

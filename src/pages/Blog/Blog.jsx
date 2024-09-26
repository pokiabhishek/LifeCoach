import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";
import { assets, blog } from "../../assets/asset";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  const handleViewAll = () => {
    navigate("/blog"); 
  };

  return (
    <>
      <div className="Blog">
        <div className="Blog-main">
          <div className="blog-top">
            <div className="blog-heading">
              <h4 data-aos="fade-down">-Writings</h4>
              <h1 data-aos="zoom-in-up">Blog .</h1>
              <span data-aos="fade-up">I write about self development and more.</span>
            </div>
            <div className="blog-button" onClick={handleViewAll}>
              <span className="blog-text">View All News</span>
              <span className="blog-text-hover">The Blog</span>
            </div>
          </div>
          <div className="blog-pages" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px' }}>
            {blog.map((item, index) => (
              <div className="blog-item" key={index} data-aos="zoom-in-up">
                <div>
                  <img src={item.img} alt="" style={{ width: "100%" }} />
                </div>
                <p>{item.content}</p>
                <span>{item.data}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="subscribe">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 col-md-12 p-0">
              <div className="subscribe-main">
                <div className="subscribe-mail">
                  <h4 data-aos="fade-down">Subscribe to the</h4>
                  <span data-aos="fade-down">weekly Newsletter</span>
                  <h1 data-aos="zoom-in-up">Get my tips directly into your inbox.</h1>
                  <p data-aos="fade-up">Yes! I hate spam too ;)</p>
                  <div className="su-email" data-aos="fade-up">
                    <input type="text" placeholder="Enter your email" />
                    <button>Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12 m-0 p-0">
              <div className="email-img">
                <img src={assets.email} alt="Email illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

import React, { useEffect } from "react";
import "./Blog.css";
import { assets } from "../../assets/asset";
import AOS from 'aos';
import 'aos/dist/aos.css';

const blog = [
  {
    img: `${assets.blog1}`,
    content: "Stop Ignoring These 7 Inspiring Truths",
    data: "October 14, 2023",
  },
  {
    img: `${assets.blog2}`,
    content: "How to be 1% Better Every Day",
    data: "feb 14, 2024",
  },
  {
    img: `${assets.blog3}`,
    content: "How To Become Ridiculously Self-Aware In 20 Minutes",
    data: "jul 14, 2024",
  },
  {
    img: `${assets.blog4}`,
    content: "What’s the Point of Self-Improvement Anyway?",
    data: "jan 14, 2024",
  },
];

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);
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
            <div className="blog-button">
              <span className="blog-text">View All News</span>
              <span className="blog-text-hover">The Blog</span>
            </div>
          </div>
          <div className="blog-pages">
            {blog.map((item, index) => {
              return (
                <div className="blog-item" key={index} data-aos="zoom-in-up">
                  <div>
                    <img src={item.img} alt="" style={{ width: "100%" }} />
                  </div>
                  <p>{item.content}</p>
                  <span>{item.data}</span>
                </div>
              );
            })}
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
                    <input type="text" />
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

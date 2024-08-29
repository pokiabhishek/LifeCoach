import React from "react";
import "./Blog.css";
import { assets } from "../../assets/asset";

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
  return (
    <>
      <div className="Blog">
        <div className="Blog-main">
          <div className="blog-top">
            <div className="blog-heading">
              <h4>-Writings</h4>
              <h1>Blog .</h1>
              <span>I write about self development and more.</span>
            </div>
            <div className="blog-button">
              <span className="blog-text">View All News</span>
              <span className="blog-text-hover">The Blog</span>
            </div>
          </div>
          <div className="blog-pages">
            {blog.map((item, index) => {
              return (
                <div className="blog-item" key={index}>
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
                  <h4>Subscribe to the</h4>
                  <span>weekly Newsletter</span>
                  <h1>Get my tips directly into your inbox.</h1>
                  <p>Yes! I hate spam too ;)</p>
                  <div className="su-email">
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

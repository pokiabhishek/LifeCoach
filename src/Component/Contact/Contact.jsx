import React from "react";
import { assets } from "../../assets/asset";
import "./Contact.css";

const Contact = () => {
  return (
    <div
      className="contact-section"
      style={{
        background: `url(${assets.book}) no-repeat center center fixed`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row justify-content-end pt-5">
          <div className="col-md-8">
            <form className="contact-form p-5 rounded shadow-lg">
              <h2 className="text-uppercase text-primary">Ready to start?</h2>
              <h1 className="mb-4 text-dark">Let's Talk</h1>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <p className="mb-1 text-secondary">The Company Name Inc.</p>
                  <p className="mb-1 text-secondary">8901 Marmora Road,</p>
                  <p className="mb-1 text-secondary">Glasgow, D04 89GR.</p>
                </div>
                <div className="col-md-6 mb-3">
                  <p className="mb-1 text-secondary">+1 800 559 6580</p>
                  <p className="mb-1 text-secondary">+1 800 889 9898</p>
                  <p className="mb-1 text-secondary">mail@demolink.org</p>
                </div>
              </div>
              <h2 className="mb-4">- Drop me a line</h2>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="Name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="Email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="Msg" className="form-label">
                  Message
                </label>
                <textarea
                  id="Msg"
                  className="form-control"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="border border-dark p-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

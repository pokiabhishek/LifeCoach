import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/asset";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollTop = 0;

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleScroll = () => {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    setShowNavbar(currentScrollTop < lastScrollTop || currentScrollTop === 0);
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`navbar ${menuOpen ? "menu-open" : ""} ${
          showNavbar ? "navbar-show" : "navbar-hide"
        }`}
      >
        <div className="navbar-main">
          <div className="navbar-menuburger" onClick={handleMenuToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h2>James Hertz</h2>

          <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
            <a href="#">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </ul>
          <ul className={`navbar-menu ${menuOpen ? "show" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/start-here">Start Here</Link>
            </li> */}
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="navbar-right">
            <Link to="/cart"><img src={assets.basket_icon} alt="Basket Icon" /></Link>
            <img src={assets.search_icon} alt="Search Icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

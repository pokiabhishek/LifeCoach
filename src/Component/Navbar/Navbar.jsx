import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/asset";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isWhite, setIsWhite] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [instantShow, setInstantShow] = useState(false);
  const location = useLocation(); // Get current route

  const handleMenuToggle = () => {
    setMenuOpen(prevState => !prevState);
  };

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let shouldShowNavbar = showNavbar;
    let isTransparent = location.pathname === '/blog' || currentScrollTop <= 5;
    let isWhite = false;
    let instantShow = false;

    if (currentScrollTop <= 5) {
      shouldShowNavbar = true;
      isTransparent = true;
      instantShow = true; // Navbar should show instantly
    } else if (currentScrollTop > 5 && currentScrollTop < 700) {
      shouldShowNavbar = false;
    } else if (currentScrollTop > 700 && currentScrollTop < lastScrollTop) {
      shouldShowNavbar = true;
      isTransparent = false;
      isWhite = true;
      instantShow = false;
    } else if (currentScrollTop > 700 && currentScrollTop > lastScrollTop) {
      shouldShowNavbar = false;
    }

    setShowNavbar(shouldShowNavbar);
    setIsTransparent(isTransparent);
    setIsWhite(isWhite);
    setInstantShow(instantShow);
    setLastScrollTop(currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop, showNavbar, location.pathname]);

  return (
    <div
      className={`navbar ${menuOpen ? "menu-open" : ""} ${
        showNavbar ? (instantShow ? "navbar-instant-show" : "navbar-show") : "navbar-hide"
      } ${isTransparent ? "navbar-transparent" : isWhite ? "navbar-white" : ""}`}
    >
      <div className="navbar-main">
        <div className="navbar-menuburger" onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h2>James Hertz</h2>

        <ul className={`navbar-links ${menuOpen ? "show" : "hide"}`}>
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
  );
};

export default Navbar;

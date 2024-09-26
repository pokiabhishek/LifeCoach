import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isWhite, setIsWhite] = useState(false);
  const [isSpecialPage, setIsSpecialPage] = useState(false); // New state for special pages
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [instantShow, setInstantShow] = useState(false);
  const location = useLocation(); 

  const handleMenuToggle = () => {
    setMenuOpen(prevState => !prevState);
  };

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isCoursesPage = location.pathname === '/courses';
    const isShopPage = location.pathname === '/shop';
    const isContactPage = location.pathname === '/contact';

    let shouldShowNavbar = showNavbar;
    let isTransparent = currentScrollTop <= 5 || (isSpecialPage && currentScrollTop <= 5);
    let isWhite = !isTransparent && (isCoursesPage || isShopPage || isContactPage || (currentScrollTop > 700 && currentScrollTop <= lastScrollTop));
    let instantShow = false;

    if (currentScrollTop <= 5) {
      shouldShowNavbar = true;
      isTransparent = true;
      instantShow = true; 
    } else if (currentScrollTop > 5 && currentScrollTop < 700) {
      shouldShowNavbar = false;
    } else if (currentScrollTop > 700 && currentScrollTop < lastScrollTop) {
      shouldShowNavbar = true;
      isTransparent = false;
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
    const path = location.pathname;
    setIsSpecialPage(path === '/' || path === '/blog'); // Check if on Home or Blog page
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname, lastScrollTop, showNavbar]);

  return (
    <div
      className={`navbar ${menuOpen ? "menu-open" : ""} ${
        showNavbar ? (instantShow ? "navbar-instant-show" : "navbar-show") : "navbar-hide"
      } ${isTransparent ? "navbar-transparent" : isWhite ? "navbar-white" : ""} ${isSpecialPage ? "navbar-special" : ""}`}
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
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="navbar-right">
          <Link to="/cart"><FiShoppingCart className="cart" /></Link>
          <IoSearchOutline className="search" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

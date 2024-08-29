import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./Component/Footer/Footer";
// import Blog from "./Component/Blog/Blog"
import Courses from "./Component/Courses/Courses"
import Shop from "./Component/Shop/Shop"
import Contact from "./Component/Contact/Contact"
import Cart from "./Component/Addtocart/Addtocart"

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          {/* <Route path="/blog" element={<Blog/>} /> */}
          <Route path="/shop" element={<Shop/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={< Cart/>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;

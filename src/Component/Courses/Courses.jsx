import React, { useState, useEffect, useContext } from "react";
import "./Courses.css";
import { assets } from "../../assets/asset";
import { Rating } from "@mui/material";
import { CiUser, CiTimer } from "react-icons/ci";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { CartContext } from "../../Context/Cartcontext";

const Course = [
  {
    img: assets.courese2,
    title: "Persuasion Masterclass: How To Powerfully Influence Anyone",
    user: 122,
    time: "18h 20m",
    para: "By Developer In Development, Heath & Fitness, JavaScript, Marketing, Math, Photography",
    btn: "Start Learning",
  },
  {
    img: assets.courese3,
    title: "Nutrition: Build Your Perfect Diet & Meal Plan",
    user: 199,
    time: "04h",
    para: "By Developer In Affiliate Marketing, Email Marketing, Marketing, SEO",
    btn: "Enroll Courses",
  },
  {
    img: assets.courese4,
    title: "Overcome Your Fears and Become Stronger in 21 Days",
    user: 122,
    time: "18h 20m",
    para: "By Developer In Algebra, Business, Calculus, Discrete Math, Heath & Fitness, Math, Statistics",
    price: 19.00,
    btn: "Add to cart",
  },
  {
    img: assets.courese5,
    title: "Relief Anxiety and Live a Relaxed Life",
    user: 12,
    time: "22h 30m",
    para: "By Developer In Design, Development, JavaScript, Math, Photography, PHP, WordPress",
    btn: "Enroll Courses",
  },
  {
    img: assets.courses1,
    title: "Discover Yourself: Values, Strengths, Vision, EQ, And More",
    user: 122,
    time: "07h 30m",
    para: "By Developer In Business, Design, Development, Marketing, WordPress",
    btn: "Enroll Courses",
  },
  {
    img: assets.courses,
    title: "Life Mastery – Be Happy, Healthy And Successful Simplified",
    user: 122,
    time: "13h 20m",
    para: "By Developer In Development, Heath & Fitness, JavaScript, Marketing, Math, Photography",
    btn: "Enroll Courses",
  },
  {
    img: assets.courese3,
    title: "Nutrition: Build Your Perfect Diet & Meal Plan",
    user: 199,
    time: "04h",
    para: "By Developer In Affiliate Marketing, Email Marketing, Marketing, SEO",
    btn: "Enroll Courses",
  },
  {
    img: assets.courese4,
    title: "Overcome Your Fears and Become Stronger in 21 Days",
    user: 122,
    time: "18h 20m",
    para: "By Developer In Algebra, Business, Calculus, Discrete Math, Heath & Fitness, Math, Statistics",
    price: 19.00,
    btn: "Add to cart",
  },
  {
    img: assets.courese5,
    title: "Relief Anxiety and Live a Relaxed Life",
    user: 12,
    time: "22h 30m",
    para: "By Developer In Design, Development, JavaScript, Math, Photography, PHP, WordPress",
    price: 20.00,
    btn: "Add to cart",
  },
  {
    img: assets.courses1,
    title: "Discover Yourself: Values, Strengths, Vision, EQ, And More",
    user: 122,
    time: "07h 30m",
    para: "By Developer In Business, Design, Development, Marketing, WordPress",
    btn: "Enroll Courses",
  },
  {
    img: assets.courses,
    title: "Life Mastery – Be Happy, Healthy And Successful Simplified",
    user: 122,
    time: "13h 20m",
    para: "By Developer In Development, Heath & Fitness, JavaScript, Marketing, Math, Photography",
    btn: "Enroll Courses",
  },
];

const Courses = () => {
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(2);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const coursesToDisplay = Course.slice(startIndex, endIndex);

  return (
    <>
      <div className="Courses-main">
        {loading ? (
          <div className="loader"></div>
        ) : (
          <div className="courses-content">
            <h1 className="text-center mt-5">Courses</h1>
            <div className="courses-card">
              <div className="container">
                <div className="row">
                  {coursesToDisplay.map((item, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4 mb-4 mb-md-3">
                      <div className="courses-each-card w-100">
                        <img src={item.img} alt={item.title} className="course-img" />
                        <div className="p-3">
                          <Rating
                            name={`course-rating-${index}`}
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                          <h2>{item.title}</h2>
                          <div className="d-flex align-items-center w-50 justify-content-between">
                            <span className="d-flex gap-1">
                              <CiUser />
                              <p>{item.user}</p>
                            </span>
                            <span className="d-flex gap-1">
                              <CiTimer />
                              <p>{item.time}</p>
                            </span>
                          </div>
                          <div className="d-flex align-items-center w-100 justify-content-between courses-para">
                            <img src={assets.usericon} alt="" />
                            <p className="ms-3">{item.para}</p>
                          </div>
                        </div>
                        <div className="d-flex border-top align-items-center">
                          {item.price && (
                            <h5 className="course-price p-2">£{item.price}</h5>
                          )}
                          <button
                            className="p-2 courses-button"
                            onClick={() => addToCart(item)}
                          >
                            {item.btn}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between p-3 border border-dark-subtle rounded align-items-center mb-3">
            Page {page} to 2
            <Stack>
              <Pagination
                count={Math.ceil(Course.length / itemsPerPage)}
                page={page}
                onChange={handleChange}
                variant="outlined"
                shape="rounded"
              />
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};
export default Courses;

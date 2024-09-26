import React, { useEffect } from "react";
import "./Blog.css";
import Banner1 from "../../assets/banner1.jpg";
import { assets, blog } from "../../assets/asset";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [
  {
    src: assets.Blogimg,
    title: "Stop Ignoring These 7 Inspiring Truths",
    description: "Some representative placeholder content for the first slide.",
  },
  {
    src: assets.Blogimg2,
    title: "How to be 1% Better Every Day",
    description:
      "Some representative placeholder content for the second slide.",
  },
  {
    src: assets.Blogimg3,
    title: "How To Become Ridiculously Self-Aware In 20 Minutes",
    description: "Some representative placeholder content for the third slide.",
  },
  {
    src: assets.Blogimg4,
    title: "What’s the Point of Self-Improvement Anyway?",
    description:
      "What’s the Point of Self-Improvement Anyway?",
  },
];

const Blog = () => {
  useEffect(() => {
    AOS.init();

    const handleCarouselChange = () => {
      const carouselItems = document.querySelectorAll(".carousel-item");
      carouselItems.forEach((item) => {
        item.classList.remove("aos-animate");
      });

      const activeItem = document.querySelector(".carousel-item.active");
      if (activeItem) {
        activeItem.classList.add("aos-animate");
      }
    };

    const carouselElement = document.querySelector("#carouselExampleCaptions");
    if (carouselElement) {
      carouselElement.addEventListener(
        "slid.bs.carousel",
        handleCarouselChange
      );
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener(
          "slid.bs.carousel",
          handleCarouselChange
        );
      }
    };
  }, []);

  return (
    <div className="Blogs">
      <div className="Blogs-main">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item${index === 0 ? " active" : ""}`}
                data-aos="zoom-in-right"
              >
                <img
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  className="carousel-image"
                />
                <div className="overlay"></div>
                <div className="carousel-caption d-none d-md-block z-20 py-5 w-[40%]   mx-auto">
                  <h1 className="text-white text-2xl uppercase">{slide.title}</h1>
                  <button className="uppercase text-sm border-b-2 mt-5">View post</button>
                  {/* <p>{slide.description}</p> */}
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="flex justify-center">
          <div className="w-[65%] p-2">
            <h1 className="text-center text-7xl py-5">Blog</h1>
            <div className="grid md:grid-cols-2 gap-7 row-gap-6">
              {blog.map((item, key) => (
                <div className="">
                  <div className="w-[80%] mx-auto">
                    <img
                      src={item.img}
                      alt={item.content}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "250px",
                      }}
                    />
                  </div>
                  <div className="text-center px-14 ">
                    <span className="text-sm text-gray-500 py-2">
                      {item.data}
                    </span>
                    <h1 className="text-[25px] px-3 py-3 font-medium">
                      {item.content}
                    </h1>
                    <p className="text-sm px-3">{item.content1}</p>
                    <button className="border-b-2 border-black mt-3">
                      Read more
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[25%] sticky top-0">
            <h1 className="text-xl uppercase text-gray-600 pt-8 pl-2">
              Recent posts
            </h1>
            <div className="mt-3">
              {blog.map((item) => (
                <p className="px-2 py-2 text-sm">{item.content}</p>
              ))}
            </div>
            <div className="mt-3">
              <h1 className="text-xl uppercase text-gray-600 pt-8 pl-2">
                Must Read
              </h1>
              <div>
                {blog.map((item) => (
                  <div className="px-2 py-2">
                    <div className=" flex items-center">
                      <img src={item.img} alt="" style={{objectFit:"cover",width:"100px",height:"auto"}} />
                      <p className="text-sm px-2 w-full">{item.content}</p>
                    </div>                    
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1 className="uppercase mt-5 tracking-widest py-2">categories</h1>
              <p className="text-sm py-2">Improve</p>
              <p className="text-sm py-2">Life</p>
              <p className="text-sm py-2">Self-Improvement</p>
            </div>
            <div>
              <img src={Banner1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React, { useEffect } from "react";
import "./Blog.css";
import { assets } from "../../assets/asset";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles

const slides = [
  { src: assets.blog1, title: "First slide label", description: "Some representative placeholder content for the first slide." },
  { src: assets.blog2, title: "Second slide label", description: "Some representative placeholder content for the second slide." },
  { src: assets.blog3, title: "Third slide label", description: "Some representative placeholder content for the third slide." },
  { src: assets.blog4, title: "Fourth slide label", description: "Some representative placeholder content for the fourth slide." },
];

const Blog = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init();

    // Function to manually add animation class when carousel slides change
    const handleCarouselChange = () => {
      // Select all carousel items
      const carouselItems = document.querySelectorAll(".carousel-item");
      carouselItems.forEach((item) => {
        // Remove AOS class to prevent animations on initial load
        item.classList.remove("aos-animate");
      });

      // Add AOS class to the currently active carousel item
      const activeItem = document.querySelector(".carousel-item.active");
      if (activeItem) {
        activeItem.classList.add("aos-animate");
      }
    };

    // Attach event listeners for carousel slide events
    const carouselElement = document.querySelector("#carouselExampleCaptions");
    if (carouselElement) {
      carouselElement.addEventListener("slid.bs.carousel", handleCarouselChange);
    }

    // Clean up event listeners on component unmount
    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("slid.bs.carousel", handleCarouselChange);
      }
    };
  }, []);

  return (
    <div className="Blogs">
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
              <img src={slide.src} alt={`Slide ${index + 1}`} />
              <div className="overlay"></div> {/* Added overlay */}
              <div className="carousel-caption d-none d-md-block">
                <h5>{slide.title}</h5>
                <p>{slide.description}</p>
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
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Blog;

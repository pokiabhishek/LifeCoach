import React from "react";
import "./Blog.css";
import Banner1 from "../../assets/banner1.jpg";
import { assets, blog } from "../../assets/asset";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

const slides = [
  {
    src: assets.Blogimg,
    title: "Stop Ignoring These 7 Inspiring Truths",
  },
  {
    src: assets.Blogimg2,
    title: "How to be 1% Better Every Day",
  },
  {
    src: assets.Blogimg3,
    title: "How To Become Ridiculously Self-Aware In 20 Minutes",
  },
  {
    src: assets.Blogimg4,
    title: "What’s the Point of Self-Improvement Anyway?",
  },
];

const Blog = () => {
  return (
    <div className="Blogs">
      <div className="Blogs-main">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          effect="fade"
          modules={[Autoplay, Pagination, EffectFade]}
          className="mySwiper h-[400px] md:h-[650px]" // Adjust height for responsiveness
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="carousel-image w-full h-full object-cover"
              />
              <div className="overlay"></div>
              <div className="carousel-caption absolute z-20 py-5 w-[50%]  md:w-[45%] md:top-[300px] left-1/2 transform -translate-x-1/2">
                <h1 className="text-white text-sm md:text-2xl uppercase text-center">{slide.title}</h1>
                <button className="uppercase text-sm border-b-2 mt-5">View post</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-[65%] p-2">
            <h1 className="text-center text-5xl md:text-7xl py-5">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 row-gap-6">
              {blog.map((item, key) => (
                <div key={key} className="w-full">
                  <div className="w-[80%] mx-auto">
                    <img
                      src={item.img}
                      alt={item.content}
                      className="object-cover w-full h-[250px]"
                    />
                  </div>
                  <div className="text-center px-3 md:px-14">
                    <span className="text-sm text-gray-500 py-2">{item.data}</span>
                    <h1 className="text-lg md:text-[25px] px-3 py-3 font-medium">{item.content}</h1>
                    <p className="text-sm px-3">{item.content1}</p>
                    <button className="border-b-2 border-black mt-3">Read more</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[25%] sticky top-0 md:ml-4">
            <h1 className="text-xl uppercase text-gray-600 pt-8 pl-2">Recent posts</h1>
            <div className="mt-3">
              {blog.map((item, index) => (
                <p key={index} className="px-2 py-2 text-sm">{item.content}</p>
              ))}
            </div>
            <div className="mt-3">
              <h1 className="text-xl uppercase text-gray-600 pt-8 pl-2">Must Read</h1>
              <div>
                {blog.map((item, index) => (
                  <div key={index} className="px-2 py-2 flex items-center">
                    <img src={item.img} alt="" className="object-cover w-[100px] h-auto" />
                    <p className="text-sm px-2 w-full">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1 className="uppercase mt-5 tracking-widest py-2">Categories</h1>
              <p className="text-sm py-2">Improve</p>
              <p className="text-sm py-2">Life</p>
              <p className="text-sm py-2">Self-Improvement</p>
            </div>
            <div>
              <img src={Banner1} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

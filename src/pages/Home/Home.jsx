import React from 'react'
import "./Home.css"
import Header from '../../Component/Header/Header'
import About from '../About/About'
import Userauth from '../Userauth/Userauth'
import Client from '../Client/Client'
import Testimonials from '../Testimonials/Testimonials'
import Timeline from '../Timeline/Timeline'
import Booking from '../Booking/Booking'
// import Upcoming from ''
import Course from "../Courses/Courses"
import Blog from '../Blog/Blog'


const Home = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Userauth/>
      <Client/>
      <Testimonials/>
      <Timeline/>
      <Booking/>
      
      <Course/>
      <Blog/>
    </div>
  )
}

export default Home

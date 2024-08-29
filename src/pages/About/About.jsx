import React from 'react'
import "./About.css"
import { assets } from '../../assets/asset'

const About = () => {
    return (
        <div className='about'>
            <div className="container custom-container">
                <div className="row mt-5">
                    <div className="col-12 col-md-6 col-xl-6">
                        <div className="about-left">
                            <div>
                                <h3>-About Me</h3>
                                <h1>I help people to discover their true potential.</h1>
                            </div>
                            <div className='about-left-p'>
                                <p>
                                    The plans you refer to will soon be back in our hands. But with the blast shield down, I can’t even see! How am I supposed to fight? I suggest you try it again, Luke. This time, let go your conscious self and act on instinct.
                                    Don’t be too proud of this technological terror you’ve constructed. The ability to destroy a planet is insignificant next to the power of the Force. I find your lack of faith disturbing. Kid, I’ve flown from one side of this galaxy.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-6">
                        <div className="about-right">
                            <div className='right-img'>
                                <img src={assets.aboutimg} alt="" />
                                <span> 
                                    <h1>34</h1>
                                    Years of Experience
                                </span>
                            </div>
                            <p>
                                Don’t be too proud of this technological terror you’ve constructed. The ability to destroy a planet is insignificant next to the power of the Force. I find your lack of faith disturbing. Kid, I’ve flown from one side of this galaxy to the other. I’ve seen a lot of strange stuff, but I’ve never seen anything to make me believe there’s one all-powerful Force controlling everything.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

import React, { useEffect } from 'react';
import "./About.css";
import { assets } from '../../assets/asset';
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
    return (
        <div className='about mt-[240px] py-[50px]'>
            <div className="w-[80%] mx-auto custom-container">
                <div className="row mt-5">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="about-left">
                            <div className='p-4'>
                                <h3 data-aos="fade-up">- About Me</h3>
                                <h1 data-aos="fade-up">I help people to discover their true potential.</h1>
                            </div>
                            <div className='about-left-p ms-auto py-[20px]' data-aos="fade-up">
                                <p>
                                    The plans you refer to will soon be back in our hands. But with the blast shield down, I can’t even see! How am I supposed to fight? I suggest you try it again, Luke. This time, let go your conscious self and act on instinct.
                                </p>
                                <p>
                                    Don’t be too proud of this technological terror you’ve constructed. The ability to destroy a planet is insignificant next to the power of the Force. I find your lack of faith disturbing. Kid, I’ve flown from one side of this galaxy.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="about-right">
                            <div className='right-img'>
                                <img src={assets.aboutimg} alt="About" className="img-fluid"/>
                                <span data-aos="fade-up"> 
                                <h1 className="text-5xl">34</h1>
                                    Years of Experience
                                </span>
                            </div>
                            <p className='ms-auto' data-aos="fade-up">
                                Don’t be too proud of this technological terror you’ve constructed. The ability to destroy a planet is insignificant next to the power of the Force. I find your lack of faith disturbing. Kid, I’ve flown from one side of this galaxy to the other. I’ve seen a lot of strange stuff, but I’ve never seen anything to make me believe there’s one all-powerful Force controlling everything.
                            </p>
                            <h1 className='ms-auto sign' data-aos="fade-up">James Hertz</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

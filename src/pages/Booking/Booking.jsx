import React, { useState } from 'react';
import { TiShoppingBag, TiTick } from "react-icons/ti";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { FaUser, FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import "./Booking.css";

import ServiceSelection from '../Booking/FormControl/ServiceSelection';
import DateTime from '../Booking/FormControl/DateTime';
import YourInformation from '../Booking/FormControl/YourInformation';
import Payment from '../Booking/FormControl/Payment';
import AllData from './FormControl/Alldata'; // Import AllData component

const sidebar = [
    {
        name: 'Service selection',
        icon: <TiShoppingBag />,
        component: ServiceSelection,
    },
    {
        name: 'Date & Time',
        icon: <BsCalendarDateFill />,
        component: DateTime,
    },
    {
        name: 'Your Information',
        icon: <FaUser />,
        component: YourInformation,
    },
    {
        name: 'Payment',
        icon: <MdOutlinePayment />,
        component: Payment,
    },
    {
        name: 'All user info',
        icon: <TiTick />,
        component: AllData,
    },
];

const showAnimation = {
    hidden: {
        width: 0,
        opacity: 0,
        transition: {
            duration: 0.6,
        },
    },
    show: {
        opacity: 1,
        width: "",
        transition: {
            duration: 0.5,
        },
    },
};

const Booking = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        service: '',
        date: '',
        time: '',
        first: '',
        last: '',
        email: '',
        phoneNumber: '',
        price: ''
    });

    const toggle = () => setIsOpen(!isOpen);

    const handleNext = () => {
            setCurrentStep((prev) => Math.min(prev + 1, sidebar.length - 1));
    };

    const handlePrev = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const handleChange = (newData) => {
        setFormData({ ...formData, ...newData });
    };

    const CurrentComponent = sidebar[currentStep].component;

    return (
        <div className='Booking'>
            <div className="Booking-overlay"></div>
            <div className="container customize">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="left-part">
                            <h3>Let the transformation begin</h3>
                            <h1>Book Your Coaching Session Now!</h1>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className='right-bar'>
                            <motion.div
                                animate={{
                                    width: isOpen ? "200px" : "60px",
                                    transition: {
                                        duration: 0.5,
                                        type: "spring",
                                        damping: 10,
                                    }
                                }}
                                className='sidebar'>
                                <section>
                                    {sidebar.map((route, index) => (
                                        <div key={index}>
                                            <div>
                                                <a
                                                    className={`link`}
                                                >
                                                    <div className='icon'>{route.icon}</div>
                                                    <AnimatePresence>
                                                        {isOpen && (
                                                            <>
                                                                <motion.div
                                                                    variants={showAnimation}
                                                                    initial="hidden"
                                                                    animate="show"
                                                                    exit="hidden"
                                                                    className='link_text'
                                                                >
                                                                    {route.name}
                                                                </motion.div>

                                                                {index === 0 && formData.service && (
                                                                    <motion.div
                                                                        variants={showAnimation}
                                                                        initial="hidden"
                                                                        animate="show"
                                                                        exit="hidden"
                                                                        className='circle'
                                                                    >
                                                                        <TiTick />
                                                                    </motion.div>
                                                                )}

                                                                {index === 0 && formData.service && (
                                                                    <motion.p
                                                                        variants={showAnimation}
                                                                        initial="hidden"
                                                                        animate="show"
                                                                        exit="hidden"
                                                                        className='para'
                                                                    >
                                                                        {formData.service}
                                                                    </motion.p>
                                                                )}

                                                                {index === 1 && formData.date && isOpen && (
                                                                    <motion.div variants={showAnimation}
                                                                        initial="hidden"
                                                                        animate="show"
                                                                        exit="hidden"
                                                                        className='circle'>
                                                                        <TiTick />
                                                                    </motion.div>
                                                                )}

                                                                {index === 1 && formData.time && (
                                                                    <motion.p
                                                                        variants={showAnimation}
                                                                        initial="hidden"
                                                                        animate="show"
                                                                        exit="hidden"
                                                                        className='para1'
                                                                    >
                                                                        {formData.date} - {formData.time}
                                                                    </motion.p>
                                                                )}

                                                                {index === 2 && formData.first && formData.last && formData.email && formData.phoneNumber && (
                                                                    <motion.div
                                                                        variants={showAnimation}
                                                                        initial="hidden"
                                                                        animate="show"
                                                                        exit="hidden"
                                                                        className='circle'
                                                                    >
                                                                        <TiTick />
                                                                    </motion.div>
                                                                )}
                                                            </>
                                                        )}
                                                    </AnimatePresence>
                                                </a>
                                            </div>
                                            <div></div>
                                        </div>
                                    ))}

                                    <div className='close'>
                                        {isOpen ? (
                                            <FaArrowAltCircleLeft onClick={toggle} />
                                        ) : (
                                            <FaArrowAltCircleRight onClick={toggle} />
                                        )}
                                    </div>
                                </section>
                            </motion.div>
                            <div className='right-side-section'>
                                {currentStep > 0 && (
                                    <button onClick={handlePrev} className="prev-button">
                                        Back
                                    </button>
                                )}
                                <div className="right-side-heading">
                                    <h6>{sidebar[currentStep].name}</h6>
                                </div>
                                <div className="right-side-content">
                                    <CurrentComponent
                                        formData={formData}
                                        onNext={handleNext}
                                        onPrev={handlePrev}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;

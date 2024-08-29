import React from 'react'
import "./Upcoming.css"
import { BiSearch } from 'react-icons/bi'

const data = [
    {
        content: "Self Discovery Workshop",
        para: "Chicago Thertre",
        date:"27",
        month:"Feb",
        price: "1,100.00",
        slot:"Full",
        button:"Learn More"
    },
    {
        content: "The Awakening Workshop",
        para: "Sydney Park",
        date:"15",
        month:"Jun",
        price: "2,000.00",
        slot:"Open 7 slot left",
        button:"Read More"
    }
]
const Upcoming = () => {
    return (
        <div className='Upcoming'>
            <div className="Upcoming-child">
                <h5>Workshops</h5>
                <h1>Upcoming WorkShops!</h1>
                <h6>2 Events Available</h6>
                <div className="upcoming-search">
                    <div className='position-relative'>
                        <input type="text" />
                        <BiSearch className='search-icon position-absolute' />
                    </div>
                    <div className="upcoming-search-item">
                        {data.map(search => {
                            return (
                                <div className='search-item'>
                                    <div className='d-flex flex-column align-items-center justify-content-center'>
                                        <div className='d-flex align-items-center'><h5>{search.date}</h5>&nbsp;<span>{search.month}</span></div>
                                        <span>8.00am</span>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <p>{search.content}</p>
                                        <p>{search.para}</p>
                                        <div className='text-start'>{search.slot}</div>
                                    </div>
                                    <div className='d-flex flex-column justify-content-between'>
                                        <div>${search.price}</div>
                                        <button>{search.button}</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upcoming

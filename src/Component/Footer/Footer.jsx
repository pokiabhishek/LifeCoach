import React from 'react'
import { assets } from '../../assets/asset'
import "./Footer.css"

const img = [
    {img:assets.footer1},
    {img:assets.footer2},
    {img:assets.footer3},
    {img:assets.footer4},
    {img:assets.footer5},
    {img:assets.footer6},
    {img:assets.footer7},
    {img:assets.footer8},
    {img:assets.footer9},
    {img:assets.footer10},
    {img:assets.footer11},
    {img:assets.footer12},
]

const Footer = () => {
  return (
    <div className='Footer'>
        {img.map((item) => {
            return(
                <div className='Footer-item'>
                    <img src={item.img} alt="" />
                </div>
            );
        })}
        <span>2024 Jason Hertz – ALL RIGHTS RESERVED.</span>
    </div>
  )
}

export default Footer

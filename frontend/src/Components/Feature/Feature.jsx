import React from 'react'
import './Feature.css'
import f1_img from '../Assets/shippinglogo.jpg'
import f2_img from '../Assets/orderonlinelogo.png'
import f3_img from '../Assets/piggybanklogo.png'
import f4_img from '../Assets/returnlogo.png'
import f5_img from '../Assets/24x7logo.png'

export const Feature = () => {
  return (
    <section id="feature" className="section-p1">
        <div  className="fe-box">
            <img className="featureimgs" src={f1_img} alt=""/>
            <h6>Free Shipping</h6>
        </div>
        <div  className="fe-box">
            <img className="featureimgs" src={f2_img} alt=""/>
            <h6>Order Online</h6>
        </div>
        <div  className="fe-box">
            <img className="featureimgs" src={f3_img} alt=""/>
            <h6>Save money</h6>
        </div>
        <div  className="fe-box">
            <img className="featureimgs" src={f4_img} alt=""/>
            <h6>Return</h6>
        </div>
        <div  className="fe-box">
            <img className="featureimgs" src={f5_img} alt=""/>
            <h6>24x7 Services</h6>
        </div>
    </section>
  )
}

export default Feature
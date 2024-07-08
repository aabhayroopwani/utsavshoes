import React from 'react'
import './Smbanner.css'

export const Smbanner = () => {
  return (
    <section id="sm-banner" className="section-p1">
        <div className="banner-box">
            <h4>Crazy deals</h4>
            <h2>Buy 1 get 1 free</h2>
            <span>the best shoes are on sale at utsav shoes</span>
            <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2">
            <h4>spring / summer</h4>
            <h2>Upcoming season</h2>
            <span>the best shoes are on sale at utsav shoes</span>
            <button className="white">Collection</button>
        </div>
    </section>
  )
}

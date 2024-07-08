import React from 'react'
import './Newsletter.css'
export const Newsletter = () => {
  return (
    <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
            <h4>Sign-up for newsletters</h4>
            <p>get e-mail updates of our shop and Latest <span>special offers.</span></p>
        </div>
        <div className="form">
                <input type="text" placeholder="Your e-mail address"/>
                <button className="normal">sign-up</button>
        </div>
    </section>
  )
}

import React from 'react'
import './Footer.css'
import logoimg from '../Assets/UTSAV_SHOES_LOGO.png'
export const Footer = () => {
  return (
    <footer className="section-p1">
        <div className="col">
            <img src={logoimg} alt=""/>
            <h4>contact</h4>
            <p><strong> address: </strong> Seepat Rd, Old Sarkanda, Sarkanda, Bilaspur, Chhattisgarh 495001</p>
            <p><strong> phone: </strong> +91 9827952562</p>
        </div>
        <div className="follow">
            <h4>follow us</h4>
            <div className="icon">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-pinterest-p"></i>
                <i className="fab fa-youtube"></i>
            </div>
        </div>
    </footer>
  )
}

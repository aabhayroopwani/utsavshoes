import React from 'react'
import './Contact.css'

export const Contactdetail = () => {
  return (
    <secton id="contact-details" className="section-p1">
        <div className="details">
            <span>get in touch</span>
            <h2>visit one of our agency locations or contact us today</h2>
            <h3>head office</h3>
            <div>
                <li>
                    <i className="fal fa-map"></i>
                    <p>Seepat Rd, Old Sarkanda, Sarkanda, Bilaspur, Chhattisgarh 495001</p>
                </li>
                <li>
                    <i className="far fa-envelope"></i>
                    <p>contact@example.com</p>
                </li>
                <li>
                    <i className="fas fa-phone-alt"></i>
                    <p>+91 98279 52562</p>
                </li>
                <li>
                    <i className="fal fa-map"></i>
                    <p>Monday to saturday: 12:00 PM - 9:00 PM</p>
                </li>
            </div>
        </div>
        <div className="map">
            <iframe width="600" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Utsav%20Shoes,%20Seepat%20Rd,%20Old%20Sarkanda,%20Sarkanda,%20Bilaspur,%20Chhattisgarh%20495001+(Utsav%20Shoes)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
        </div>
    </secton>
  )
}
export default Contactdetail

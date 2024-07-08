import React from 'react'
import './Contact.css'
import mohit_img from '../Assets/mohitimg.png'
import mama1_img from '../Assets/dilipmamaimg.png'
import mama2_img from '../Assets/rakeshmamaimg.png'
import aman_img from '../Assets/amanimg.png'

export const Form = () => {
  return (
    <section id="form-details">
        <form action="">
            <span>Leave a message</span>
            <h2>we love to hear from you!</h2>
            <input type="text" placeholder="Your name" name="" id=""/>
            <input type="text" placeholder="e-mail" name="" id=""/>
            <input type="text" placeholder="subject" name="" id=""/>
            <textarea name="" cols="30" rows="10" placeholder="Your message"></textarea>
            <button className="normal">submit</button>
        </form>
        <div className="people">
            <div>
                <img src={mohit_img} alt=""/>
                <p><span>mohit manwani</span> owener <br />phone: +91 98279 52562 <br /> e-mail: contact@example.com</p>
            </div>
            <div>
                <img src={mama1_img} alt=""/>
                <p><span>dilip manwani</span> senior owener <br />phone: +91 98279 65933 <br />e-mail: contact@example.com</p>
            </div>
            <div>
                <img src={mama2_img} alt=""/>
                <p><span>rakesh manwani</span> senior owener <br/>phone: +91 93021 59966 <br/>e-mail: contact@example.com</p>
            </div>
            <div>
                <img src={aman_img} alt=""/>
                <p><span>aman manwani</span> junior owener <br/>phone: +91 79743 02704 <br/>e-mail: contact@example.com</p>
            </div>
        </div>
    </section>
  )
}

export default Form
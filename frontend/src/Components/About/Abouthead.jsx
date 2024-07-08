import React from 'react'
import './About.css'
import about_img from '../Assets/aboutimg.png'
export const Abouthead = () => {
  return (
    <section id="about-head" className="section-p1">
        <img src={about_img} alt=""/>
        <div>
        <h2>Who are we?</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero odit, 
            harum architecto animi recusandae corrupti alias amet dolor, consequuntur 
            non tempora consequatur molestiae! Ullam molestias eos totam nobis modi 
            saepe odit corporis eligendi,vero iure nam consequatur laborum consequuntur quam iusto.
            Corporis temporibus laudantium ex molestias ipsum impedit architecto consequatur deleniti
            nobis quam rerum necessitatibus voluptatum, eveniet,ducimus voluptatem animi.</p>
            <abbr title="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            a sequi magni repellendus distinctio saepe minus ullam voluptas nulla doloremque.</abbr>
            <br></br>
            <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%" >Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque commodi corporis pariatur non! Fuga quos sequi veniam ipsam nesciunt nihil?</marquee>
        </div>
    </section>
  )
}

export default Abouthead